---
split: true
---

# Brand Metric Groups

When BAV studies a brand it does so on a variety of [metrics](./metrics.md). These metrics are divided into groups. Each group relates to a specific way to look at a brand, or to a BAV model.

## List Brand Metric Groups

To list all of the groups and browse them via the API, use the list endpoint:

```http request
GET /api/v1/brand-metric-groups
```

The groups list response contains details about the group.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the group. |
| `name` | string | The primary name of the group. |
| `description` | string | A short description on what this group is about. |

---

```json
{
    "data": [
        {
            "id": 2,
            "name": "Pillars",
            "description": "The 4 pillars \u2013 Differentiation, Relevance, Esteem, and Knowledge \u2013 make up the foundation of BAV. The patterns of the pillars for a brand explain the positioning in culture"
        },
        //...
    ]
    // ...
}
```

## Get a Brand Metric Group

You may also directly retrieve a group's details if you already have its system ID.

```http request
GET /api/v1/brand-metric-groups/123
```

Where `123` is the system ID of the group.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the group. |
| `name` | string | The primary name of the group. |
| `description` | string | A short description on what this group is about. |

---

```json
{
    {
        "id": 2,
        "name": "Pillars",
        "description": "The 4 pillars \u2013 Differentiation, Relevance, Esteem, and Knowledge \u2013 make up the foundation of BAV. The patterns of the pillars for a brand explain the positioning in culture"
    },
}
```

## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../configurable-fields.md) for more information). The following fields can be toggled:

- `name`
- `description`

## Expansions

To create a leaner response data related to brands are not included in the response by default. See
the [Expansions section](../expansions.md) for more information on how this works. The following relationships can be
expanded for the brand metric groups:

- `metrics` - A list of metrics that are part of this group.

## Filters

The groups endpoint supports the following filters:

- [Pagination](../pagination.md)
- [Searching](../filters.md) by group name.
- [Updated Since](../filters.md)

## Sorting

The following fields are sortable:

- `id`
- `name`
- `description`
