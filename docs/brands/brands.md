# Brands

You may use the Brands endpoint to retrieve details about one or more brands.

## What are brands?

Brands are the core of BAV. They are the entities that are researched by BAV surveys and is connected to many other
resources. Brands differ from companies in that they are not necessarily a legal entity. Brands are owned by companies.

Brands in BAV do not belong specifically to a [category resource](../studies/categories.md). Each brand is studied in a
specific category in a specific [study](../studies/studies.md). However, for classification purposes each brand belongs
to a [sector](../metadata/sectors.md) based on the studies it is in.

A brand has no scores of its own. Brand data always belongs to a brand in a study, so use these endpoints to find a
brand, then read its data from the [brandscape data](../brand-data/brandscape-data.md) endpoints.

The brands endpoints are read-only.

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

| Key                   | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                         |
|-----------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
| `id`                  | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                      |
| `bav_brand_id`        | null    |                    :x:                    |        :x:         |        :x:         | **Deprecated.** Always `null`.                                                                                                      |
| `bav_id`              | null    |                    :x:                    |        :x:         |        :x:         | **Deprecated.** Always `null`.                                                                                                      |
| `name`                | string  |      :white_check_mark: (search)          | :white_check_mark: | :white_check_mark: | The global name of the brand. Filtering by name uses the search index, the same as [searching](../customizing/searching.md).          |
| `qualifier`           | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | Text that tells apart brands with the same or a similar name.                                                                       |
| `share_of_company`    | float   |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The percentage share that this brand makes up of the parent company's revenue.                                                      |
| `is_core`             | null    |                    :x:                    |        :x:         |        :x:         | **Deprecated.** Always `null`.                                                                                                      |
| `is_studied_globally` | null    |                    :x:                    |        :x:         |        :x:         | **Deprecated.** Always `null`.                                                                                                      |
| `is_deprecated`       | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the brand is deprecated. A deprecated brand keeps its historical data and may point to a `replacement` brand.               |
| `signalai_id`         | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The brand's identifier in Signal AI.                                                                                                |
| `parent_brand_id`     | integer |                    :x:                    |        :x:         | :white_check_mark: | The ID of the parent brand in the brand hierarchy, or `null` if the brand has no parent.                                            |
| `website_url`         | string  |            :white_check_mark:             | :white_check_mark: |        :x:         | The brand's website address.                                                                                                        |
| `website_domain`      | string  |                    :x:                    |        :x:         |        :x:         | The domain of the brand's website address, without `www.` (for example `coca-cola.com`).                                            |
| `social_linkedin`     | string  |            :white_check_mark:             | :white_check_mark: |        :x:         | The brand's LinkedIn profile URL.                                                                                                   |
| `social_facebook`     | string  |            :white_check_mark:             | :white_check_mark: |        :x:         | The brand's Facebook profile URL.                                                                                                   |
| `social_instagram`    | string  |            :white_check_mark:             | :white_check_mark: |        :x:         | The brand's Instagram profile URL.                                                                                                  |
| `social_x`            | string  |            :white_check_mark:             | :white_check_mark: |        :x:         | The brand's X (formerly Twitter) profile URL.                                                                                       |
| `social_youtube`      | string  |            :white_check_mark:             | :white_check_mark: |        :x:         | The brand's YouTube channel URL.                                                                                                    |
| `url`                 | string  |                    :x:                    |        :x:         |        :x:         | The URL of the brand's page on The Fount.                                                                                           |
| `created_at`          | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand was first created.                                                                                |
| `updated_at`          | string  | ([updated since](../customizing/filters.md)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand was last updated.                                                                                 |

:::caution Deprecated fields

`bav_brand_id`, `bav_id`, `is_core` and `is_studied_globally` are still returned for backwards compatibility, but are
always `null`. They can no longer be filtered or sorted on. Use `id` to identify brands. The `logo_url` field has been
removed.

:::

### Relationship Response Schema

The slim relationship schema is used when the brand is used as part of an include in another resource, and for the
`replacement`, `parent` and `children` includes.

| Key           | Type    | Description                                                                |
|---------------|---------|----------------------------------------------------------------------------|
| `id`          | integer | The system ID for the brand.                                               |
| `name`        | string  | The primary name of the brand.                                             |
| `sector`      | object  | An object with the brand's [sector relationship](../metadata/sectors.md). |
| `signalai_id` | string  | The brand's identifier in Signal AI.                                       |

## Additional Filters

For convenience, we have a set of additional filters for brands that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `years` - A comma-separated list of year IDs. This will filter the brands to only those that are studied in the
  specified years.
- `year_numbers` - A comma-separated list of year numbers (e.g. `2024,2025`). This will filter the brands to only those
  that are studied in the specified years.
- `categories` - A comma-separated list of category IDs. This will filter the brands to only those that are studied in
  the specified categories. A brand can be in different categories in different studies.
- `sectors` - A comma-separated list of sector IDs. This will filter the brands to only those in the given sectors.
- `countries` - A comma-separated list of country IDs. This will filter the brands to only those that are studied in
  the specified countries.
- `country_codes` - A comma-separated list of two-letter ISO country codes. This will filter the brands to only those
  that are studied in the specified countries.
- `regions` - A comma-separated list of region IDs. This will filter the brands to only those that are studied in
  the specified regions.
- `region_blocs` - A comma-separated list of region bloc IDs. This will filter the brands to only those that are
  studied in countries belonging to the specified region blocs.
- `studies` - A comma-separated list of study IDs. This will filter the brands to only those that are included in the
  specified studies.
- `companies` - A comma-separated list of [company](../company-data/companies.md) IDs. This will filter the brands to
  only those owned by the specified companies.
- `tags` - A comma-separated list of brand tag IDs or keys (e.g. `luxury`). See `/api/v2/brand-tags` for the available
  tags.
- `variations` - A comma-separated list of brand variation IDs. This will filter the brands to only those with the
  specified variations.
- `has_studies` - Set to `1` to only include brands that have been included in any study at any point in time, or `0`
  for brands that have never been studied.

## Relationships & includes

By default, only the `replacement` relationship is included. See the [includes section](../customizing/includes.md) for
more information on how this works. The following relationships are available:

- `company` - The [company](../company-data/companies.md) that owns the brand.
- `sector` - The [sector](../metadata/sectors.md) that the brand belongs to.
- `studies` - A list of [BAV studies](../studies/studies.md) where this brand was included. Each study contains its
  `id`, `name`, `year`, `country`, `period` and `data_available_at`, plus the `brand_name` and `category_id` the brand
  was measured under in that study.
- `studies.category` - Accepted for compatibility. The study entries still only expose the `category_id`; look the
  category up via the [categories endpoint](../studies/categories.md).
- `countries` - The [countries](../metadata/countries.md) where the brand is present, with its local name and whether
  the country is its country of origin.
- `variations` - The other names this brand is known by.
- `replacement` - The brand that replaced this one, if it is deprecated. Always included.
- `parent` - The parent brand in the brand hierarchy.
- `children` - The child brands in the brand hierarchy.
- `tags` - The brand's tags. `is_ai_generated` shows whether a tag was assigned by AI rather than by hand.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching.md) for more details.

When searching (using `search` or `filter[name]`), only the `years`, `year_numbers`, `countries`, `country_codes`,
`regions`, `region_blocs`, `studies`, `categories`, `sectors`, `companies`, `variations`, `tags`, `is_deprecated`
and `has_studies` filters apply, and sorting is limited to a single column.
