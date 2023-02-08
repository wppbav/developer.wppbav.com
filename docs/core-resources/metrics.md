# Brand Metrics

You may use the Brand Metrics endpoint to retrieve details about one or more brand metrics.

## What are brand metrics?

When BAV studies a brand it does so on a variety of metrics. These metrics are divided into [groups](./metric-groups.md). Each group relates
to a specific way to look at a brand, or to a BAV model.

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

Where `123` is the system ID of the brand.

## Schema

### Full response schema

| Key                         | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                          |
|-----------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------|
| `id`                        | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                       |
| `name`                      | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the metric.                      |
| `description`               | string  |                    :x:                    |        :x:         | :white_check_mark: | A short description on what this metric is about.    |
| `is_active`                 | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If the metric is active or deprecated.               |
| `is_public`                 | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                    |
| `is_core`                   | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                    |
| `is_legacy`                 | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                    |
| `has_construct_score`       | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                    |
| `has_percentile_rank_score` | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                    |
| `has_percentage_score`      | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                    |
| `has_value_score`           | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                    |
| `has_index_score`           | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                    |
| `created_at`                | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand was first created. |
| `updated_at`                | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the brand is used as part of an include in another resource.



## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The [group](./metric-groups.md) that -.
