---
sidebar_label: Factors
---

# Best Countries Factors

## What are best countries factors?

In Best Countries, the individual [metrics](metrics.md) (attributes) that countries are surveyed on are aggregated into
a smaller number of broader factors, such as Adventure or Entrepreneurship. The factors are weighted together to
calculate the overall Best Countries ranking, which is returned as `total` in the factor data.

The factors endpoint gives you the list of factors and which metrics each factor is built from. To get the scores and
ranks for each country on the factors, use the [country data](country-data.md) endpoint with the `factors` data type, or
the [country factors model](models.md#country-factors).

This endpoint requires the **Best Countries Data** (`bav:best-countries-data`) scope.

## List all best countries factors

To list all of the best countries factors and browse them via the API, use the list endpoint:

```http request
GET /api/v2/best-countries-factors
```

## Get a best countries factor

You may also directly retrieve a best countries factor's details if you already have its system ID.

```http request
GET /api/v2/best-countries-factors/123
```

Where `123` is the system ID of the factor.

## Schema

### Full response schema

The factor endpoint returns every column of the factor. The `name` and `description` are translatable and are returned
as an object keyed by locale, for example `{"en": "Adventure"}`.

| Key           | Type    | Description                                                                                                         |
|---------------|---------|---------------------------------------------------------------------------------------------------------------------|
| `id`          | integer | The system ID.                                                                                                      |
| `name`        | object  | The name of the factor, keyed by locale.                                                                            |
| `key`         | string  | The machine-readable key of the factor. The [country data](country-data.md) endpoint names its factor fields after it. |
| `description` | object  | A description of the factor, keyed by locale. May be `null`.                                                        |
| `created_at`  | string  | A datetime string when this factor was first created.                                                               |
| `updated_at`  | string  | A datetime string when this factor was last updated.                                                                |

## Filters & Sorting

This endpoint does not support any filters or sorting. As there are only a handful of factors, we recommend that you
retrieve the full list and filter it in your application.

## Relationships & includes

By default, relationships are not included. See the [includes section](../customizing/includes) for more information
on how this works. The following relationships are available:

- `metrics` - The [best countries metrics](metrics.md) that the factor is built from. The metrics are returned with all
  of their stored columns, along with a `pivot` object linking the metric to the factor. For the documented metric
  schema, use the [best countries metrics](metrics.md) endpoint.
