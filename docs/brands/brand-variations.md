# Brand Variations

## What are brand variations?

A [brand](brands.md) can be known under more than one name. Brand variations are the names a brand is studied under.
A variation is either:

- `equivalent` - Another name for the brand.
- `previously` - A name the brand had in the past.

Each brand variation has a unique numeric `key`, which can be negative, and a short `code`. When a brand variation is
deprecated, it can point to the variation that replaced it.

This endpoint requires the `bav:brand-data` scope.

## List all brand variations

To list all of the brand variations and browse them through the API, use the list endpoint:

```http request
GET /api/v2/brand-variations
```

## Get a brand variation

If you already have the system ID of a brand variation, you can also get its details directly.

```http request
GET /api/v2/brand-variations/123
```

Where `123` is the system ID of the brand variation.

## Schema

### Full response schema

| Key             | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                  |
|-----------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------------------------------------|
| `id`            | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                               |
| `name`          | string  |       :white_check_mark: (search)         | :white_check_mark: | :white_check_mark: | The name of the brand variation. Filtering on the name uses the search index, the same as `search`.         |
| `brand_id`      | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The system ID of the [brand](brands.md) this is a variation of.                                              |
| `type`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The type of brand variation: `equivalent` or `previously`.                                                   |
| `key`           | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The numeric key of the brand variation. Keys are unique and can be negative.                                 |
| `code`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The code of the brand variation, three or four uppercase letters.                                            |
| `is_core`       | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the brand variation is a core brand, always included in quarterly US studies.                        |
| `is_ranked`     | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the brand variation is ranked by default, as opposed to a holdout brand. Used together with core brands in the US. |
| `is_global`     | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the brand variation is a global brand, included in all studies.                                      |
| `is_deprecated` | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the brand variation is deprecated.                                                                   |
| `url`           | string  |                    :x:                    |        :x:         |        :x:         | The URL of the brand variation's page on The Fount.                                                          |
| `created_at`    | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this brand variation was first created.                                               |
| `updated_at`    | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this brand variation was last updated.                                                |

### Relationship Response Schema

The API uses the slim relationship schema when the brand variation is part of an include in another resource, such as
the brandscape data.

| Key     | Type    | Description                                                         |
|---------|---------|---------------------------------------------------------------------|
| `id`    | integer | The system ID for the brand variation.                              |
| `name`  | string  | The name of the brand variation.                                    |
| `brand` | object  | The [brand](brands.md) this is a variation of, when included.       |
| `type`  | string  | The type of brand variation: `equivalent` or `previously`.          |
| `key`   | integer | The numeric key of the brand variation.                             |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `brands` - A comma-separated list of brand IDs. The filter returns only the variations of these brands.
- `keys` - A comma-separated list of brand variation keys.
- `studies` - A comma-separated list of study IDs. The filter returns only the variations that are in these studies.
- `has_studies` - Set to `1` to return only the variations that were measured in one or more studies. Set to `0` to
  return only the variations that were not measured.

## Relationships & includes

By default, the response does not include relationships. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `brand` - The [brand](brands.md) this is a variation of.
- `replacement` - The brand variation that replaced this one, if it is deprecated.

## Searching

This endpoint supports searching by name. See the [searching section](../customizing/searching) for more details.

When you search with `search` or `filter[name]`, only these filters apply: `id`, `brand_id`, `type`, `code`, `keys`,
`studies`, `is_core`, `is_global`, `is_ranked`, `is_deprecated` and `has_studies`. You can also sort on only one
column.
