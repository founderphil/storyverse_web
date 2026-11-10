import assert from 'node:assert/strict';

const origin = process.env.SITE_TEST_ORIGIN || 'http://localhost:3100';
const canonicalOrigin = 'https://storyversenyc.com';
const get = (path, method = 'GET', headers = {}) => fetch(new URL(path, origin), { method, headers, signal: AbortSignal.timeout(15000) });
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
const meta = (html, name) => {
  const tag = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => match[0]).find(tag => attribute(tag, 'name') === name || attribute(tag, 'property') === name);
  return tag && attribute(tag, 'content');
};
const robotsResponse = await get('/robots.txt');
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
assert.match(robots, /User-Agent: OAI-SearchBot\s+Allow: \//i);
assert.match(robots, /Sitemap: https:\/\/storyversenyc\.com\/sitemap.xml/);
const sitemapResponse = await get('/sitemap.xml');
assert.equal(sitemapResponse.status, 200);
const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
assert.equal(urls.length, 13, 'home, services, work, four services, six projects');
assert.equal(new Set(urls.map(url => url.href)).size, urls.length);
const titles = new Set();
const descriptions = new Set();
const linkedPaths = new Set();
const assets = new Set();
for (const url of urls) {
  assert.equal(url.origin, canonicalOrigin);
  const response = await get(url.pathname, 'GET', { 'User-Agent': 'OAI-SearchBot' });
  assert.equal(response.status, 200, url.pathname);
  const html = await response.text();
  const canonicalTags = [...html.matchAll(/<link\b[^>]*>/g)].map(match => match[0]).filter(tag => attribute(tag, 'rel') === 'canonical');
  assert.equal(canonicalTags.length, 1, `one canonical on ${url.pathname}`);
  assert.equal(new URL(attribute(canonicalTags[0], 'href')).href, url.href, url.pathname);
  assert.equal(new URL(meta(html, 'og:url')).href, url.href);
  assert.equal(new URL(meta(html, 'og:image')).origin, canonicalOrigin);
  assert.equal(new URL(meta(html, 'twitter:image')).origin, canonicalOrigin);
  assert.ok(meta(html, 'og:title'));
  assert.ok(meta(html, 'og:description'));
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `unique title on ${url.pathname}`);
  titles.add(title);
  const description = meta(html, 'description');
  assert.ok(description && !descriptions.has(description), `unique description on ${url.pathname}`);
  descriptions.add(description);
  assert.doesNotMatch(meta(html, 'robots') || '', /noindex/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `one initial-HTML heading on ${url.pathname}`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  assert.ok(schemas.some(schema => schema['@type'] === 'Organization'));
  if (url.pathname.startsWith('/services/')) {
    const service = schemas.find(schema => schema['@type'] === 'Service');
    assert.equal(service?.url, url.href);
    assert.equal(service?.provider['@id'], `${canonicalOrigin}/#organization`);
    assert.match(html, /Relevant work/);
    assert.match(html, /href="\/#contact"/);
  }
  if (url.pathname.startsWith('/work/')) assert.ok(schemas.some(schema => schema['@type'] === 'CreativeWork'));
  if (url.pathname.startsWith('/work/') || url.pathname.startsWith('/services/')) {
    const breadcrumb = schemas.find(schema => schema['@type'] === 'BreadcrumbList');
    assert.equal(breadcrumb?.itemListElement.at(-1).item, url.href);
  }
  for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"?#]*)[^" ]*"/g)) linkedPaths.add(href || '/');
  for (const [, src] of html.matchAll(/<img\b[^>]*src="(\/[^" ]+)"/g)) assets.add(src.replaceAll('&amp;', '&'));
  if (url.pathname === '/') {
    assert.match(html, /New York immersive experience studio/);
    assert.match(html, /name="email"/);
    assert.match(html, /name="message"/);
  }
}
for (const path of linkedPaths) assert.equal((await get(path, 'HEAD')).status, 200, `internal link ${path}`);
for (const src of assets) {
  const response = await get(src);
  assert.equal(response.status, 200, `image ${src}`);
  await response.body?.cancel();
}
for (const path of ['/work/nonexistent-project', '/work/toString', '/services/nonexistent-service']) {
  assert.equal((await get(path)).status, 404, `unknown route ${path}`);
}
console.log(`Passed: ${urls.length} pages, ${linkedPaths.size} internal destinations, ${assets.size} images, metadata, structured data, crawler access, and 404s.`);
