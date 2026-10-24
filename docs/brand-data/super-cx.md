# Super CX

Super CX measures a brand's perceived customer experience. It is made up of the overall Super CX score and its Head,
Heart and X Factor components, which in turn are built from a set of underlying measures.

Super CX is category specific. The category should always be shown together with the brand, as it can significantly
change the interpretation of the results.

There is also a [Super CX tool](super-cx-tool.md) with its own parameters and response. We recommend this data model
endpoint for new integrations, as it shares its parameters and response with the other [data models](data-models.md).

## Creating a query

```http request
POST /api/v2/brandscape/super-cx
```

This endpoint requires the `bav:brand-data` scope.

## Parameters

This endpoint takes the [shared data model parameters](data-models.md#parameters): `brands`, `studies`, `countries`,
`years`, `audiences`, `study_types`, `benchmarks` and `format`. At least one of `brands`, `studies`, `countries` or
`years` is required.

## Response

The response follows the [standard data model schema](data-models.md#schema). The data points include the metrics in
the `super-cx` [metric group](../metrics/metric-groups.md).
