# Brand Measures

## What are brand measures?

Brand measures are the brand-level measures in BAV studies. Most are asked about each brand directly in the survey,
while some are calculated afterwards. Each measure belongs to a [brand measure group](brand-measure-groups.md).

Brand measures differ from [brand metrics](../metrics/metrics.md). Brand metrics are the calculated scores in
the [brandscape data](../brand-data/brandscape-data.md), while brand measures describe what is asked about a brand and
how its answers are stored.

A measure is not asked in every study. Use the [studies endpoint](#studies-a-brand-measure-was-asked-in) to see where a
measure has data, or the [study catalog](study-catalog.md) to see which measures a specific study contains.

## List all brand measures

To list all of the brand measures and browse them via the API, use the list endpoint:

```http request
GET /api/v2/brand-measures
```

## Get a brand measure

You may also directly retrieve a brand measure's details if you already have its system ID.

```http request
GET /api/v2/brand-measures/123
```

Where `123` is the system ID of the brand measure.

## Schema

### Full response schema

| Key                    | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                      |
|------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------------------------|
| `id`                   | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                   |
| `label`                | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The label of the measure.                                                                        |
| `key`                  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The key of the measure.                                                                          |
| `type`                 | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The type of the measure, such as `boolean`, `seven_scalar` or `dictionary`.                      |
| `is_category_agnostic` | boolean |                    :x:                    |        :x:         | :white_check_mark: | Whether the measure is independent of the category the brand is measured in.                     |
| `crt_id`               | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The CRT ID of the measure.                                                                       |
| `in_survey`            | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the measure is asked directly in the survey rather than calculated afterwards.          |
| `created_at`           | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when this measure was first created.                                           |
| `updated_at`           | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this measure was last updated.                                            |

### Relationship Response Schema

The slim relationship schema is used when the brand measure is used as part of another resource.

| Key     | Type    | Description                                                         |
|---------|---------|---------------------------------------------------------------------|
| `id`    | integer | The system ID for the brand measure.                                |
| `label` | string  | The label of the brand measure.                                     |
| `key`   | string  | The key of the brand measure, which the data columns are named after. |

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The [brand measure group](brand-measure-groups.md) that the measure belongs to.
- `studies` - The [studies](../studies/studies.md) that the measure has been asked in.
- `options` - The answer options for the measure across all studies, each with an `id`, `value`, `label` and
  `study_id`. Use the [study catalog](study-catalog.md#brand-measures-in-a-study) for the options used in one study.

## Studies a brand measure was asked in

To list every study that asked a brand measure, use the studies endpoint:

```http request
GET /api/v2/brand-measures/123/studies
```

Where `123` is the system ID of the brand measure.

Only studies you have access to are listed, so the same measure can return a different set of studies for a different
API key. A fused study borrows the measures of the studies it was fused from, so it is only listed here for the few
computed measures that are stored on the fused study itself.

The results are sorted by `study_id` by default. You may also sort by `id`, `created_at` and `updated_at`.

| Key                      | Type   | Description                                                                                                                                  |
|--------------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `study`                  | object | The [study](../studies/studies.md) the measure was asked in, with its `id`, `name`, `period`, `type`, `study_type`, `study_type_label`, `country` and `year`. |
| `measure`                | object | The brand measure, using the relationship schema above.                                                                                      |
| `scaling_stretch_factor` | float  | The factor this study's values for the measure are multiplied by before they are compared with another study's. Null when no rescaling is applied. |
| `scaling_shift_factor`   | float  | The amount this study's values for the measure are shifted by before they are compared with another study's. Null when no rescaling is applied.  |
| `created_at`             | string | A datetime string when this record was first created.                                                                                         |
| `updated_at`             | string | A datetime string when this record was last updated.                                                                                          |

The following filters are available:

- `studies` - A comma-separated list of study IDs to filter by.
- `updated_since` - Only return records changed on or after this date. See [filters](../customizing/filters.md).
