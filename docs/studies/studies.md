# Studies

## What are studies?

A fundamental element of our datasets are studies. A study is a collection of data from respondents at a specific point
in time. Most markets in BAV are for example covered at most once a year with the exception of the US which is done
quarterly.

Studies are a primary way of filtering our [brandscape data](./brandscape-data.md) and also contains information about the
study iself, such as when it was conducted and how many respondents it had.

## List all studies

To list all of the studies and browse them via the API, use the list endpoint:

```http request
GET /api/v2/studies
```

## Get a study

You may also directly retrieve a study's details if you already have its system ID.

```http request
GET /api/v2/studies/123
```

Where `123` is the system ID of the study.

## Get brands in a study

You may get a list of all brands in a study by using the following endpoint:

```http request
GET /api/v2/studies/123/brands
```

Where `123` is the system ID of the study.

## Schema

### Full response schema

| Key                 | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                      |
|---------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------------|
| `id`                | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                   |
| `name`              | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the study.                                           |
| `is_active`         | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this study should be used.                               |
| `type`              | object  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this is a full BAV study or a smaller study.             |
| `period`            | object  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The period for the study (Full Year, Quarter).                   |
| `start_date`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the fieldwork for this study was started. |
| `end_date`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the fieldwork for this study ended.       |
| `data_available_at` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | A datetime string when the final data was made available.        |
| `respondents`       | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many individual respondents the study had.                   |
| `categories`        | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many categories the study had.                               |
| `data_updated_at`   | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | When the data for the study was last updated.                    |
| `amount_of_cells`   | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The total amount of cells in the study.                          |
| `amount_of_brands`  | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many brands the study had.                                   |
| `created_at`        | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this study was first created.             |
| `updated_at`        | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this study was last updated.              |

### Relationship Response Schema

The slim relationship schema is used when the study is used as part of an include in another resource.

| Key       | Type    | Description                                    |
|-----------|---------|------------------------------------------------|
| `id`      | integer | The system ID for the study.                   |
| `name`    | string  | The primary name of the study.                 |
| `period`  | object  | The period for the study (Full Year, Quarter). |
| `country` | object  | The country where the study was done.          |
| `year`    | object  | The year when the study was done.              |

### Brands in Study Schema

When getting the brands included in a study, the following schema is used:

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                             |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                          |
| `brand_name` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The local brand name used in the study.                 |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this relation was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this relation was last updated.  |

### Categories in Study Schema

When getting the categories included in a study, the following schema is used:

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                             |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                          |
| `category`   | object  |                    :x:                    |        :x:         |        :x:         | A category relationship object.                         |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this relation was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this relation was last updated.  |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `country` - The [country](countries.md) country where the study was done.
- `year` - The [year](years.md) year when the study was done.

### For brands in a study

The following relationships are available for brands in a study:

- `country` - The [country](countries.md) country where the study was done.
- `year` - The [year](years.md) year when the study was done.
- `study` - The [study](studies.md) that the brand was included in.
- `brand` - The [brand](brands.md) object for each brand.
- `category` - The [category](categories.md) the brand was studied in.
- `category.sector` - Includes the [sector](sectors.md) the category belongs to, nested on the categories relationship object.

### For categories in a study

The following relationships are available for categories in a study:

- `country` - The [country](countries.md) country where the study was done.
- `year` - The [year](years.md) year when the study was done.
- `study` - The [study](studies.md) that the brand was included in.
- `brand` - The [brand](brands.md) object for each brand.
- `category` - The [category](categories.md) the brand was studied in.

## Additional filters

For convenience, we have a set of additional filters for brands that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `data_updated_since` - A datetime string. This will filter the studies to only those that have had their data updated
  since the given date.
- `active` - Set to `1` to only return active audiences.
- `inactive` - Set to `1` to only return inactive audiences.
- `bav_study` - Set to `1` to only return studies that are full BAV studies.
- `released` - Set to `1` to only return studies that have been released.
- `unreleased` - Set to `1` to only return studies that have not been released.
- `full_year` - Set to `1` to only return studies that are full year studies (excludes US quarterly waves).
- `open_survey` - Set to `1` to only return studies that are open to brand list feedback.
- `regions` - A comma-separated list of region IDs. This will filter the studies to only those that are in the given
  regions.
- `countries` - A comma-separated list of country IDs. This will filter the studies to only those that are in the given
  countries.
- `country_codes` - A comma-separated list of country codes. This will filter the studies to only those that are in the
  given countries.
- `years` - A comma-separated list of year IDs. This will filter the studies to only those that are in the given years.
- `year_numbers` - A comma-separated list of year numbers. This will filter the studies to only those that are in the
  given years.

### For brands in a study

The following additional filters are available when fetching brands for a given study:

- `categories` - A comma-separated list of category IDs. This will filter the brands to only those that are studied in
  the specified categories.
- `brands` - A comma-separated list of brand IDs. This will filter the brands to only the ones provided.

### For categories in a study

The following additional filters are available when fetching categories for a given study:

- `categories` - A comma-separated list of category IDs. This will filter the categories to only those given.
- `brands` - A comma-separated list of brand IDs. This will filter the categories to only those that have the given
  brands in the study.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.