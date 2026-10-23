# Audience Origin Metric Groups

## What are Audience Origin metric groups?

[Audience Origin metrics](metrics.md) are organized in metric groups, such as a group for media usage or for
attitudes. Groups nest one level deep: a top-level group can have child groups, and metrics belong to a group.

The `key` of a group can be used in the [query endpoint](query.md) to get the data for every metric in the group.

## List all Audience Origin metric groups

To list all of the metric groups and browse them via the API, use the list endpoint:

```http request
GET /api/v2/audience-origin/metric-groups
```

## Get an Audience Origin metric group

You may also directly retrieve a metric group's details if you already have its system ID.

```http request
GET /api/v2/audience-origin/metric-groups/123
```

Where `123` is the system ID of the metric group.

## Schema

### Full response schema

| Key           | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                            |
|---------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------------------------------|
| `id`          | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                         |
| `name`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the metric group.                                                                          |
| `key`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The key of the metric group. This is the key the [query endpoint](query.md) accepts in `metric_group_keys`. |
| `description` | string  |                    :x:                    |        :x:         | :white_check_mark: | A description of the metric group.                                                                     |
| `is_active`   | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the metric group is active.                                                                    |
| `created_at`  | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this metric group was first created.                                            |
| `updated_at`  | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this metric group was last updated.                                             |

### Relationship Response Schema

The slim relationship schema is used when the metric group is used as part of an include in another resource.

| Key         | Type    | Description                                                                 |
|-------------|---------|-----------------------------------------------------------------------------|
| `id`        | integer | The system ID for the metric group.                                         |
| `name`      | string  | The name of the metric group.                                               |
| `key`       | string  | The key of the metric group.                                                |
| `is_parent` | boolean | Whether this is a top-level metric group.                                   |
| `parent`    | object  | The parent metric group, when it has been included.                         |

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `only_parents` - Set to `1` to only return top-level groups.
- `only_children` - Set to `1` to only return groups nested under a parent.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available on the list endpoint:

- `metrics` - The [metrics](metrics.md) in the metric group.
- `parent` - The parent metric group, if this group is nested.
- `children` - The metric groups nested under this one.
