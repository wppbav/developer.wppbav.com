# Years

## What are years?

We use a years resource to tie together all of the data that we have for a given year and to make it easily queryable.

## List all years

To list all of the years and browse them via the API, use the list endpoint:

```http request
GET /api/v2/years
```

## Get a year

You may also directly retrieve a year's details if you already have its system ID.

```http request
GET /api/v2/years/123
```

Where `123` is the system ID of the year.

## Schema

### Full response schema

| Key                 | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                           |
|---------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------|
| `id`                | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                        |
| `year`              | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The year (name).                                      |
| `has_ogilvy_impact` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | If the year should have Ogilvy Impact data available. |                                                                                                                        |
| `created_at`        | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this year was first created.   |
| `updated_at`        | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this year was last updated.    |

### Relationship Response Schema

The slim relationship schema is used when the year is used as part of an include in another resource.

| Key    | Type    | Description                 |
|--------|---------|-----------------------------|
| `id`   | integer | The system ID for the year. |
| `year` | string  | The year (name).            |

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.