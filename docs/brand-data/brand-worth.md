# Brand Worth

Brand Worth returns the data behind the Brand Worth Map: each brand's percentile ranks for "Worth paying more for" and
"Providing good value". The map places each brand in one of four quadrants:

- **Brand Worth** - `worth_more` rank above 50 and `good_value` rank above 50.
- **Desire** - `worth_more` rank above 50 and `good_value` rank below 50.
- **Emotional Choice** - `worth_more` rank below 50 and `good_value` rank below 50.
- **Value Champion** - `worth_more` rank below 50 and `good_value` rank above 50.

For the Brand Worth Map tool, see the [Brand Worth Map](brand-worth-map.md) endpoint.

## Creating a query

```http request
POST /api/v2/brandscape/brand-worth
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

The data points include the `good_value` and `worth_more` metrics with their `rank` scores. If a study examines a brand in more
than one category, the model includes the brand only once.

This endpoint does not return the quadrant as a `classification`. Use the rules above to place the brands.
