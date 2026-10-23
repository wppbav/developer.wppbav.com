# BAV Question Groups

## What are BAV question groups?

[BAV questions](bav-questions.md) are organized in groups, such as demographics. The groups can be used to create a
better selection experience in an interface, for example when building an [audience](../audiences/audiences.md).

## List all BAV question groups

To list all of the BAV question groups and browse them via the API, use the list endpoint:

```http request
GET /api/v2/bav-question-groups
```

## Get a BAV question group

You may also directly retrieve a BAV question group's details if you already have its system ID.

```http request
GET /api/v2/bav-question-groups/123
```

Where `123` is the system ID of the BAV question group.

## Schema

### Full response schema

| Key           | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                         |
|---------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------------|
| `id`          | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                      |
| `name`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the group, for example "Demographics".                  |
| `key`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The key of the group, for example `demographics`.                   |
| `description` | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | A description of the group.                                         |
| `created_at`  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when this group was first created.                |
| `updated_at`  | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this group was last updated.                 |

### Relationship Response Schema

The slim relationship schema is used when the BAV question group is used as part of an include in another resource.

| Key           | Type    | Description                                                    |
|---------------|---------|----------------------------------------------------------------|
| `id`          | integer | The system ID for the group.                                   |
| `name`        | string  | The name of the group.                                         |
| `key`         | string  | The key of the group.                                          |
| `description` | string  | A description of the group.                                    |
| `parent_id`   | integer | The ID of the parent group, or null for a top-level group.     |
| `created_at`  | string  | A datetime string when this group was first created.           |
| `updated_at`  | string  | A datetime string when this group was last updated.            |

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `questions` - A comma-separated list of BAV question IDs. Only groups containing these questions are returned.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `questions` - The [BAV questions](bav-questions.md) in the group, with their `id`, `label`, `key`, `type`,
  `created_at` and `updated_at`.
