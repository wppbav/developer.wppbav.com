# Brand Worth Map

The Brand Worth Map places brands on two axes, "Worth paying more for" and "Providing good value", and classifies them
into four quadrants split at a percentile rank of 50: Brand Worth (high on both), Desire (high worth, low value), Value
Champion (high value, low worth) and Emotional Choice (low on both).

## Creating a query

```http request
GET /api/v2/tools/brand-worth-map
```

## Parameters

| Key         |          Required?           | Type          | Description                          |
|-------------|:----------------------------:|---------------|--------------------------------------|
| `brands`    |      :white_check_mark:      | numeric array | A comma-separated list of Brand IDs. |
| `studies`   |      :white_check_mark:      | numeric array | A comma-separated list of Study IDs. |
| `audiences` | :x: (defaults to All Adults) | integer       | A single Audience ID.                |
