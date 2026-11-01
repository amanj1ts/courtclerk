# SSSC Clerk 2026 — Study Command Centre

A self-contained study library for the Punjab District Courts clerk recruitment (SSSC) 2026 CBT.

**Open `index.html` in a browser.** There is no build step and no server required.

## What is inside

- **Dashboard** — eight study methods matched to this paper, a weekly rhythm, negative-marking maths, a six-week plan, and an exam-day protocol.
- **Exam Blueprint** — paper pattern, qualifying rules, approximate GK/English weightage, and the full module map.
- **Five guides** in `guides/` — GS-01a, GS-01b, GS-01c, GS-04 and GS-05a, displayed in an in-page viewer.

The left navigation is collapsible, searchable, and remembers which groups you closed. The last guide you opened appears as a "Continue" button on the dashboard.

## Adding another guide

1. Save the generated guide as `guides/<name>.html`.
2. In `index.html`, add an entry to the `GUIDES` object near the bottom (file, code, nav label, title, section, tag, description, chips).
3. Add a matching `<a class="nav-link" href="#/<id>" data-route="<id>" data-search="...">` inside the correct nav group.
4. Add the id to the `ORDER` array so it gets a card on the dashboard.

## Notes

- The shell has no external dependencies. The guides load Tailwind CSS from a CDN, so an internet connection is needed for their full styling.
- The guides keep their own contents button, priority filters and light/dark toggle inside the viewer panel.
- If you open the file directly (`file://`), everything displays, but some browsers restrict `localStorage` on local files. In that case the theme choice, checklist ticks and visited marks will not persist.
- Facts inside the guides are marked `[VERIFY]` where the source books do not support them. Current-affairs dates, ranks and appointments should be checked against the latest official or monthly compilation.
