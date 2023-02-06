# Brands

You may use the Brands endpoint to retrieve details about one or more brands.

## What are brands?

Brands are the core of BAV. They are the entities that are researched by BAV surveys and is connected to many other
resources. Brands differ from companies in that they are not necessarily a legal entity. Brands are owned by companies.

Brands in BAV do not belong specifically to a [category resource](./categories.md). Each brand is studied in a specific
category in a specific [study](./studies.md). However, for classification purposes each brand belongs to
a [sector](./sectors.md) based on the studies it is in.

## List all brands

To list all of the brands and browse them via the API, use the list endpoint:

```http request
GET /api/v2/brands
```

## Get a brand

You may also directly retrieve a brand's details if you already have its system ID.

```http request
GET /api/v2/brands/123
```

Where `123` is the system ID of the brand.

## Schema

### Full response schema

| Key                   | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                                                                             |
|-----------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                  | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                                                                          |
| `bav_brand_id`        | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The brand key in the BAV database. Note that this may be both a positive and negative integer. Please use the `id` column over this unless you specifically need the brand key for legacy integrations. |
| `bav_id`              | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The brand ID in the BAV database. Please use the `id` column over this unless you specifically need the brand key for legacy integrations.                                                              |
| `name`                | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The global name of the brand.                                                                                                                                                                           |
| `share_of_company`    | float   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The percentage share that this brand makes up of the parent company's financial results.                                                                                                                |
| `is_core`             | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this brand is considered a core brand for research purposes.                                                                                                                                    |
| `is_studied_globally` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether this brand is designated as a brand that we aim to currently study globally. Please note that this does not necessarily mean that is included in all studies in the current year.               |
| `url`                 | string  |                    :x:                    |        :x:         | :white_check_mark: | The URL of the brand's page on The Fount.                                                                                                                                                               |
| `logo_url`            | string  |                    :x:                    |        :x:         | :white_check_mark: | A URL to the latest approved version of the primary brand logo in SVG format.                                                                                                                           |
| `created_at`          | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand was first created.                                                                                                                                                    |
| `updated_at`          | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand was last updated.                                                                                                                                                     |

### Relationship Response Schema

The slim relationship schema is used when the brand is used as part of an include in another resource.

| Key      | Type    | Description                                                    |
|----------|---------|----------------------------------------------------------------|
| `id`     | integer | The system ID for the brand.                                   |
| `name`   | string  | The primary name of the brand.                                 |
| `sector` | object  | An object with the brand's [sector relationship](./sectors.md) |

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [Expansions section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `company` - The [company](./companies.md) that owns the brand.
- `sector` - The [sector](./sectors.md) that the brand belongs to.
- `studies` - A list of [BAV studies](./studies.md) where this brand was included.
- `countries` - The [countries](./countries.md) where this brand may have a local name, custom logo or where it is from.
