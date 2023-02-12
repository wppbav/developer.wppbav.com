# Operating Companies

## What are operating companies?

The WPP organization consists of many operating companies. Each user in the platform generally belongs to an operating
company. Each operating company may belong to another operating company as a hierarchy.

In some cases an operating company may also have a brand, in which case it will have a brand relationship.

## List all operating companies

To list all of the operating companies and browse them via the API, use the list endpoint:

```http request
GET /api/v2/operating-companies
```

## Get a operating company

You may also directly retrieve a operating company's details if you already have its system ID.

```http request
GET /api/v2/operating-companies/123
```

Where `123` is the system ID of the operating company.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                      |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                   |
| `name`       | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The  name of the operating company.                              |                                                                                                                         |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this operating company was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this operating company was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the operating company is used as part of an include in another resource.

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `parents` - Set to a comma-separated list of operating company IDs to only return countries owned by those operating
  companies.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `parent` - The [company](companies.md) that owns another company.
- `brand` - The [brand](brands.md) that the operating company has.
