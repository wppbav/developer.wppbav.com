# Brand Tags

## What are brand tags?

Brand tags describe [brands](brands.md) beyond their sector, for example their ownership, business model or reach. A
brand can have any number of tags.

Each tag belongs to a category:

- `brand_characteristics`
- `business_model`
- `ownership`
- `reach_and_channel`
- `career_industry` (personal brands only)
- `career_stage` (personal brands only)

You can use the tags to filter brands with the `tags` filter on the [brands endpoint](brands.md). The filter accepts
both tag IDs and tag keys.

```http request
GET /api/v2/brands?filter[tags]=luxury
```

## List all brand tags

To list all of the brand tags and browse them through the API, use the list endpoint:

```http request
GET /api/v2/brand-tags
```

By default, the API sorts the tags by category and name.

## Get a brand tag

If you already have the system ID of a brand tag, you can also get its details directly.

```http request
GET /api/v2/brand-tags/123
```

Where `123` is the system ID of the brand tag.

## Schema

### Full response schema

| Key             | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                      |
|-----------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------------------------|
| `id`            | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                   |
| `name`          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the tag, for example "Luxury".                                                       |
| `key`           | string  |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The key of the tag, for example `luxury`. The brands endpoint accepts it in `filter[tags]`.      |
| `category`      | string  |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The category the tag belongs to. See the list above.                                             |
| `category_name` | string  |                    :x:                    |        :x:         |        :x:         | The translated label of the category, for display.                                               |
| `description`   | string  |                    :x:                    |        :x:         | :white_check_mark: | What the tag means and when it applies.                                                          |
| `is_active`     | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the tag is active.                                                                       |
| `created_at`    | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this tag was first created.                                               |
| `updated_at`    | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this tag was last updated.                                                |

### Relationship Response Schema

The API uses the slim relationship schema when the brand tag is part of an include in another resource, such as the
`tags` include on [brands](brands.md).

| Key               | Type    | Description                                                                                            |
|-------------------|---------|--------------------------------------------------------------------------------------------------------|
| `id`              | integer | The system ID for the tag.                                                                             |
| `name`            | string  | The name of the tag.                                                                                   |
| `key`             | string  | The key of the tag.                                                                                    |
| `category`        | string  | The category the tag belongs to.                                                                       |
| `is_ai_generated` | boolean | Whether the tag was assigned to the brand by AI rather than by hand. Only present when included on a brand. |

## Relationships & includes

By default, the response does not include relationships. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `brands` - The [brands](brands.md) that carry this tag.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.
