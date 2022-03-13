---
split: true
---

# Sectors

When doing a BAV study, some questions are asked that relate brands to one or more categories. These are categories that
brands can belong to (one or multiple). These categories are combined to create broader sectors.

## List Sectors

To list all of the sectors, use the list endpoint:

```http request
GET /api/v1/sectors
```

The sectors list response contains details about the brand.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the sector. |
| `name` | string | The name of the sector. |

---

```json
{
    "data": [
        {
            "id": 20,
            "name": "Apparel & Accessories"
        }
        //...
    ]
    // ...
}
```

## Get a Sector

You may also directly retrieve a sector's details if you already have its system ID.

```http request
GET /api/v1/sectors/123
```

Where `123` is the system ID of the sector.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the sector. |
| `name` | string | The name of the sector. |

---

```json
{
    "data": {
        "id": 20,
        "name": "Apparel & Accessories"
    }
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../configurable-fields.md) for more information). The following fields can be toggled:

- `name`

## Expansions

To create a leaner response data related to sectors are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded for the categories resource:

- `categories` - A list of categories that belong to this sector.

## Filters

The categories endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../filters.md) by category name.
- [Updated Since](../filters.md)

## Sorting

The following fields are sortable:

- `id`
- `name`
