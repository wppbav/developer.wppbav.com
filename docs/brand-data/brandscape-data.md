# Brandscape Data

## What is brandscape data?

A fundamental core concept of BAV is the "Brandscape". The brandscape is the set of brands in a given country for a
given year. The brandscape data is the collection of metrics and their respective values for the brandscape. In
practical terms, the brandscape data is the "BAV data".

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

The response is [paginated](../pagination.md). There is no endpoint that gets a single brandscape data row.

### Scoping the request

Scope each request to one or more studies. You can do this in one of two ways:

- **By study:** Use the `studies` filter with one or more study IDs.
- **By market and year:** Use a country filter (`countries` or `country_code`) together with a year filter (`years`
  or `year_number`).

If you filter by a country without a year, or by a year without a country, the API returns a `400` error.

If you do not give a study, country or year filter, the request uses the most recently released syndicated BAV
study from the last three years. We recommend that you always scope your requests explicitly.

If you do not give an `audiences` filter, the API returns the data for the All Adults audience (ID `1`).

### Study types

By default, if you filter by market and year, the request resolves only to syndicated BAV studies. To include other
types of studies, set the `study_types` filter to a comma-separated list of the study types you want. The available
study types are:

- `syndicated` - The syndicated BAV study (default).
- `snap` - SnapBAV studies.
- `fused` - Fused studies.
- `custom` - Custom studies.

The API ignores unknown values. The `study_types` filter has no effect when you use the `studies` filter.

Studies of other types can exist for the markets and years that you requested. If the study type filter excludes these
studies, `meta.available_alternatives` lists them. Each entry gives information about the study and the `study_types`
value that includes it:

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

This endpoint never returns data from BAV AURA studies.

### Data generation

The system generates brandscape data per study and audience the first time that you request it. If the generation of
one or more of the requested study and audience combinations is not complete, the response has a `202 Accepted` status
code. The response still contains the rows that are already available, and `meta.generation` lists the combinations
that are pending. To get the full data, retry the request after a short time.

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

The brandscape data schema is large (≈ 350 fields). For that reason, this page does not show the full schema. The schema has two parts:

- Metadata (for example: study, category, brand, audience information)
- Metric data

Each metric data field name is the `key` of the [Brand Metrics](../metrics/metrics.md) resource and a suffix for the
score type. Not all metrics have all score types. The metric resource shows the available score types, and its
`brandscape_data_columns` field lists the exact field names. The suffixes are:

- `_rank` for percentile rank scores.
- `_pct` for percentage scores.
- `_c` for construct scores.
- `_brandscape_index` for index scores against the entire brandscape.
- `_category_index` for index scores against the brand's category.
- No suffix for value scores, such as base sizes.

By default, the response contains every metric that you have access to. To limit the metrics in the response, use the
`metric_keys` or `metric_group_keys` parameters (see below).

Each row also has the following fields, together with the metric data:

| Key            | Type    | Description                                                                                                                                                                                                                                                         |
|----------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`           | integer | The system ID of the brandscape data row.                                                                                                                                                                                                                           |
| `study_type`   | string  | The type of study that the row came from: `syndicated`, `snap`, `fused` or `custom`, or `null` for other study types. The API returns it by default, and when you include the `study` relationship.                                                                 |
| `is_duplicate` | boolean | `true` for a brand's second and later categories in the same study. All scores except the usage, preference and recommendation scores are category-agnostic. Thus, before you do an aggregate analysis (average, standard deviation etc.) on these scores, remove the duplicates.                    |
| `brand_name`   | string  | The local brand name that the survey asked about. This can be different from the global brand name in the brand relationship. When this field is available, use it as the brand name together with the data.                                                       |
| `created_at`   | string  | A datetime string when this row was first created.                                                                                                                                                                                                                  |
| `updated_at`   | string  | A datetime string when this row was last updated.                                                                                                                                                                                                                   |

All metric fields are sortable, filterable and configurable. You can also sort by `id`, `brand_name`,
`study_id`, `category_id`, `year_id`, `country_id`, `base_id`, `brand_variation_id`, `is_duplicate`, `created_at` and
`updated_at`.

For rollup studies (studies that contain several other studies), metrics with a per-study breakdown also return a
`{metric}_rollup` field. This is an object with the value for each underlying study, keyed by study ID, or `null` when
the row has no breakdown.

## Additional Filters

Together with the standard filters and the metric fields, you can use a set of helper filters. These filters make it
easier to query the data, because you need fewer lookups in our database. The helper filters are:

- `studies` - A comma-separated list of study IDs (for example: 1,2,3).
- `countries` - A comma-separated list of country IDs (for example: 1,2,3). Requires a year filter.
- `country_code` - A comma-separated list of ISO two letter country codes (for example: GB). You can use it instead of
  the `countries` filter. Requires a year filter.
- `years` - A comma-separated list of year IDs (for example: 1,2,3). Requires a country filter.
- `year_number` - A comma-separated list of years by their numbers (for example: 2022). You can use it instead of
  the `years` filter. Requires a country filter.
- `study_types` - A comma-separated list of study types that a country and year filter can resolve to (see
  [study types](#study-types)).
- `audiences` - A comma-separated list of audience IDs (for example: 1,2,3). Defaults to All Adults (`1`).
- `brands` - A comma-separated list of brand IDs (for example: 1,2,3).
- `brand_variations` - A comma-separated list of brand variation IDs (for example: 1,2,3).
- `brand_name` - A search on the brand name. It uses the search index.
- `categories` - A comma-separated list of category IDs (for example: 1,2,3).
- `companies` - A comma-separated list of company IDs (for example: 1,2,3).
- `sectors` - A comma-separated list of sector IDs (for example: 1,2,3).

Give each filter as a separate key, for example `filter[country_code]=GB`. If you give `filter` as a single value, the
API returns a `400` error.

## Additional Column Customizations

Together with the standard column customizations, you can use two helper parameters. Use them as top-level query
parameters.

- `metric_keys` - A comma-separated list of metric keys (for example: `differentiation,relevance`). Use it to
  automatically get all the available score types for only these metrics. You do not need to ask for each field.
- `metric_group_keys` - A comma-separated list of [metric group](../metrics/metric-groups.md) keys (for
  example: `pillars`). Use it to automatically get all the available score types for the metrics in these groups. You
  do not need to set each metric.

## Relationships & includes

If you do not use the `include` parameter, each row includes the `study`, `audience` (returned as `base`), `category`,
`brand` and `brand_variation` relationships by default. If you use the `include` parameter, the API returns only the
relationships that you ask for. For more information, see the [includes section](../customizing/includes).
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
