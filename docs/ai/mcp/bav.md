---
sidebar_label: BAV Server
---

# BAV MCP Server

The BAV MCP Server provides access to the WPP BAV proprietary brand data through a set of tools that can be
called by AI agents. This allows you to build AI applications that can leverage the rich brand data collected
by BAV to provide insights, recommendations, and analysis.

The tools (see below) span both research data on brands, as well as metadata around coverage, imagery, and
other assets.

## Connecting to the server

Our remote MCP server supports both SSE (Server-Sent Events) and Streamable HTTP.
To connect to the BAV MCP server, you need to use the following URL:

```
https://mcp-beta.wppbav.com/v1/bav
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

For authorization, please see the [access and authorization](./access-authorization.md) section.

## Available Tools

The BAV MCP server provides two sets of tools:

- **Data Tools:** These tools allow you to fetch various types of brandscape data, or simply put "the BAV data".
- **Metadata Tools:** These tools provide access to metadata about the BAV data, such as available brands, markets,
  years, audiences and more.

**Tip:** You can always ask the agent to list the available tools interactively, or you can use
the [list tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#listing-tools) mechanism as
defined in the MCP specification. This will return the full tool definitions including parameters and descriptions.

### Data Tools

- `get-pillar-data`
- `get-powergrid-data`
- `get-imagery-data`
- `get-personality-data`
- `get-usage-data`
- `get-preferences-data`
- `get-recommendation-data`
- `get-brand-worth-data`
- `get-customer-experience-data`
- `get-influence-data`

### Metadata Tools

- `get-brands`
- `get-markets`
- `get-sectors`
- `get-categories`
- `get-audiences`

### Tool Parameters

Each tool accepts a set of parameters that your agent will try to extract from the user input. This includes:

- Brands
- Countries (with a note to prefer using ISO 3166-1 alpha-2 codes)
- Years
- Audiences

Behind the scenes the BAV systems will automatically handle fallbacks and make assumptions should a parameter not be
provided.

:::note Unstable Responses
We do not promise that MCP server responses will be stable over time, in contrast to traditional API responses. The
data may be updated, and the models may also change how they respond to user requests. If you need stable responses for
your application we suggest prompting for a structured data response after the agent has called the tools.
:::
