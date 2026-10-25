# Cities

## What are cities?

Some BAV resources segment data by cities. This resource contains a list of all the cities in the world with a
population over 500. It also contains additional metadata for system use.

## List all cities

To list all of the cities and browse them through the API, use the list endpoint:

```http request
GET /api/v2/cities
```

## Get a city

If you already have the system ID of a city, you can also get its details directly.

```http request
GET /api/v2/cities/123
```

Where `123` is the system ID of the city.

## Schema

### Full response schema

| Key                       | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                       |
|---------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------------------------------------------------------------------------------|
| `id`                      | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID for the city. Always returned.                                                                                      |
| `name`                    | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the city.                                                                                                             |
| `geonames_id`             | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The city's ID in [GeoNames](https://www.geonames.org).                                                                           |
| `latitude`                | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The city's latitude.                                                                                                              |
| `longitude`               | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The city's longitude.                                                                                                             |
| `timezone`                | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The IANA timezone for the city, e.g. "Europe/London".                                                                             |
| `population`              | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The population of the city.                                                                                                       |
| `elevation`               | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The city's elevation in meters, where GeoNames has a surveyed value. Also see `digital_elevation_model` which is available for more cities. |
| `digital_elevation_model` | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The city's elevation in meters from the GeoNames digital elevation model.                                                        |
| `geonames_feature_code`   | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The [feature code](http://www.geonames.org/export/codes.html) from GeoNames. You can use it to filter on the type of city. `PPLC` is a capital city. |
| `created_at`              | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this city was first created in the system.                                                                |
| `updated_at`              | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this city was last updated in the system.                                                                 |

You can also sort the cities by `country_id`. To get the country for each city, use the `country` include.

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `capitals` - Set to `1` to only return capital cities.
- `regions` - Set to a comma-separated list of region IDs to only return cities in those regions.
- `countries` - Set to a comma-separated list of country IDs to only return cities in those countries.
- `in_best_countries` - Set to a comma-separated list of year numbers (e.g. `2023,2024`) to only return cities that are
  included in the Best Countries ranking for those years.

## Relationships & includes

By default, relationships are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `country` - The [country](countries.md) that the city is located in.