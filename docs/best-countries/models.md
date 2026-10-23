# Models

The Best Countries model endpoints return the calculated Best Countries data for a specific model, such as country
imagery or visit consideration. Each model returns the metrics in one [metric group](metric-groups.md) (or the
[factors](factors.md)) for each country or city, year and audience.

Unlike the [country data](country-data.md) endpoint, the models support audiences and return data for both countries
and cities.

All model endpoints require the **Best Countries Data** (`bav:best-countries-data`) scope.

## Available models

| Model                                                    | Endpoint                                                     | Default score type |
|----------------------------------------------------------|--------------------------------------------------------------|--------------------|
| [Country Imagery](#country-imagery)                      | `POST /api/v2/best-countries/countries/imagery`              | `rank`             |
| [Country Factors](#country-factors)                      | `POST /api/v2/best-countries/countries/factors`              | `rank`             |
| [Country Doing Business](#country-doing-business)        | `POST /api/v2/best-countries/countries/business`             | `percentage`       |
| [Country Visit Consideration](#country-visit-consideration) | `POST /api/v2/best-countries/countries/visit-consideration` | `rank`             |
| [Country Education](#country-education)                  | `POST /api/v2/best-countries/countries/education`            | `percentage`       |
| [Country Product Origin](#country-product-origin)        | `POST /api/v2/best-countries/countries/product-origin`       | `percentage`       |
| [City Imagery](#city-imagery)                            | `POST /api/v2/best-countries/cities/imagery`                 | `rank`             |
| [City Doing Business](#city-doing-business)              | `POST /api/v2/best-countries/cities/doing-business`          | `percentage`       |
| [City Visit Consideration](#city-visit-consideration)    | `POST /api/v2/best-countries/cities/visit-consideration`     | `percentage`       |

## Parameters

The parameters are sent as a JSON body. List parameters are arrays, and each value can be either an ID or a name.

### Country models

| Key         |          Required?           | Type   | Description                                                                                                                  |
|-------------|:----------------------------:|--------|------------------------------------------------------------------------------------------------------------------------------|
| `years`     |      :white_check_mark:      | array  | The [years](../metadata/years.md) to read, as year IDs or calendar years.                                                    |
| `countries` |  :x: (defaults to all)       | array  | The [countries](../metadata/countries.md) to read, by country ID, two- or three-letter ISO code, or name. Returns every country measured in the year when left out. |
| `audiences` | :x: (defaults to All Adults) | array  | The [audiences](../audiences/audiences.md) to read, by audience ID or name.                                                  |
| `scoreType` |  :x: (depends on the model)  | string | The score type. See [score types](#score-types).                                                                             |
| `format`    |   :x: (defaults to `json`)   | string | The response format: `json`, `llm` or `mcp`. See [response formats](../brandscape-models/index.md#response-formats).        |

### City models

The city models take the same parameters as the country models, but with `cities` in place of `countries`.

| Key         |          Required?           | Type   | Description                                                                                                         |
|-------------|:----------------------------:|--------|---------------------------------------------------------------------------------------------------------------------|
| `years`     |      :white_check_mark:      | array  | The [years](../metadata/years.md) to read, as year IDs or calendar years.                                           |
| `cities`    |  :x: (defaults to all)       | array  | The [cities](../metadata/cities.md) to read, by city ID or name. Returns every city measured in the year when left out. |
| `audiences` | :x: (defaults to All Adults) | array  | The [audiences](../audiences/audiences.md) to read, by audience ID or name.                                         |
| `scoreType` |  :x: (depends on the model)  | string | The score type. See [score types](#score-types).                                                                    |
| `format`    |   :x: (defaults to `json`)   | string | The response format: `json`, `llm` or `mcp`. See [response formats](../brandscape-models/index.md#response-formats). |

### Score types

The `scoreType` parameter accepts:

- `rank` - The country's or city's rank against the others, where 1 is best.
- `percentage` - The percentage of respondents, for example those who would consider visiting.
- `score` - A score from 0 to 100.

The default score type depends on the model and is listed in the [table above](#available-models).

### Example

```http request
POST /api/v2/best-countries/countries/imagery
```

```json
{
  "years": [2025],
  "countries": ["US", "GB"],
  "audiences": [1],
  "scoreType": "score"
}
```

## Schema

The `json` response is an array with one object per country (or city), year and audience combination. Each object
contains:

| Key              | Type    | Description                                                                                                        |
|------------------|---------|--------------------------------------------------------------------------------------------------------------------|
| `country`        | string  | The name of the country. Only on the country models.                                                               |
| `city`           | string  | The name of the city. Only on the city models.                                                                     |
| `year`           | integer | The calendar year.                                                                                                 |
| `year_id`        | integer | The system ID of the [year](../metadata/years.md). Only on the country models.                                     |
| `audience_id`    | integer | The system ID of the [audience](../audiences/audiences.md).                                                        |
| `audience`       | string  | The name of the audience.                                                                                          |
| _metric keys_    | number  | One field per metric in the model, named after the [metric](metrics.md) or [factor](factors.md) `key`, holding the value for the requested score type. |

```json
[
  {
    "country": "United States",
    "year_id": 45,
    "friendly": 12,
    "safe": 20,
    "audience_id": 1,
    "audience": "All Adults",
    "year": 2025
  }
]
```

The values in the example are illustrative, and only some of the metrics are shown.

## Country Imagery

```http request
POST /api/v2/best-countries/countries/imagery
```

How people describe each country, attribute by attribute. Returns the metrics in the `imagery` metric group. Uses
the `rank` score type by default.

## Country Factors

```http request
POST /api/v2/best-countries/countries/factors
```

Each country's scores on the Best Countries [factors](factors.md), the weighted categories that the overall ranking is
calculated from. Returns one field per factor `key`, along with the overall `total`. Uses the `rank` score type by
default.

## Country Doing Business

```http request
POST /api/v2/best-countries/countries/business
```

Whether business decision makers would consider doing business in each country, have done business there, or would
never consider it. Returns the metrics in the `doing-business` metric group. Uses the `percentage` score type by
default.

## Country Visit Consideration

```http request
POST /api/v2/best-countries/countries/visit-consideration
```

Whether people would consider visiting each country, have visited it, or would never consider it. Returns the metrics in
the `visiting` metric group. Uses the `rank` score type by default.

## Country Education

```http request
POST /api/v2/best-countries/countries/education
```

Whether people would consider going to university in each country, and whether they believe it has top universities.
Returns the metrics in the `education` metric group. Uses the `percentage` score type by default.

## Country Product Origin

```http request
POST /api/v2/best-countries/countries/product-origin
```

Whether people would consider, prefer or have bought products made in each country. Returns the metrics in the `origin`
metric group. Uses the `percentage` score type by default.

## City Imagery

```http request
POST /api/v2/best-countries/cities/imagery
```

How people describe each city, attribute by attribute. Returns the metrics in the `imagery` metric group that apply to
cities. Uses the `rank` score type by default.

## City Doing Business

```http request
POST /api/v2/best-countries/cities/doing-business
```

Whether people would consider doing business in each city, have done business there, or would never consider it.
Returns the metrics in the `doing-business` metric group that apply to cities. Uses the `percentage` score type by
default.

## City Visit Consideration

```http request
POST /api/v2/best-countries/cities/visit-consideration
```

Whether people would consider visiting each city, have visited it, or would never consider it. Returns the metrics in
the `visiting` metric group that apply to cities. Uses the `percentage` score type by default.
