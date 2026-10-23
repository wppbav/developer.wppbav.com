# Personality

Personality types provide a higher-level understanding of how a brand is perceived by consumers. They categorize brands
into ten distinct personality types based on the [imagery](imagery.md) attributes. The personality types are consistent
across all studies.

Personality is category agnostic.

## Creating a query

```http request
POST /api/v2/brandscape/personality
GET /api/v2/tools/personality
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

The data points include the metrics in the `personality` [metric group](../metrics/metric-groups.md), each with:

- `percentage` - The percentage of respondents who associate the brand with the personality type.
- `rank` - The percentile rank (0-100) comparing the brand to all other brands in the market.
