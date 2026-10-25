---
sidebar_label: Metrics
---

# Best Countries Metrics

## What are best countries metrics?

When BAV studies a country in Best Countries, it uses different metrics. These metrics are divided
into [groups](metric-groups.md) to make them easier to browse.

## List all best countries metrics

To list all of the best countries metrics and browse them through the API, use the list endpoint:

```http request
GET /api/v2/best-countries-metrics
```

## Get a best countries metric

If you already have the system ID of a best countries metric, you can also get its details directly.

```http request
GET /api/v2/best-countries-metrics/123
```

Where `123` is the system ID of the brand metric.

## Schema
