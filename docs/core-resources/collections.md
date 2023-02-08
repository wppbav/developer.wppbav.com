# Collections

You may use the Collections endpoint to retrieve details about one or more collections.

## What are collections?

Assets can be grouped into various different collections, either privately by the user or publically available to all
users. You may access these for consumption via the Collections API.

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


