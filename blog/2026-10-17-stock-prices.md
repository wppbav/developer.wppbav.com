---
slug: stock-prices
title: Changes to the stock prices endpoint
authors: erikbernskiold
---

Stock prices are now read directly from our market data provider, rather than from a copy stored in BAV. This gives
you a more complete and up-to-date price history, but it does change how the endpoint works.

<!-- truncate -->

**This is a breaking change.** `GET /api/v2/stock-prices` now:

- requires `companies[]` or `tickers[]`, with at most 25 in total;
- accepts `from`, `to` and `interval` (`daily`, `weekly` or `monthly`);
- returns rows ordered oldest first, with `ticker`, `date`, `company_id`, `currency`, `open`, `high`, `low`, `close`,
  `adjusted_close` and `volume`;
- is no longer paginated, and no longer supports `include`, `updated_since` or fetching a single price by ID.

There is also a new `GET /api/v2/companies/{id}/stock-prices` endpoint for a single company.

The Financial Data MCP server has a new `get-stock-prices` tool with the same data.

See [Stock Prices](/docs/2.x/company-data/stock-prices) for the full documentation.
