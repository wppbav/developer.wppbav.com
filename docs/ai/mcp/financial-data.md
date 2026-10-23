---
sidebar_label: Financial Data Server
---

# Financial Data MCP Server

The Financial Data MCP Server provides access to the financial data via BAV Futures for listed companies around the
world through a set of tools that can be called by AI agents. It also provides daily share prices for listed companies.

## Connecting to the server

Our remote MCP server uses the Streamable HTTP transport.
To connect to the Financial Data MCP server, you need to use the following URL:

```
https://mcp-beta.wppbav.com/v1/futures
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

For authorization, please see the [access and authorization](./access-authorization.md) section. For step-by-step
instructions for your client, see [connecting clients](./connecting-clients.md).

## Available Tools

The Financial Data MCP server provides a set of tools that you can use to access various types of data. All tools are
available to every user who can connect to the server.

**Tip:** You can always ask the agent to list the available tools interactively, or you can use
the [list tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#listing-tools) mechanism as
defined in the MCP specification. This will return the full tool definitions including parameters and descriptions.

| Tool                     | Description                                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------------|
| `get-analyst-ratings`    | Analyst ratings and recommendations, including buy/sell/hold ratings and price targets.                       |
| `get-balance-sheet`      | Balance sheet data, including assets, liabilities, and shareholders' equity.                                  |
| `get-cash-flow`          | Cash flow statement data, including operating, investing, and financing activities.                           |
| `get-earnings`           | Earnings data and reports, including historical and estimated earnings.                                       |
| `get-financial-overview` | A comprehensive financial overview, including general information, highlights, and valuation metrics.        |
| `get-income-statement`   | Income statement data, including revenue, expenses, and profitability.                                        |
| `get-stock-prices`       | Daily share prices (open, high, low, close, adjusted close and volume), optionally within a date range.       |

### Tool Parameters

Each tool expects to receive the stock ticker symbol as a required `ticker` parameter, in the format
`TICKER.EXCHANGE` (e.g., `AAPL.US` for Apple Inc.). All US companies use the `.US` exchange code.

In addition, `get-stock-prices` accepts two optional parameters to limit the date range:

- `from` - The first trading day to return, as `YYYY-MM-DD`. Omit to start from the beginning of the published history.
- `to` - The last trading day to return, as `YYYY-MM-DD`. Omit to run to the most recent close.

### Share Prices

The share prices from `get-stock-prices` are returned oldest first, with one row per trading day. Weekends and market
holidays are therefore absent from the data. When comparing prices over time, use the adjusted close, which is
corrected for splits and dividends.

A single call returns at most 500 trading days. If the requested range is longer, only the most recent 500 trading days
are returned and the response says so. Narrow the range with `from` and `to` to read an earlier period.

:::note Unstable Responses
We do not promise that MCP server responses will be stable over time, in contrast to traditional API responses. The
data may be updated, and the models may also change how they respond to user requests. If you need stable responses for
your application we suggest prompting for a structured data response after the agent has called the tools.
:::
