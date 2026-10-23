# Collections

## What are collections?

Collections are a way to group brands together. A collection can then be used for a variety of purposes to save time
when adding brands. Instead of searching for a number of brands every time a user can add the collection in one go.
Examples of useful collections are:

- All brands that are part of a company.
- Client brands
- Competitor brands

A collection may be public or private. A public collection is available to all users. A private collection is only
available to the user who created it.

A collection can also be shared with any number of users. Through the API you only see your own collections, public
collections and collections shared with you.

Collection IDs can be used wherever an endpoint takes a `collections` filter or benchmark, for example in the
[brand data tools](../brand-data/index.md).

:::info Read-only

The collections endpoints are read-only. Although a `bav:collections:write` token scope exists, the REST API has no
endpoints for creating, updating or deleting collections, and `POST`, `PUT`/`PATCH` and `DELETE` requests to
`/api/v2/collections` return a `400 Bad Request` response.

:::

## List all collections

To list all of the collections and browse them via the API, use the list endpoint:

```http request
GET /api/v2/collections
```

## Get a collection

You may also directly retrieve a collection's details if you already have its system ID.

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
| `uuid`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The public unique identifier for the collection. Whenever a collection is shared outside of the system, or a direct link is required we use the UUID over the ID. |
| `url`             | string  |                    :x:                    |        :x:         |        :x:         | The URL to view the collection in The Fount.                                                                                                                      |
| `created_at`      | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this collection was first created.                                                                                                         |
| `updated_at`      | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this collection was last updated.                                                                                                          |

## Additional Filters

For convenience, we have a set of additional filters that are not available in
the [default filters](../customizing/filters.md) or are part of the columns. These are:

- `public` - Set to `1` to only return public collections.
- `shared_with_me` - Set to `1` to only return collections shared with the user.
- `mine` - Set to `1` to only return collections created by the user.

Any value turns these filters on.

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `brands` - The [brands](brands.md) in the collection, using the brand relationship schema (`id`, `name`, `sector`
  and `signalai_id`).

## Searching

This endpoint supports searching. See the [searching section](../customizing/searching) for more details.