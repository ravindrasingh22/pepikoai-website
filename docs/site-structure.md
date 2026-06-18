# Pepiko Website Structure

## Direction

Pepiko should present itself as developer infrastructure for AI safety, similar in feel to Parallel: tight top navigation, product-led homepage, developer-first CTAs, clear docs paths, and trust-building sections such as benchmarks, resources, and case studies.

The site should feel precise, reliable, calm, and production-ready. Avoid a playful kids-app visual language. Pepiko is safety infrastructure for teams building AI products used by or around children.

## Top Navigation

Primary navigation:

- Products
- Developers
- Resources
- Pricing
- Company, optional later

Right-side actions:

- Login
- Sign up
- Start building, primary CTA

Current implementation:

- Shared header component: `components/site-header.tsx`
- Shared footer component: `components/site-footer.tsx`
- Navigation data source: `lib/site-data.ts`
- Products, Developers, and Resources use hover/focus dropdowns.
- Top-level dropdown labels remain clickable and route to their landing pages:
  - `/products`
  - `/developers`
  - `/resources`
- Dropdown items use clean routes and do not rely on hash anchors.

## Products Menu

The Products nav should use a compact mega menu. Each item should include a short description and route to a dedicated product page.

- Child Safety Classification
  - Detect age-sensitive, harmful, unsafe, or inappropriate user/model content.
- Classified Prompt
  - Classify prompts by safety category, intent, policy bucket, and handling route.
- PII & Sensitive Data Detection
  - Detect personal, sensitive, or identifying information before it reaches an AI workflow.
- Moderation API
  - A broader API surface for content classification, policy decisions, and response routing.
- Guardrail Orchestration
  - Configure policy routing, fallback responses, escalation, and allow/block decisions.

Current Products dropdown routes:

- `/products/child-safety-classification`
- `/products/classified-prompt`
- `/products/moderation-api`
- `/products/pii-sensitive-data-detection`
- `/products/guardrail-orchestration`

## Developers Menu

Developers should have its own sub navigation because docs and integration flows are a primary conversion path.

- API Docs
- SDKs
  - JavaScript/TypeScript
  - Python
  - REST
- Quickstart
- Playground
- Changelog
- Status

Current Developers dropdown routes:

- `/developers/docs`
- `/developers/sdks`
- `/developers/quickstart`
- `/developers/playground`
- `/developers/changelog`
- `/developers/status`

## Resources Menu

- Case Studies
- Blog
- Guides
- Safety Research
- Benchmarks
- Policy Templates

Current Resources dropdown routes:

- `/resources/case-studies`
- `/resources/blog`
- `/resources/guides`
- `/resources/safety-research`
- `/resources/benchmarks`
- `/resources/policy-templates`

## Recommended Sitemap

```txt
/
  /products
    /products/child-safety-classification
    /products/classified-prompt
    /products/moderation-api
    /products/pii-sensitive-data-detection
    /products/guardrail-orchestration
  /developers
    /developers/docs
    /developers/quickstart
    /developers/sdks
    /developers/playground
    /developers/changelog
    /developers/status
  /resources
    /resources/case-studies
    /resources/blog
    /resources/guides
    /resources/benchmarks
    /resources/safety-research
    /resources/policy-templates
  /pricing
  /login
  /signup
```

Current implemented route model:

- Static landing pages:
  - `/`
  - `/products`
  - `/developers`
  - `/resources`
  - `/pricing`
  - `/login`
  - `/signup`
- Dynamic product detail route:
  - `/products/[slug]`
- Dynamic developer route:
  - `/developers/[slug]`
- Dynamic resource route:
  - `/resources/[slug]`
- Dynamic paths are statically generated with `generateStaticParams`.

## Homepage Structure

### Hero

Headline:

```txt
Safety APIs for child-first AI products
```

Supporting copy:

```txt
Classify prompts, detect child-safety risks, and route responses with production-ready safety intelligence.
```

Primary CTAs:

- Start building
- View API docs

Hero visual:

- Use a live-feeling API console, not a generic illustration.
- Include tabs for Child Safety, Prompt Classifier, and Policy Route.
- Show a sample request on the left and structured JSON output on the right.

Example response:

```json
{
  "category": "child_safety",
  "risk_level": "high",
  "policy_bucket": "blocked",
  "recommended_action": "refuse_and_redirect",
  "confidence": 0.97
}
```

### Homepage Sections

1. Hero with API console
2. Logo or trust strip, if available
3. Product cards
   - Child Safety Classification
   - Classified Prompt
   - Moderation API
4. Built for developers
   - REST API
   - SDKs
   - Low latency
   - Policy-aware outputs
5. Use cases
   - AI tutors
   - Kids apps
   - Family-safe chatbots
   - EdTech platforms
   - Creator/community tools
6. Accuracy and trust
   - Benchmarks
   - Human-reviewed taxonomy
   - Transparent categories
7. Code integration
8. Case studies and resources
9. Pricing CTA
10. Final CTA: Start building with Pepiko

## Product Page Template

Each product page should use a consistent structure:

1. Product-specific hero and value proposition
2. Example request/response block
3. Core use cases
4. Accuracy and safety explanation
5. Integration flow
6. Pricing CTA
7. Docs CTA

## Next.js Startup Template Structure

Implemented Next.js App Router structure:

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  products/
    page.tsx
    [slug]/
      page.tsx
  developers/
    page.tsx
    [slug]/
      page.tsx
  resources/
    page.tsx
    [slug]/
      page.tsx
  pricing/
    page.tsx
  login/
    page.tsx
  signup/
    page.tsx
components/
  site-header.tsx
  site-footer.tsx
lib/
  site-data.ts
```

Suggested shared components:

- Header
- MegaMenu
- ProductCard
- CodeConsole
- PricingTable
- Footer

Current shared components:

- `SiteHeader`
  - Owns brand, top nav, dropdown menus, auth links, and primary CTA.
- `SiteFooter`
  - Owns footer brand and positioning line.
- `site-data.ts`
  - Owns product, developer, and resource navigation data used by dropdowns and route pages.

## Visual Design Direction

- Light background with strong charcoal/black text.
- Restrained safety-focused accent colors, such as teal or green.
- Use amber/red only for risk labels, warnings, or blocked states.
- Compact navigation and dense, scannable sections.
- API console and classification outputs should be the main visual language.
- Use cards with small radius only for repeated items or framed tools.
- Avoid oversized marketing fluff, generic illustrations, and playful child-product styling.

## Positioning

Pepiko should feel closer to Stripe, Twilio, or Parallel-style infrastructure than to AI safety consulting.

Core positioning:

```txt
Production-ready safety APIs for AI products used by children, families, and education platforms.
```

The product story should emphasize:

- Developer-first integration
- Clear safety classifications
- Transparent policy buckets
- Fast API responses
- Child safety specialization
- Practical routing decisions for production AI workflows
