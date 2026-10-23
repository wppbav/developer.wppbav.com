# Imagery

Imagery shows how consumers perceive a brand against a set of imagery attributes. It helps you understand on a deep
level how a brand is perceived and what associations it evokes in the minds of consumers.

The available attributes can vary between studies. Studies with the same methodology generally have the same attributes,
but there have been variations over time and for some markets. If an attribute is not present in the response, it is
not available for the given study.

Imagery is category agnostic.

## Creating a query

```http request
POST /api/v2/brandscape/imagery
GET /api/v2/tools/imagery
```

The `POST` endpoint takes its parameters as a JSON body, and the `GET` endpoint takes the same parameters as query
parameters. Both return the same response.

This endpoint requires the `bav:brand-data` scope.

## Parameters

This endpoint takes the [shared brandscape model parameters](index.md#parameters): `brands`, `studies`, `countries`,
`years`, `audiences`, `study_types`, `benchmarks` and `format`. At least one of `brands`, `studies`, `countries` or
`years` is required.

## Response

The response follows the [standard brandscape model schema](index.md#schema).

### Metrics

The data points include the metrics in the `imagery` [metric group](../metrics/metric-groups.md), each with:

- `percentage` - The percentage of respondents who associate the brand with the attribute.
- `rank` - The percentile rank (0-100) comparing the brand to all other brands in the market.
