---
sidebar_label: Overview
---

# Tools

The tools process BAV data further. For example, they combine metrics to tell a specific story, or they run calculations
to find new insights. They correspond to the tools in The Fount and its TurboPitch suite, such as the
[Commitment Funnel](commitment-funnel.md), [SWOT](swot.md) or [Agency Change Predictor](agency-change-predictor.md).

Each tool has its own parameters and response, which are described on its page. We also recommend that you try each tool
in The Fount to better understand the results.

If you only need the metrics behind a BAV model, such as the Powergrid or Pillars, use the
[data models](data-models.md) instead.

## Access

All tool endpoints require a token with the **BAV Brand Data** (`bav:brand-data`) scope. Each tool also
requires that the user has access to that tool in The Fount. If the user does not have access, the API returns a `403`
response.

## Parameter formats

Most tool endpoints take comma-separated lists of IDs, for example `brands=148,149`. If a page lists a parameter as a
single ID, the parameter accepts only one value. The [Commitment Funnel](commitment-funnel.md) and the
[Agency Change Predictor](agency-change-predictor.md) use the parameter format of the [data models](data-models.md)
instead. They take array parameters (`brands[]=148&brands[]=149`), which also accept names. They can also select
studies by `countries` and `years`.

Unless a page states otherwise, the `audiences` parameter defaults to All Adults (audience ID `1`). The API returns
responses as JSON in a `data` key.

## Data model tools

You can also request most of the [data models](data-models.md) as a tool. Send a `GET` request with the
[data model parameters](data-models.md#parameters) as query parameters. The response is the same as for the data
model.

| Tool                                | Endpoint                          | Same as                                  |
|-------------------------------------|-----------------------------------|------------------------------------------|
| [Imagery](imagery.md)               | `GET /api/v2/tools/imagery`        | `POST /api/v2/brandscape/imagery`        |
| [Personality](personality.md)       | `GET /api/v2/tools/personality`    | `POST /api/v2/brandscape/personality`    |
| [Pillars](pillars.md)               | `GET /api/v2/tools/pillars`        | `POST /api/v2/brandscape/pillars`        |
| [Powergrid](powergrid.md)           | `GET /api/v2/tools/powergrid`      | `POST /api/v2/brandscape/powergrid`      |
| [Preferences](preferences.md)       | `GET /api/v2/tools/preferences`    | `POST /api/v2/brandscape/preferences`    |
| [Recommendation](recommendation.md) | `GET /api/v2/tools/recommendation` | `POST /api/v2/brandscape/recommendation` |
| [Usage](usage.md)                   | `GET /api/v2/tools/usage`          | `POST /api/v2/brandscape/usage`          |

```http request
GET /api/v2/tools/pillars?brands[]=148&countries[]=US&years[]=2025
```

`GET /api/v2/tools/super-cx` is not the same as the Super CX data model. It is a separate
[Super CX tool](super-cx-tool.md) with its own parameters and response.
