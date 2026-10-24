# Recommendation

Recommendation shows how likely consumers are to recommend a brand to a friend. It is consistent across all studies.

Recommendation is category specific. Respondents are asked about their likelihood to recommend the brand in the
specific category. The category should always be shown together with the brand, as it can significantly change the
interpretation of the results.

## Creating a query

```http request
POST /api/v2/brandscape/recommendation
```

The parameters are sent as a JSON body.

This endpoint requires the `bav:brand-data` scope.

## Parameters

This endpoint takes the [shared data model parameters](data-models.md#parameters): `brands`, `studies`, `countries`,
`years`, `audiences`, `study_types`, `benchmarks` and `format`. At least one of `brands`, `studies`, `countries` or
`years` is required.

## Response

The response follows the [standard data model schema](data-models.md#schema).

### Metrics

The data points include the metrics in the `recommendation` [metric group](../metrics/metric-groups.md), each with:

- `percentage` - The percentage of respondents who would recommend the brand.
- `rank` - The percentile rank (0-100) comparing the brand to all other brands in the market.
