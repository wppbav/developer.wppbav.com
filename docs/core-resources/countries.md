# Countries

## What are countries?

Many of the BAV resources rely on segmenting data by countries. This resource contains a list of all the countries in
the world, with additional ISO codes and metadata for system use.

We suggest that you use the term `Market` instead of country when showing this in an interface.

## List all countries

To list all of the countries and browse them via the API, use the list endpoint:

```http request
GET /api/v2/countries
```

## Get a country

You may also directly retrieve a country's details if you already have its system ID.

```http request
GET /api/v2/countries/123
```

Where `123` is the system ID of the country.

## Schema

### Full response schema

| Key            | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                 |
|----------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------------|
| `id`           | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID for the country.                              |
| `is_active`    | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the market should be used/shown or not.             |
| `name`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the country in English.                         |
| `native_name`  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the country in its native language.             |
| `code`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The two-letter code (ISO 3166-1 alpha-2) for the country.   |
| `code_alpha3`  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The three-letter code (ISO 3166-1 alpha-3) for the country. |
| `code_numeric` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The numeric code (ISO 3166-1 numeric) for the country.      |
| `capital`      | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the country's capital.                          |
| `area`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The size of the country.                                    |
| `latitude`     | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                           |
| `longitude`    | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                           |
| `flag`         | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL to the country's flag as an image.                  |
| `created_at`   | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when this country was first created.      |
| `updated_at`   | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this country was last updated.       |

### Relationship Response Schema

The slim relationship schema is used when the country is used as part of an include in another resource.

| Key            | Type    | Description                                                                              |
|----------------|---------|------------------------------------------------------------------------------------------|
| `id`           | integer | The system ID for the country.                                                           |
| `name`         | string  | The name of the country in English.                                                      |
| `region`       | object  | An object with the region that this country belongs to [sector relationship](sectors.md) |
| `code`         | object  | The two-letter code (ISO 3166-1 alpha-2) for the country.                                |
| `code_alpha3`  | object  | The three-letter code (ISO 3166-1 alpha-3) for the country.                              |
| `code_numeric` | object  | The numeric code (ISO 3166-1 numeric) for the country.                                   |

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `active` - Set to `1` to only return active countries.
- `regions` - Set to a comma-separated list of region IDs to only return countries in those regions.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `region` - The [region](regions.md) that -.