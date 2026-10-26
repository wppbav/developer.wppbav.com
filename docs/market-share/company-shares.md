# Company Shares

The company shares endpoint returns Euromonitor's market share for companies. Each row is one company, in one category,
geography (market), data type and year.

Euromonitor measures company share separately from brand share. A company's share of a category is not the sum of the
shares of its brands. One reason is that Euromonitor does not list brands below its reporting threshold individually.
Another reason is that some share comes from unbranded products.

Before you use this endpoint, read the [market share overview](index.md). In particular, note
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

All list parameters are arrays. In a query string, pass repeated values (`categories[]=1&categories[]=2`) and not a
single comma-separated string. Each value can be either an ID or a name. When you pass a name, the system tries to
find the matching record. If no record matches a name, the request fails with a validation error. An ID that does not
exist matches nothing.

| Key             |       Required?       | Type   | Description                                                                                                                                                                                                         |
|-----------------|:---------------------:|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `companies`     | One narrowing filter* | array  | Euromonitor companies, as Euromonitor company IDs or names. Use the [companies catalog](catalog.md#companies) to find them. Max 50.                                                                                  |
| `bav_companies` | One narrowing filter* | array  | [BAV companies](../company-data/companies.md), as BAV company IDs or names. The API resolves them to Euromonitor companies through the link on the company. A company that is not linked matches nothing. Max 50.  |
| `categories`    | One narrowing filter* | array  | Euromonitor categories, as IDs or names. Max 50.                                                                                                                                                                     |
| `geographies`   | One narrowing filter* | array  | Euromonitor geographies (markets), as IDs or names. These are not BAV countries. Use the [geographies catalog](catalog.md#geographies) to find them. Max 50.                                                        |
| `industries`    | One narrowing filter* | array  | Euromonitor industries, as IDs or names. Max 50.                                                                                                                                                                     |
| `data_types`    |          :x:          | array  | What the rows measure, as Euromonitor data type IDs or names. Rows that differ only by data type are not comparable. In most cases, filter to one data type. Max 50.                                               |
| `years`         |          :x:          | array  | The [years](../metadata/years.md), as year IDs or year numbers. A year does not narrow a query on its own. You must use it with a narrowing filter. Max 50.                                                         |
| `score_type`    |          :x:          | string | Which measure the `value` of each row carries. One of `actual_usd` (default), `actual_local`, `percentage` or `rank`. See [score types](brand-shares.md#score-types).                                              |
| `format`        |          :x:          | string | The response format: `json` (default), `llm` (the data as CSV with instructions for use in AI prompts, see [response formats](../brand-data/data-models.md#response-formats)) or `mcp` (the response shape used by our MCP servers). |

\* At least one of `companies`, `bav_companies`, `categories`, `geographies` or `industries` is required. The API rejects
a request without any of these with a validation error.

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
If a query matches more than 25,000 rows, the API rejects it with a validation error and does not truncate it. If this
occurs, narrow the query with a geography, category or year filter.
:::

### Data

Each entity in a row is a nested object with an `id` and a `name` (the year has an `id` and a `year`). An entity is
`null` when there is no record to refer to, such as an unlinked company or a dimension that Euromonitor left blank.

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
- `422` - A validation error. The API returns this error when the request has no narrowing filter, when a name does
  not match a record, or when the query matches more than 25,000 rows. The `errors` object uses the filter that you
  sent as the key, or `filters` for errors about the query as a whole.
