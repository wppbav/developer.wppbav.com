---
sidebar_label: Metric Groups
---

# Best Countries Metric Groups

## What are best countries metric groups?

The [best countries metrics](metrics.md) are divided into groups to make them easier to browse, such as imagery, visiting,
doing business, product origin and education. The groups are also the basis for the
Best Countries [models](models.md). For example, the country imagery model returns the metrics in the `imagery` group.

This endpoint requires the **Best Countries Data** (`bav:best-countries-data`) scope.

## List all best countries metric groups

To list all of the best countries metric groups and browse them through the API, use the list endpoint:

```http request
GET /api/v2/best-countries-metric-groups
```

## Get a best countries metric group

If you already have the system ID of a best countries metric group, you can also get its details directly.

```http request
GET /api/v2/best-countries-metric-groups/123
```

Where `123` is the system ID of the metric group.

## Schema

### Full response schema

The metric group endpoint returns every column of the group. The `name` and `description` are translatable. The
endpoint returns them as an object keyed by locale, for example `{"en": "Imagery"}`.

| Key           | Type    | Description                                                                                    |
|---------------|---------|------------------------------------------------------------------------------------------------|
| `id`          | integer | The system ID.                                                                                 |
| `is_active`   | integer | Whether the group is active (`1`) or not (`0`).                                                |
| `name`        | object  | The name of the group, keyed by locale.                                                        |
| `key`         | string  | The machine-readable key of the group, for example `imagery` or `doing-business`.              |
| `description` | object  | A description of the group, keyed by locale. Can be `null`.                                    |
| `created_at`  | string  | A datetime string when this group was first created.                                           |
| `updated_at`  | string  | A datetime string when this group was last updated.                                            |

The groups used by the Best Countries [models](models.md) are:

- `imagery` - The imagery/perception attributes. Used by the country and city imagery models.
- `visiting` - Visiting and visit consideration. Used by the visit consideration models.
- `doing-business` - Doing business and business consideration. Used by the doing business models.
- `origin` - Products made in the country. Used by the product origin model.
- `education` - University consideration and education. Used by the education model.

## Filters & Sorting

This endpoint does not support filters or sorting. There are only a small number of groups. We recommend that you get
the full list and filter it in your application.

## Relationships & includes

By default, the response does not include relationships. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `metrics` - The [best countries metrics](metrics.md) in the group. The API returns the metrics with all of their stored
  columns. For the documented metric schema, use the [best countries metrics](metrics.md) endpoint.
