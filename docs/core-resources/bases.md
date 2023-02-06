---
split: true
---

# Bases / Audiences
All brand analytics data is segmented by what we might commonly refer to as audiences or target groups. In API these are called bases.

## List Bases

To list all of the bases, use the list endpoint:

```http request
GET /api/v1/bases
```

The bases list response contains details about the brand.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the base. |
| `name` | string | The name of the base. |
| `created_at` | string | A datetime string when this base was first created. |
| `updated_at` | string | A datetime string when this base was last updated. |

---

```json
{
    "data": [
        {
            "id": 1,
            "name": "All Adults",
            "created_at": "2021-03-02T11:28:21.000000Z",
            "updated_at": "2021-03-26T10:49:49.000000Z"
        }
        //...
    ]
    // ...
}
```

## Get a Base

You may also directly retrieve a bases's details if you already have its system ID.

```http request
GET /api/v1/bases/123
```

Where `123` is the system ID of the base.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the base. |
| `name` | string | The name of the base. |
| `created_at` | string | A datetime string when this base was first created. |
| `updated_at` | string | A datetime string when this base was last updated. |

---

```json
{
    "data": {
        "id": 1,
        "name": "All Adults",
        "created_at": "2021-03-02T11:28:21.000000Z",
        "updated_at": "2021-03-26T10:49:49.000000Z"
    }
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../customizing/fields.md) for more information). The following fields can be toggled:

- `name`
- `created_at`
- `updated_at`

## Expansions

The bases resources does not have any expansions.

## Filters

- [Pagination](../pagination.md)
- [Searching](../customizing/filters.md) by base name.
- [Updated Since](../customizing/filters.md)

## Sorting

The following fields are [sortable](../customizing/filters.md):

- `id`
- `name`
- `created_at`
- `updated_at`
