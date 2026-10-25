# Audience Origin Frequencies

## What are frequencies?

Some [Audience Origin metrics](metrics.md) measure a frequency, that is, how often something occurs. A metric that
measures a frequency has a link to it. Thus you can find all the metrics for a given frequency. Use the `metrics`
include here or the `frequency_id` filter on the metrics endpoint.

## List all frequencies

To list all of the frequencies and browse them through the API, use the list endpoint:

```http request
GET /api/v2/audience-origin/frequencies
```

## Get a frequency

If you already have the system ID of a frequency, you can also get its details directly.

```http request
GET /api/v2/audience-origin/frequencies/123
```

Where `123` is the system ID of the frequency.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                               |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                            |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the frequency.                                |
| `key`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The key of the frequency.                                 |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this frequency was first created.  |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this frequency was last updated.   |

### Relationship Response Schema

The API uses the slim relationship schema when the frequency is part of an include in another resource.

| Key    | Type    | Description                       |
|--------|---------|-----------------------------------|
| `id`   | integer | The system ID for the frequency.  |
| `name` | string  | The name of the frequency.        |
| `key`  | string  | The key of the frequency.         |

## Additional Filters

For convenience, there is a set of additional filters. These filters are not in
the [default filters](../customizing/filters.md) and are not columns. The additional filters are:

- `has_metrics` - Set to `1` to return only frequencies that are used by at least one metric.

## Relationships & includes

By default, the response does not include relationships. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `metrics` - The [metrics](metrics.md) that measure this frequency.
