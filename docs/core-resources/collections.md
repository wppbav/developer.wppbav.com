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
| `description`     | string  |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                         |
| `currency`        | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `isin`            | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `ipo_date`        | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `fiscal_year_end` | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `street_address`  | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `state`           | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `postal_code`     | -       |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `city`            | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `website_url`     | string  |            :white_check_mark:             | :white_check_mark: | :white_check_mark: | -                                                         |
| `officers`        | -       |            :white_check_mark:             |        :x:         | :white_check_mark: | -                                                         |
| `created_at`      | string  |                    :x:                    | :white_check_mark: | :white_check_mark: | A datetime string when this collection was first created. |
| `updated_at`      | string  | ([updated since](../customizing/filters)) | :white_check_mark: | :white_check_mark: | A datetime string when this collection was last updated.  |

### Relationship Response Schema

The slim relationship schema is used when the brand is used as part of an include in another resource.

| Key               | Type    | Description                                               |
|-------------------|---------|-----------------------------------------------------------|
| `id`              | integer | The system ID for the brand.                              |
| `name`            | string  | The primary name of the brand.                            |
| `collection_type` | -       | -                                                         |
| `uuid`            | -       | -                                                         |
| `created_at`      | string  | A datetime string when this collection was first created. |
| `updated_at`      | string  | A datetime string when this collection was last updated.  |

