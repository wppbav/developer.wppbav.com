# Audience Origin Metrics

## What are Audience Origin metrics?

Audience Origin metrics are the questions and variables in the [Audience Origin](index.md) dataset. Each metric
belongs to a [metric group](metric-groups.md). Media metrics can also measure a [touchpoint](touchpoints.md) and
a [frequency](frequencies.md).

Use the `key` of a metric to request its data in the [query endpoint](query.md).

Not every metric is available in every study. Use the `for_studies` filter or the `studies` include to see where a
metric is available.

## List all Audience Origin metrics

To list all of the Audience Origin metrics and browse them through the API, use the list endpoint:

```http request
GET /api/v2/audience-origin/metrics
```

## Get an Audience Origin metric

If you already have the system ID of a metric, you can also get its details directly.

```http request
GET /api/v2/audience-origin/metrics/123
```

Where `123` is the system ID of the metric.

## Schema

### Full response schema

| Key           | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                         |
|---------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------------------------------------------------------------|
| `id`          | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                      |
| `name`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the metric.                                                                                             |
| `key`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The key of the metric. This is the key the [query endpoint](query.md) accepts in `metric_keys`.                     |
| `variable`    | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The Audience Origin questionnaire variable.                                                                         |
| `is_active`   | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is active.                                                                                       |
| `is_public`   | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is available to all users rather than restricted.                                                |
| `type`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The type of the metric, such as `dictionary`, `boolean`, `integer` or `decimal`.                                    |
| `is_ascribed` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is ascribed: created with data science after fieldwork rather than asked in the questionnaire.   |
| `is_core`     | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is part of the core Audience Origin questionnaire.                                               |
| `is_plus`     | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is in the Audience Origin Plus set.                                                              |
| `is_tools`    | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric is in the Audience Origin tools set.                                                             |
| `created_at`  | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this metric was first created.                                                               |
| `updated_at`  | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this metric was last updated.                                                                |

### Relationship Response Schema

The API uses the slim relationship schema when the metric is part of an include in another resource.

| Key         | Type    | Description                                                                         |
|-------------|---------|-------------------------------------------------------------------------------------|
| `id`        | integer | The system ID for the metric.                                                       |
| `name`      | string  | The name of the metric.                                                             |
| `key`       | string  | The key of the metric.                                                              |
| `variable`  | string  | The Audience Origin questionnaire variable.                                         |
| `is_active` | boolean | Whether the metric is active.                                                       |
| `is_public` | boolean | Whether the metric is available to all users rather than restricted.                |
| `type`      | string  | The type of the metric, such as `dictionary`, `boolean` or `integer`.               |

### Answer options

The `options` include returns the answer options for the metric. Option sets can differ between studies, so the same
value can mean different things in two studies.

| Key        | Type    | Description                                                                          |
|------------|---------|--------------------------------------------------------------------------------------|
| `id`       | integer | The system ID for the option.                                                        |
| `value`    | mixed   | The stored value. This is what appears in the data.                                  |
| `label`    | string  | What the value means, for example "Strongly agree".                                  |
| `study_id` | integer | The ID of the study this option applies to. Null if it applies to all studies.       |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `touchpoint_id` - The ID of a [touchpoint](touchpoints.md) to filter by.
- `frequency_id` - The ID of a [frequency](frequencies.md) to filter by.
- `for_studies` - A comma-separated list of study IDs. The filter returns only metrics that are available in these
  studies.
- `has_touchpoint` - Set to `1` to return only metrics with a touchpoint.
- `has_frequency` - Set to `1` to return only metrics with a frequency.
- `has_studies` - Set to `1` to return only metrics that are available in at least one study.

## Relationships & includes

By default, the response does not include relationships. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `group` - The [metric group](metric-groups.md) that the metric belongs to.
- `group.parent` - The parent of the metric group.
- `touchpoint` - The [touchpoint](touchpoints.md) the metric measures, if any.
- `frequency` - The [frequency](frequencies.md) the metric measures, if any.
- `studies` - The [studies](../studies/studies.md) the metric is available in.
- `options` - The answer options for the metric.
