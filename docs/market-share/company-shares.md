# Company Shares

The company shares endpoint returns Euromonitor's market share for companies. Each row is one company, in one category,
geography (market), data type and year.

Company share is measured separately from brand share. A company's share of a category is not the sum of its brands'
shares, because brands below Euromonitor's reporting threshold are not listed individually and some share comes from
unbranded products.

Before using this endpoint, please read the [market share overview](index.md). In particular, note
that [Euromonitor IDs are not BAV IDs](index.md#euromonitor-ids-are-not-bav-ids) and
that [null is not zero](index.md#null-is-not-zero).

## Creating a query

The endpoint accepts both `GET` (with query parameters) and `POST` (with a JSON body) requests. The parameters are the
same for both.

```http request
GET /api/v2/market-share/company-shares
POST /api/v2/market-share/company-shares
```

This endpoint requires the `bav:market-share-data` scope.

## Parameters

All list parameters are arrays. In a query string, pass repeated values (`categories[]=1&categories[]=2`) rather than a
single comma-separated string. Each value can be either an ID or a name. When you pass a name, the system attempts to
find the matching record. If no record matches a name, the request fails with a validation error. An ID that does not
exist simply matches nothing.

| Key             |       Required?       | Type   | Description                                                                                                                                                                                                         |
|-----------------|:---------------------:|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `companies`     | One narrowing filter* | array  | Euromonitor companies, as Euromonitor company IDs or names. Use the [companies catalog](catalog.md#companies) to find them. Max 50.                                                                                  |
| `bav_companies` | One narrowing filter* | array  | [BAV companies](../company-data/companies.md), as BAV company IDs or names. Resolved to Euromonitor companies through the link held on the company, so a company that has not been linked matches nothing. Max 50. |
| `categories`    | One narrowing filter* | array  | Euromonitor categories, as IDs or names. Max 50.                                                                                                                                                                     |
| `geographies`   | One narrowing filter* | array  | Euromonitor geographies (markets), as IDs or names. These are not BAV countries. Use the [geographies catalog](catalog.md#geographies) to find them. Max 50.                                                        |
| `industries`    | One narrowing filter* | array  | Euromonitor industries, as IDs or names. Max 50.                                                                                                                                                                     |
| `data_types`    |          :x:          | array  | What is being measured, as Euromonitor data type IDs or names. Rows that differ only by data type are not comparable, so filtering to one is usually what you want. Max 50.                                        |
| `years`         |          :x:          | array  | The [years](../metadata/years.md), as year IDs or year numbers. A year does not narrow a query on its own and has to be combined with a narrowing filter. Max 50.                                                   |
| `score_type`    |          :x:          | string | Which measure the `value` of each row carries. One of `actual_usd` (default), `actual_local`, `percentage` or `rank`. See [score types](brand-shares.md#score-types).                                              |
| `format`        |          :x:          | string | The response format: `json` (default), `llm` (the data as CSV with instructions for use in AI prompts, see [response formats](../brandscape-models/index.md#response-formats)) or `mcp` (the response shape used by our MCP servers). |

\* At least one of `companies`, `bav_companies`, `categories`, `geographies` or `industries` is required. A request
without any of these is rejected with a validation error.

## Example

```json
{
  "bav_companies": [12],
  "geographies": ["United Kingdom"],
  "years": [2024],
  "score_type": "actual_usd"
}
```

## Schema

The response is not paginated. It contains a `meta` object and a `data` array with one object per row. The `meta`
object is the same as for [brand shares](brand-shares.md#meta).

:::note Row limit
A query matching more than 25,000 rows is rejected with a validation error rather than truncated. Narrow the query with
a geography, category or year filter if this happens.
:::

### Data

Each entity in a row is a nested object with an `id` and a `name` (the year has an `id` and a `year`). An entity is
`null` where there is nothing to point at, such as an unlinked company or a dimension that Euromonitor left blank.

| Key           | Type         | Description                                                                                                         |
|---------------|--------------|---------------------------------------------------------------------------------------------------------------------|
| `company`     | object       | The Euromonitor company.                                                                                            |
| `bav_company` | object\|null | The [BAV company](../company-data/companies.md) the Euromonitor company is linked to, or `null` where no link exists. |
| `category`    | object       | The Euromonitor category.                                                                                           |
| `geography`   | object       | The Euromonitor geography (market).                                                                                 |
| `industry`    | object       | The Euromonitor industry.                                                                                           |
| `data_type`   | object       | The Euromonitor data type, i.e. what the row measures.                                                              |
| `year`        | object       | The [year](../metadata/years.md), with `id` and `year`.                                                             |
| `value`       | number\|null | The measure requested in `score_type`. `null` means the figure was not supplied for this row. It never means zero. |
| `unit`        | string\|null | What `value` is measured in: `USD`, the local currency code, or `%`. `null` for ranks.                             |
| `score_type`  | string       | The score type that `value` holds.                                                                                  |

## Errors

- `403` - Your account does not have access to Euromonitor market share data.
- `422` - A validation error. This is returned when no narrowing filter is provided, when a name could not be matched
  to a record, or when the query matches more than 25,000 rows. The `errors` object is keyed by the filter you sent,
  or `filters` for errors about the query as a whole.
