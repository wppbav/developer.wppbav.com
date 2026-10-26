# Love+

Love+ shows the four kinds of love a brand inspires: dependable, aspirational, playful and intellectual.

## Creating a query

```http request
GET /api/v2/tools/love-plus
```

## Parameters

| Key         |          Required?           | Type          | Description                          |
|-------------|:----------------------------:|---------------|--------------------------------------|
| `brands`    |      :white_check_mark:      | numeric array | A comma-separated list of Brand IDs. |
| `studies`   |      :white_check_mark:      | integer       | A single Study ID.                   |
| `audiences` | :x: (defaults to All Adults) | integer       | A single Audience ID.                |
