# Collections

## What are collections?

Collections let you group brands together. You can use a collection for different purposes to save time when you add
brands. A user can add the collection in one step, and does not have to search for each brand every time. Examples of
useful collections are:

- All brands that are part of a company.
- Client brands
- Competitor brands

A collection can be public or private. A public collection is available to all users. A private collection is only
available to the user who created it.

A collection can also be shared with any number of users. Through the API, you see only your own collections, public
collections and collections shared with you.

You can use collection IDs in all endpoints that take a `collections` filter or benchmark, for example in the
[brand data tools](../brand-data/index.md).

:::info Read-only

The collections endpoints are read-only. A `bav:collections:write` token scope exists, but the REST API has no
endpoints to create, update or delete collections. `POST`, `PUT`/`PATCH` and `DELETE` requests to `/api/v2/collections`
return a `400 Bad Request` response.

:::

## List all collections

To list all of the collections and browse them through the API, use the list endpoint:

```http request
GET /api/v2/collections
```

## Get a collection

If you already have the system ID of a collection, you can also get its details directly.

```http request
GET /api/v2/collections/123
```

Where `123` is the system ID of the collection.

## Schema

### Full response schema

| Key               | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                                                                                                                                       |
|-------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`              | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                                                                                                                                    |
| `name`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the collection.                                                                                                                               |
| `collection_type` | integer |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The collection type: `1` public, `2` private or `3` report (deprecated).                                                                                          |
| `uuid`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The public unique identifier for the collection. When a collection is shared outside the system, or needs a direct link, the system uses the UUID and not the ID. |
| `url`             | string  |                    :x:                    |        :x:         |        :x:         | The URL to view the collection in The Fount.                                                                                                                      |
| `created_at`      | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this collection was first created.                                                                                                         |
| `updated_at`      | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this collection was last updated.                                                                                                          |

## Additional Filters

These filters do not match a column, but you use them with the same `filter[name]=value` format as the
[default filters](../customizing/filters.md):

- `public` - Set to `1` to return only public collections.
- `shared_with_me` - Set to `1` to return only collections shared with the user.
- `mine` - Set to `1` to return only collections that the user created.

Any value turns these filters on.

## Relationships & includes

By default, the response does not include relationships. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `brands` - The [brands](brands.md) in the collection, with the brand relationship schema (`id`, `name`, `sector`
  and `signalai_id`).

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.