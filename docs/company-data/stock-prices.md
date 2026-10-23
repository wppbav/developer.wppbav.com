# Stock Prices

## What are stock prices?

Stock prices are the historical share prices of a company's stock exchange listings. They are read from our market data
provider when you request them, one listing at a time, so a request has to name the companies or tickers it wants.

Prices are available for any company with a primary stock exchange listing, as well as for any ticker you name
directly, even when it isn't linked to a company in The Fount.

## List stock prices

To get the stock prices for one or more listings, use the list endpoint:

```http request
GET /api/v2/stock-prices?companies[]=91&from=2024-01-01&to=2024-12-31
```

There is no endpoint for retrieving a single stock price. To get the prices for a single company, you can also use the
[company stock prices endpoint](companies.md#get-a-companys-stock-prices).

:::note This endpoint works differently
Unlike most other list endpoints, the stock prices endpoint is not paginated and does not support
[filters](../customizing/filters.md), [sorting](../customizing/filters.md#sorting-results),
[configurable fields](../customizing/fields.md), [includes](../customizing/includes.md) or `updated_since`. Omitting
`from` and `to` returns the full price history for each listing, so set a date window or a `weekly` or `monthly`
`interval` to keep the response small.
:::

## Parameters

You must name at least one company or ticker. You may name up to 25 companies and tickers in total per request.

| Key         | Required? | Type         | Description                                                                                                                                                                                                                  |
|-------------|:---------:|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `companies` |    :x:    | array        | The [companies](companies.md) to get stock prices for, by ID or name. Each company uses its primary stock exchange listing. Send as an array, for example: `companies[]=91&companies[]=148`.                             |
| `tickers`   |    :x:    | string array | Tickers to get stock prices for, in `TICKER.EXCHANGE` form (for example `AAPL.US`). All US listings use the `.US` exchange code. Use this for listings that are not linked to a company. For example: `tickers[]=AAPL.US`. |
| `from`      |    :x:    | date         | The first trading day to return, inclusive, as `YYYY-MM-DD`. Omit to start at the beginning of the history.                                                                                                                 |
| `to`        |    :x:    | date         | The last trading day to return, inclusive, as `YYYY-MM-DD`. Must be on or after `from`. Omit to return up to the most recent close.                                                                                         |
| `interval`  |    :x:    | string       | One of `daily` (default), `weekly` or `monthly`. See [intervals](#intervals).                                                                                                                                                |

A ticker that duplicates the primary listing of a requested company is only returned once.

### Intervals

By default, one row is returned per trading day. Daily rows only exist for trading days, so there are no rows for
weekends and market holidays.

With a `weekly` or `monthly` interval, each row covers a full week or month. The row holds the period's first open,
its highest high and lowest low, its total volume and its last close. The row is dated on the period's last trading day.

## Response

The response contains a `data` array with the price rows and a `meta` object describing the response. Rows are grouped
by ticker and sorted oldest first within each ticker.

```json
{
  "meta": {
    "tickers": ["AAPL.US"],
    "count": 251,
    "from": "2024-01-01",
    "to": "2024-12-31",
    "interval": "daily",
    "tickers_without_prices": [],
    "companies_without_listing": []
  },
  "data": [
    {
      "ticker": "AAPL.US",
      "date": "2024-01-02",
      "company_id": 1,
      "currency": "USD",
      "open": 187.15,
      "high": 188.44,
      "low": 183.89,
      "close": 185.64,
      "adjusted_close": 184.29,
      "volume": 82488700
    }
    // ... more rows
  ]
}
```

### Row schema

| Key              | Type    | Description                                                                                                                                         |
|------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `ticker`         | string  | The ticker the price belongs to, in `TICKER.EXCHANGE` form.                                                                                         |
| `date`           | string  | The trading day as `YYYY-MM-DD`. For weekly and monthly intervals, this is the last trading day of the period.                                      |
| `company_id`     | integer | The ID of the [company](companies.md) with this listing, or `null` when no company is linked to the ticker.                                         |
| `currency`       | string  | The currency of the prices, taken from the exchange the ticker trades on. `null` when the exchange is not known.                                    |
| `open`           | float   | The first price traded at in the row's day, week or month.                                                                                          |
| `high`           | float   | The highest price traded at during the row's day, week or month.                                                                                    |
| `low`            | float   | The lowest price traded at during the row's day, week or month.                                                                                     |
| `close`          | float   | The last price traded at. This is not adjusted for splits and dividends.                                                                            |
| `adjusted_close` | float   | The close adjusted for splits and dividends. Use this when comparing prices over time, as `close` is not comparable across a split.                 |
| `volume`         | integer | The number of shares traded during the row's day, week or month.                                                                                    |

All price and volume fields may be `null` when the provider has no value for them.

### Meta schema

| Key                         | Type          | Description                                                                                                                                       |
|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `tickers`                   | string array  | The tickers the response covers, including the primary listings of the requested companies.                                                       |
| `count`                     | integer       | The number of rows returned.                                                                                                                      |
| `from`                      | string        | The requested start date, or `null` when the series starts at the beginning of the history.                                                      |
| `to`                        | string        | The requested end date, or `null` when the series runs to the most recent close.                                                                 |
| `interval`                  | string        | The interval used: `daily`, `weekly` or `monthly`.                                                                                                |
| `tickers_without_prices`    | string array  | Tickers with no prices at all, usually because they are mistyped or delisted. A ticker that simply didn't trade in the requested window isn't listed here. |
| `companies_without_listing` | integer array | The IDs of requested companies that have no primary stock exchange listing, and so returned no rows.                                              |

## Errors

- A `422` error is returned if neither `companies` nor `tickers` is given, if more than 25 companies and tickers are
  named in total, if a ticker contains characters other than letters, numbers, dots, dashes and underscores, or if `to`
  is before `from`.
- A `503` error is returned if the market data provider cannot be reached. Retry the request later.
