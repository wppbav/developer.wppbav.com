# Category Worth Map

## Creating a query

```http request
GET /api/v2/tools/category-worth-map
```

## Parameters

| Key          |          Required?           | Type          | Description                             |
|--------------|:----------------------------:|---------------|-----------------------------------------|
| `categories` |      :white_check_mark:      | numeric array | A comma-separated list of Category IDs. |
| `studies`    |      :white_check_mark:      | numeric array | A comma-separated list of Study IDs.    |
| `audiences`  | :x: (defaults to All Adults) | numeric array | A comma-separated list of Audience IDs. |