---
sidebar_label: Financial Data Server
---

# Financial Data MCP Server

The Financial Data MCP Server gives access to financial data from BAV Futures for listed companies around the world.
It has a set of tools that AI agents can call. It also gives daily share prices for listed companies.

## Connecting to the server

Our remote MCP server uses the Streamable HTTP transport.
To connect to the Financial Data MCP server, use this URL:

```
https://mcp-beta.wppbav.com/v1/futures
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We will tell you about this change a sufficient time before
it occurs, so that you can update your applications.
:::

For authorization, refer to the [access and authorization](./access-authorization.md) section. For step-by-step
instructions for your client, refer to [connecting clients](./connecting-clients.md).

## Available Tools

The Financial Data MCP server has a set of tools that you can use to get different types of data. All tools are
available to all users who can connect to the server.

**Tip:** You can ask the agent to list the available tools. You can also use
the [list tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#listing-tools) mechanism from
the MCP specification. This mechanism returns the full tool definitions, with parameters and descriptions.

| Tool                     | Description                                                                                                   |
|--------------------------|---------------------------------------------------------------------------------------------------------------|
| `get-analyst-ratings`    | Analyst ratings and recommendations, with buy/sell/hold ratings and price targets.                            |
| `get-balance-sheet`      | Balance sheet data, with assets, liabilities, and shareholders' equity.                                       |
| `get-cash-flow`          | Cash flow statement data, with operating, investing, and financing activities.                                |
| `get-earnings`           | Earnings data and reports, with historical and estimated earnings.                                            |
| `get-financial-overview` | A comprehensive financial overview, with general information, highlights, and valuation metrics.             |
| `get-income-statement`   | Income statement data, with revenue, expenses, and profitability.                                             |
| `get-stock-prices`       | Daily share prices (open, high, low, close, adjusted close and volume). You can limit them to a date range.   |

### Tool Parameters

Each tool requires the stock ticker symbol in the `ticker` parameter, in the format `TICKER.EXCHANGE` (for example,
`AAPL.US` for Apple Inc.). All US companies use the `.US` exchange code.

`get-stock-prices` also accepts two optional parameters to limit the date range:

- `from` - The first trading day to return, as `YYYY-MM-DD`. If you do not send it, the data starts at the beginning of
  the published history.
- `to` - The last trading day to return, as `YYYY-MM-DD`. If you do not send it, the data ends at the most recent close.

### Share Prices

`get-stock-prices` returns the share prices with the oldest first, with one row for each trading day. Thus, the data
does not include weekends and market holidays. To compare prices over time, use the adjusted close. The adjusted close
includes corrections for splits and dividends.

One call returns a maximum of 500 trading days. If the requested range is longer, the tool returns only the most recent
500 trading days. The response then tells you this. To read an earlier period, make the range smaller with `from` and
`to`.

:::note Unstable Responses
Traditional API responses are stable over time. We do not promise that MCP server responses will be stable. The data
can change, and the models can also change how they respond to user requests. If your application needs stable
responses, we recommend this procedure. After the agent calls the tools, ask it for a structured data response.
:::
