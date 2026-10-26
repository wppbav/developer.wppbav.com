---
slug: search-result-limit
title: Search results are now limited to 1,000 records
authors: erikbernskiold
---

To keep searches fast and reliable, a search now returns at most the 1,000 best-matching records. This applies to
every API endpoint that supports the `search` parameter.

<!-- truncate -->

Most searches return far fewer results than this, so you are unlikely to notice a difference. If you need to go through
a very large set of records, combine filters rather than a broad search term, or leave out the search and paginate
through the full list.

See [Searching](/docs/2.x/customizing/searching) for more details.
