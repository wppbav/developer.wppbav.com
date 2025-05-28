---
split: true
---

# Categories

## What are categories?

Categories in BAV are related to how the respondent is asked their relationship to a brand in three sections only:

- Usage
- Preference
- Recommendation

All other BAV scores are the same across categories, which is a fundamental part of BAV's category-agnostic model.

These categories are therefore, a way to relate a brand to usage and not a way to define what a brand is. For example,
you might be interested to know how respondents see and use Google as both a search engine and advertiser, which would
be two distinct categories, yet does not attempt to classify what Google objectively is.

This also means that the amount of brands in a category may change slightly across years and greatly across markets.
Not all categories are available in all years and markets.

## List Categories

To list all of the categories, use the list endpoint:

```http request
GET /api/v2/categories
```

## Get a Category

You may also directly retrieve a category's details if you already have its system ID.

```http request
GET /api/v2/categories/123
```

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                             |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                          |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The global name of the category.                        |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this category was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this category was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the category is used as part of an include in another resource.

| Key    | Type    | Description                       |
|--------|---------|-----------------------------------|
| `id`   | integer | The system ID for the category.   |
| `name` | string  | The primary name of the category. |

## Additional Filters

For convenience, we have a set of additional filters for brands that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `sectors` - A comma-separated list of sector IDs. This will filter the categories to only those in the given sectors.

## Relationships & includes

By default, relationships not included. See the [includes section](../customizing/includes) for more information on how
this works. The following relationships are available:

- `sector` - The [sector](sectors.md) that the category belongs to.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.