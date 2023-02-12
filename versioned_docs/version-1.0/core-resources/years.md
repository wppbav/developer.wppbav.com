---
split: true
---

# Years

Most of the BAV dataset is tied up in one way or another to a year.

## List Years

To list all of the years, use the list endpoint:

```http request
GET /api/v1/years
```

The years list response contains details about the year.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the year. |
| `year` | integer | The "name" of the year. |

---

```json
{
    "data": [
        {
            "id": 30,
            "year": 2022
        },
        //...
    ]
    // ...
}
```

## Get a Base

You may also directly retrieve a year's details if you already have its system ID.

```http request
GET /api/v1/years/123
```

Where `123` is the system ID of the year.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the year. |
| `year` | integer | The "name" of the year. |
---

```json
{
    "data": {
        "id": 30,
        "year": 2022
    },
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../configurable-fields.md) for more information). The following fields can be toggled:

- `year`

## Expansions

The years resources does not have any expansions.

## Filters

- [Pagination](../pagination.md)
- [Searching](../filters.md) by year "name".
- [Updated Since](../filters.md)

## Sorting

The following fields are [sortable](../filters.md):

- `id`
- `year`
