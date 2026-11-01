# SSSC Clerk 2026 — Study Command Centre

A self-contained study library for the Punjab District Courts clerk recruitment (SSSC) 2026 CBT.

**Open `index.html` in a browser.** There is no build step and no server required.

## What is inside

- **Dashboard** — eight study methods matched to this paper, a weekly rhythm, negative-marking maths, a six-week plan, and an exam-day protocol.
- **Exam Blueprint** — paper pattern, qualifying rules, approximate GK/English weightage, and the full module map.
- **Six guides** in `guides/` — GS-01a, GS-01b, GS-01c, GS-04, GS-05a and GS-05b, displayed in an in-page viewer.

The left navigation lists the **entire module map** (38 entries across nine subjects). Guides that exist are clickable; the rest are greyed out with a **Soon** tag. Groups are collapsible, the menu is searchable, and it remembers which groups you closed. The last guide you opened appears as a "Continue" button on the dashboard.

## Adding another guide

Everything is driven by one file: **`guides/manifest.js`**.

1. Save the generated guide in `guides/` using the `file` name already written in its manifest entry (or edit that field to match your filename).
2. Open `guides/manifest.js` and change `ready: false` to `ready: true` on that entry.
3. Optionally fill in `desc` and `chips` — they become the dashboard card text.

That is all. The left menu, the ready counter, the dashboard cards and the Exam Blueprint module map all update from the manifest automatically.

Each entry looks like this:

```js
{
  id: 'gs-05b', section: 'Geography', code: 'GS-05b',
  nav: 'Climate, Soils & Agriculture',
  title: 'India: Climate, Vegetation, Soils, Agriculture, Minerals & Census',
  file: 'guides/gs-05b-climate-census.html', ready: true,
  tag: 'Geography',
  desc: 'One-line description for the dashboard card.',
  chips: ['Monsoon', 'Soils & crops', 'Forests', 'Census 2011'],
  search: 'extra keywords for the menu search'
}
```

To add a module that is not in the map yet, copy an entry, give it a unique `id`, and set `ready: false`. It will appear in the menu and blueprint immediately.

## Notes

- The shell has no external dependencies. The guides load Tailwind CSS from a CDN, so an internet connection is needed for their full styling.
- The guides keep their own contents button, priority filters and light/dark toggle inside the viewer panel.
- If you open the file directly (`file://`), everything displays, but some browsers restrict `localStorage` on local files. In that case the theme choice, checklist ticks and visited marks will not persist.
- Facts inside the guides are marked `[VERIFY]` where the source books do not support them. Current-affairs dates, ranks and appointments should be checked against the latest official or monthly compilation.
