# Category Worth Map

The Category Worth Map is the [Brand Worth Map](brand-worth-map.md) for categories rather than brands. Each category is
placed on the "Worth paying more for" and "Providing good value" axes using the average percentile rank of its brands.

## Creating a query

```http request
GET /api/v2/tools/category-worth-map
```

## Parameters

| Key          |          Required?           | Type          | Description                             |
|--------------|:----------------------------:|---------------|-----------------------------------------|
| `categories` |      :white_check_mark:      | numeric array | A comma-separated list of Category IDs. |
| `studies`    |      :white_check_mark:      | numeric array | A comma-separated list of Study IDs.    |
| `audiences`  | :x: (defaults to All Adults) | integer       | A single Audience ID.                   |
