# Commitment Funnel

## Creating a query

```http request
GET /api/v2/tools/commitment-funnel
```

## Parameters

| Key         |          Required?           | Type          | Description                             |
|-------------|:----------------------------:|---------------|-----------------------------------------|
| `brands`    |      :white_check_mark:      | numeric array | A comma-separated list of Brand IDs.    |
| `studies`   |      :white_check_mark:      | numeric array | A comma-separated list of Study IDs.    |
| `audiences` | :x: (defaults to All Adults) | numeric array | A comma-separated list of Audience IDs. |