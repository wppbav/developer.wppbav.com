# Category Worth Map

The Category Worth Map is the [Brand Worth Map](brand-worth-map.md) for categories rather than brands. The map places
each category on the "Worth paying more for" and "Providing good value" axes. It uses the average percentile rank of the
brands in the category.

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
