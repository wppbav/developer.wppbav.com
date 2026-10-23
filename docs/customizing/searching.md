# Searching

Many API resources have support for searching in addition to filtering on fields. The difference between filtering on
fields and searching is that searching uses our underlying search index which evaluates multiple fields at once,
interprets language better and prioritizes results.

Each API endpoint documentation will show if it supports searching.

## Parameters

To search, add the `search` parameter to the request. For example:

```http request
GET https://fount.wppbav.com/api/v2/brands?search=Apple
```

## Search results

Search results are ordered by relevance, with the best matches first. If you also set the `sort` parameter, the
results are ordered by your sort instead.

:::note Search is limited to 1000 results
A search returns at most the 1000 best matches, regardless of how many records actually match. Pagination works
within those results, so you can't page past the first 1000 matches. If you need more results, make your search more
specific or combine it with [filters](filters.md) instead.
:::
