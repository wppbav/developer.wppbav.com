# Brand Metrics

## What are brand metrics?

When BAV studies a brand it does so on a variety of metrics. These metrics are divided
into [groups](metric-groups.md). Each group relates to a specific way to look at a brand, or to a BAV model.

## List all brand metrics

To list all of the brand metrics and browse them via the API, use the list endpoint:

```http request
GET /api/v2/brand-metrics
```

## Get a brand

You may also directly retrieve a brand's details if you already have its system ID.

```http request
GET /api/v2/brand-metrics/123
```

Where `123` is the system ID of the brand metric.

## Schema

### Full response schema

| Key                         | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                      |
|-----------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|----------------------------------------------------------------------------------|
| `id`                        | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                   |
| `name`                      | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the metric.                                                  |
| `description`               | string  |                    :x:                    |        :x:         | :white_check_mark: | A short description on what this metric is about.                                |
| `is_active`                 | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If the metric is active or deprecated.                                           |
| `is_public`                 | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is publicly available for all users.                          |
| `is_core`                   | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is part of the core set of BAV metrics.                       |
| `is_legacy`                 | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric has been discontinued and will not available in new studies.  |
| `has_construct_score`       | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | Whether the metric has a construct score available.                              |
| `has_percentile_rank_score` | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | Whether the metric has a percentile rank score available.                        |
| `has_percentage_score`      | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | Whether the metric has a percentage score available.                             |
| `has_value_score`           | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | Whether the metric has a value score available.                                  |
| `has_index_score`           | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | Whether the metric has the two index scores available (brandscape and category). |
| `created_at`                | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand metric was first created.                      |
| `updated_at`                | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand metric was last updated.                       |

### Relationship Response Schema

The slim relationship schema is used when the brand is used as part of an include in another resource.

| Key         | Type    | Description                            |
|-------------|---------|----------------------------------------|
| `id`        | integer | The system ID for the metric.          |
| `name`      | string  | The primary name of the metric.        |
| `is_active` | boolean | If the metric is active or deprecated. |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The [group](metric-groups.md) that the metric belongs to.
