---
sidebar_label: Best Countries Server
---

# Best Countries MCP Server

The Best Countries MCP Server provides access to the WPP BAV proprietary Best Countries data through a set of tools that
can be called by AI agents. This allows you to build AI applications that can leverage how people around the world
perceive countries and cities to provide insights, recommendations, and analysis.

## Connecting to the server

Our remote MCP server uses the Streamable HTTP transport.
To connect to the Best Countries MCP server, you need to use the following URL:

```
https://mcp-beta.wppbav.com/v1/best-countries
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

For authorization, please see the [access and authorization](./access-authorization.md) section. For step-by-step
instructions for your client, see [connecting clients](./connecting-clients.md).

## Available Tools

The Best Countries MCP server provides two sets of data tools:

- **Country Data**: Tools that provide insights into how countries are perceived.
- **City Data**: Tools that provide insights into how cities are perceived.

Which tools you see depends on your permissions. Each group of tools is enabled separately, so a user without access to
city data will not see the city tools at all.

**Tip:** You can ask the agent to list the available tools interactively, or you can use
the [list tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#listing-tools) mechanism as
defined in the MCP specification. This will return the full tool definitions including parameters and descriptions.

### Country Data Tools

| Tool                                   | Description                                                                                                                  | Requires access to |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `get-country-factors-data`             | How people perceive countries across the 10 high-level factors that correlate with GDP growth, including the overall Best Country rank. | Country data       |
| `get-country-perception-data`          | How people perceive countries on a wide range of imagery attributes.                                                         | Country data       |
| `get-country-doing-business-data`      | Whether business decision makers would consider doing business in countries.                                                 | Country data       |
| `get-country-education-data`           | Whether people would consider going to university in countries.                                                              | Country data       |
| `get-country-visit-consideration-data` | Whether people would consider visiting countries for vacation.                                                               | Country data       |
| `get-product-origin-data`              | Whether people would consider buying products from countries across various product categories.                              | Origin Index data  |

### City Data Tools

| Tool                                | Description                                                                 | Requires access to |
|-------------------------------------|-----------------------------------------------------------------------------|--------------------|
| `get-city-perception-data`          | How people perceive cities on a wide range of imagery attributes.           | City data          |
| `get-city-doing-business-data`      | Whether business decision makers would consider doing business in cities.   | City data          |
| `get-city-visit-consideration-data` | Whether people would consider visiting cities for vacation.                 | City data          |

### Tool Parameters

All tools accept the same set of optional parameters, which your agent will try to extract from the user input:

- `countries` (country tools) - ISO 3166-1 alpha-2 country codes or country IDs. When left empty, all studied countries
  are returned.
- `cities` (city tools) - Complete city names or city IDs. When left empty, all studied cities are returned.
- `years` - Year numbers or year IDs. Data from 2022 onwards is supported.
- `audiences` - Audience names or IDs.
- `scoreType` - Either `rank` (how the country or city ranks against all others) or `score` (a 100-point score from
  worst to best against all others).

Behind the scenes the BAV systems will automatically handle fallbacks should a parameter not be provided. If neither
countries nor years are given, the latest year of Best Countries data is used. If no audience is given, the default
audience is used.

:::note Unstable Responses
We do not promise that MCP server responses will be stable over time, in contrast to traditional API responses. The
data may be updated, and the models may also change how they respond to user requests. If you need stable responses for
your application we suggest prompting for a structured data response after the agent has called the tools.
:::
