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

A collection can also be shared with any number of users.

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

| Key               | Type    |                Filterable                 |      Sortable      |    Configurable    | Description                                               |
|-------------------|---------|:-----------------------------------------:|:------------------:|:------------------:|-----------------------------------------------------------|
| `id`              | integer |        :white_check_mark: (exact)         | :white_check_mark: | :white_check_mark: | The system ID.                                            |
| `name`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | The primary name of the collection.                       |
| `collection_type` | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `uuid`            | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `created_at`      | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this collection was first created. |
| `updated_at`      | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this collection was last updated.  |


