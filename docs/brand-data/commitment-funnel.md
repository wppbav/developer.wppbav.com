# Commitment Funnel

The Commitment Funnel shows the strength of a brand's behavioral and emotional relationship with consumers, across
seven stages: Loyalty, Adoption and Consideration (behavioral), Awareness, and Respect, Love and Advocate (emotional).

## Creating a query

```http request
GET /api/v2/tools/commitment-funnel
```

This endpoint takes the same filters as the [brandscape data models](brandscape-data.md). Array parameters are passed
using array syntax, for example:

```http request
GET /api/v2/tools/commitment-funnel?brands[]=148&brands[]=149&studies[]=635
```

## Parameters

At least one of `brands`, `studies`, `countries` or `years` must be provided. `studies` is not required: you can
instead use `countries` and `years` to select studies by market and year.

| Key             |          Required?           | Type         | Description                                                                                                                                                        |
|-----------------|:----------------------------:|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `brands`        |    One of the four filters   | array        | Up to 50 brands, as brand IDs or brand names. Names are matched to the closest brand.                                                                              |
| `studies`       |    One of the four filters   | array        | Up to 50 studies, as study IDs or study names. Names are matched to the closest study you have access to.                                                          |
| `countries`     |    One of the four filters   | array        | Up to 50 countries, as country IDs, ISO 3166-1 alpha-2 or alpha-3 codes, or country names.                                                                         |
| `years`         |    One of the four filters   | array        | Up to 50 years, as year IDs or calendar years.                                                                                                                     |
| `audiences`     | :x: (defaults to All Adults) | array        | Up to 50 audiences, as audience IDs or audience names.                                                                                                             |
| `study_types[]` | :x: (defaults to `syndicated`) | string array | The kinds of study that `countries` and `years` may resolve to: `syndicated` (the standard BAV study), `snap`, `fused` or `custom`. Ignored when `studies` is set. |

:::note

The `benchmarks` and `format` parameters accepted by the [brandscape data models](brandscape-data.md) pass validation
on this endpoint but are not applied: the Commitment Funnel always responds with JSON and does not add benchmark rows.

:::

## Response

The response contains a `data` array with one entry per brand data point. Each entry has `study`, `audience`,
`category`, `year`, `country`, `sector` and `brand` objects (each with `id` and `name`), a `brand_display_name`, a
`data_point_label` and a `metrics` array, where each metric has a `key`, `value` and `label`.
