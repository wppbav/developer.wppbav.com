# Influence

Influence shows how a brand influences consumers in its market, across the BAV influence dimensions such as
Innovation, Authenticity, Status, Trust, Convenience, Contemporary, Performance, Fun and Purpose.

Influence is category agnostic.

Influence is only available as a `POST` request. There is no `GET /api/v2/tools/influence` endpoint.

## Creating a query

```http request
POST /api/v2/brandscape/influence
```

This endpoint requires the `bav:brand-data` scope.

## Parameters

This endpoint takes the [shared brandscape model parameters](index.md#parameters): `brands`, `studies`, `countries`,
`years`, `audiences`, `study_types`, `benchmarks` and `format`. At least one of `brands`, `studies`, `countries` or
`years` is required.

## Response

The response follows the [standard brandscape model schema](index.md#schema).

### Metrics

The data points include the metrics in the `influence` [metric group](../metrics/metric-groups.md), such as
`mib_innovation`, `mib_authenticity`, `mib_status` and `mib_trust`. The overall `mib_influential` metric is not
included in this model.
