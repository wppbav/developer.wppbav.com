# Brand Shares

The brand shares endpoint returns Euromonitor's market share for brands. Each row is one brand, in one category,
geography (market), data type and year.

Before you use this endpoint, read the [market share overview](index.md). In particular, note
that [Euromonitor IDs are not BAV IDs](index.md#euromonitor-ids-are-not-bav-ids) and
that [null is not zero](index.md#null-is-not-zero).

## Creating a query

The endpoint accepts both `GET` (with query parameters) and `POST` (with a JSON body) requests. The parameters are the
same for both.

```http request
GET /api/v2/market-share/brand-shares
POST /api/v2/market-share/brand-shares
```

This endpoint requires the `bav:market-share-data` scope.

## Parameters

All list parameters are arrays. In a query string, pass repeated values (`categories[]=1&categories[]=2`) and not a
single comma-separated string. Each value can be either an ID or a name. When you pass a name, the system tries to
find the matching record. If no record matches a name, the request fails with a validation error. An ID that does not
exist matches nothing.

| Key             |       Required?       | Type   | Description                                                                                                                                                                                                                          |
|-----------------|:---------------------:|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `brands`        | One narrowing filter* | array  | Euromonitor brands, as Euromonitor brand IDs or names. Use the [brands catalog](catalog.md#brands) to find them. Max 50.                                                                                                             |
| `companies`     | One narrowing filter* | array  | Owning companies, as Euromonitor company IDs or names. Filters the rows to brands that these companies owned at the time of the extract. Max 50.                                                                                      |
| `bav_brands`    | One narrowing filter* | array  | [BAV brands](../brands/brands.md), as BAV brand IDs or names. The API resolves them to Euromonitor brands through the link on the brand. A brand that is not linked matches nothing. Max 50.                                         |
| `bav_companies` | One narrowing filter* | array  | [BAV companies](../company-data/companies.md), as BAV company IDs or names. The API resolves them to Euromonitor companies through the link on the company. A company that is not linked matches nothing. Max 50.                    |
| `categories`    | One narrowing filter* | array  | Euromonitor categories, as IDs or names. Max 50.                                                                                                                                                                                      |
| `geographies`   | One narrowing filter* | array  | Euromonitor geographies (markets), as IDs or names. These are not BAV countries. Use the [geographies catalog](catalog.md#geographies) to find them. Max 50.                                                                         |
| `industries`    | One narrowing filter* | array  | Euromonitor industries, as IDs or names. Max 50.                                                                                                                                                                                      |
| `data_types`    |          :x:          | array  | What the rows measure, as Euromonitor data type IDs or names. Rows that differ only by data type are not comparable. In most cases, filter to one data type. Max 50.                                                                |
| `years`         |          :x:          | array  | The [years](../metadata/years.md), as year IDs or year numbers. A year does not narrow a query on its own. You must use it with a narrowing filter. Max 50.                                                                          |
| `score_type`    |          :x:          | string | Which measure the `value` of each row carries. One of `actual_usd` (default), `actual_local`, `percentage` or `rank`. See [score types](#score-types).                                                                               |
| `format`        |          :x:          | string | The response format: `json` (default), `llm` (the data as CSV with instructions for use in AI prompts, see [response formats](../brand-data/data-models.md#response-formats)) or `mcp` (the response shape used by our MCP servers). |

\* At least one of `brands`, `companies`, `bav_brands`, `bav_companies`, `categories`, `geographies` or `industries` is
required. The API rejects a request without any of these with a validation error.

### Score types

The `score_type` parameter sets which measure each row's `value` holds:

- `actual_usd` - The absolute value in USD at a fixed exchange rate. This is the default.
- `actual_local` - The absolute value in the market's own currency.
- `percentage` - The share of the category in that market, on a 0-100 scale.
- `rank` - The position within the category in that market, where 1 is the largest. A rank has a meaning only when you
  compare it with the other brands in the same category, geography, data type and year. Do not sum or average
  ranks.

Not every slice carries every measure. A `null` value means that the figure was not supplied, not that it is zero.

## Example

To get the percentage share of a BAV brand in the United Kingdom, measured as retail value, for 2024:

```http request
GET /api/v2/market-share/brand-shares?bav_brands[]=148&geographies[]=United%20Kingdom&data_types[]=Retail%20Value%20RSP&years[]=2024&score_type=percentage
```

Or as a `POST` request:

```json
{
  "bav_brands": [148],
  "geographies": ["United Kingdom"],
  "data_types": ["Retail Value RSP"],
  "years": [2024],
  "score_type": "percentage"
}
```

## Schema

The response is not paginated. It contains a `meta` object and a `data` array with one object per row.

:::note Row limit
If a query matches more than 25,000 rows, the API rejects it with a validation error and does not truncate it. If this
occurs, narrow the query with a geography, category or year filter.
:::

### Meta

| Key          | Type   | Description                                                     |
|--------------|--------|-----------------------------------------------------------------|
| `source`     | string | A source label that you can use as a caption for the data.      |
| `score_type` | string | The score type that each row's `value` holds.                   |

### Data

Each entity in a row is a nested object with an `id` and a `name` (the year has an `id` and a `year`). An entity is
`null` when there is no record to refer to, such as an unlinked brand or a dimension that Euromonitor left blank.

| Key           | Type         | Description                                                                                                                                         |
|---------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `brand`       | object       | The Euromonitor brand.                                                                                                                              |
| `bav_brand`   | object\|null | The [BAV brand](../brands/brands.md) the Euromonitor brand is linked to. `null` when there is no link. In that case, you cannot compare the row with BAV brand data. |
| `company`     | object       | The Euromonitor company that owns the brand.                                                                                                        |
| `bav_company` | object\|null | The [BAV company](../company-data/companies.md) the Euromonitor company is linked to, or `null`.                                                    |
| `category`    | object       | The Euromonitor category.                                                                                                                           |
| `geography`   | object       | The Euromonitor geography (market).                                                                                                                 |
| `industry`    | object       | The Euromonitor industry.                                                                                                                           |
| `data_type`   | object       | The Euromonitor data type, i.e. what the row measures.                                                                                              |
| `year`        | object       | The [year](../metadata/years.md), with `id` and `year`.                                                                                             |
| `value`       | number\|null | The measure requested in `score_type`. `null` means the figure was not supplied for this row. It never means zero.                                 |
| `unit`        | string\|null | What `value` is measured in: `USD`, the local currency code, or `%`. `null` for ranks.                                                             |
| `score_type`  | string       | The score type that `value` holds.                                                                                                                  |

Rows that differ only by data type measure different things. Do not sum or average them.

```json
{
  "meta": {
    "source": "Euromonitor",
    "score_type": "percentage"
  },
  "data": [
    {
      "brand": { "id": 1234, "name": "Andrex" },
      "bav_brand": { "id": 148, "name": "Andrex" },
      "company": { "id": 567, "name": "Essity AB" },
      "bav_company": null,
      "category": { "id": 89, "name": "Toilet Paper" },
      "geography": { "id": 12, "name": "United Kingdom" },
      "industry": { "id": 3, "name": "Tissue and Hygiene" },
      "data_type": { "id": 1, "name": "Retail Value RSP" },
      "year": { "id": 45, "year": 2024 },
      "value": 31.2,
      "unit": "%",
      "score_type": "percentage"
    }
  ]
}
```

The values in the example are illustrative.

## Errors

- `403` - Your account does not have access to Euromonitor market share data.
- `422` - A validation error. The API returns this error when the request has no narrowing filter, when a name does
  not match a record, or when the query matches more than 25,000 rows. The `errors` object uses the filter that you
  sent as the key, for example `geographies.0`, or `filters` for errors about the query as a whole.
