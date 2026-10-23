---
sidebar_label: Metric Groups
---

# Best Countries Metric Groups

## What are best countries metric groups?

The [best countries metrics](metrics.md) are divided into groups for easier browsing, such as imagery, visiting,
doing business, product origin and education. The groups also make up the basis for the
Best Countries [models](models.md). For example, the country imagery model returns the metrics in the `imagery` group.

This endpoint requires the **Best Countries Data** (`bav:best-countries-data`) scope.

## List all best countries metric groups

To list all of the best countries metric groups and browse them via the API, use the list endpoint:

```http request
GET /api/v2/best-countries-metric-groups
```

## Get a best countries metric group

You may also directly retrieve a best countries metric group's details if you already have its system ID.

```http request
GET /api/v2/best-countries-metric-groups/123
```

Where `123` is the system ID of the metric group.

## Schema

### Full response schema

The metric group endpoint returns every column of the group. The `name` and `description` are translatable and are
returned as an object keyed by locale, for example `{"en": "Imagery"}`.

| Key           | Type    | Description                                                                                    |
|---------------|---------|------------------------------------------------------------------------------------------------|
| `id`          | integer | The system ID.                                                                                 |
| `is_active`   | integer | Whether the group is active (`1`) or not (`0`).                                                |
| `name`        | object  | The name of the group, keyed by locale.                                                        |
| `key`         | string  | The machine-readable key of the group, for example `imagery` or `doing-business`.              |
| `description` | object  | A description of the group, keyed by locale. May be `null`.                                    |
| `created_at`  | string  | A datetime string when this group was first created.                                           |
| `updated_at`  | string  | A datetime string when this group was last updated.                                            |

The groups used by the Best Countries [models](models.md) are:

- `imagery` - The imagery/perception attributes. Used by the country and city imagery models.
- `visiting` - Visiting and visit consideration. Used by the visit consideration models.
- `doing-business` - Doing business and business consideration. Used by the doing business models.
- `origin` - Products made in the country. Used by the product origin model.
- `education` - University consideration and education. Used by the education model.

## Filters & Sorting

This endpoint does not support any filters or sorting. As there are only a handful of groups, we recommend that you
retrieve the full list and filter it in your application.

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `metrics` - The [best countries metrics](metrics.md) in the group. The metrics are returned with all of their stored
  columns. For the documented metric schema, use the [best countries metrics](metrics.md) endpoint.
