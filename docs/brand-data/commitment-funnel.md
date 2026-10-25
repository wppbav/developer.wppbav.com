# Commitment Funnel

The Commitment Funnel shows the strength of the behavioral and emotional relationship between a brand and consumers.
It has seven stages: Loyalty, Adoption and Consideration (behavioral), Awareness, and Respect, Love and Advocate (emotional).

## Creating a query

```http request
GET /api/v2/tools/commitment-funnel
```

This endpoint takes the same filters as the [data models](data-models.md). Pass array parameters with
array syntax, for example:

```http request
GET /api/v2/tools/commitment-funnel?brands[]=148&brands[]=149&studies[]=635
```

## Parameters

You must give at least one of `brands`, `studies`, `countries` or `years`. The `studies` parameter is not required.
You can use `countries` and `years` instead to select studies by market and year.

| Key             |          Required?           | Type         | Description                                                                                                                                                        |
|-----------------|:----------------------------:|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `brands`        |    One of the four filters   | array        | Up to 50 brands, as brand IDs or brand names. The API matches names to the closest brand.                                                                          |
| `studies`       |    One of the four filters   | array        | Up to 50 studies, as study IDs or study names. The API matches names to the closest study that you have access to.                                                 |
| `countries`     |    One of the four filters   | array        | Up to 50 countries, as country IDs, ISO 3166-1 alpha-2 or alpha-3 codes, or country names.                                                                         |
| `years`         |    One of the four filters   | array        | Up to 50 years, as year IDs or calendar years.                                                                                                                     |
| `audiences`     | :x: (defaults to All Adults) | array        | Up to 50 audiences, as audience IDs or audience names.                                                                                                             |
| `study_types[]` | :x: (defaults to `syndicated`) | string array | The kinds of study that `countries` and `years` can resolve to: `syndicated` (the standard BAV study), `snap`, `fused` or `custom`. The API ignores this parameter when `studies` is set. |

:::note

The [data models](data-models.md) accept the `benchmarks` and `format` parameters. These parameters pass
validation on this endpoint, but the endpoint does not apply them. The Commitment Funnel always responds with JSON and
does not add benchmark rows.

:::

## Response

The response contains a `data` array with one entry per brand data point. Each entry has `study`, `audience`,
`category`, `year`, `country`, `sector` and `brand` objects (each with `id` and `name`). Each entry also has a
`brand_display_name`, a `data_point_label` and a `metrics` array. Each metric has a `key`, `value` and `label`.
