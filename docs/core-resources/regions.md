# Regions

## What are regions?

Many of the BAV resources rely on segmenting data by country. Countries in turn belong to different geographical
regions. This resource contains a list of all the regions.

These regions are world geographical regions according to
the [United Nations geoscheme](https://en.wikipedia.org/wiki/United_Nations_geoscheme).

## List all regions

To list all of the regions and browse them via the API, use the list endpoint:

```http request
GET /api/v2/regions
```

## Get a region

You may also directly retrieve a region's details if you already have its system ID.

```http request
GET /api/v2/regions/123
```

Where `123` is the system ID of the region.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                           |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                        |                                                           |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the region in english.                    |                                                                                                                         |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this region was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this region was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the region is used as part of an include in another resource.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `countries` - The [countries](countries.md) countries that are part of the region.
