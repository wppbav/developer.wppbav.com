---
sidebar_label: Data Models
---

# Data Models

The data model endpoints return the data behind the core BAV data models, such as the Powergrid, Pillars and
Imagery. Rather than having to know which [brand metrics](../metrics/metrics.md) make up each model, you ask for the
model and get back the relevant metrics for each brand, together with the brand, study, audience and category they
belong to.

The following models are available:

| Model                                     | Endpoint                          | Category specific? | Also available as          |
|-------------------------------------------|-----------------------------------|:------------------:|----------------------------|
| [Powergrid](powergrid.md)                 | `POST /api/v2/brandscape/powergrid`      |        :x:         | `GET /api/v2/tools/powergrid`      |
| [Pillars](pillars.md)                     | `POST /api/v2/brandscape/pillars`        |        :x:         | `GET /api/v2/tools/pillars`        |
| [Imagery](imagery.md)                     | `POST /api/v2/brandscape/imagery`        |        :x:         | `GET /api/v2/tools/imagery`        |
| [Personality](personality.md)             | `POST /api/v2/brandscape/personality`    |        :x:         | `GET /api/v2/tools/personality`    |
| [Influence](influence.md)                 | `POST /api/v2/brandscape/influence`      |        :x:         | -                                  |
| [Brand Worth](brand-worth.md)             | `POST /api/v2/brandscape/brand-worth`    |        :x:         | -                                  |
| [Preferences](preferences.md)             | `POST /api/v2/brandscape/preferences`    | :white_check_mark: | `GET /api/v2/tools/preferences`    |
| [Usage](usage.md)                         | `POST /api/v2/brandscape/usage`          | :white_check_mark: | `GET /api/v2/tools/usage`          |
| [Recommendation](recommendation.md)       | `POST /api/v2/brandscape/recommendation` | :white_check_mark: | `GET /api/v2/tools/recommendation` |
| [Super CX](super-cx.md)                   | `POST /api/v2/brandscape/super-cx`       | :white_check_mark: | `GET /api/v2/tools/super-cx`*      |

\* `GET /api/v2/tools/super-cx` is a separate tool endpoint with its own parameters and response. See
the [Super CX](super-cx.md) page.

The [Agency Change Predictor](agency-change-predictor.md) is built on the same filters, but returns its own response.

All data model endpoints require the **BAV Brand Data** (`bav:brand-data`) scope.

## Category specific and category agnostic models

Most BAV metrics are category agnostic. Respondents are asked to evaluate the brand without a specific category in mind.
For these models, the category in the response has no analytical significance.

Usage, preferences, recommendation and Super CX are category specific. Respondents are asked about the brand in the
specific category it is studied in. For these models the category should always be shown together with the brand, as
it can significantly change the interpretation of the results.

## Creating a query

Each model is available as a `POST` request to `/api/v2/brandscape/{model}` where the parameters are sent as a JSON
body. Most models are also available as a `GET` request to `/api/v2/tools/{model}` where the same parameters are sent
as query parameters. The two return the same response.

```http request
POST /api/v2/brandscape/pillars
GET /api/v2/tools/pillars?brands[]=148&countries[]=US&years[]=2025
```

## Parameters

All data model endpoints share the same set of parameters.

List parameters are arrays. In a query string, pass repeated values (`brands[]=148&brands[]=149`). Each value can be
either an ID or a name. When you pass a name, the system will attempt to find the right record based on the similarity
of the name.

| Key           |                Required?                 | Type   | Description                                                                                                                                                                                                                                                       |
|---------------|:----------------------------------------:|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `brands`      |           At least one*          | array  | [Brand](../brands/brands.md) IDs or names. Max 50.                                                                                                                                                                                                |
| `studies`     |           At least one*          | array  | [Study](../studies/studies.md) IDs or names. Max 50.                                                                                                                                                                                              |
| `countries`   |           At least one*          | array  | [Country](../metadata/countries.md) IDs, ISO 3166-1 alpha-2 or alpha-3 codes, or names. Max 50.                                                                                                                                                   |
| `years`       |           At least one*          | array  | [Year](../metadata/years.md) IDs or year numbers (e.g. `2025`). Max 50.                                                                                                                                                                           |
| `audiences`   |       :x: (defaults to All Adults)       | array  | [Audience](../audiences/audiences.md) IDs or names. Max 50.                                                                                                                                                                                       |
| `study_types` |       :x: (defaults to `syndicated`)     | array  | The kinds of study that a `countries` and `years` filter may resolve to: `syndicated` (the full BAV study), `snap` (SnapBAV), `fused` (AO+BAV, not comparable to syndicated studies) or `custom` (bespoke studies). Ignored when `studies` is set. |
| `benchmarks`  |                   :x:                    | object | Benchmark the brands against the average of a competitive set. See [benchmarks](#benchmarks).                                                                                                                                                     |
| `format`      |          :x: (defaults to `json`)        | string | The response format. See [response formats](#response-formats).                                                                                                                                                                                  |

\* At least one of `brands`, `studies`, `countries` or `years` is required.

When you filter by `countries` and `years` rather than `studies`, the studies are chosen for you, limited to
the `study_types` you ask for. By default only the syndicated studies are used, so that the response does not mix in
SnapBAV or fused studies that are not comparable to them.

An example `POST` body:

```json
{
  "brands": ["148", "149"],
  "countries": ["US"],
  "years": ["2025"],
  "audiences": ["1"]
}
```

### Benchmarks

You can add comparison rows to the response by benchmarking the brands against the average of one or more competitive
sets. Each benchmark adds a row to the response.

- `benchmarks[categories]` - A comma-separated list of [category](../studies/categories.md) IDs.
- `benchmarks[collections]` - A comma-separated list of [collection](../brands/collections.md) IDs.
- `benchmarks[sectors]` - A comma-separated list of [sector](../metadata/sectors.md) IDs.

```json
{
  "brands": ["148"],
  "studies": ["635"],
  "benchmarks": {
    "categories": "12,13"
  }
}
```

## Response formats

The `format` parameter accepts:

- `json` - The default. The standard API response documented below.
- `llm` - The data formatted for use in AI prompts. The response contains `model_instructions` (instructions describing
  the model), `data` (the data as a CSV string) and `prompt` (a finished prompt that combines the instructions and the
  data, ready to send to an AI model).
- `mcp` - The response shape used by our [MCP servers](../ai/mcp/intro.md).

## Schema

The `json` response is an object with a `meta` object and a `data` array.

### Meta

| Key                    | Type    | Description                                                                                     |
|------------------------|---------|-------------------------------------------------------------------------------------------------|
| `source`               | string  | A source label naming the studies and audiences the data came from, suitable for captioning.   |
| `is_category_specific` | boolean | Whether the model is category specific. See [above](#category-specific-and-category-agnostic-models). |

Some models add extra keys to the meta object. These are listed on the model's page.

### Data

Each item in `data` is a data point for one brand, in one study, category and audience.

| Key                    | Type         | Description                                                                                                                                                         |
|------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                 | string       | `brand` for individual brand data points. Benchmark rows have a different type.                                                                                     |
| `study`                | string       | The name of the [study](../studies/studies.md).                                                                                                                     |
| `study_id`             | integer      | The system ID of the study.                                                                                                                                         |
| `year`                 | string       | The year.                                                                                                                                                           |
| `year_id`              | integer      | The system ID of the [year](../metadata/years.md).                                                                                                                  |
| `country`              | string       | The country name.                                                                                                                                                   |
| `country_id`           | integer      | The system ID of the [country](../metadata/countries.md).                                                                                                           |
| `base`                 | string       | The audience name.                                                                                                                                                  |
| `base_id`              | integer      | The system ID of the [audience](../audiences/audiences.md).                                                                                                         |
| `brand`                | string       | The brand name.                                                                                                                                                     |
| `brand_id`             | integer      | The system ID of the [brand](../brands/brands.md).                                                                                                                  |
| `brand_variation`      | string       | The brand variation, used to differentiate between different spellings of the same brand.                                                                          |
| `brand_variation_id`   | integer      | The system ID of the brand variation.                                                                                                                               |
| `brand_variation_key`  | integer      | The key of the brand variation. This can be both a positive and negative integer.                                                                                   |
| `local_name`           | string       | The name of the brand (in English) as shown to the respondent in the survey.                                                                                       |
| `category`             | string       | The category that respondents were asked the brand's usage, preference and recommendation in. All other metrics are category agnostic and unrelated to the category. |
| `category_id`          | integer      | The system ID of the [category](../studies/categories.md).                                                                                                          |
| `sector`               | string       | The sector that the brand belongs to.                                                                                                                               |
| `sector_id`            | integer      | The system ID of the [sector](../metadata/sectors.md).                                                                                                              |
| `period`               | integer      | The period the data point is for. Typically Full Year (`1`) or Full Year - Rolling (`8`).                                                                           |
| `company`              | string       | The name of the company that owns the brand.                                                                                                                        |
| `company_id`           | integer      | The system ID of the [company](../company-data/companies.md).                                                                                                       |
| `competitive_set`      | string\|null | The name of the competitive set. Only set for benchmark rows.                                                                                                      |
| `competitive_set_id`   | integer\|null | The system ID of the competitive set. Only set for benchmark rows.                                                                                                |
| `competitive_set_type` | string\|null | The type of competitive set. Only set for benchmark rows.                                                                                                          |
| `classification`       | object\|null | The model's own reading of the data point, such as the Powergrid quadrant or pillar pattern. Only set on models that classify brands. See [classification](#classification). |
| `metrics`              | object       | The metrics for the data point, keyed by metric key. See [metrics](#metrics).                                                                                      |

### Metrics

The `metrics` object is keyed by the metric key (for example `differentiation`). Each metric is an object with all of
the score types. A score type that the metric does not support is `null`.

| Key                | Type        | Description                                                                                                                                      |
|--------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `key`              | string      | The metric key. See [brand metrics](../metrics/metrics.md).                                                                                      |
| `rank`             | float\|null | The percentile rank (0-100) comparing the brand to all other brands in the market.                                                              |
| `value`            | float\|null | A raw value for metrics that have none of the other score types, such as base sizes.                                                            |
| `percentage`       | float\|null | The percentage (0-100) of respondents, for example those who selected the attribute.                                                            |
| `construct`        | float\|null | The underlying calculated score for metrics built from other metrics or respondent-level measures. This is not meant for display or analysis.   |
| `brandscape_index` | float\|null | An index of the brand against the whole brandscape. Values above 100 are above average.                                                         |
| `category_index`   | float\|null | An index of the brand against its category. Values above 100 are above average.                                                                 |

### Classification

Models that classify brands, such as the [Powergrid](powergrid.md) and [Pillars](pillars.md), return a
`classification` object on each data point they could classify. Use it rather than deriving the classification from
the scores yourself.

| Key           | Type         | Description                                                                                         |
|---------------|--------------|-----------------------------------------------------------------------------------------------------|
| `key`         | string       | The machine-readable key for the classification. This is stable, and what you should branch on.    |
| `label`       | string       | The human-readable name of the classification, as The Fount labels it.                              |
| `description` | string\|null | Copy describing what the classification means for the brand. Only set on some models.               |

### Example

```json
{
  "meta": {
    "source": "Source: WPP BAV, USA 2025 (All Adults)",
    "is_category_specific": false
  },
  "data": [
    {
      "type": "brand",
      "study": "USA 2025",
      "study_id": 635,
      "year": "2025",
      "year_id": 45,
      "country": "United States",
      "country_id": 6,
      "base": "All Adults",
      "base_id": 1,
      "brand": "Coca-Cola",
      "brand_id": 148,
      "brand_variation": "Coca-Cola",
      "brand_variation_id": 1,
      "brand_variation_key": 12345,
      "local_name": "Coca-Cola",
      "category": "Soft Drinks",
      "category_id": 1,
      "sector": "Food & Drink",
      "sector_id": 1,
      "period": 1,
      "company": "The Coca-Cola Company",
      "company_id": 1,
      "competitive_set": null,
      "competitive_set_id": null,
      "competitive_set_type": null,
      "classification": {
        "key": "balanced-leader",
        "label": "Balanced Leader",
        "description": "..."
      },
      "metrics": {
        "differentiation": {
          "key": "differentiation",
          "rank": 86.65,
          "value": null,
          "percentage": null,
          "construct": 1.12,
          "brandscape_index": null,
          "category_index": null
        }
      }
    }
  ]
}
```

The values in the example are illustrative.
