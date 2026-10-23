---
sidebar_label: Market Share Server
---

# Market Share MCP Server

The Market Share MCP Server provides access to Euromonitor market share data for brands and companies through a set of
tools that can be called by AI agents. Market share can be sliced by category, geography, data type and year, and
read alongside BAV brand equity data for brands and companies that have been linked to BAV.

## Connecting to the server

Our remote MCP server uses the Streamable HTTP transport.
To connect to the Market Share MCP server, you need to use the following URL:

```
https://mcp-beta.wppbav.com/v1/market-share
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

For authorization, please see the [access and authorization](./access-authorization.md) section. For step-by-step
instructions for your client, see [connecting clients](./connecting-clients.md).

### Access

The Market Share tools require access to Euromonitor data. Users without it will not see any tools when connecting
to the server. Please [get in touch with us](mailto:bavsupport@wpp.com) if you need access.

## How the data works

The server gives your agent a set of instructions on how to use the data. These are worth knowing if you are building
on top of the server, as they explain how to read the responses.

- **Euromonitor has its own IDs.** Euromonitor keeps its own catalog of brands, companies, categories, geographies,
  industries and data types, and none of them are BAV's. Look up IDs with the `get-euromonitor-*` tools first. A BAV ID
  passed as a Euromonitor ID does not fail. It silently reads as a different entity.
- **Linked BAV brands and companies.** Where a Euromonitor brand or company has been linked to a BAV brand or company,
  the lookup tools say so. Only linked entries can be read alongside BAV brand equity data. You can also pass BAV brand
  and company IDs directly using the `bav_brands` and `bav_companies` parameters, which are matched through the link.
- **Every share query must be narrowed.** A share query has to name at least one entity, category, geography or
  industry. A year on its own would return the whole of Euromonitor and is refused.
- **Null is not zero.** The measures arrive in separate extracts and are merged into one row. A `null` value is a
  figure that was not supplied for that slice, never a zero.
- **Only licensed industries are available.** An industry that is not listed by `get-euromonitor-industries` is not
  licensed, which means there is no data at all rather than a share of zero.

## Available Tools

The Market Share MCP server provides two sets of tools:

- **Catalog Tools:** Look up the Euromonitor IDs that the share tools filter on.
- **Share Data Tools:** Fetch market share figures for brands and companies.

**Tip:** You can always ask the agent to list the available tools interactively, or you can use
the [list tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools#listing-tools) mechanism as
defined in the MCP specification. This will return the full tool definitions including parameters and descriptions.

### Catalog Tools

All catalog tools accept an optional `search` parameter to search by part of a name, and a `page` parameter for
pagination. Results are returned 50 at a time, and the response includes a `next_page` value until there are no more
pages.

| Tool                          | Description                                                                                                  | Additional parameters                                                                   |
|-------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `get-euromonitor-brands`      | Search Euromonitor brands, including the owning Euromonitor company and the BAV brand each one is linked to. | `companies` (Euromonitor company IDs), `linked_to_bav` (true/false)                     |
| `get-euromonitor-companies`   | Search Euromonitor companies, including the BAV company each one is linked to.                               | `linked_to_bav` (true/false)                                                            |
| `get-euromonitor-categories`  | Search the tree of Euromonitor categories that a market share is a share of.                                 | `industries` (Euromonitor industry IDs), `level` (depth in the tree), `parent` (category ID) |
| `get-euromonitor-geographies` | Search the tree of regions, countries and cities, including the BAV country each one lines up with.          | `type` (`region`, `country` or `city`)                                                  |
| `get-euromonitor-industries`  | Search the Euromonitor industries, the top of the category tree and the whole of what is licensed.           | -                                                                                       |
| `get-euromonitor-data-types`  | Search the data types, i.e. what a share row measures, such as retail value or retail volume.                | `industries` (Euromonitor industry IDs), `categories` (Euromonitor category IDs)        |

A few things to keep in mind when working with the catalogs:

- Euromonitor names brands and companies its own way, often using the legal name for companies (e.g. "Procter & Gamble
  Co, The"). Searching for a distinctive part of the name works better than the full name.
- A parent category's figures cover the whole of it, so a parent should never be summed with its children.
- A region's figures are its own, never the sum of the countries in it.

### Share Data Tools

| Tool                       | Description                                                                                                      |
|----------------------------|------------------------------------------------------------------------------------------------------------------|
| `get-brand-market-share`   | How much of a category a brand holds in a market.                                                                |
| `get-company-market-share` | How much of a category a company holds in a market. This is the company's own share, not the sum of its brands. |

Both tools accept the following parameters. Each parameter accepts an array of IDs or names (up to 50 values).

- `brands` - Euromonitor brand IDs or names, from `get-euromonitor-brands`. Brand tool only.
- `bav_brands` - BAV brand IDs or names. Matched through the link on the brand. An unlinked brand returns nothing.
  Brand tool only.
- `companies` - Euromonitor company IDs or names, from `get-euromonitor-companies`.
- `bav_companies` - BAV company IDs or names. Matched through the link on the company. An unlinked company returns
  nothing.
- `categories` - Euromonitor category IDs or names.
- `geographies` - Euromonitor geography IDs or names. Not BAV country IDs.
- `industries` - Euromonitor industry IDs or names.
- `data_types` - Euromonitor data type IDs or names, e.g. "Retail Value RSP". Pass one, since rows that only differ by
  data type measure different things.
- `years` - Year numbers, e.g. `2024`. Must be combined with another filter.
- `score_type` - Which measure each row carries: `actual_usd` (default), `actual_local`, `percentage` (the share of the
  category in that market) or `rank` (the position in the category, where 1 is the largest).

At least one of the brand, company, category, geography or industry parameters must be provided. If a name or ID cannot
be matched, the tool returns an error naming the parameter rather than an empty result, so that your agent can look up
the correct value and try again.

:::note Unstable Responses
We do not promise that MCP server responses will be stable over time, in contrast to traditional API responses. The
data may be updated, and the models may also change how they respond to user requests. If you need stable responses for
your application we suggest prompting for a structured data response after the agent has called the tools.
:::
