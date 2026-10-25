---
sidebar_label: Metrics
---

# Best Countries Metrics

## What are best countries metrics?

When BAV studies a country in Best Countries, it uses different metrics. These metrics are divided
into [groups](metric-groups.md) to make them easier to browse.

This endpoint requires the **Best Countries Data** (`bav:best-countries-data`) scope.

## List all best countries metrics

To list all of the best countries metrics and browse them through the API, use the list endpoint:

```http request
GET /api/v2/best-countries-metrics
```

## Get a best countries metric

If you already have the system ID of a best countries metric, you can also get its details directly.

```http request
GET /api/v2/best-countries-metrics/123
```

Where `123` is the system ID of the best countries metric.

## Schema

### Full response schema

| Key                    | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                         |
|------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------------------------------------------------|
| `id`                   | integer |                    :x:                    |        :x:         |        :x:         | The system ID.                                                                                      |
| `is_active`            | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If true, the metric is active.                                                                      |
| `name`                 | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the metric.                                                                             |
| `key`                  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The machine-readable key of the metric. The Best Countries data endpoints name their fields after it. |
| `description`          | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | A description of what the metric measures.                                                          |
| `group`                | object  |    :white_check_mark: (as `group_id`)     | :white_check_mark: | :white_check_mark: | The [metric group](metric-groups.md) that the metric belongs to.                                    |
| `type`                 | object  |            :white_check_mark:             |        :x:         | :white_check_mark: | The metric type, as an `id` (for example `boolean` or `seven_scalar`) and a readable `name`.        |
| `is_respondent_metric` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If true, the metric is a respondent-level metric.                                                   |
| `is_city_metric`       | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If true, the metric applies to cities.                                                              |
| `is_country_metric`    | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If true, the metric applies to countries.                                                           |
| `created_at`           | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | A datetime string when this metric was first created.                                               |
| `updated_at`           | string  | ([updated since](../customizing/filters)) |        :x:         | :white_check_mark: | A datetime string when this metric was last updated.                                                |

You can sort on `group_id`, `group.name` and `group.key`. The `type` filter takes the type `id`, for example
`filter[type]=boolean`.

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `factors` - The [factors](factors.md) that the metric contributes to.
