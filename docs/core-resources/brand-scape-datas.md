# Brand Scape Datas

You may use the Brand Scape Datas endpoint to retrieve details about one or more brand scape datas.

## What are brand scape datas?

-

## List all brand scape datas

To list all of the brand scape datas and browse them via the API, use the list endpoint:

```http request
GET /api/v2/brand-scape-datas
```

## Get a brand scape data

You may also directly retrieve a brand scape data's details if you already have its system ID.

```http request
GET /api/v2/brand-scape-datas/123
```

Where `123` is the system ID of the brand scape data.

## Schema

### Full response schema

| Key                   | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                                                                             |
|-----------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                  | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                                                                          |
| `created_at`          | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand was first created.                                                                                                                                                    |
| `updated_at`          | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand was last updated.                                                                                                                                                     |

### Relationship Response Schema

The slim relationship schema is used when the brand scape data is used as part of an include in another resource.



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
