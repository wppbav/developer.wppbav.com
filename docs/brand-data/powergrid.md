# Powergrid

The BAV Powergrid is the core of the BAV brand equity model. It represents a brand's position based on two key
dimensions:

- **Brand Strength** (the Y-axis) - How well a brand is perceived in terms of its differentiation and relevance.
- **Brand Stature** (the X-axis) - How well a brand is respected and known (esteem and knowledge).

The Powergrid is a two-by-two matrix that categorizes brands into four quadrants, where a percentile rank of 50 or above
is high and anything below 50 is low:

- **Leadership** - High Brand Strength and high Brand Stature. Top right quadrant.
- **Momentum** - High Brand Strength and low Brand Stature. Top left quadrant.
- **Fatigued** - Low Brand Strength and high Brand Stature. Bottom right quadrant.
- **Unfocused** - Low Brand Strength and low Brand Stature. Bottom left quadrant.

The Leadership quadrant can be further divided by a diagonal line from (50, 50) to (100, 100). Brands above the line are
in **Leadership** and brands below the line are in **Mass Market**.

When charted, the Powergrid should be displayed as a scatter plot with lines crossing at 50 on both axes and with the
quadrant labels always shown.

The Powergrid is category agnostic.

## Creating a query

```http request
POST /api/v2/brandscape/powergrid
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

The data points include the `brand_strength` and `brand_stature` metrics, each with:

- `rank` - The percentile rank (0-100) comparing the brand to all other brands in the market.
- `construct` - The underlying construct score. This should not be used for display or analysis.

### Classification

Each data point includes its quadrant as `classification`, with a `key` of `leadership`, `momentum`, `fatigued` or
`unfocused`, and a translated `label`. Use it rather than deriving the quadrant from the ranks yourself.

### Meta

In addition to the standard meta keys, the Powergrid adds a `labels` object with the translated axis labels
(`labels.axis.x` and `labels.axis.y`) and quadrant labels (`labels.quadrants`) for use when drawing the chart.
