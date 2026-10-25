---
sidebar_label: Factors
---

# Best Countries Factors

## What are best countries factors?

Best Countries surveys countries on individual [metrics](metrics.md) (attributes). Best Countries aggregates these
metrics into a smaller number of broader factors, such as Adventure or Entrepreneurship. The weighted factors together
give the overall Best Countries ranking. The factor data returns this ranking as `total`.

The factors endpoint gives you the list of factors and the metrics that each factor uses. To get the scores and
ranks for each country on the factors, use the [country data](country-data.md) endpoint with the `factors` data type, or
the [country factors model](models.md#country-factors).

This endpoint requires the **Best Countries Data** (`bav:best-countries-data`) scope.

## List all best countries factors

To list all of the best countries factors and browse them through the API, use the list endpoint:

```http request
GET /api/v2/best-countries-factors
```

## Get a best countries factor

If you already have the system ID of a best countries factor, you can also get its details directly.

```http request
GET /api/v2/best-countries-factors/123
```

Where `123` is the system ID of the factor.

## Schema

### Full response schema

The factor endpoint returns every column of the factor. The `name` and `description` are translatable. The endpoint
returns them as an object keyed by locale, for example `{"en": "Adventure"}`.

| Key           | Type    | Description                                                                                                         |
|---------------|---------|---------------------------------------------------------------------------------------------------------------------|
| `id`          | integer | The system ID.                                                                                                      |
| `name`        | object  | The name of the factor, keyed by locale.                                                                            |
| `key`         | string  | The machine-readable key of the factor. The [country data](country-data.md) endpoint names its factor fields after it. |
| `description` | object  | A description of the factor, keyed by locale. Can be `null`.                                                        |
| `created_at`  | string  | A datetime string when this factor was first created.                                                               |
| `updated_at`  | string  | A datetime string when this factor was last updated.                                                                |

## Filters & Sorting

This endpoint does not support filters or sorting. There are only a small number of factors. We recommend that you get
the full list and filter it in your application.

## Relationships & includes

By default, the response does not include relationships. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `metrics` - The [best countries metrics](metrics.md) that the factor uses. The API returns the metrics with all of
  their stored columns and a `pivot` object that links the metric to the factor. For the documented metric
  schema, use the [best countries metrics](metrics.md) endpoint.
