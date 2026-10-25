# Brands

Use the Brands endpoint to get details about one or more brands.

## What are brands?

Brands are the core of BAV. BAV surveys research these entities, and brands connect to many other resources. Brands
differ from companies in that they are not necessarily a legal entity. Brands are owned by companies.

Brands in BAV do not belong specifically to a [category resource](../studies/categories.md). Each brand is studied in a
specific category in a specific [study](../studies/studies.md). However, for classification purposes each brand belongs
to a [sector](../metadata/sectors.md) based on the studies it is in.

A brand has no scores of its own. Brand data always belongs to a brand in a study. Use these endpoints to find a
brand. Then read its data from the [brandscape data](../brand-data/brandscape-data.md) endpoints.

The brands endpoints are read-only.

## List all brands

To list all of the brands and browse them through the API, use the list endpoint:

```http request
GET /api/v2/brands
```

## Get a brand

If you already have the system ID of a brand, you can also get its details directly.

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
| `is_deprecated`       | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the brand is deprecated. A deprecated brand keeps its historical data and can point to a `replacement` brand.               |
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

The API still returns `bav_brand_id`, `bav_id`, `is_core` and `is_studied_globally` for backwards compatibility, but
they are always `null`. You cannot filter or sort on them. Use `id` to identify brands. The API no longer returns the
`logo_url` field.

:::

### Relationship Response Schema

The API uses the slim relationship schema when the brand is part of an include in another resource. The API also uses
it for the `replacement`, `parent` and `children` includes.

| Key           | Type    | Description                                                                |
|---------------|---------|----------------------------------------------------------------------------|
| `id`          | integer | The system ID for the brand.                                               |
| `name`        | string  | The primary name of the brand.                                             |
| `sector`      | object  | An object with the brand's [sector relationship](../metadata/sectors.md). |
| `signalai_id` | string  | The brand's identifier in Signal AI.                                       |

## Additional Filters

For convenience, brands have a set of additional filters. These filters are not in
the [default filters](../customizing/filters.md) and are not columns. The additional filters are:

- `years` - A comma-separated list of year IDs. The filter returns only the brands that are studied in the specified
  years.
- `year_numbers` - A comma-separated list of year numbers (for example `2024,2025`). The filter returns only the brands
  that are studied in the specified years.
- `categories` - A comma-separated list of category IDs. The filter returns only the brands that are studied in the
  specified categories. A brand can be in different categories in different studies.
- `sectors` - A comma-separated list of sector IDs. The filter returns only the brands in the specified sectors.
- `countries` - A comma-separated list of country IDs. The filter returns only the brands that are studied in the
  specified countries.
- `country_codes` - A comma-separated list of two-letter ISO country codes. The filter returns only the brands that are
  studied in the specified countries.
- `regions` - A comma-separated list of region IDs. The filter returns only the brands that are studied in the
  specified regions.
- `region_blocs` - A comma-separated list of region bloc IDs. The filter returns only the brands that are studied in
  countries that belong to the specified region blocs.
- `studies` - A comma-separated list of study IDs. The filter returns only the brands that are in the specified
  studies.
- `companies` - A comma-separated list of [company](../company-data/companies.md) IDs. The filter returns only the
  brands that the specified companies own.
- `tags` - A comma-separated list of brand tag IDs or keys (for example `luxury`). See `/api/v2/brand-tags` for the
  available tags.
- `variations` - A comma-separated list of brand variation IDs. The filter returns only the brands with the specified
  variations.
- `has_studies` - Set to `1` to include only the brands that were in a study at any time. Set to `0` to include only
  the brands that were never studied.

## Relationships & includes

By default, the response includes only the `replacement` relationship. See the [includes section](../customizing/includes.md) for
more information on how this works. The following relationships are available:

- `company` - The [company](../company-data/companies.md) that owns the brand.
- `sector` - The [sector](../metadata/sectors.md) that the brand belongs to.
- `studies` - A list of the [BAV studies](../studies/studies.md) that included this brand. Each study contains its
  `id`, `name`, `year`, `country`, `period` and `data_available_at`. Each study also contains the `brand_name` and
  `category_id` that the study used to measure the brand.
- `studies.category` - The API accepts this include for compatibility. The study entries still show only the
  `category_id`. To get the category, use the [categories endpoint](../studies/categories.md).
- `countries` - The [countries](../metadata/countries.md) where the brand is present, with its local name and whether
  the country is its country of origin.
- `variations` - The other names this brand is known by.
- `replacement` - The brand that replaced this one, if it is deprecated. Always included.
- `parent` - The parent brand in the brand hierarchy.
- `children` - The child brands in the brand hierarchy.
- `tags` - The brand's tags. `is_ai_generated` shows if AI assigned the tag or a person assigned it by hand.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching.md) for more details.

When you search (with `search` or `filter[name]`), only the `years`, `year_numbers`, `countries`, `country_codes`,
`regions`, `region_blocs`, `studies`, `categories`, `sectors`, `companies`, `variations`, `tags`, `is_deprecated`
and `has_studies` filters apply. You can also sort on only one column.
