# Usage

Usage shows how consumers use brands on a scale:

- Never used
- Lapsed user (used in the past but not anymore)
- Use occasionally
- Use regularly

Usage is consistent across all studies.

Usage is category specific. The survey asks respondents about their usage of the brand in the specific category.
Always show the category together with the brand. The category can significantly change the interpretation of the
results.

## Creating a query

```http request
POST /api/v2/brandscape/usage
```

Send the parameters as a JSON body.

This endpoint requires the `bav:brand-data` scope.

## Parameters

This endpoint takes the [shared data model parameters](data-models.md#parameters): `brands`, `studies`, `countries`,
`years`, `audiences`, `study_types`, `benchmarks` and `format`. At least one of `brands`, `studies`, `countries` or
`years` is required.

## Response

The response follows the [standard data model schema](data-models.md#schema).

### Metrics

The data points include the metrics in the `usage` [metric group](../metrics/metric-groups.md), each with:

- `percentage` - The percentage of respondents who are in each usage level.
- `rank` - The percentile rank (0-100) that compares the brand to all other brands in the market.
