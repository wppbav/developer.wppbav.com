# SWOT

SWOT classifies a brand's imagery attributes as strengths, weaknesses, opportunities and threats, by comparing each
attribute against the brand's own average and against the average of a competitive set.

## Creating a query

```http request
GET /api/v2/tools/swot
```

## Parameters

| Key              |          Required?           | Type          | Description                                                                                |
|------------------|:----------------------------:|---------------|--------------------------------------------------------------------------------------------|
| `brands`         |      :white_check_mark:      | numeric array | A comma-separated list of Brand IDs.                                                       |
| `studies`        |      :white_check_mark:      | numeric array | A comma-separated list of Study IDs.                                                       |
| `audiences`      | :x: (defaults to All Adults) | numeric array | A comma-separated list of Audience IDs.                                                    |
| `categories`     |      If no collections.      | numeric array | A comma-separated list of Category IDs that form the competitive set.                      |
| `collections`    |      If no categories.       | numeric array | A comma-separated list of Collection IDs that form the competitive set.                    |
| `comparisonName` |             :x:              | string        | Give the comparison a custom name (max 255 characters). Otherwise the category or collection name will be used. |
