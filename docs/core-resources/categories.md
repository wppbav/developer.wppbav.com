---
split: true
---

# Categories
When doing a BAV study, some questions are asked that relate brands to one or more categories. These are categories that brands can belong to (one or multiple).

## List Categories

To list all of the categories, use the list endpoint:

```http request
GET /api/v1/categories
```

The categories list response contains details about the brand.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the category. |
| `name` | string | The name of the category. |
| `bav_key` | integer | The category key in the BAV database. |
| `sector` | object | An object with the category's [sector details](../relationship-schema.md) |
| `created_at` | string | A datetime string when this category was first created. |
| `updated_at` | string | A datetime string when this category was last updated. |

---

```json
{
    "data": [
        {
            "id": 604,
            "name": "Adhesives",
            "bav_key": 26205,
            "sector": {
                "id": 18,
                "name": "Household Products"
            },
            "created_at": "2021-03-18T02:25:05.000000Z",
            "updated_at": "2021-03-18T02:25:05.000000Z"
        },
        //...
    ]
    // ...
}
```

## Get a Category

You may also directly retrieve a category's details if you already have its system ID.

```http request
GET /api/v1/categories/123
```

Where `123` is the system ID of the category.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the category. |
| `name` | string | The name of the category. |
| `bav_key` | integer | The category key in the BAV database. |
| `sector` | object | An object with the category's [sector details](../relationship-schema.md) |
| `created_at` | string | A datetime string when this category was first created. |
| `updated_at` | string | A datetime string when this category was last updated. |

---

```json
{
    "data": {
        "id": 604,
        "name": "Adhesives",
        "bav_key": 26205,
        "sector": {
            "id": 18,
            "name": "Household Products"
        },
        "created_at": "2021-03-18T02:25:05.000000Z",
        "updated_at": "2021-03-18T02:25:05.000000Z"
    }
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../configurable-fields.md) for more information). The following fields can be toggled:

- `name`
- `bav_key`
- `sector`
- `created_at`
- `updated_at`

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded for the categories resource:

- `local_names` - A list of names for this category in specific countries.

## Filters

The categories endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../filters.md) by category name.
- [Updated Since](../filters.md)
- `bav_key` - Include this query parameter to search by the BAV key.
- `sectors` - Include this query parameter to limit the results to categories within the specified sector (comma-separated list of sector IDs).

## Sorting

The following fields are sortable:

- `id`
- `name`
- `bav_key`
- `sector_id`
- `created_at`
- `updated_at`
