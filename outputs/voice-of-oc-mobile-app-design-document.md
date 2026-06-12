# Voice of OC Mobile App Design Document

Practical v1 design brief  
Prepared June 12, 2026

## 1. Product Direction

### Design concept

The Voice of OC mobile app should feel like a calm civic-news utility for Orange County residents: fast, trustworthy, local, and useful before a public decision affects the reader.

The app should not imitate a social feed. Its job is to make public-interest reporting easier to follow every day, especially for readers who care about their city, county government, public money, civic accountability, arts, culture, homelessness, public safety, transportation, and community life.

### Product promise

Know what your city and county are doing, why it matters, and what happens next.

### Audience

- Orange County residents who want local government and accountability reporting.
- Frequent Voice of OC readers who already know the newsroom.
- New readers arriving through alerts, search, newsletters, social links, or a city-specific story.
- Donors and members who want to support nonprofit local journalism.
- Civic participants: neighborhood leaders, public employees, advocates, candidates, reporters, students, and local business owners.

### Product personality

- Nonprofit, nonpartisan, local, and human.
- Clear before clever.
- Editorially confident without feeling loud.
- Calm under breaking-news pressure.
- Built around evidence, source documents, public meetings, and named accountability.

## 2. Brand Translation

### Current brand anchors from the website

Voice of OC currently presents as Orange County's nonprofit newsroom, with a Newspack publication structure, a large horizontal Voice of OC logo, a square icon mark, local news photography, condensed headline typography, serif body copy, orange interaction states, red urgent/donation highlights, black editorial text, and restrained gray utility surfaces.

Source references:

- Voice of OC homepage: <https://voiceofoc.org/>
- Horizontal logo asset visible in site header: `VoiceofOC.png`
- Icon mark visible in site metadata/footer: `VoiceofOC.icon`
- Current Newspack theme stylesheet and custom CSS exposed by the live site

### Palette

Use this palette as the app's starting design system. Colors are taken from the current site theme and custom styling.

| Token | Hex | Role |
| --- | --- | --- |
| `brand.orange` | `#F68121` | Primary app accent, active navigation, links, topic chips, newsletter buttons, donation emphasis |
| `brand.orange.dark` | `#E47300` | Pressed/hover state, filled primary button active state |
| `brand.red` | `#C30000` | Urgent alert label, high-priority fundraising module |
| `brand.red.dark` | `#A80000` | Pressed/active state for urgent red actions |
| `brand.red.alt` | `#C02424` | Secondary fundraising or warning treatment |
| `ink.primary` | `#111111` | Headlines, story titles, primary text |
| `ink.secondary` | `#555555` | Secondary labels, inactive nav, summaries |
| `ink.tertiary` | `#666666` | Section labels, timestamps, supporting metadata |
| `border.default` | `#DDDDDD` | Dividers, card borders, input borders |
| `surface.soft` | `#F0F0F0` | Light panels, empty states, inactive backgrounds |
| `surface.page` | `#FFFFFF` | Main app background |
| `legacy.blue` | `#003DA5` | Existing Newspack primary color; reserve for legacy/system contexts only |

### Color usage rules

- Use orange for actions, selected states, active tabs, newsletter signup, donation prompts, and "follow" interactions.
- Use black and white for the primary editorial reading experience.
- Use red only for urgent alerts, emergency civic information, and high-priority donation or campaign states.
- Use gray for metadata, timestamps, section labels, inactive controls, borders, and dividers.
- Avoid decorative gradients. They do not match the current publication language.
- Do not overuse blue. Treat `#003DA5` as a system inheritance color, not the main app personality.

### Accessibility guidance

- Do not place small white text on `#F68121`; reserve that pairing for large buttons with bold text.
- For small labels on orange backgrounds, use `#111111` text or darken the orange to `#E47300` and increase font weight.
- Body text should stay `#111111` on `#FFFFFF`.
- Metadata can use `#555555` or `#666666`, but avoid going lighter than that for important timestamps or bylines.
- Red alerts must include text labels, not color alone.

### Typography

The website uses a Voice of OC/Newspack combination that should translate directly into the app.

| Text role | Direction | App usage |
| --- | --- | --- |
| Headlines | Fira Sans Condensed-style bold condensed sans | Story titles, section headers, lead story, nav labels |
| Body copy | Georgia/Garamond-style serif | Longform story reading |
| Metadata | Compact sans | Byline, date, city tag, reading time, source labels |
| Controls | Bold condensed sans or compact sans | Buttons, tabs, chips, alert labels |

### Type scale

Use a compact mobile scale that preserves the site's editorial weight.

| Role | Size | Weight | Line height |
| --- | ---: | ---: | ---: |
| Lead story title | 30-34 | 700 | 1.05 |
| Story page headline | 34-40 | 700 | 1.05 |
| Section title | 20-22 | 700 | 1.15 |
| Article card title | 18-22 | 700 | 1.15 |
| Body text | 18-20 | 400 | 1.55 |
| Summary text | 15-16 | 400 | 1.4 |
| Metadata | 12-13 | 600 | 1.25 |
| Bottom nav | 11-12 | 700 | 1.1 |

## 3. Graphic Language

### Photography

Photography should carry the app visually. Prioritize actual Voice of OC local reporting images: public meetings, city halls, neighborhoods, residents, civic spaces, shelters, parks, arts venues, transit, courts, elections, and community events.

Photography rules:

- Use real local images wherever possible.
- Keep crops informative. Do not crop away the public setting, people, or civic context.
- Use 4:3 and 16:9 crops for feeds; use full-width portrait-safe crops for lead stories.
- Captions and credits should remain accessible from story pages.
- Avoid abstract stock photos and generic skyline filler.

### Logo and app icon

- Use the horizontal Voice of OC logo in the app header on Home and major section roots.
- Use the square icon mark for app icon, splash screen, loading state, and account/support moments.
- Header logo treatment should be compact and centered or left-aligned depending on screen:
  - Home: centered logo with search and profile/support icons.
  - Story page: compact wordmark or icon-only back header to preserve reading space.

### Section markers

The current site uses compact section labels and square/accent markers. Preserve this system in mobile.

Use:

- Orange square marker for normal editorial sections.
- Red marker for breaking/urgent coverage.
- Gray marker for utility sections such as Saved, Settings, and About.

Avoid:

- Decorative blobs, large gradients, oversized illustrations, or generic app mascots.
- Rounded pill overload. Chips are fine for topics and cities, but the overall system should stay editorial.

## 4. App Information Architecture

### Primary navigation

Use a five-item bottom navigation.

| Tab | Purpose |
| --- | --- |
| Home | Editorial front page and daily civic priority list |
| My OC | Personalized city and topic feed |
| Latest | Chronological reporting stream |
| Alerts | Breaking news, civic deadlines, and followed-city notifications |
| Saved | Saved stories, followed reporters/topics, reading history |

### Secondary navigation

Use contextual top bars and horizontal topic strips instead of deep menu stacks.

Suggested topic strip:

- Countywide
- Anaheim
- Santa Ana
- Irvine
- Huntington Beach
- Orange
- Garden Grove
- Homelessness
- Public Safety
- Arts & Culture
- Opinion

## 5. Core Screens

### Home

Purpose: provide a clear editorial front page that communicates what matters today.

Required modules:

- Header with logo, search icon, and support/account icon.
- Lead story with large image, city/topic label, headline, short summary, and updated time.
- Civic Watch module with 3-5 public decisions, meetings, deadlines, lawsuits, budgets, or votes.
- Latest Reporting feed.
- Morning Report/newsletter signup.
- Donate/support module.
- Arts & Culture or Community Opinion module lower in the feed.

Design notes:

- Do not make Home purely algorithmic.
- The first screen should communicate editorial judgment.
- Use one strong lead photo, then tighter article rows.

### My OC

Purpose: let readers follow cities, topics, reporters, and public issues.

Required modules:

- City/topic setup prompt for first-time users.
- Followed city chips.
- Personalized article feed.
- Upcoming public meetings or civic deadlines for followed cities.
- "Why this is in My OC" metadata when helpful.

Default followed options:

- Countywide
- Anaheim
- Santa Ana
- Irvine
- Huntington Beach
- Orange
- Garden Grove
- Homelessness
- Public Safety
- Arts & Culture
- Opinion

### Latest

Purpose: serve frequent readers who want the newest posts without editorial packaging.

Required behavior:

- Reverse chronological feed.
- Filters for All, News, Opinion, Arts & Culture, and City.
- Clear timestamps.
- Breaking or updated stories should show a small red or orange status label.

### Alerts

Purpose: collect urgent notifications and civic reminders without making the whole app feel alarmist.

Required sections:

- Breaking News
- Followed Cities
- Public Meetings
- Deadlines and Elections
- Donation/Member Updates

Alert rules:

- Red is reserved for urgent civic/public safety/breaking alerts.
- Orange is used for followed topic updates and important but non-emergency prompts.
- Every alert should say what happened, where, when, and why the reader received it.

### Saved

Purpose: make the app useful for civic follow-up and longer reads.

Required modules:

- Saved stories.
- Recently read.
- Followed topics and cities.
- Downloaded/offline reads if technically available.
- Source documents saved from story pages if technically available.

### Story Page

Purpose: preserve trust, readability, and source context.

Required elements:

- Section/city tag.
- Headline.
- Summary/deck.
- Byline in uppercase metadata style.
- Published and updated timestamps.
- Hero image with caption and credit.
- Serif body text.
- Trust/source module.
- Topic/city follow controls.
- Donation CTA after meaningful article progress, not before the reader can evaluate the story.
- Related stories and Civic Watch follow-up links.

Trust/source module should include:

- Source documents.
- Public agency or meeting names.
- Correction link.
- Republish/share link if supported.
- "How we reported this" note for major investigations when available.

### Donation / Support

Purpose: convert appreciation into support without damaging trust.

Required elements:

- Clear nonprofit positioning.
- Suggested donation amounts.
- Monthly and one-time toggle.
- Short value statement tied to local accountability reporting.
- Trust links: funding, mission/values, nonprofit status, donor transparency.

Design notes:

- Use orange as primary action.
- Use red only for campaign urgency.
- Keep donation prompts visually distinct from editorial alerts.

## 6. Reusable Components

### Article card

Fields:

- Image thumbnail, optional on small list rows.
- City/topic label.
- Headline.
- Summary for medium and large variants.
- Byline or source.
- Published/updated time.
- Save button.

Variants:

- Lead card.
- Standard feed card.
- Compact latest row.
- Saved story row.

### Lead story block

Fields:

- Full-width image.
- Section/city marker.
- Large headline.
- Short summary.
- Updated time.
- Optional "Live" or "Developing" badge.

### Civic Watch item

Fields:

- Entity: city council, county supervisors, agency, court, school board, or public department.
- Action: vote, meeting, budget item, lawsuit, deadline, hearing, or public comment.
- Date/time.
- Location or agenda link.
- Related story link.

Tone:

- Practical and scannable.
- Use "What happened" and "What is next" language.

### City/topic chip

States:

- Default: white background, gray border, black text.
- Selected/following: light orange tint or orange border.
- Active filter: orange fill with high-contrast text.

### Alert banner

Levels:

- Urgent red: public safety, major breaking news, election/civic deadline.
- Important orange: followed city update, developing story, newsletter/member prompt.
- Neutral gray: app/service notification.

Every alert banner must include:

- Label.
- Short headline.
- Timestamp.
- Destination link.

### Donation CTA

Variants:

- Inline story CTA.
- Home module.
- Full support screen.
- Campaign urgency banner.

Rules:

- Use Voice of OC's nonprofit and nonpartisan language.
- Do not obscure story content.
- Do not visually imitate breaking news alerts.

### Newsletter signup

Fields:

- Email.
- Newsletter selection if available.
- Submit button.
- Privacy/trust note.

Visual treatment:

- Orange button.
- White or soft-gray surface.
- Sharp or lightly rounded corners.

### Trust/source document block

Fields:

- Source document title.
- Source type: agenda, budget, lawsuit, report, public record, transcript, data.
- Agency or origin.
- Date.
- Link.

Placement:

- Mid-story for investigations and explainers.
- Near end for standard stories.
- Always available from the story utility menu when documents exist.

## 7. Interaction Principles

### Reading

- Respect longform reading. Keep body text large, stable, and uncluttered.
- Avoid persistent overlays inside story pages except a minimal top bar and optional bottom utility row.
- Save, share, text size, and donation controls should be accessible but quiet.

### Personalization

- Personalization should follow explicit reader choices: city, topic, reporter, saved story, newsletter, alert preferences.
- Do not hide editorial priorities behind personalization. Home remains newsroom-led.

### Alerts

- Alert preferences should be granular:
  - Breaking news.
  - Followed cities.
  - Public meetings.
  - Elections/deadlines.
  - Arts & Culture.
  - Donation/member updates.
- Default to fewer, higher-trust alerts.

### Donation

- Donation prompts should feel like support for public-service reporting, not advertising.
- Place high-conversion prompts after value moments: finishing a story, saving multiple stories, following a city, reading repeated investigative coverage.

## 8. Content and Labeling Rules

### Voice and labels

Use direct civic language.

Preferred labels:

- "Why it matters"
- "What happens next"
- "Source documents"
- "Follow this city"
- "Follow this topic"
- "Updated"
- "Public meeting"
- "Donate to support local journalism"

Avoid:

- "Trending"
- "Viral"
- "Hot takes"
- "For you" as the dominant frame
- Any label that makes accountability reporting feel like entertainment content

### Story metadata

Every story card should include at least:

- Topic or city.
- Headline.
- Timestamp.
- Save affordance.

Every story page should include:

- Byline.
- Published date.
- Updated date when changed.
- Photo credit and caption when applicable.
- Source/trust link when available.

## 9. First-Round Wireframe Checklist

A designer should be able to produce first-round mobile wireframes from this document by creating:

- Home screen.
- My OC setup and personalized feed.
- Latest feed.
- Alerts center.
- Saved screen.
- Story page.
- Donation/support screen.
- Component sheet for article cards, chips, alert banners, CTAs, newsletter form, and source blocks.
- Staff Studio screen for editorial drafting, approval, publishing permissions, and audit visibility.

## 10. Staff Editing and Access

The app should include a staff-facing workspace that is easy for newsroom staff to understand without technical training. It should support role-based access rather than giving every internal user the same controls.

### Roles

| Role | Access level | Intended use |
| --- | --- | --- |
| Reporter | Draft and edit own content | Write stories, add source notes, submit drafts for review |
| Editor | Edit and approve newsroom content | Revise copy, approve stories, schedule alerts, request revisions |
| Admin | Publish and manage staff access | Publish live content, manage users, review audit history |
| Viewer | Read-only | Board, legal, partner, or observer review without editing rights |

### Staff workspace requirements

- Show the current user's role clearly.
- Explain what that role can and cannot do.
- Keep disabled actions visible but locked, so staff understand the workflow.
- Provide an editorial queue with status, owner, section, source count, and update time.
- Provide a simple draft-editing form for headline, section, editor notes, and source status.
- Record workflow events in an audit trail.
- Separate editorial approval from publishing, so an editor can approve but an admin controls final publication if that is the chosen policy.

### Production integration notes

- Connect role selection to real authentication and staff identity.
- Store drafts, notes, source documents, and workflow status in the CMS.
- Log all edits, approvals, publish actions, and permission changes.
- Keep source-document access separate from public story access when records are sensitive or embargoed.
- Require confirmation for publish, alert-send, homepage-placement, and donation-campaign changes.

## 11. Review Criteria

The v1 design is successful if:

- It clearly looks and feels like Voice of OC, not a generic news template.
- The color system matches the current site and uses orange/red with discipline.
- The first Home viewport communicates editorial judgment.
- My OC makes city and topic following obvious.
- The Story Page is comfortable for long reading and trust-forward.
- Donation prompts support the nonprofit model without undermining editorial trust.
- Alerts feel useful and controlled, not noisy.
- Staff can identify what they are allowed to edit, approve, publish, or only review.
- The design can be implemented as a mobile product without requiring a full rebrand.

## 12. Implementation Defaults

- Platform: native-style mobile app, iOS first but designable for Android.
- Layout baseline: 390 px wide mobile viewport.
- Grid: 16 px outer margins, 8 px spacing rhythm.
- Corner radius: 0-6 px for cards and controls; avoid pill shapes except chips and donation amount toggles.
- Image ratios: 4:3 for standard article cards, 16:9 for wide modules, flexible full-width crop for lead stories.
- Motion: fast, functional transitions only. No decorative animation system for v1.
- Offline: saved story reading is desirable but not required for first visual wireframes.

## 13. Source Notes

This design document adapts the live Voice of OC website identity as inspected on June 12, 2026:

- The site describes Voice of OC as Orange County's nonprofit newsroom.
- The live header uses a horizontal Voice of OC logo.
- The site metadata and footer expose square Voice of OC icon assets.
- The Newspack theme uses Fira Sans Condensed-style heading typography and Georgia/Garamond-style body typography.
- The live CSS exposes orange interaction styling around `#F68121` and `#E47300`.
- The live CSS exposes red highlight states around `#C30000`, `#A80000`, and `#C02424`.
- The app direction intentionally preserves the site's editorial black/white/gray foundation and local photography language.
