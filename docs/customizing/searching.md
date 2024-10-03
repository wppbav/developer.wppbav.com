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
