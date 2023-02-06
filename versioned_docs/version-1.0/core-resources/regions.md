---
split: true
---

# Regions

Many of the BAV resources rely on segmenting data by country. Countries in turn belong to different geographical
regions. This resource contains a list of all the regions.

## List Regions

To list all of the regions and browse them via the API, use the list endpoint:

```http request
GET /api/v1/regions
```

The brand list response contains details about the region.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the region. |
| `name` | string | The name of the region in english. |

---

```json
{
    "data": [
        {
            "id": 7,
            "name": "Africa"
        }
        //...
    ]
    // ...
}
```

## Get a Region

You may also directly retrieve a region's details if you already have its system ID.

```http request
GET /api/v1/regions/123
```

Where `123` is the system ID of the region.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the region. |
| `name` | string | The name of the region in english. |

---

```json
{
    "data": {
        "id": 7,
        "name": "Africa"
    }
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../configurable-fields.md) for more information). The following fields can be toggled:

- `name`

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded:

- `countries` - A slimmer list of countries that belong to this region.

## Filters

The regions endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../filters.md) by region name.
- [Updated Since](../filters.md)

## Sorting

The following fields are [sortable](../filters.md):

- `id`
- `name`
