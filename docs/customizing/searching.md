# Searching

Many API resources support search in addition to filters on fields. The difference is that search uses our search
index. The search index evaluates several fields at the same time, interprets language better and ranks the results.

The documentation for each API endpoint shows if the endpoint supports search.

## Parameters

To search, add the `search` parameter to the request. For example:

```http request
GET https://fount.wppbav.com/api/v2/brands?search=Apple
```

## Search results

Search results are ordered by relevance, with the best matches first. If you also set the `sort` parameter, the
results are ordered by your sort instead.

:::note Search is limited to 1000 results
A search returns a maximum of the 1000 best matches, even if more records match. Pagination works only in those
results, so you cannot page past the first 1000 matches. If you need more results, make your search more specific, or
combine it with [filters](filters.md) instead.
:::
