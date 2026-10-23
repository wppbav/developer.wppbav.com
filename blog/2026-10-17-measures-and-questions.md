---
slug: measures-and-questions
title: Find which studies ask a measure or question
authors: erikbernskiold
---

New endpoints make it easier to find out what a study measures, and where a measure or question was asked, before you
query for data.

<!-- truncate -->

- `/bav-questions` lists the BAV audience questions, alongside the existing `/bav-question-groups`.
- `/brand-measures/{id}/studies` and `/bav-questions/{id}/studies` list the studies a measure or question was asked
  in.
- `/studies/{id}/brand-measures`, `/studies/{id}/brand-metrics`, `/studies/{id}/audience-questions` and
  `/studies/{id}/bav-questions` list what a study asked.

See [Measures & Questions](/docs/2.x/measures/) for the full documentation.
