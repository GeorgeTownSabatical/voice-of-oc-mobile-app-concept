# Voice of OC Mobile App Concept

A working static mobile prototype and design handoff for a Voice of OC civic news app concept.

The prototype translates Voice of OC's current website identity into a mobile product system for local accountability reporting, city following, civic alerts, saved stories, newsletter signup, nonprofit support, Slack invite requests, and organization/community participation.

The employee-only Staff Studio and IT Access Desk have been separated into their own repo and Pages site:

- Employee portal: https://georgetownsabatical.github.io/voice-of-oc-employee-portal-concept/
- Employee repo: https://github.com/GeorgeTownSabatical/voice-of-oc-employee-portal-concept

## Run locally

```bash
npm run start
```

Open <http://localhost:4173>.

## Build

```bash
npm run build
```

The static site is generated in `dist/`.

## Included

- Interactive app prototype: `index.html`, `styles.css`, `script.js`
- Design document: `outputs/voice-of-oc-mobile-app-design-document.md`

## Integrations represented

- Donations: public actions link to Voice of OC's live `support.voiceofoc.org/campaign/796416/donate` campaign and `voiceofoc.org/donate`.
- Payment/giving stack observed on the website: Classy embedded giving scripts and Virtuous CRM/newsletter embeds.
- Slack: prototype invite-request forms for readers and organizations. No public official Slack invite URL was found, so production should connect these forms to a real Slack workspace invitation/admin approval flow.

## Brand basis

The design uses publicly visible Voice of OC website cues inspected on June 12, 2026:

- Orange interaction color: `#F68121`
- Deeper orange: `#E47300`
- Urgent/donation reds: `#C30000`, `#A80000`, `#C02424`
- Editorial black/white/gray palette
- Condensed sans headlines and serif longform reading
- Local civic photography as the primary graphic language

This is an independent concept prototype, not an official Voice of OC product.
