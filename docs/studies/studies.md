# Studies

## What are studies?

A fundamental element of our datasets are studies. A study is a collection of data from respondents in one market at a
specific point in time. Most markets in BAV are for example covered at most once a year with the exception of the US
which is done quarterly.

Studies are a primary way of filtering our [brandscape data](../brand-data/brandscape-data.md) and also contains
information about the study itself, such as when it was conducted and how many respondents it had.

You only see the studies you have access to. The studies endpoints are read-only.

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

Where `123` is the system ID of the study. A brand measured in several categories appears once per category. Returns
`404` if the study does not exist or you do not have access to it. This endpoint requires a token with the `bav:brand-data`
scope.

## Get categories in a study

You may get a list of the categories in a study by using the following endpoint:

```http request
GET /api/v2/studies/123/categories
```

Where `123` is the system ID of the study. Each record is one brand in one category, so a category appears once for
every brand measured in it.

## Study types

The `type` field is a number. The `type_details` object (and the `study_type`/`study_type_label` fields on the
relationship schema) describe it.

| `type` | Label         | `study_types` slug | Description                                                                                              |
|--------|---------------|--------------------|----------------------------------------------------------------------------------------------------------|
| `1`    | BAV (Standard) | `syndicated`       | The full standard BAV study with a nationally representative sample.                                    |
| `2`    | Kaleidoscope  | `custom`           | A bespoke BAV study tailored for a specific need such as different sample, brands or custom questions.   |
| `3`    | Audience Origin | -                | Audience Origin covers thousands of audience insight metrics.                                            |
| `4`    | Best Countries | -                 | Best Countries studies the perception of countries and societal opinions across the world.               |
| `5`    | Momentum      | -                  | Momentum is a Wavemaker study.                                                                           |
| `6`    | SnapBAV       | `snap`             | A smaller BAV study with a limited number of brands.                                                     |
| `7`    | Consumer Eye  | `custom`           | An Asia-based study that provides insights into consumer behavior and preferences combined with brand perceptions. |
| `8`    | AO+BAV Fused  | `fused`            | Links Audience Origin and BAV data to provide a comprehensive view of audience insights and brand perceptions. |

:::note

The standard BAV study was previously labelled "Syndicated". Its label is now "BAV (Standard)", but its slug is still
`syndicated`, so existing `study_types` filters keep working.

:::

## Methodologies

Each study is run on a methodology, the version of the BAV model that decides how its metrics are calculated. Use the
`methodology` include to get it. Metrics are calculated differently between methodologies, so take care when comparing
studies that were run on different ones.

Methodologies have a stable `key` and a display `name`. The names were changed in October 2026; the keys did not
change, so use the `key` rather than the name to tell methodologies apart.

| `key`             | Name                 | Previous name |
|-------------------|----------------------|---------------|
| `classic`         | BAV 1                | Classic       |
| `classic-v2`      | BAV 1 (Known Brands) | Classic V2    |
| `concepts-2023-1` | Triads V1            | V2023.1       |
| `concepts-2023-2` | Triads V2            | V2023.2       |
| `v2025`           | BAV 3 (6× Unique)    | V2025.1       |
| `v2025-2`         | BAV 3 (Default)      | V2025.2       |
| `v2025-3`         | BAV 3 (Hungary)      | V2025.3       |
| `v2025-4`         | BAV 3 (Known Brands) | V2025.4       |

## Schema

### Full response schema

| Key                 | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                                        |
|---------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                                     |
| `name`              | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the study.                                                                                                                                             |
| `bav_key`           | string  |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The study's BAV key.                                                                                                                                               |
| `is_active`         | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this study is active.                                                                                                                                      |
| `type`              | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The [study type](#study-types).                                                                                                                                    |
| `type_details`      | object  |                    :x:                    |        :x:         |  (with `type`)     | Details of the study type: `id`, `slug` (the `study_types` slug, or `null`), `label`, `description` and a `dataset` object with `key`, `label`, `acronym` and `description`. |
| `period`            | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The study period: `1` full year, `2` first half, `3` second half, `4` to `7` Q1 to Q4, `8` rolling full year or `9` custom.                                        |
| `start_date`        | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The date when the fieldwork for this study was started.                                                                                                            |
| `end_date`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The date when the fieldwork for this study ended.                                                                                                                  |
| `data_available_at` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The date when the final data was made available. `null` until the data is available.                                                                              |
| `respondents`       | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many individual respondents the study had.                                                                                                                     |
| `categories`        | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many categories the study had.                                                                                                                                 |
| `data_updated_at`   | string  |        (`data_updated_since`)             | :white_check_mark: | :white_check_mark: | When the data for the study was last updated. Unlike `updated_at`, this ignores changes to the study's details.                                                    |
| `amount_of_cells`   | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The total amount of brand-by-category cells in the study.                                                                                                          |
| `amount_of_brands`  | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | How many brands the study had.                                                                                                                                     |
| `url`               | string  |                    :x:                    |        :x:         |        :x:         | The URL to view the study in The Fount. Left out when `fields` omits `id`.                                                                                         |
| `created_at`        | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this study was first created.                                                                                                               |
| `updated_at`        | string  | ([updated since](../customizing/filters.md)) | :white_check_mark: | :white_check_mark: | A datetime string when this study was last updated.                                                                                                                |

### Relationship Response Schema

The slim relationship schema is used when the study is used as part of an include in another resource.

| Key                | Type    | Description                                                                              |
|--------------------|---------|------------------------------------------------------------------------------------------|
| `id`               | integer | The system ID for the study.                                                             |
| `name`             | string  | The primary name of the study.                                                           |
| `period`           | integer | The study period (see above).                                                            |
| `type`             | integer | The [study type](#study-types) as a number.                                              |
| `study_type`       | string  | The `study_types` slug for the type, e.g. `syndicated`. `null` for types without a slug. |
| `study_type_label` | string  | The study type label, e.g. `BAV (Standard)`.                                             |
| `country`          | object  | The country where the study was done (when loaded).                                      |
| `year`             | object  | The year when the study was done (when loaded).                                          |

### Methodology Schema

The schema used for the `methodology` include.

| Key           | Type    | Description                                                                                  |
|---------------|---------|----------------------------------------------------------------------------------------------|
| `id`          | integer | The system ID for the methodology.                                                           |
| `key`         | string  | The stable methodology key, e.g. `v2025-2`. Use this rather than the name to tell them apart. |
| `name`        | string  | The methodology name, e.g. `BAV 3 (Default)`.                                                |
| `description` | string  | What the methodology is and how it differs from the other versions.                          |

### Brands in Study Schema

When getting the brands included in a study, the following schema is used:

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                             |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                          |
| `brand_name` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The local brand name used in the study.                 |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this relation was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters.md)) | :white_check_mark: | :white_check_mark: | A datetime string when this relation was last updated.  |

### Categories in Study Schema

When getting the categories included in a study, the following schema is used:

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                         |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                      |
| `category`   | object  |                    :x:                    | (`category_name`)  |        :x:         | A [category relationship object](categories.md#relationship-response-schema). Always included. |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this relation was first created.                             |
| `updated_at` | string  | ([updated since](../customizing/filters.md)) | :white_check_mark: | :white_check_mark: | A datetime string when this relation was last updated.                              |

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes.md) for more information
on how this works. The following relationships are available:

- `country` - The [country](../metadata/countries.md) where the study was done.
- `year` - The [year](../metadata/years.md) when the study was done.
- `methodology` - The [methodology](#methodologies) the study was run on.

### For brands in a study

The following relationships are available for brands in a study:

- `country` - The [country](../metadata/countries.md) where the study was done.
- `year` - The [year](../metadata/years.md) when the study was done.
- `study` - The [study](studies.md) that the brand was included in.
- `brand` - The [brand](../brands/brands.md) object for each brand.
- `brandVariation` - The brand variation (the name) the brand was measured under in this study.
- `category` - The [category](categories.md) the brand was studied in.
- `category.sector` - Includes the [sector](../metadata/sectors.md) the category belongs to, nested on the category
  relationship object.

### For categories in a study

The category is always included. The following additional relationships are available for categories in a study:

- `country` - The [country](../metadata/countries.md) where the study was done.
- `year` - The [year](../metadata/years.md) when the study was done.
- `study` - The [study](studies.md) that the category was included in.

## Additional filters

For convenience, we have a set of additional filters for studies that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `study_types` - A comma-separated list of study type slugs: `syndicated` (BAV Standard), `custom` (Kaleidoscope and
  Consumer Eye), `snap` (SnapBAV) or `fused` (AO+BAV Fused). Unknown slugs are ignored. Use the `type` filter to filter
  by type number instead.
- `data_updated_since` - A date string. This will filter the studies to only those that have had their data updated
  since the given date. Unlike `updated_since`, this ignores changes to the study's details.
- `active` - Set to `1` to only return active studies.
- `inactive` - Set to `1` to only return inactive studies.
- `bav_study` - Set to `1` to only return BAV studies (type `1`).
- `released` - Set to `1` to only return studies that have been released.
- `unreleased` - Set to `1` to only return active studies that have not been released yet.
- `full_year` - Set to `1` to only return full year studies (period `1`, excludes US quarterly waves).
- `open_survey` - Set to `1` to only return studies with an open brand selection survey.
- `regions` - A comma-separated list of region IDs. This will filter the studies to only those that are in the given
  regions.
- `countries` - A comma-separated list of country IDs. This will filter the studies to only those that are in the given
  countries.
- `country_codes` - A comma-separated list of two-letter ISO country codes. This will filter the studies to only those
  that are in the given countries.
- `years` - A comma-separated list of year IDs. This will filter the studies to only those that are in the given years.
- `year_numbers` - A comma-separated list of year numbers. This will filter the studies to only those that are in the
  given years.

For the scope filters (`active`, `inactive`, `bav_study`, `released`, `unreleased`, `full_year` and `open_survey`), any
value turns the filter on.

### For brands in a study

The following additional filters are available when fetching brands for a given study:

- `categories` - A comma-separated list of category IDs. This will filter the brands to only those that are studied in
  the specified categories.
- `brands` - A comma-separated list of brand IDs. This will filter the brands to only the ones provided.
- `brandVariations` - A comma-separated list of brand variation IDs. This will filter the brands to only those measured
  under the given variations.

### For categories in a study

The following additional filters are available when fetching categories for a given study:

- `categories` - A comma-separated list of category IDs. This will filter the categories to only those given.
- `brands` - A comma-separated list of brand IDs. This will filter the categories to only those that have the given
  brands in the study.
- `brand_variations` - A comma-separated list of brand variation IDs. This will filter the categories to only those
  that have the given brand variations in the study.

:::caution Filter naming

The brand variation filter is named differently on the two endpoints: it is `filter[brandVariations]` (camelCase) on
`/studies/{id}/brands` and `filter[brand_variations]` (snake_case) on `/studies/{id}/categories`. Likewise, the include
for the brand variation on `/studies/{id}/brands` is `brandVariation`.

:::

## Searching

The studies list endpoint supports searching. See the [searching section](../customizing/searching.md) for more details.
