---
sidebar_label: Best Countries Server
---

# Best Countries MCP Server

The Best Countries MCP Server gives access to the WPP BAV proprietary Best Countries data through a set of tools that
AI agents can call. With these tools, you can build AI applications that use data about how people around the world
perceive countries and cities. These applications can give insights, recommendations, and analysis.

## Connecting to the server

Our remote MCP server uses the Streamable HTTP transport.
To connect to the Best Countries MCP server, use this URL:

```
https://mcp-beta.wppbav.com/v1/best-countries
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We will tell you about this change a sufficient time before
it occurs, so that you can update your applications.
:::

For authorization, refer to the [access and authorization](./access-authorization.md) section. For step-by-step
instructions for your client, refer to [connecting clients](./connecting-clients.md).

## Available Tools

The Best Countries MCP server has two sets of data tools:

- **Country Data**: Tools that give insights into how people perceive countries.
- **City Data**: Tools that give insights into how people perceive cities.

The tools that you see depend on your permissions. Each group of tools has a separate permission. Thus, a user without
access to city data does not see the city tools.

**Tip:** You can ask the agent to list the available tools. You can also use
the [list tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#listing-tools) mechanism from
the MCP specification. This mechanism returns the full tool definitions, with parameters and descriptions.

### Country Data Tools

| Tool                                   | Description                                                                                                                  | Requires access to |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `get-country-factors-data`             | How people perceive countries on the 10 high-level factors that correlate with GDP growth, with the overall Best Country rank.          | Country data       |
| `get-country-perception-data`          | How people perceive countries on a wide range of imagery attributes.                                                         | Country data       |
| `get-country-doing-business-data`      | If business decision makers would consider business in countries.                                                            | Country data       |
| `get-country-education-data`           | If people would consider a university education in countries.                                                                | Country data       |
| `get-country-visit-consideration-data` | If people would consider a vacation visit to countries.                                                                      | Country data       |
| `get-product-origin-data`              | If people would consider the purchase of products from countries, in different product categories.                           | Origin Index data  |

### City Data Tools

| Tool                                | Description                                                                 | Requires access to |
|-------------------------------------|-----------------------------------------------------------------------------|--------------------|
| `get-city-perception-data`          | How people perceive cities on a wide range of imagery attributes.           | City data          |
| `get-city-doing-business-data`      | If business decision makers would consider business in cities.              | City data          |
| `get-city-visit-consideration-data` | If people would consider a vacation visit to cities.                        | City data          |

### Tool Parameters

All tools accept the same set of optional parameters. Your agent tries to find the values in the user input:

- `countries` (country tools) - ISO 3166-1 alpha-2 country codes or country IDs. If it is empty, the tool returns all
  studied countries.
- `cities` (city tools) - Complete city names or city IDs. If it is empty, the tool returns all studied cities.
- `years` - Year numbers or year IDs. The tools support data from 2022 and later.
- `audiences` - Audience names or IDs.
- `scoreType` - Either `rank` (how the country or city ranks against all others) or `score` (a 100-point score from
  worst to best against all others).

If a request does not include a parameter, the BAV systems automatically use a fallback value. If the request has no
countries and no years, the tool uses the latest year of Best Countries data. If the request has no audience, the tool
uses the default audience.

:::note Unstable Responses
Traditional API responses are stable over time. We do not promise that MCP server responses will be stable. The data
can change, and the models can also change how they respond to user requests. If your application needs stable
responses, we recommend this procedure. After the agent calls the tools, ask it for a structured data response.
:::
