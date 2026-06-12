# Voice of OC Mobile App Concept

A working static mobile prototype and design handoff for a Voice of OC civic news app concept.

The prototype translates Voice of OC's current website identity into a mobile product system for local accountability reporting, city following, civic alerts, saved stories, newsletter signup, nonprofit support, and a staff-editable newsroom workspace.

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

## Staff editing concept

The `Staff` tab demonstrates a lightweight editorial workspace with stratified access:

- Reporter: draft stories, edit own drafts, add source notes, submit for review
- Editor: edit all copy, approve stories, schedule alerts, request revisions
- Admin: publish, manage staff access, review audit history
- Viewer: read-only review for board, legal, partner, or observer access

This is a front-end concept model only. A production version would connect these controls to authentication, CMS records, source-document storage, audit logs, and publishing APIs.

## Brand basis

The design uses publicly visible Voice of OC website cues inspected on June 12, 2026:

- Orange interaction color: `#F68121`
- Deeper orange: `#E47300`
- Urgent/donation reds: `#C30000`, `#A80000`, `#C02424`
- Editorial black/white/gray palette
- Condensed sans headlines and serif longform reading
- Local civic photography as the primary graphic language

This is an independent concept prototype, not an official Voice of OC product.
