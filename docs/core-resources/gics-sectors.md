# Gics Sectors

You may use the Gics Sectors endpoint to retrieve details about one or more gics sectors.

## What are gics sectors?


## List all gics sectors

To list all of the gics sectors and browse them via the API, use the list endpoint:

```http request
GET /api/v2/gics-sectors
```

## Get a gics sector

You may also directly retrieve a gics sector's details if you already have its system ID.

```http request
GET /api/v2/gics-sectors/123
```

Where `123` is the system ID of the gics sector.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                             |
| `code`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                          |
| `name`       | float   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the gics sector.                       |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this gics sector was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this gics sector was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the gics sector is used as part of an include in another resource.

| Key      | Type    | Description                                                          |
|----------|---------|----------------------------------------------------------------------|
| `id`     | integer | The system ID for the gics sector.                                   |
| `name`   | string  | The primary name of the gics sector.                                 |

