---
sidebar_label: Market Share Server
---

# Market Share MCP Server

The Market Share MCP Server gives access to Euromonitor market share data for brands and companies through a set of
tools that AI agents can call. You can divide market share by category, geography, data type and year. For brands and
companies with a link to BAV, you can also read market share together with BAV brand equity data.

## Connecting to the server

Our remote MCP server uses the Streamable HTTP transport.
To connect to the Market Share MCP server, use this URL:

```
https://mcp-beta.wppbav.com/v1/market-share
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We will tell you about this change a sufficient time before
it occurs, so that you can update your applications.
:::

For authorization, refer to the [access and authorization](./access-authorization.md) section. For step-by-step
instructions for your client, refer to [connecting clients](./connecting-clients.md).

### Access

The Market Share tools require access to Euromonitor data. When users without this access connect to the server,
they see no tools. If you need access, [contact us](mailto:bavsupport@wpp.com).

## How the data works

The server gives your agent a set of instructions about how to use the data. If you build on the server, it is
important to know these instructions, because they explain how to read the responses.

- **Euromonitor has its own IDs.** Euromonitor has its own catalog of brands, companies, categories, geographies,
  industries and data types. None of them are BAV items. First, find the IDs with the `get-euromonitor-*` tools. If you
  send a BAV ID as a Euromonitor ID, the request does not fail. The tool silently reads it as a different entity.
- **Linked BAV brands and companies.** If a Euromonitor brand or company has a link to a BAV brand or company, the
  lookup tools tell you. You can read only linked entries together with BAV brand equity data. You can also send BAV
  brand and company IDs directly in the `bav_brands` and `bav_companies` parameters. The tools match them through the
  link.
- **Every share query must be narrowed.** A share query must name one or more entities, categories, geographies or
  industries. A year alone will return all of Euromonitor, so the tool refuses it.
- **Null is not zero.** The measures come in separate extracts, and the system merges them into one row. A `null`
  value is a figure that Euromonitor did not supply for that slice. It is never a zero.
- **Only licensed industries are available.** If `get-euromonitor-industries` does not list an industry, that industry
  is not licensed. This means that there is no data, not a share of zero.

## Available Tools

The Market Share MCP server has two sets of tools:

- **Catalog Tools:** Find the Euromonitor IDs that the share tools use as filters.
- **Share Data Tools:** Get market share figures for brands and companies.

**Tip:** You can ask the agent to list the available tools. You can also use
the [list tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#listing-tools) mechanism from
the MCP specification. This mechanism returns the full tool definitions, with parameters and descriptions.

### Catalog Tools

All catalog tools accept an optional `search` parameter to search by part of a name. They also accept a `page`
parameter for pagination. Each page contains 50 results. The response includes a `next_page` value until there are no
more pages.

| Tool                          | Description                                                                                                  | Additional parameters                                                                   |
|-------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `get-euromonitor-brands`      | Search Euromonitor brands. Includes the Euromonitor company that owns each brand and its linked BAV brand.   | `companies` (Euromonitor company IDs), `linked_to_bav` (true/false)                     |
| `get-euromonitor-companies`   | Search Euromonitor companies. Includes the linked BAV company of each one.                                   | `linked_to_bav` (true/false)                                                            |
| `get-euromonitor-categories`  | Search the tree of Euromonitor categories that a market share is a share of.                                 | `industries` (Euromonitor industry IDs), `level` (depth in the tree), `parent` (category ID) |
| `get-euromonitor-geographies` | Search the tree of regions, countries and cities. Includes the applicable BAV country of each one.           | `type` (`region`, `country` or `city`)                                                  |
| `get-euromonitor-industries`  | Search the Euromonitor industries, the top of the category tree and the whole of what is licensed.           | -                                                                                       |
| `get-euromonitor-data-types`  | Search the data types. A data type is what a share row measures, such as retail value or retail volume.      | `industries` (Euromonitor industry IDs), `categories` (Euromonitor category IDs)        |

Remember these points when you use the catalogs:

- Euromonitor names brands and companies in its own way. For companies, it frequently uses the legal name (for example
  "Procter & Gamble Co, The"). A search for a distinctive part of the name works better than the full name.
- The figures of a parent category include all of that category. Thus, never add a parent to its children.
- The figures of a region are its own figures. They are never the sum of the countries in the region.

### Share Data Tools

| Tool                       | Description                                                                                                      |
|----------------------------|------------------------------------------------------------------------------------------------------------------|
| `get-brand-market-share`   | How much of a category a brand holds in a market.                                                                |
| `get-company-market-share` | How much of a category a company holds in a market. This is the company's own share, not the sum of its brands. |

Both tools accept these parameters. Each parameter accepts an array of IDs or names (up to 50 values).

- `brands` - Euromonitor brand IDs or names, from `get-euromonitor-brands`. Brand tool only.
- `bav_brands` - BAV brand IDs or names. The tool matches them through the link on the brand. A brand without a link
  returns nothing. Brand tool only.
- `companies` - Euromonitor company IDs or names, from `get-euromonitor-companies`.
- `bav_companies` - BAV company IDs or names. The tool matches them through the link on the company. A company without
  a link returns nothing.
- `categories` - Euromonitor category IDs or names.
- `geographies` - Euromonitor geography IDs or names. Not BAV country IDs.
- `industries` - Euromonitor industry IDs or names.
- `data_types` - Euromonitor data type IDs or names, for example "Retail Value RSP". Send one data type, because rows
  that are different only by data type measure different things.
- `years` - Year numbers, for example `2024`. You must use it with another filter.
- `score_type` - The measure in each row: `actual_usd` (default), `actual_local`, `percentage` (the share of the
  category in that market) or `rank` (the position in the category, where 1 is the largest).

You must send one or more of the brand, company, category, geography or industry parameters. If the tool cannot match a
name or ID, it does not return an empty result. It returns an error that names the parameter. Your agent can then find
the correct value and try again.

:::note Unstable Responses
Traditional API responses are stable over time. We do not promise that MCP server responses will be stable. The data
can change, and the models can also change how they respond to user requests. If your application needs stable
responses, we recommend this procedure. After the agent calls the tools, ask it for a structured data response.
:::
