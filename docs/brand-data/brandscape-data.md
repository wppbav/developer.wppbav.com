# Brandscape Data

## What is brandscape data?

A fundamental core concept of BAV is the "Brandscape" which is the set of brands in a given country for a given year.
The brandscape data is the collection of metrics and their respective values for the brandscape. You can, in practical
terms, see the brandscape data is the "BAV data".

Brandscape data has one row per brand, category, study and audience, with every metric BAV calculates for that
combination. You can get the data by:

- [Study](../studies/studies.md)
- [Year](../metadata/years.md)
- [Country](../metadata/countries.md)
- [Audience](../audiences/audiences.md)
- [Brand](../brands/brands.md)
- [Category](../studies/categories.md)

You can customize the response to include only the data you need, such as only specific metrics.

## List brandscape data

To list the brandscape data, use the list endpoint:

```http request
GET /api/v2/brandscape-data
```

The response is [paginated](../pagination.md). There is no endpoint for retrieving a single brandscape data row.

### Scoping the request

Each request is scoped to one or more studies. You can do this in one of two ways:

- **By study:** Use the `studies` filter with one or more study IDs.
- **By market and year:** Use a country filter (`countries` or `country_code`) together with a year filter (`years`
  or `year_number`).

A `400` error is returned if you filter by a country without a year, or by a year without a country.

If you don't give a study, country or year filter at all, the request falls back to the most recently released
syndicated BAV study from the last three years. We recommend that you always scope your requests explicitly.

When no `audiences` filter is given, the data is returned for the All Adults audience (ID `1`).

### Study types

When you filter by market and year, the request only resolves to syndicated BAV studies by default. To include other
types of studies, set the `study_types` filter to a comma-separated list of the study types you want. The available
study types are:

- `syndicated` - The syndicated BAV study (default).
- `snap` - SnapBAV studies.
- `fused` - Fused studies.
- `custom` - Custom studies.

Unknown values are ignored. The `study_types` filter has no effect when you use the `studies` filter.

If studies of other types exist for the markets and years you requested but were left out by the study type filter,
they are listed in `meta.available_alternatives`. Each entry tells you about the study, and which `study_types` value
includes it:

```json
{
  "data": [],
  "meta": {
    "available_alternatives": [
      {
        "study_id": 1234,
        "study_name": "SnapBAV Norway 2025",
        "market": "Norway",
        "year": 2025,
        "study_type": "snap",
        "caveat": "...",
        "message": "A SnapBAV study is available for this market and year. Add filter[study_types]=snap to include it."
      }
    ]
    // ... pagination meta
  }
}
```

Data from BAV AURA studies is never returned by this endpoint.

### Data generation

Brandscape data is generated per study and audience the first time it is requested. If any of the requested study and
audience combinations are still being generated, the response has a `202 Accepted` status code. The rows that are
already available are still returned, and `meta.generation` lists the combinations that are pending. Retry the request
shortly to get the full data.

```json
{
  "data": [
    // ... rows that are already available
  ],
  "meta": {
    "generation": {
      "status": "partial",
      "message": "Some of the requested combinations are still being generated. Retry the request shortly.",
      "combinations": [
        {
          "study_id": 635,
          "study_name": "BAV US 2025",
          "audience_id": 42,
          "audience_name": "Millennials",
          "was_just_triggered": true
        }
      ]
    }
    // ... pagination meta
  }
}
```

The `status` is `partial` when some of the requested data is already available, and `pending` when none of it is.

## Schema

### Full response schema

The brandscape data schema is large (≈ 350 fields). For that reason we omit the full schema here. It is divided into:

- Metadata (for example: study, category, brand, audience information)
- Metric data

The metric data field names are built up by the `key` of the [Brand Metrics](../metrics/metrics.md) resource and a
suffix depending on the score type. Not all metrics have all score types. The metric resource will show the available
score types, and its `brandscape_data_columns` field lists the exact field names. Suffixes are:

- `_rank` for percentile rank scores.
- `_pct` for percentage scores.
- `_c` for construct scores.
- `_brandscape_index` for index scores against the entire brandscape.
- `_category_index` for index scores against the brand's category.
- No suffix for value scores, like base sizes.

Every metric you have access to is returned by default. Use the `metric_keys` or `metric_group_keys` parameters (see
below) to limit the metrics returned.

In addition to the metric data, each row has the following fields:

| Key            | Type    | Description                                                                                                                                                                                                                                                         |
|----------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`           | integer | The system ID of the brandscape data row.                                                                                                                                                                                                                           |
| `study_type`   | string  | The type of study the row came from: `syndicated`, `snap`, `fused` or `custom`, or `null` for other study types. Returned by default, and when the `study` relationship is included.                                                                                |
| `is_duplicate` | boolean | `true` for a brand's second and later categories in the same study. All scores but the usage, preference and recommendation scores are category-agnostic, which means that if you perform aggregate analysis (average, standard deviation etc.) on these scores you want to remove duplicates first. |
| `brand_name`   | string  | The local brand name that was asked in the survey. This can be different from the global brand name from the brand relationship. You should use this field in combination with the data when available as the brand name.                                          |
| `created_at`   | string  | A datetime string when this row was first created.                                                                                                                                                                                                                  |
| `updated_at`   | string  | A datetime string when this row was last updated.                                                                                                                                                                                                                   |

All metric fields are sortable, filterable and configurable. In addition, you may sort by `id`, `brand_name`,
`study_id`, `category_id`, `year_id`, `country_id`, `base_id`, `brand_variation_id`, `is_duplicate`, `created_at` and
`updated_at`.

For rollup studies (studies made up of several other studies), metrics with a per-study breakdown also return a
`{metric}_rollup` field. This is an object with the value for each underlying study, keyed by study ID, or `null` when
the row has no breakdown.

## Additional Filters

In addition to the standard filters and the metric fields, we have a set of helper filters to make querying the data
easier by reducing the need for lookups in our database. These are:

- `studies` - A comma-separated list of study IDs (for example: 1,2,3).
- `countries` - A comma-separated list of country IDs (for example: 1,2,3). Requires a year filter.
- `country_code` - A comma-separated list of ISO two letter country codes (for example: GB). Can be used instead of
  the `countries` filter. Requires a year filter.
- `years` - A comma-separated list of year IDs (for example: 1,2,3). Requires a country filter.
- `year_number` - A comma-separated list of years by their numbers (for example: 2022). Can be used instead of the
  `years` filter. Requires a country filter.
- `study_types` - A comma-separated list of study types that a country and year filter may resolve to (see
  [study types](#study-types)).
- `audiences` - A comma-separated list of audience IDs (for example: 1,2,3). Defaults to All Adults (`1`).
- `brands` - A comma-separated list of brand IDs (for example: 1,2,3).
- `brand_variations` - A comma-separated list of brand variation IDs (for example: 1,2,3).
- `brand_name` - A search on the brand name, using the search index.
- `categories` - A comma-separated list of category IDs (for example: 1,2,3).
- `companies` - A comma-separated list of company IDs (for example: 1,2,3).
- `sectors` - A comma-separated list of sector IDs (for example: 1,2,3).

Filters must be given per key, for example `filter[country_code]=GB`. A `400` error is returned if `filter` is given as
a single value.

## Additional Column Customizations

In addition to the standard column customizations we have two helper parameters. These are used as top-level query
parameters.

- `metric_keys` - A comma-separated list of metric keys (for example: `differentiation,relevance`) which can be used to
  automatically get all the available score types for these metrics only without having to get each field specifically.
- `metric_group_keys` - A comma-separated list of [metric group](../metrics/metric-groups.md) keys (for
  example: `pillars`) which can be used to automatically get all the available score types for the metrics in these
  groups, without having to set each metric specifically.

## Relationships & includes

When you don't use the `include` parameter, each row includes the `study`, `audience` (returned as `base`), `category`,
`brand` and `brand_variation` relationships by default. When you use the `include` parameter, only the relationships
you ask for are returned. See the [includes section](../customizing/includes) for more information on how this works.
The following relationships are available:

- `study` - The [study](../studies/studies.md) for the brandscape data row.
- `year` - The [year](../metadata/years.md) for the brandscape data row.
- `country` - The [country](../metadata/countries.md) for the brandscape data row.
- `audience` - The [audience](../audiences/audiences.md) for the brandscape data row. Returned in the `base` field.
- `brand` - The [brand](../brands/brands.md) for the brandscape data row.
- `brandVariation` - The brand variation the brand was measured under. Returned in the `brand_variation` field.
- `category` - The [category](../studies/categories.md) for the brandscape data row.
- `sector` - The [sector](../metadata/sectors.md) for the brandscape data row.
- `company` - The [company](../company-data/companies.md) for the brandscape data row.
