# Sectors

You may use the Sectors endpoint to retrieve details about one or more sectors.

## What are sectors?

When doing a BAV study, some questions are asked that relate sectors to one or more categories. These are categories that
brands can belong to (one or multiple). These categories are combined to create broader sectors.

## List all sectors

To list all of the sectors and browse them via the API, use the list endpoint:

```http request
GET /api/v2/sectors
```

## Get a sector

You may also directly retrieve a sector's details if you already have its system ID.

```http request
GET /api/v2/sectors/123
```

Where `123` is the system ID of the sector.

## Schema

### Full response schema

| Key                             | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                           |
|---------------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------|
| `id`                            | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                        |    
| `is_active`                     | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                     |                                                      
| `name`                          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the sector.                               |         
| `excluded_for_most_influential` | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                     |
| `created_at`                    | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this sector was first created. |
| `updated_at`                    | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this sector was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the sector is used as part of an include in another resource.

| Key      | Type    | Description                     |
|----------|---------|---------------------------------|
| `id`     | integer | The system ID for the sector.   |
| `name`   | string  | The primary name of the sector. |


## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `categories` - The [categories](./categories.md) -.
