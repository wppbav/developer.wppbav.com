# Audience Groups

## What are audience groups?

[Audiences](audiences.md) are cuts of respondents that can be used ta analyze datasets. Audience Groups are a way to
organize audiences into groups. For example, there are several audiences for different age cuts which are all grouped
under the Age group.

## List all audience groups

To list all of the audience groups and browse them via the API, use the list endpoint:

```http request
GET /api/v2/audience-groups
```

## Get a audience group

You may also directly retrieve a audience group's details if you already have its system ID.

```http request
GET /api/v2/audience-groups/123
```

Where `123` is the system ID of the audience group.

## Schema

### Full response schema

| Key           | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                   |
|---------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------|
| `id`          | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                |
| `name`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the audience group.                               |
| `description` | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | An optional description about what the group is.              |
| `created_at`  | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this audience group was first created. |
| `updated_at`  | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this audience group was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the audience group is used as part of an include in another resource.

| Key    | Type    | Description                             |
|--------|---------|-----------------------------------------|
| `id`   | integer | The system ID for the audience group.   |
| `name` | string  | The primary name of the audience group. |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `audiences` - The [audiences](audiences.md) that belong to this audience group.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.