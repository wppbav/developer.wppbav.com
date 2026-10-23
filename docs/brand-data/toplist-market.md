# Market Toplist

The Market Toplist returns the top-ranked brands in a study for each metric you name, ordered by percentile rank.

## Creating a query

```http request
GET /api/v2/tools/toplist-market
```

## Parameters

Choose the metrics with either `metric_keys` or `metrics`.

| Key           |          Required?           | Type          | Description                                                                 |
|---------------|:----------------------------:|---------------|-----------------------------------------------------------------------------|
| `studies`     |      :white_check_mark:      | integer       | A single Study ID.                                                          |
| `audiences`   | :x: (defaults to All Adults) | integer       | A single Audience ID.                                                       |
| `metrics`     |      If no metric keys.      | numeric array | A comma-separated list of [brand metric](../metrics/metrics.md) IDs.        |
| `metric_keys` |        If no metrics.        | string array  | A comma-separated list of brand metric keys, e.g. `differentiation,relevance`. |
