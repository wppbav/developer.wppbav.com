---
sidebar_label: Metrics
---

# Best Countries Metrics

## What are best countries metrics?

When BAV studies a country in Best Countries it does so on a variety of metrics. These metrics are divided
into [groups](metric-groups.md) for easier browsing.

## List all best countries metrics

To list all of the best countries metrics and browse them via the API, use the list endpoint:

```http request
GET /api/v2/best-countries-metrics
```

## Get a best countries metric

You may also directly retrieve a best countries metric's details if you already have its system ID.

```http request
GET /api/v2/best-countries-metrics/123
```

Where `123` is the system ID of the brand metric.

## Schema
