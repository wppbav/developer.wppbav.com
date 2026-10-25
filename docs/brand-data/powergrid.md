# Powergrid

The BAV Powergrid is the core of the BAV brand equity model. It shows the position of a brand on two key
dimensions:

- **Brand Strength** (the Y-axis) - How well consumers perceive a brand in terms of its differentiation and relevance.
- **Brand Stature** (the X-axis) - How well consumers respect and know a brand (esteem and knowledge).

The Powergrid is a two-by-two matrix that categorizes brands into four quadrants. A percentile rank of 50 or above is high,
and a rank below 50 is low:

- **Leadership** - High Brand Strength and high Brand Stature. Top right quadrant.
- **Momentum** - High Brand Strength and low Brand Stature. Top left quadrant.
- **Fatigued** - Low Brand Strength and high Brand Stature. Bottom right quadrant.
- **Unfocused** - Low Brand Strength and low Brand Stature. Bottom left quadrant.

A diagonal line from (50, 50) to (100, 100) can divide the Leadership quadrant further. Brands above the line are
in **Leadership** and brands below the line are in **Mass Market**.

If you chart the Powergrid, show it as a scatter plot. Draw lines that cross at 50 on both axes. Always show the
quadrant labels.

The Powergrid is category agnostic.

## Creating a query

```http request
POST /api/v2/brandscape/powergrid
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

The data points include the `brand_strength` and `brand_stature` metrics, each with:

- `rank` - The percentile rank (0-100) that compares the brand to all other brands in the market.
- `construct` - The underlying construct score. Do not use it for display or analysis.

### Classification

Each data point includes its quadrant as `classification`, with a `key` of `leadership`, `momentum`, `fatigued` or
`unfocused`, and a translated `label`. Use it. Do not derive the quadrant from the ranks yourself.

### Meta

The Powergrid also adds a `labels` object to the standard meta keys. The object contains the translated axis labels
(`labels.axis.x` and `labels.axis.y`) and quadrant labels (`labels.quadrants`). Use these labels when you draw the
chart.
