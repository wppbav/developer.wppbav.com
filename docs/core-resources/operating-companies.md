# Operating Companies

You may use the Operating Companies endpoint to retrieve details about one or more operating companies.

## What are operating companies?

The WPP organization consists of many operating companies. Via The Fount API you can get a basic list with names and
logos for each.

## List all operating companies

To list all of the operating companies and browse them via the API, use the list endpoint:

```http request
GET /api/v2/operating-companies
```

## Get a brand

You may also directly retrieve a brand's details if you already have its system ID.

```http request
GET /api/v2/operating-companies/123
```

Where `123` is the system ID of the brand.

## Schema

### Full response schema

| Key                   | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                          |
|-----------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------|
| `id`                  | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                       |
| `name`                | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the operating company.           |                                                                                                                         |
| `created_at`          | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand was first created. |
| `updated_at`          | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the brand is used as part of an include in another resource.


## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `parent` - The [company](./companies.md) that -.
- `brand` - The [brand](./brands.md) that the operating company belongs to.
