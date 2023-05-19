# Market Toplist

## Creating a query

```http request
GET /api/v2/toplist-market
```

## Parameters

| Key           |          Required?           | Type          | Description                             |
|---------------|:----------------------------:|---------------|-----------------------------------------|
| `brands`      |      :white_check_mark:      | numeric array | A comma-separated list of Brand IDs.    |
| `studies`     |      :white_check_mark:      | numeric array | A comma-separated list of Study IDs.    |
| `audiences`   | :x: (defaults to All Adults) | numeric array | A comma-separated list of Audience IDs. |
| `metrics`     |      If no metric keys.      | numeric array | A comma-separated list of Metric IDs.   |
| `metric_keys` |        If no metrics.        | string array  | A comma-separated list of metric keys.  |
