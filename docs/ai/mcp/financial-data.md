---
sidebar_label: Financial Data Server
---

# Financial Data MCP Server

The Financial Data MCP Server provides access to the financial data via BAV Futures for listed companies around the
world through a set of tools that can be called by AI agents.

## Connecting to the server

Our remote MCP server supports both SSE (Server-Sent Events) and Streamable HTTP.
To connect to the Financial Data MCP server, you need to use the following URL:

```
https://mcp-beta.wppbav.com/v1/futures
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

For authorization, please see the [access and authorization](./access-authorization.md) section.

## Available Tools

The Financial Data MCP server provides a set of tools that you can use to access various types of data.

**Tip:** You can always ask the agent to list the available tools interactively, or you can use
the [list tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#listing-tools) mechanism as
defined in the MCP specification. This will return the full tool definitions including parameters and descriptions.

- `get-analyst-ratings`
- `get-balance-sheet`
- `get-cash-flow`
- `get-earnings`
- `get-financial-overview`
- `get-income-statement`

### Tool Parameters

Each tool expects to receive the stock ticker symbol as a required parameter, including the exchange suffix where
applicable (e.g., `AAPL.US` for Apple Inc. on NASDAQ).

:::note Unstable Responses
We do not promise that MCP server responses will be stable over time, in contrast to traditional API responses. The
data may be updated, and the models may also change how they respond to user requests. If you need stable responses for
your application we suggest prompting for a structured data response after the agent has called the tools.
:::
