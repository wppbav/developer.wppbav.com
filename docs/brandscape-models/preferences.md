# Preferences

Preferences show consumers' preference for brands on a scale:

- Would never consider
- Only if no alternative
- One of several
- One I prefer

Preferences are consistent across all studies and can be used to understand how likely consumers are to choose a brand.

Preferences are category specific. Respondents are asked about their preference for the brand in the specific
category. The category should always be shown together with the brand, as it can significantly change the
interpretation of the results.

## Creating a query

```http request
POST /api/v2/brandscape/preferences
GET /api/v2/tools/preferences
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

The data points include the metrics in the `preference` [metric group](../metrics/metric-groups.md), each with:

- `percentage` - The percentage of respondents who fall into each preference level.
- `rank` - The percentile rank (0-100) comparing the brand to all other brands in the market.
