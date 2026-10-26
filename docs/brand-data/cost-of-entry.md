# Cost of Entry

Cost of Entry compares a brand's imagery attributes against the average of a competitive set.

## Creating a query

```http request
GET /api/v2/tools/cost-of-entry
```

## Parameters

This endpoint uses the singular `brand`, `study` and `audience` parameters.

| Key              |          Required?           | Type          | Description                                                                                |
|------------------|:----------------------------:|---------------|--------------------------------------------------------------------------------------------|
| `brand`          |      :white_check_mark:      | integer       | A single Brand ID.                                                                         |
| `study`          |      :white_check_mark:      | integer       | A single Study ID.                                                                         |
| `audience`       | :x: (defaults to All Adults) | integer       | A single Audience ID.                                                                      |
| `categories`     |      If no collections.      | numeric array | A comma-separated list of Category IDs that form the competitive set.                      |
| `collections`    |      If no categories.       | numeric array | A comma-separated list of Collection IDs that form the competitive set.                    |
| `comparisonName` |             :x:              | string        | A label for the competitive set (max 255 characters).                                      |

:::caution

The endpoint accepts `comparisonName`, but it currently does not apply it to the Cost of Entry output. The output uses
the category or collection name.

:::
