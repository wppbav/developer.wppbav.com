# Pillars

The four pillars of brand equity are one of the foundational concepts of BAV. They divide the
[Powergrid](powergrid.md) into the four key dimensions that define a brand's position:

- **Differentiation**
- **Relevance**
- **Esteem**
- **Knowledge**

If you chart the pillars, show them as a column chart in the order above.

Pillars are category agnostic.

## Creating a query

```http request
POST /api/v2/brandscape/pillars
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

The data points include the `differentiation`, `relevance`, `esteem` and `knowledge` metrics, each with:

- `rank` - The percentile rank (0-100) that compares the brand to all other brands in the market.
- `construct` - The underlying construct score. Do not use it for display or analysis.

### Classification

The shape that the four pillars make together is the pillar pattern of the brand. Each data point includes its pattern as
`classification`, with a `key` (for example `balanced-leader` or `cultural-icon`), a translated `label` and a
`description` of what the pattern means for the brand.
