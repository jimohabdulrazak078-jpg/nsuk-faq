# NSUK Notebook — FAQ site for Nasarawa State University, Keffi

A NotebookLM-styled FAQ explorer built with Next.js (App Router) + Tailwind CSS.
Search or filter by category across sourced questions on admissions, fees,
leadership, faculties, campuses, and campus life.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires internet access for `npm install`
(this sandbox had none, so the project ships hand-written and un-installed —
run it once locally and it should build cleanly on a normal machine with
Node 18+).

## Where things live

- `data/faqs.ts` — the actual FAQ content. Every entry has a `source` field.
  Add new questions here; the UI (search + category filters) works off this
  file automatically.
- `components/FaqExplorer.tsx` — search bar, category chips, filtering logic.
- `components/FaqItem.tsx` — the accordion card + "Sourced" chip.
- `components/BlobBackground.tsx` — the ambient gradient-blob background.
- `app/page.tsx` / `app/layout.tsx` — page shell and metadata.

## About the dataset

This ships with **46 curated, sourced Q&As** rather than a padded 1,000 —
every answer is grounded in a real, checkable source (NSUK's official site,
Wikipedia, Nigerian press, or university-adjacent sites), because for a real
FAQ about a real institution, accuracy matters more than volume. A handful
of things (exact tuition figures, live cut-off marks) change every session
and are intentionally left pointing to the official portal instead of a
number that will go stale.

**To grow this toward 1,000**: the cleanest path is scraping nsuk.edu.ng's
own faculty/department pages (each has admission requirements, course
outlines, and staff lists) and turning each fact into a Q&A pair — that's
real, decision-safe content rather than filler. Happy to help build that
scraper/generator next if useful.

## Fonts

Uses the system font stack (no Google Fonts) so the build has no network
dependency at build time — same choice made in the earlier version of this
project, for the same reason.
