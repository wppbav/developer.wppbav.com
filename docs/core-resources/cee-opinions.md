# Cee Opinions

You may use the Cee Opinions endpoint to retrieve details about one or more cee opinions.

## What are cee opinions?



## List all cee opinions

To list all of the cee opinions and browse them via the API, use the list endpoint:

```http request
GET /api/v2/cee-opinions
```

## Get a cee opinion

You may also directly retrieve a cee opinion's details if you already have its system ID.

```http request
GET /api/v2/cee-opinions/123
```

Where `123` is the system ID of the cee opinion.

## Schema

### Full response schema

| Key                   | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                |
|-----------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------|
| `id`                  | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                             |
| `created_at`          | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this cee opinion was first created. |
| `updated_at`          | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this cee opinion was last updated.  |


## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `study` - The [study](./companies.md) .
- `country` - The [country](./countries.md) .
- `year` - The [year](./years.md) .
- `base` - The [base](./bases.md) .
