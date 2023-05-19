# SWOT

## Creating a query

```http request
GET /api/v2/swot
```

## Parameters

| Key              |          Required?           | Type          | Description                                                                                |
|------------------|:----------------------------:|---------------|--------------------------------------------------------------------------------------------|
| `brands`         |      :white_check_mark:      | numeric array | A comma-separated list of Brand IDs.                                                       |
| `studies`        |      :white_check_mark:      | numeric array | A comma-separated list of Study IDs.                                                       |
| `audiences`      | :x: (defaults to All Adults) | numeric array | A comma-separated list of Audience IDs.                                                    || `categories`     |      If no collections.      | numeric array | A comma-separated list of Category IDs.                                                    |
| `categories`     |      If no collections.      | numeric array | A comma-separated list of Category IDs.                                                    |
| `collections`    |      If no categories.       | numeric array | A comma-separated list of Collection IDs.                                                  |
| `comparisonName` |             :x:              | string        | Give the comparison a custom name. Otherwise the category or collection name will be used. |
