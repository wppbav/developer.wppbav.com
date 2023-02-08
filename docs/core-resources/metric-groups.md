# Brand Metric Groups

You may use the Brands endpoint to retrieve details about one or more brand metric groups.

## What are brand metric groups?

When BAV studies a brand it does so on a variety of [metrics](./metrics.md). These metrics are divided into groups. Each group relates to a specific way to look at a brand, or to a BAV model.

## List all brand metric groups

To list all of the brand metric groups and browse them via the API, use the list endpoint:

```http request
GET /api/v2/brand-metric-groups
```

## Get a brand metric group

You may also directly retrieve a brand metric group's details if you already have its system ID.

```http request
GET /api/v2/brand-metric-groups/123
```

Where `123` is the system ID of the brand metric group.
 
## Schema

### Full response schema

| Key                   | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                          |
|-----------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------|
| `id`                  | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                       |
| `name`                | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the group.                       |
| `key`                 | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                    |
| `description`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A short description on what this group is about.     |
| `is_public`           | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                    |                                                                                                                    |
| `created_at`          | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand was first created. |
| `updated_at`          | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the brand metric group is used as part of an include in another resource.

| Key      | Type    | Description                    |
|----------|---------|--------------------------------|
| `id`     | integer | The system ID for the group.   |
| `name`   | string  | The primary name of the group. |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `metric` - The [metrics](./metrics.md) that -.
