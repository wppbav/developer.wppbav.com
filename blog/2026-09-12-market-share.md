---
slug: market-share
title: Euromonitor market share in the API and MCP
authors: erikbernskiold
---

Market share data from Euromonitor is now available in both the API and through a new MCP server, alongside BAV
brand equity data.

<!-- truncate -->

## In the API

New endpoints give you Euromonitor's catalogs of brands, companies, categories, data types, geographies and industries,
and the brand and company share data itself. They need the `bav:market-share-data` scope, and access to Euromonitor
data on your account.

A few things to keep in mind:

- Euromonitor has its own IDs for everything. Fields that link to BAV are prefixed with `bav_`.
- A `null` value means the figure wasn't supplied, never zero.
- Share queries must be narrowed by at least one brand, company, category, geography or industry.

See [Market Share](/docs/2.x/market-share/) for the full documentation.

## In MCP

The new Market Share MCP server at `/v1/market-share` gives agents the same data. See the
[Market Share Server](/docs/2.x/ai/mcp/market-share) documentation for details.
