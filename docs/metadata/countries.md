# Countries

## What are countries?

Many of the BAV resources segment data by countries. This resource contains a list of all the countries in
the world, with additional ISO codes and metadata for system use.

We recommend that you use the term `Market` instead of country when you show this in an interface.

## List all countries

To list all of the countries and browse them through the API, use the list endpoint:

```http request
GET /api/v2/countries
```

## Get a country

If you already have the system ID of a country, you can also get its details directly.

```http request
GET /api/v2/countries/123
```

Where `123` is the system ID of the country.

## Schema

### Full response schema

| Key            | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                         |
|----------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------------------------------------|
| `id`           | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID for the country. Always returned.                                     |
| `is_active`    | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether you can use and show the market.                                            |
| `name`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the country in English.                                                 |
| `native_name`  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the country in its native language.                                     |
| `code`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The two-letter code (ISO 3166-1 alpha-2) for the country.                           |
| `code_alpha3`  | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The three-letter code (ISO 3166-1 alpha-3) for the country.                         |
| `code_numeric` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The numeric code (ISO 3166-1 numeric) for the country.                              |
| `region`       | object  |       ([regions](#additional-filters))    |        :x:         |        :x:         | The [region](regions.md) that the country belongs to. Always returned.              |
| `capital`      | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the country's capital.                                                  |
| `area`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The size of the country in square kilometers.                                       |
| `latitude`     | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The latitude of the country's center.                                               |
| `longitude`    | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The longitude of the country's center.                                              |
| `created_at`   | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this country was first created.                              |
| `updated_at`   | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this country was last updated.                               |

### Relationship Response Schema

The API uses the slim relationship schema when the country is part of an include in another resource.

| Key            | Type    | Description                                                                              |
|----------------|---------|------------------------------------------------------------------------------------------|
| `id`           | integer | The system ID for the country.                                                           |
| `name`         | string  | The name of the country in English.                                                      |
| `region`       | string  | The name of the [region](regions.md) that this country belongs to.                       |
| `code`         | string  | The two-letter code (ISO 3166-1 alpha-2) for the country.                                |
| `code_alpha3`  | string  | The three-letter code (ISO 3166-1 alpha-3) for the country.                              |
| `code_numeric` | string  | The numeric code (ISO 3166-1 numeric) for the country.                                   |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `active` - Set to `1` to only return active countries.
- `regions` - Set to a comma-separated list of region IDs to only return countries in those regions.
- `with_studies` - Include this parameter to only return countries that have studies (note that these can be both
  released and unreleased studies).
- `with_recent_studies` - Set to a number (X) to only return countries that have an available syndicated BAV study in
  the last X calendar years. For example, when you set it to 0, it returns countries that have studies in the current year.
  When you set it to 1, it returns countries that have studies in the current or past calendar year.
- `with_recent_studies_incl_snap` - Works like `with_recent_studies`, but also counts custom and SnapBAV studies.
- `in_best_countries` - Set to a comma-separated list of year numbers (e.g. `2023,2024`) to only return countries that
  are included in the Best Countries ranking for those years.

## Relationships & includes

The `region` relationship is always included. See the [includes section](../customizing/includes) for more
information on how includes work. The following relationships are available:

- `region` - The [region](regions.md) that the country belongs to.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.
