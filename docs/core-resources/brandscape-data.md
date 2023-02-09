# BrandScape Data

You may use the BrandScape Data endpoint to retrieve details about one or more brandscape data.

## What are brandscape data?

-

## List all brandscape data

To list all of the brandscape data and browse them via the API, use the list endpoint:

```http request
GET /api/v2/brandscape-data
```

## Get a brandscape data

You may also directly retrieve a brandscape data's details if you already have its system ID.

```http request
GET /api/v2/brandscape-data/123
```

Where `123` is the system ID of the brandscape data.

## Schema

### Full response schema

| Key                   | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                                                                             |
|-----------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                  | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                                                                          |
| `created_at`          | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand was first created.                                                                                                                                                    |
| `updated_at`          | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand was last updated.                                                                                                                                                     |

### Relationship Response Schema

The slim relationship schema is used when the brandscape data is used as part of an include in another resource.



## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `study` - The [study](./studies.md) -.
- `year` - The [year](./years.md) -.
- `country` - The [country](./countries.md) -.
- `base` - The [base](./bases.md) -.
- `brand` - The [brand](./brands.md) -.
- `category` - The [category](./categories.md) -.
