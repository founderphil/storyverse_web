# Search discovery: implementation and launch checklist

## What this change addresses

The public homepage already described the studio, and existing project pages already provided substantial portfolio detail. The missing layer was a clear route from a buyer's service question to what they can commission and then to relevant evidence.

On November 10, 2026, requests to both production `/robots.txt` and `/sitemap.xml` returned HTTP 404. A missing robots file is not itself a crawler block. This change adds explicit search access and a sitemap, rather than claiming either absence caused the studio's omission from recommendations.

The PR includes:

- An index and four distinct service pages: immersive brand experiences, agency production partnerships, interactive technology, and AETHER corporate events.
- Homepage positioning and navigation linking services to existing portfolio evidence.
- Static server-rendered service/project routes, unique metadata, self-canonical URLs, social metadata, organization/service/project/breadcrumb structured data, and genuine HTTP 404s for unknown projects.
- A sitemap generated from the same service and project data as the pages.
- Explicit OAI-SearchBot access with no change requiring training access.
- Deck-supported AETHER figures: six performances, approximately 700 guests, and a sold-out final performance.

Copy source: the owner-supplied capabilities deck, reviewed November 10, 2026, and existing project data. Lead times are indicative and subject to fabrication, approvals, and scope. AETHER event availability must be confirmed during inquiry. No new third-party client claims, awards, testimonials, business address, or unverified social profiles are added. Deck pricing is not published.

## Validate locally

1. Run `npm ci` when dependencies are not installed.
2. Run `npm run build`.
3. Run `npm run start -- --port 3100`.
4. In another terminal run `npm run test:discovery` (or set `SITE_TEST_ORIGIN` for a preview URL).
5. Review `/`, `/services`, each service, `/work`, and representative projects on desktop and mobile. Verify mobile navigation, project filtering, project image expansion, and inquiry links. Do not send a test inquiry into the live CRM without coordinating it.

The HTTP smoke check validates sitemap coverage, independent canonical and social URLs, unique titles/descriptions, structured data, initial HTML content without JavaScript, internal links/assets, crawler access, and unknown-route 404s. It also verifies that the existing inquiry form remains available. It never submits the form.

## After merge/deployment (account-level work)

- Confirm Vercel deployed the approved commit to the production custom domain. Do not merge the PR solely because a preview builds.
- Inspect Vercel Deployment Protection, Firewall, bot challenges, and any upstream security rules. Keep necessary protections and permit verified search crawlers where required. A robots file cannot override a firewall block. Verify OpenAI crawler IP ranges against the official documentation; do not trust a user-agent string alone.
- Check production `/robots.txt`, `/sitemap.xml`, service/project status codes, canonical URLs, and redirects from alternate domain forms. Vercel owns domain redirect settings; use one-hop redirects to `https://storyversenyc.com` where appropriate.
- Verify the domain in Google Search Console and Bing Webmaster Tools. Submit `https://storyversenyc.com/sitemap.xml` in both. Inspect the homepage and new service URLs, resolve any indexing exclusions, and request indexing of the key changed pages where supported.
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
