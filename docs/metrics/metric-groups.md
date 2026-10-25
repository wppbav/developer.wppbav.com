# Brand Metric Groups

## What are brand metric groups?

When BAV studies a brand, it uses many different [metrics](metrics.md). BAV divides these metrics into groups. Each
group relates to a specific way to look at a brand, or to a BAV model.

## List all brand metric groups

To list all of the brand metric groups and browse them through the API, use the list endpoint:

```http request
GET /api/v2/brand-metric-groups
```

## Get a brand metric group

If you already have the system ID of a brand metric group, you can also get its details directly.

```http request
GET /api/v2/brand-metric-groups/123
```

Where `123` is the system ID of the brand metric group.

## Schema

### Full response schema

| Key           | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                            |
|---------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------|
| `id`          | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                         |
| `name`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the group.                         |
| `key`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A machine-readable name for the group. Used by the `metric_group_keys` parameter on [brandscape data](../brand-data/brandscape-data.md). |
| `description` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A short description of what this group is about.       |
| `is_public`   | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the group is publicly available for all users. |
| `created_at`  | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this group was first created.   |
| `updated_at`  | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this group was last updated.    |

### Relationship Response Schema

The API uses the slim relationship schema when the brand metric group is part of an include in another resource.

| Key    | Type    | Description                    |
|--------|---------|--------------------------------|
| `id`   | integer | The system ID for the group.   |
| `name` | string  | The primary name of the group. |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `public` - Set to `1` to only return public groups.
- `private` - Set to `1` to only return private groups.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `metrics` - The [metrics](metrics.md) that are part of this group.
