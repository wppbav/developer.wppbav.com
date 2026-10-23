# Catalog

## What is the catalog?

Euromonitor keeps its own catalog of the brands, companies, categories, data types, geographies and industries that
market share is measured for. The catalog endpoints give you read-only access to these lists so that you can find the
Euromonitor IDs to pass to the [brand shares](brand-shares.md) and [company shares](company-shares.md) endpoints.

:::note Euromonitor IDs
All IDs on these endpoints are Euromonitor's own identifiers, not BAV IDs. See
the [overview](index.md#euromonitor-ids-are-not-bav-ids) for more information.
:::

All catalog endpoints require the `bav:market-share-data` scope. They are paginated, sorted by `id` by default and
support [filters & sorting](../customizing/filters.md), [configurable fields](../customizing/fields.md)
and [includes](../customizing/includes.md).

Every relationship that can be included (including the `bav_` links) is returned in a slim relationship schema:

| Key    | Type    | Description                          |
|--------|---------|--------------------------------------|
| `id`   | integer | The ID of the related record.        |
| `name` | string  | The name of the related record.      |

A relationship that is not linked is returned as `null`.

## Brands

Euromonitor's own brand catalog. This is not the same list as the [BAV brands](../brands/brands.md). It covers brands
BAV has never surveyed, splits some brands that BAV holds as one, and names others differently. The `id` here is what
the `brands` filter on [brand shares](brand-shares.md) takes.

```http request
GET /api/v2/market-share/brands
GET /api/v2/market-share/brands/123
```

Where `123` is the Euromonitor ID of the brand.

### Schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                  |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor brand ID.                                                    |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The brand name in Euromonitor. This can differ from the BAV brand name.      |
| `company_id` | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor ID of the company that owns the brand.                       |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the record was created.                               |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when the record was last updated.                          |

### Relationships & includes

- `company` - The Euromonitor company that owns the brand.
- `bav_brand` - The [BAV brand](../brands/brands.md) this brand is linked to. `null` when there is no link, in which
  case its market share cannot be compared with BAV brand data.

## Companies

Euromonitor's own company catalog. As with brands, this is Euromonitor's list rather than the
BAV [companies](../company-data/companies.md). The `id` here is what the `companies` filter on the share endpoints
takes.

```http request
GET /api/v2/market-share/companies
GET /api/v2/market-share/companies/123
```

Where `123` is the Euromonitor ID of the company.

### Schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                         |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor company ID.                         |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The company name in Euromonitor.                    |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the record was created.      |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when the record was last updated. |

### Relationships & includes

- `brands` - The Euromonitor brands the company owns.
- `bav_company` - The [BAV company](../company-data/companies.md) this company is linked to, where there is a link.

## Categories

The categories that market share is measured within. Categories form a tree: `level` 1 is a top-level category within
its industry, and `parent_id` walks up from there. Filter on `level` to get one tier of the tree, or on `parent_id` to
get one category's children.

A category's industry is not fixed for all time, as Euromonitor may reorganize its categories. Filter share rows by
category rather than treating the industry as a permanent property of a category.

```http request
GET /api/v2/market-share/categories
GET /api/v2/market-share/categories/123
```

Where `123` is the Euromonitor ID of the category.

### Schema

| Key              | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                   |
|------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------------------------------|
| `id`             | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor category ID.                                                  |
| `name`           | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The category name.                                                            |
| `level`          | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The depth in the category tree, where `1` is a top-level category.            |
| `industry_id`    | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor ID of the industry the category is in. This can change.       |
| `industry_order` | integer |                    :x:                    | :white_check_mark: | :white_check_mark: | The category's position within its industry.                                  |
| `parent_id`      | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor ID of the parent category, where there is one.                |
| `created_at`     | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the record was created.                                |
| `updated_at`     | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when the record was last updated.                           |

### Relationships & includes

- `industry` - The industry the category is in.
- `parent` - The parent category.
- `children` - The categories nested directly under this one.
- `data_types` - The data types available for this category.

## Data Types

What a share row measures, such as retail value or retail volume. Two rows that differ only by data type measure
different things and are not comparable. They must not be summed or averaged across. Not every data type applies to
every category, which is what the `categories` and `industries` includes describe.

```http request
GET /api/v2/market-share/data-types
GET /api/v2/market-share/data-types/123
```

Where `123` is the Euromonitor ID of the data type.

### Schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|------------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor data type ID.                              |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The data type name, such as retail value or retail volume. |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the record was created.             |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when the record was last updated.        |

### Relationships & includes

- `categories` - The categories this data type is available for.
- `industries` - The industries this data type is available for.

## Geographies

The markets that market share is measured in, as a tree of regions, countries and cities. These are Euromonitor's
geographies, not the BAV [countries](../metadata/countries.md). Where a geography lines up with a BAV country,
`bav_country_id` points to it. It is `null` for regions and cities.

```http request
GET /api/v2/market-share/geographies
GET /api/v2/market-share/geographies/123
```

Where `123` is the Euromonitor ID of the geography.

### Schema

| Key              | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                    |
|------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------|
| `id`             | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor geography ID.                                                  |
| `name`           | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The geography name.                                                            |
| `parent_id`      | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor ID of the parent geography, where there is one.                |
| `bav_country_id` | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The [BAV country](../metadata/countries.md) ID. `null` for regions and cities. |
| `created_at`     | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the record was created.                                 |
| `updated_at`     | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when the record was last updated.                            |

### Additional Filters

To take one level of the geography tree, use one of these filters. Any value turns the filter on.

- `filter[regions]=1` - Only include regions, the top level of the tree.
- `filter[countries]=1` - Only include countries.
- `filter[cities]=1` - Only include cities.

### Relationships & includes

- `parent` - The parent geography.
- `children` - The geographies nested directly under this one.
- `bav_country` - The [BAV country](../metadata/countries.md) this geography is linked to.

## Industries

The top of the catalog. An industry holds categories and is the unit that Euromonitor data is licensed and fetched in.

```http request
GET /api/v2/market-share/industries
GET /api/v2/market-share/industries/123
```

Where `123` is the Euromonitor ID of the industry.

### Schema

| Key               | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                         |
|-------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------------------|
| `id`              | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor industry ID.                                        |
| `name`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The industry name.                                                  |
| `code`            | string  |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The Euromonitor industry code.                                      |
| `last_fetched_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the industry's data was last fetched.        |
| `created_at`      | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when the record was created.                      |
| `updated_at`      | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when the record was last updated.                 |

### Relationships & includes

- `categories` - The categories in this industry.
- `data_types` - The data types available for this industry.
