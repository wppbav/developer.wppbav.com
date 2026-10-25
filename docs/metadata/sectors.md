# Sectors

## What are sectors?

In a BAV study, some questions relate sectors to one or more [categories](../studies/categories.md). For more
information about the categories and what they represent, see the [categories endpoint](../studies/categories.md).

Each category belongs to a sector, which is a broader classification of categories. The benefit of a sector is that it
is easier to compare across countries and years.

## List all sectors

To list all of the sectors and browse them through the API, use the list endpoint:

```http request
GET /api/v2/sectors
```

## Get a sector

If you already have the system ID of a sector, you can also get its details directly.

```http request
GET /api/v2/sectors/123
```

Where `123` is the system ID of the sector.

## Schema

### Full response schema

| Key                             | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                    |
|---------------------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|--------------------------------------------------------------------------------|
| `id`                            | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                 |    
| `is_active`                     | boolean |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether you can see and use the sector.                                        |                                                      
| `name`                          | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The name of the sector.                                                        |         
| `excluded_for_most_influential` | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | Whether the sector should be part of the Most Influential brands lists or not. |
| `created_at`                    | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this sector was first created.                          |
| `updated_at`                    | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this sector was last updated.                           |

### Relationship Response Schema

The API uses the slim relationship schema when the sector is part of an include in another resource.

| Key    | Type    | Description                     |
|--------|---------|---------------------------------|
| `id`   | integer | The system ID for the sector.   |
| `name` | string  | The primary name of the sector. |

## Additional Filters

For convenience, there are some additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `in_most_influential` - Set to `1` to only return sectors that are part of the Most Influential lists.
- `not_in_most_influential` - Set to `1` to only return sectors that are not part of the Most Influential lists.

## Relationships & includes

By default, relationships apart from the sector are not included. See
the [includes section](../customizing/includes) for more information on how this works. The following relationships
are available:

- `categories` - The [categories](../studies/categories.md) that belong to this sector.

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.