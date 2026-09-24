"use client";

import { useEffect, useState } from "react";

type Crossing = {
  key: string;
  path: string;
  y: number;
  direction: "right-to-left" | "left-to-right";
};
type ThreadDrawing = {
  left: string;
  right: string;
  crossings: Crossing[];
  width: number;
  height: number;
  endX: number;
  endY: number;
};
const initialDrawing: ThreadDrawing = { left: "", right: "", crossings: [], width: 1, height: 1, endX: 0, endY: 0 };
const LOGO_EDGE_FALLBACK_SECONDS = 4.75; // This asset holds for ~25 seconds after its drawing finishes.
const EXIT_DRAW_DURATION_MS = 1000;
const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => value * value * (3 - 2 * value);

export default function StoryThread() {
  const [drawing, setDrawing] = useState(initialDrawing);
  const [introProgress, setIntroProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState<number[]>([]);

  useEffect(() => {
    const main = document.querySelector<HTMLElement>(".studio-main");
    const video = document.querySelector<HTMLVideoElement>(".studio-logo-opening video");
    if (!main || !video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canvas = document.createElement("canvas");
    canvas.width = 2;
    canvas.height = 180;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    let leftEdge = 0.625;
    let rightEdge = 0.66;
    let crossings: Crossing[] = [];
    let measurementFrame = 0;
    let scrollFrame = 0;
    let videoFrame = 0;
    let introFrame = 0;
    let introStarted = false;
    let readyMediaTime = Infinity;
    let lastSample = 0;
    let disposed = false;

    function sampleEdge(right: boolean, fallback: number) {
      if (!context || video.readyState < 2 || !video.videoWidth) return { position: fallback, drawn: false, available: false };
      try {
        context.clearRect(0, 0, 2, 180);
        context.drawImage(video, right ? video.videoWidth - 3 : 0, 0, 3, video.videoHeight, 0, 0, 2, 180);
        const pixels = context.getImageData(0, 0, 2, 180).data;
        let weight = 0;
        let total = 0;
        for (let y = 36; y < 162; y++) {
          const offset = y * 8;
          const darkness = Math.max(0, 160 - (pixels[offset] + pixels[offset + 1] + pixels[offset + 2]) / 3);
          total += y * darkness;
          weight += darkness;
        }
        return { position: weight > 20 ? total / weight / 180 : fallback, drawn: weight > 20, available: true };
      } catch {
        return { position: fallback, drawn: false, available: false };
      }
    }

    function reveal() {
      if (disposed) return;
      const mainTop = main.getBoundingClientRect().top;
      setScrollProgress(crossings.map(crossing => {
        if (reducedMotion.matches) return 1;
        // Each visible crossing draws while it travels from the lower screen to the upper third.
        // The offscreen connections never consume its scroll animation distance.
        return ease(clamp((window.innerHeight * .85 - (mainTop + crossing.y)) / (window.innerHeight * .55)));
      }));
    }

    function startIntro() {
      if (introStarted || disposed) return;
      introStarted = true;
      readyMediaTime = video.currentTime;
      if (reducedMotion.matches) { setIntroProgress(1); return; }
      const start = performance.now();
      function animate(timestamp: number) {
        if (disposed) return;
        const progress = clamp((timestamp - start) / EXIT_DRAW_DURATION_MS);
        setIntroProgress(ease(progress));
        if (progress < 1) introFrame = requestAnimationFrame(animate);
      }
      introFrame = requestAnimationFrame(animate);
    }

    function measure() {
      if (disposed) return;
      const bounds = main.getBoundingClientRect();
      const frame = video.getBoundingClientRect();
      const width = main.clientWidth;
      const ratio = video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : 16 / 9;
      const imageWidth = Math.min(frame.width, frame.height * ratio);
      const imageHeight = imageWidth / ratio;
      const imageLeft = frame.left - bounds.left + (frame.width - imageWidth) / 2;
      const imageRight = imageLeft + imageWidth;
      const imageTop = frame.top - bounds.top + (frame.height - imageHeight) / 2;
      const leftY = imageTop + leftEdge * imageHeight;
      const rightY = imageTop + rightEdge * imageHeight;
      const left = `M 0 ${leftY + 8} C ${imageLeft * .3} ${leftY + 8} ${imageLeft * .7} ${leftY - 8} ${imageLeft + 1} ${leftY}`;
      const right = `M ${imageRight - 1} ${rightY} C ${imageRight + (width - imageRight) * .35} ${rightY - 8} ${imageRight + (width - imageRight) * .85} ${rightY - 6} ${width} ${rightY}`;
      crossings = [];
      let side: "right" | "left" = "right";
      let endX = 0;
      let endY = 0;

      for (const landmark of Array.from(main.querySelectorAll<HTMLElement>("[data-story-thread]"))) {
        const box = landmark.getBoundingClientRect();
        const top = box.top - bounds.top;
        const direction = side === "right" ? "right-to-left" : "left-to-right";
        if (landmark.dataset.storyThread === "end") {
          endX = box.left - bounds.left + box.width / 2;
          endY = top - 14;
          // Keep the existing arrival from the left, then wind twice around the needle eye.
          const loopWidth = width <= 760 ? 25 : 32;
          const point = (x: number, y: number) => `${endX + x * loopWidth} ${endY + y}`;
          // Uneven, tilted turns overlap like a loose hand-drawn thread, with a clear needle eye.
          const turns: [number, number, number, number, number, number][] = [
            [-.35, -14, -1.2, -18, -1.05, -3],
            [-1.2, 5, -.3, 13, .06, -1],
            [.3, -11, .85, -10, 1.08, -4],
            [1.25, 8, .4, 7, -.03, 1],
            [-.45, -8, -.94, -17, -.87, -4],
            [-.75, 12, -.15, 4, .03, 2],
            [.55, -4, 1.3, -18, 1.15, -1],
            [1.1, 11, .22, 3, 0, 0],
          ];
          const tieOff = turns.map(([x1, y1, x2, y2, x, y]) =>
            ` C ${point(x1, y1)} ${point(x2, y2)} ${point(x, y)}`).join("");
          const path = `M 0 ${endY - 65} C 0 ${endY - 20} ${endX} ${endY - 65} ${endX} ${endY}` +
            tieOff + ` L ${endX} ${top + 4}`;
          crossings.push({ key: "inquiry", path, y: endY - 30, direction: "left-to-right" });
          break;
        }
        const y = top + box.height * .45;
        const project = landmark.closest<HTMLElement>("[data-story-project]")?.dataset.storyProject;
        const path = side === "right"
          ? `M ${width} ${y} C ${width * .83} ${y - 24} ${width * .67} ${y + 24} ${width * .5} ${y} C ${width * .33} ${y - 24} ${width * .17} ${y + 24} 0 ${y + 8}`
          : `M 0 ${y} C ${width * .17} ${y - 24} ${width * .33} ${y + 24} ${width * .5} ${y} C ${width * .67} ${y - 24} ${width * .83} ${y + 24} ${width} ${y + 8}`;
        crossings.push({ key: project ?? `crossing-${crossings.length}`, path, y, direction });
        side = side === "right" ? "left" : "right";
      }
      main.classList.add("has-story-thread");
      setDrawing({ left, right, crossings, width, height: bounds.height, endX, endY });
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(reveal);
    }

    function scheduleMeasure() {
      cancelAnimationFrame(measurementFrame);
      measurementFrame = requestAnimationFrame(measure);
    }
    function onScroll() {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(reveal);
    }
    function sampleVideo() {
      if (disposed) return;
      const left = sampleEdge(false, leftEdge);
      const right = sampleEdge(true, rightEdge);
      if (Math.abs(left.position - leftEdge) > .0005 || Math.abs(right.position - rightEdge) > .0005) {
        leftEdge = left.position;
        rightEdge = right.position;
        scheduleMeasure();
      }
      // Detect the actual drawn thread at the source frame's edge, rather than waiting for "ended".
      if (right.drawn || (!right.available && video.currentTime >= LOGO_EDGE_FALLBACK_SECONDS)) startIntro();
    }
    function followVideo(timestamp: number) {
      if (disposed) return;
      if (timestamp - lastSample > 80) { lastSample = timestamp; sampleVideo(); }
      videoFrame = video.requestVideoFrameCallback(followVideo);
    }
    function onSeek() {
      if (video.currentTime + .1 < readyMediaTime) {
        introStarted = false;
        readyMediaTime = Infinity;
        cancelAnimationFrame(introFrame);
        setIntroProgress(0);
      }
    }
    function onMotionChange() {
      if (reducedMotion.matches && introStarted) { cancelAnimationFrame(introFrame); setIntroProgress(1); }
      onScroll();
    }

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(main);
    main.querySelectorAll<HTMLElement>("[data-story-thread]").forEach(element => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", scheduleMeasure);
    reducedMotion.addEventListener("change", onMotionChange);
    video.addEventListener("loadedmetadata", scheduleMeasure);
    video.addEventListener("timeupdate", sampleVideo);
    video.addEventListener("seeked", sampleVideo);
    video.addEventListener("seeking", onSeek);
    if (typeof video.requestVideoFrameCallback === "function") videoFrame = video.requestVideoFrameCallback(followVideo);
    scheduleMeasure();

    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", scheduleMeasure);
      reducedMotion.removeEventListener("change", onMotionChange);
      video.removeEventListener("loadedmetadata", scheduleMeasure);
      video.removeEventListener("timeupdate", sampleVideo);
      video.removeEventListener("seeked", sampleVideo);
      video.removeEventListener("seeking", onSeek);
      cancelAnimationFrame(measurementFrame);
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(introFrame);
      if (videoFrame && typeof video.cancelVideoFrameCallback === "function") video.cancelVideoFrameCallback(videoFrame);
      main.classList.remove("has-story-thread");
    };
  }, []);

  return (
    <svg className="story-thread" width={drawing.width} height={drawing.height} viewBox={`0 0 ${drawing.width} ${drawing.height}`} aria-hidden="true" focusable="false">
      <path className="story-thread-logo-tail" d={drawing.left} />
      <path className="story-thread-logo-exit" d={drawing.right} pathLength={1000} strokeDasharray={1000} strokeDashoffset={1000 * (1 - introProgress)} style={{ visibility: introProgress > 0 ? "visible" : "hidden" }} />
      {drawing.crossings.map((crossing, index) => {
        const progress = scrollProgress[index] ?? 0;
        return <path key={crossing.key} className="story-thread-crossing" data-thread-target={crossing.key} data-thread-direction={crossing.direction} d={crossing.path} pathLength={1000} strokeDasharray={1000} strokeDashoffset={1000 * (1 - progress)} style={{ visibility: progress > 0 ? "visible" : "hidden" }} />;
      })}
      {drawing.endY > 0 && <circle className="story-thread-knot" cx={drawing.endX} cy={drawing.endY} r={5} />}
    </svg>
  );
}
