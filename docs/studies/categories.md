---
split: true
---

# Categories

## What are categories?

In BAV, categories relate only to the three sections where the survey asks respondents about their relationship to a
brand:

- Usage
- Preference
- Recommendation

All other BAV scores are the same across categories, which is a fundamental part of BAV's category-agnostic model.

For this reason, these categories are a way to relate a brand to usage. They are not a way to define what a brand is.
For example, you want to know how respondents see and use Google as a search engine and as an advertiser. These are two
distinct categories, but they do not try to classify what Google objectively is.

This also means that the number of brands in a category can change slightly across years and greatly across markets.
Not all categories are available in all years and markets.

## List Categories

To list all of the categories, use the list endpoint:

```http request
GET /api/v2/categories
```

## Get a Category

If you already have the system ID of a category, you can also get its details directly.

```http request
GET /api/v2/categories/123
```

Where `123` is the system ID of the category.

The categories endpoints are read-only and require a token with the `bav:brand-data` scope.

## Schema

### Full response schema

| Key          | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                             |
|--------------|---------|:-----------------------------------------:|:------------------:|:------------------:|---------------------------------------------------------|
| `id`         | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                          |
| `name`       | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The global name of the category.                        |
| `created_at` | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this category was first created. |
| `updated_at` | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this category was last updated.  |

### Relationship Response Schema

The API uses the slim relationship schema when the category is part of an include in another resource.

| Key    | Type    | Description                       |
|--------|---------|-----------------------------------|
| `id`   | integer | The system ID for the category.   |
| `name` | string  | The primary name of the category. |

When the category is included with a nested `sector` include (for example `category.sector`), the relationship object
also contains a `sector` object.

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `sectors` - A comma-separated list of sector IDs. The API filters the categories to only those in the given sectors.

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes) for more information on how
this works. The following relationships are available:

- `sector` - The [sector](../metadata/sectors.md) that the category belongs to.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.