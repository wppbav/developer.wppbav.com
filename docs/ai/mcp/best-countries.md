---
sidebar_label: Best Countries Server
---

# Best Countries MCP Server

The Best Countries MCP Server provides access to the WPP BAV proprietary Best Countries data through a set of tools that
can be called by AI agents. This allows you to build AI applications that can leverage the rich brand data collected
by BAV to provide insights, recommendations, and analysis.

## Connecting to the server

Our remote MCP server supports both SSE (Server-Sent Events) and Streamable HTTP.
To connect to the Best Countries MCP server, you need to use the following URL:

```
https://mcp-beta.wppbav.com/v1/best-countries
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

For authorization, please see the [access and authorization](./access-authorization.md) section.

## Available Tools

The BAV MCP server provides two sets of data tools:

- **Country Data**: Tools that provide insights into how countries are perceived.
- **City Data**: Tools that provide insights into how cities are perceived.

**Tip:** You can ask the agent to list the available tools interactively, or you can use
the [list tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#listing-tools) mechanism as
defined in the MCP specification. This will return the full tool definitions including parameters and descriptions.

### Country Data Tools

- `get-country-factors-data`
- `get-country-perceptions-data`
- `get-country-doing-business-data`
- `get-country-education-data`
- `get-country-visit-consideration-data`
- `get-product-origin-data`

### City Data Tools

- `get-city-perceptions-data`
- `get-city-doing-business-data`
- `get-city-visit-consideration-data`

### Tool Parameters

Each tool accepts a set of parameters that your agent will try to extract from the user input. This includes:

- Countries (with a note to prefer using ISO 3166-1 alpha-2 codes)
- Cities
- Years
- Audiences
- Score Types

Behind the scenes the BAV systems will automatically handle fallbacks should a parameter not be provided.

:::note Unstable Responses
We do not promise that MCP server responses will be stable over time, in contrast to traditional API responses. The
data may be updated, and the models may also change how they respond to user requests. If you need stable responses for
your application we suggest prompting for a structured data response after the agent has called the tools.
:::
