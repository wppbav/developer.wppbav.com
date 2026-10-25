# Audience Origin Touchpoints

## What are touchpoints?

Some [Audience Origin metrics](metrics.md) measure a touchpoint. A metric that measures a touchpoint has a link to it.
Thus you can find all the metrics for a given touchpoint. Use the `metrics` include here or the `touchpoint_id` filter
on the metrics endpoint.

## List all touchpoints

To list all of the touchpoints and browse them through the API, use the list endpoint:

```http request
GET /api/v2/audience-origin/touchpoints
```

## Get a touchpoint

If you already have the system ID of a touchpoint, you can also get its details directly.

```http request
GET /api/v2/audience-origin/touchpoints/123
```

Where `123` is the system ID of the touchpoint.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                             |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the touchpoint.                                |
| `key`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The key of the touchpoint.                                 |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this touchpoint was first created.  |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this touchpoint was last updated.   |

### Relationship Response Schema

The API uses the slim relationship schema when the touchpoint is part of an include in another resource.

| Key    | Type    | Description                        |
|--------|---------|------------------------------------|
| `id`   | integer | The system ID for the touchpoint.  |
| `name` | string  | The name of the touchpoint.        |
| `key`  | string  | The key of the touchpoint.         |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `has_metrics` - Set to `1` to return only touchpoints that are used by at least one metric.

## Relationships & includes

By default, the response does not include relationships. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `metrics` - The [metrics](metrics.md) that measure this touchpoint.
