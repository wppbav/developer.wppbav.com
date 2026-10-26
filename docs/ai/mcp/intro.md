---
sidebar_label: Introduction
---

# Introduction

With an MCP server, you can connect your AI models and agents directly to BAV data. Your agents can then get current
information from BAV. They can use it to answer user queries, make insights, and power your workflows.

MCP (Model Context Protocol) is an open standard. It lets AI models and agents use external data sources through a set
of defined tools. MCP is similar to an API, but it is specially for AI models and agents that call tools to get data.

We are interested to see how you and your agents use BAV data in your workflows. If you have questions, feedback, or
requests for new MCP tools, tell us.

## Our MCP Servers

We have some different MCP servers. Connect to the server for the dataset that you want to use. For more information
about the available tools, refer to the documentation for each server.

| Server                                          | URL                                           | Data                                                              |
|-------------------------------------------------|-----------------------------------------------|-------------------------------------------------------------------|
| [BAV](./bav.md)                                 | `https://mcp-beta.wppbav.com/v1/bav`            | WPP BAV brand equity data and metadata.                           |
| [Best Countries](./best-countries.md)           | `https://mcp-beta.wppbav.com/v1/best-countries` | WPP BAV Best Countries data on how countries and cities are seen. |
| [Financial Data](./financial-data.md)           | `https://mcp-beta.wppbav.com/v1/futures`        | Financial data and share prices for listed companies worldwide.   |
| [Market Share](./market-share.md)               | `https://mcp-beta.wppbav.com/v1/market-share`   | Euromonitor market share for brands and companies.                |

:::note
The domain will change to `mcp.wppbav.com` in the future. We will tell you about this change a sufficient time before
it occurs, so that you can update your applications.
:::

The [Social Data](./social.md) connector from our partner Sightly is also available as a third-party connector in WPP
Open. It gives your agents access to real-time social and news listening data. This data works well together with BAV
brand perception data.

## Getting started

- **[Concepts](./concepts.md)** explains how the servers, tools and data fit together.
- **[Access & Authorization](./access-authorization.md)** covers who can connect and how authorization works.
- **[Connecting Clients](./connecting-clients.md)** shows how to add the servers to Claude, ChatGPT, Copilot, WPP Open
  and other MCP clients.

## Building an internal tool?

To get the most from the BAV MCP server, you must first learn about BAV data, concepts and methodology. If you build an
internal tool to release to the group, [contact us](mailto:bavsupport@wpp.com). We can help you and work with you.

## Issues and Feedback

If you have problems with the MCP servers or have suggestions for improvements, contact us. AI development is fast.
We continue to improve our MCP servers when new capabilities become possible.

Your needs and feedback help us to set the priorities for our development. We look forward to your feedback.
