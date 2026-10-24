---
sidebar_label: Super CX
---

# Super CX Tool

Super CX measures a brand's perceived customer experience. It is made up of the overall Super CX score and its Head,
Heart and X Factor components, which in turn are built from a set of underlying measures.

Super CX is category specific. The category should always be shown together with the brand, as it can significantly
change the interpretation of the results.

The Super CX tool returns the percentile ranks of the Super CX metrics for a set of brands in one study. For Super CX
data with the same parameters and response as the other data models, use the [Super CX data model](super-cx.md).

## Creating a query

```http request
GET /api/v2/tools/super-cx
```

This endpoint requires the `bav:brand-data` scope and that your account has access to the Super CX tool in The Fount.

## Parameters

| Key         |          Required?           | Type          | Description                                    |
|-------------|:----------------------------:|---------------|------------------------------------------------|
| `brands`    |      :white_check_mark:      | numeric array | A comma-separated list of Brand IDs.           |
| `studies`   |      :white_check_mark:      | numeric       | A single Study ID.                             |
| `audiences` | :x: (defaults to All Adults) | numeric       | A single Audience ID.                          |

## Response

The response contains a `data` array with one object per brand.

| Key        | Type   | Description                                                                         |
|------------|--------|-------------------------------------------------------------------------------------|
| `name`     | string | The series name for the brand, for use as a label.                                  |
| `study`    | object | The [study](../studies/studies.md), with `id` and `name`.                           |
| `country`  | object | The [country](../metadata/countries.md), with `id` and `name`.                      |
| `year`     | object | The [year](../metadata/years.md), with `id` and `name`.                             |
| `audience` | object | The [audience](../audiences/audiences.md), with `id` and `name`.                    |
| `data`     | object | The Super CX metrics, keyed by metric key. Each has a `label` and a `value`, where the `value` is the percentile rank (0-100). |

The metric keys in `data` are:

- `super_cx` - The overall Super CX score.
- `head`, `heart` and `x_factor` - The three components of Super CX.
- `value`, `simplicity`, `courtesy`, `committed`, `attracted` and `evangelical` - The underlying measures.

```json
{
  "data": [
    {
      "name": "Coca-Cola",
      "study": { "id": 635, "name": "USA 2025" },
      "country": { "id": 6, "name": "United States" },
      "year": { "id": 45, "name": "2025" },
      "audience": { "id": 1, "name": "All Adults" },
      "data": {
        "super_cx": { "label": "Super CX", "value": 82.4 },
        "head": { "label": "Head", "value": 75.1 },
        "heart": { "label": "Heart", "value": 88.0 },
        "x_factor": { "label": "X Factor", "value": 79.3 }
      }
    }
  ]
}
```

The values in the example are illustrative, and only some of the metrics are shown.
