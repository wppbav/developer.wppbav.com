# Brand Measure Groups

## What are brand measure groups?

[Brand measures](brand-measures.md) are organized in groups. Each group collects measures that belong together.

## List all brand measure groups

To list all of the brand measure groups and browse them through the API, use the list endpoint:

```http request
GET /api/v2/brand-measure-groups
```

## Get a brand measure group

If you already have the system ID of a brand measure group, you can also get its details directly.

```http request
GET /api/v2/brand-measure-groups/123
```

Where `123` is the system ID of the brand measure group.

## Schema

### Full response schema

| Key           | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                         |
|---------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------------|
| `id`          | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                      |
| `name`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the group.                                              |
| `key`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The key of the group.                                               |
| `description` | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | A description of the group.                                         |
| `created_at`  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when this group was first created.                |
| `updated_at`  | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this group was last updated.                 |

### Relationship Response Schema

The API uses the slim relationship schema when the brand measure group is part of an include in another resource.

| Key           | Type    | Description                                                  |
|---------------|---------|--------------------------------------------------------------|
| `id`          | integer | The system ID for the group.                                 |
| `name`        | string  | The name of the group.                                       |
| `key`         | string  | The key of the group.                                        |
| `description` | string  | A description of the group.                                  |
| `created_at`  | string  | A datetime string when this group was first created.         |
| `updated_at`  | string  | A datetime string when this group was last updated.          |

## Additional Filters

For convenience, there are some additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `measures` - A comma-separated list of brand measure IDs. The API returns only the groups that contain these measures.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `measures` - The [brand measures](brand-measures.md) in the group, with their `id`, `label`, `type`, `created_at`
  and `updated_at`.
