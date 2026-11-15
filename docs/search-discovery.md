# Search discovery: implementation and launch checklist

## What this change addresses

The public homepage and existing project pages explain the studio without separate commercial service pages. Service routes are disabled with `SERVICES_ENABLED = false`; their source is retained, but direct requests return 404, and all service links and sitemap entries are removed.

On November 10, 2026, requests to production `/robots.txt` and `/sitemap.xml` returned HTTP 404. A missing robots file is not itself a crawler block. This change adds explicit search access and a sitemap without claiming either absence caused the studio's omission from recommendations.

The PR includes:

- Eight active public pages: home, work index, and six existing project pages.
- Unique metadata, canonical and social URLs, organization/project/breadcrumb structured data, and genuine unknown-route 404s.
- A sitemap of active pages and explicit OAI-SearchBot access.
- Clear separation of Storyverse productions and founders' individual work in the work index, project pages, and structured data.
- Before/during/after photographs extracted unchanged from the owner-supplied capabilities deck, with grayscale-to-color interaction in CSS and alternating scroll-drawn thread crossings.
- Deck-supported AETHER figures: six performances, approximately 700 guests, and a sold-out final performance.

See `docs/founder-credits.md` for provenance and research links. No company client relationship is implied by a founder's personal credit, publication, or festival appearance. Deck pricing is not published.

## Validate locally

1. Run `npm ci` when dependencies are not installed.
2. Run `npm run build`.
3. Run `npm run start -- --port 3100`.
4. In another terminal run `npm run test:discovery` (or set `SITE_TEST_ORIGIN` for a preview URL).
5. Review `/`, `/work`, and representative project pages on desktop and mobile. Verify mobile navigation, grayscale/color image interaction, thread direction, founder separation, project image expansion, and inquiry links. Confirm service routes return 404. Do not send a test inquiry into the live CRM without coordinating it.

The HTTP smoke check validates sitemap coverage, independent canonical and social URLs, unique titles/descriptions, structured data, initial HTML content without JavaScript, internal links/assets, crawler access, and unknown-route 404s. It also verifies that the existing inquiry form remains available. It never submits the form.

## After merge/deployment (account-level work)

- Confirm Vercel deployed the approved commit to the production custom domain. Do not merge the PR solely because a preview builds.
- Inspect Vercel Deployment Protection, Firewall, bot challenges, and any upstream security rules. Keep necessary protections and permit verified search crawlers where required. A robots file cannot override a firewall block. Verify OpenAI crawler IP ranges against the official documentation; do not trust a user-agent string alone.
- Check production `/robots.txt`, `/sitemap.xml`, active project and disabled service status codes, canonical URLs, and redirects from alternate domain forms. Vercel owns domain redirect settings; use one-hop redirects to `https://storyversenyc.com` where appropriate.
- Verify the domain in Google Search Console and Bing Webmaster Tools. Submit `https://storyversenyc.com/sitemap.xml` in both. Inspect the homepage and project URLs, resolve any indexing exclusions, and request indexing of the key changed pages where supported.
- Existing Vercel Analytics is retained. Review referring domains and landing pages for ChatGPT/search visitors. Add a supported CRM attribution property only after verifying its HubSpot internal name and form configuration; avoid sending unknown fields that could break inquiry submission.
- Review official company profiles, venue credits, collaborator pages, and genuine press coverage for consistent name, description, and links. This is outside the website PR. Obtain permission for testimonials and conduct outreach only with owner authorization.

No website change guarantees indexing or a recommendation. Changes address crawlability, relevance, evidence, and buyer usability. Search access is distinct from model training.

## Repeatable visibility check

Start with the prompts in `docs/search-prompts.csv`. Use fresh chats without saved Storyverse context; don't mention the name in unbranded prompts. Keep the original prompt unchanged as a control. Distinguish web-search-enabled responses from responses without search. Keep location, account context, and model/search mode consistent where possible; log any differences.

Test each prompt three times initially and weekly. Record date, exact prompt, location/context, search mode, whether Storyverse is named, whether it is linked/cited, cited URL, accuracy, competitor names, and qualified inquiries. The small sample is a directional baseline, not a statistically reliable ranking. Named-brand checks diagnose identity discovery; do not include them in the unbranded appearance rate.

Review indexing after launch, then assess query coverage, citations, and inquiries at 30/60/90-day checkpoints. These are review intervals, not promised time-to-ranking. Prioritize evidence and distinct buyer needs over bulk keyword pages or artificial mentions.

## References

- OpenAI search crawler: https://developers.openai.com/api/docs/bots
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google AI search guidance: https://developers.google.com/search/docs/appearance/ai-features
