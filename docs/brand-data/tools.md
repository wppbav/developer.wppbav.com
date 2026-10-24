---
sidebar_label: Overview
---

# Tools

The tools do further work on BAV data, such as combining metrics to tell a specific story or running calculations to
arrive at new insights. They correspond to the tools in The Fount and its TurboPitch suite, such as the
[Commitment Funnel](commitment-funnel.md), [SWOT](swot.md) or [Agency Change Predictor](agency-change-predictor.md).

Each tool has its own parameters and response, which are described on its page. We also suggest that you try each tool
in The Fount to get a better understanding of the results.

If you only need the metrics behind a BAV model, such as the Powergrid or Pillars, use the
[data models](data-models.md) instead.

## Access

All tool endpoints require a token with the **BAV Brand Data** (`bav:brand-data`) scope. In addition, each tool
requires that the user has access to that tool in The Fount; otherwise a `403` response is returned.

## Parameter formats

Most tool endpoints take comma-separated lists of IDs, for example `brands=148,149`. Where a page lists a parameter as
taking a single ID, only one value is accepted. The [Commitment Funnel](commitment-funnel.md) and the
[Agency Change Predictor](agency-change-predictor.md) instead follow the [data models](data-models.md) and take array
parameters (`brands[]=148&brands[]=149`), which also accept names, and can select studies by `countries` and `years`.

Unless stated otherwise, the `audiences` parameter defaults to All Adults (audience ID `1`), and responses are returned
as JSON in a `data` key.

## Data model tools

Most of the [data models](data-models.md) can also be requested as a tool, with a `GET` request and the
[data model parameters](data-models.md#parameters) sent as query parameters. The response is the same as for the data
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
