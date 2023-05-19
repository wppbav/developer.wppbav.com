# Cost of Entry

## Creating a query

```http request
GET /api/v2/cost-of-entry
```

## Parameters

| Key              |          Required?           | Type          | Description                                                                                |
|------------------|:----------------------------:|---------------|--------------------------------------------------------------------------------------------|
| `brand`          |      :white_check_mark:      | integer       | A single Brand ID.                                                                         |
| `study`          |      :white_check_mark:      | integer       | A single Study ID.                                                                         |
| `audience`       | :x: (defaults to All Adults) | integer       | A single Audience ID.                                                                      |
| `categories`     |      If no collections.      | numeric array | A comma-separated list of Category IDs.                                                    |
| `collections`    |      If no categories.       | numeric array | A comma-separated list of Collection IDs.                                                  |
| `comparisonName` |             :x:              | string        | Give the comparison a custom name. Otherwise the category or collection name will be used. |
