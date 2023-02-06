---
split: true
---

# Brand Metrics

When BAV studies a brand it does so on a variety of metrics. These metrics are divided into [groups](./metric-groups.md). Each group relates
to a specific way to look at a brand, or to a BAV model. 

## List Metrics

To list all of the metrics and browse them via the API, use the list endpoint:

```http request
GET /api/v1/brand-metrics
```

The metrics list response contains details about the metrics.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the metric. |
| `name` | string | The primary name of the metric. |
| `description` | string | A short description on what this metric is about. |
| `is_active` | bool | If the metric is active or deprecated. |
| `is_shown_ui` | bool | If the metric should be shown to users or only used for backend calculations. |
| `group` | object | An object with the ID and name of the [brand metric group](./metric-groups.md) that the metric belongs to. |
| `created_at` | string | A datetime string when this metric was first created. |
| `updated_at` | string | A datetime string when this metric was last updated. |

---

```json
{
    "data": [
        {
            "id": 1,
            "name": "Brand Base",
            "description": null,
            "is_active": true,
            "is_shown_ui": true,
            "group": {
                "id": 1,
                "name": "Base Sizes"
            },
            "created_at": null,
            "updated_at": "2021-05-14T23:10:08.000000Z"
        }
        //...
    ]
    // ...
}
```

## Get a Metric

You may also directly retrieve a metric's details if you already have its system ID.

```http request
GET /api/v1/brand-metrics/123
```

Where `123` is the system ID of the metric.

### Schema

| Key | Type | Description |
| --- | ---- | ----------- |
| `id` | integer | The system ID for the metric. |
| `name` | string | The primary name of the metric. |
| `description` | string | A short description on what this metric is about. |
| `is_active` | bool | If the metric is active or deprecated. |
| `is_shown_ui` | bool | If the metric should be shown to users or only used for backend calculations. |
| `group` | object | An object with the ID and name of the [brand metric group](./metric-groups.md) that the metric belongs to. |
| `created_at` | string | A datetime string when this metric was first created. |
| `updated_at` | string | A datetime string when this metric was last updated. |

---

```json
{
    "data": {
        "id": 1,
        "name": "Brand Base",
        "description": null,
        "is_active": true,
        "is_shown_ui": true,
        "group": {
            "id": 1,
            "name": "Base Sizes"
        },
        "created_at": null,
        "updated_at": "2021-05-14T23:10:08.000000Z"
    }
}
```
## Configurable Fields

If you only need some of the fields you can optimize the request for a leaner response (
see [Configurable Fields](../customizing/fields.md) for more information). The following fields can be toggled:

- `bav_id`
- `name`
- `description`
- `is_active`
- `is_shown_ui`
- `group`
- `created_at`
- `updated_at`

## Expansions

This resource does not support expansions.

## Filters

- [Pagination](../pagination.md)
- [Searching](../customizing/filters.md) by metric name.
- [Updated Since](../customizing/filters.md)
- `is_active` - Only include metrics that are active. Defaults to true.
- `is_shown_ui` - Only include metrics designed to be shown in the UI. Defaults to true.
- `groups` - A comma-separated list of metric groups using their system ID.

## Sorting

The following fields are sortable:

- `id`
- `name`
- `description`
- `group_id`
- `created_at`
- `updated_at`
