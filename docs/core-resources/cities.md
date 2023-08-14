# Cities

## What are cities?

Some BAV resources rely on segmenting data by cities. This resource contains a list of all the cities in
the world with a population over 500 with additional metadata for system use.

## List all cities

To list all of the cities and browse them via the API, use the list endpoint:

```http request
GET /api/v2/cities
```

## Get a city

You may also directly retrieve a city's details if you already have its system ID.

```http request
GET /api/v2/cities/123
```

Where `123` is the system ID of the city.

## Schema

### Full response schema

| Key                       | Type     |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                          |
|---------------------------|----------|:-----------------------------------------:|:------------------:|:------------------:|----------------------------------------------------------------------------------------------------------------------|
| `id`                      | integer  |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID for the country.                                                                                       |
| `name`                    | string   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the country in English.                                                                                  |
| `latitude`                | string   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                                                                    |
| `longitude`               | string   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                                                                                    |
| `timezone`                | string   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The timezone for the city, e.g. "Europe/London"                                                                      |
| `population`              | ineteger |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The population of the city.                                                                                          |
| `elevation`               | integer  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The city's elevation. Also see digital_elevation_model which is available for more cities.                           |
| `digital_elevation_model` | integer  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Another measure of the city's elevation.                                                                             |
| `geonames_feature_code`   | string   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The [feature code](http://www.geonames.org/export/codes.html) from Geonames, allowing you to filter on type of city. |
| `created_at`              | string   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when this city was first created in the system.                                                    |
| `updated_at`              | string   | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this city was last updated in the system.                                                     |

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `capitals` - Set to `true` to only return capital cities.
- `regions` - Set to a comma-separated list of region IDs to only return cities in those regions.
- `countries` - Set to a comma-separated list of country IDs to only return cities in those countries.
- `in_best_countries` - Set to a year number (e.g. 2023) to only return cities that are included in the Best Countries ranking for that year.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `country` - The [country](countries.md) that the city is located in.