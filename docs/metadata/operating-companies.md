# Operating Companies

## What are operating companies?

The WPP organization consists of many operating companies. Usually, each user in the platform belongs to an operating
company. An operating company can belong to another operating company in a hierarchy.

In some cases, an operating company also has a brand. In that case, it has a brand relationship.

## List all operating companies

To list all of the operating companies and browse them through the API, use the list endpoint:

```http request
GET /api/v2/operating-companies
```

## Get an operating company

If you already have the system ID of an operating company, you can also get its details directly.

```http request
GET /api/v2/operating-companies/123
```

Where `123` is the system ID of the operating company.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                      |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                   |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the operating company.                               |
| `created_at` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when this operating company was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this operating company was last updated.  |

### Relationship Response Schema

The API uses the slim relationship schema when the operating company is part of an include in another resource.

| Key    | Type    | Description                              |
|--------|---------|------------------------------------------|
| `id`   | integer | The system ID for the operating company. |
| `name` | string  | The name of the operating company.       |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `parents` - Set to a comma-separated list of operating company IDs to only return the operating companies that
  have one of those operating companies as their parent.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `parent` - The parent operating company of this operating company, if it has one. The API uses the relationship
  schema above.
- `brand` - The [brand](../brands/brands.md) that the operating company has.
