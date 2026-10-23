---
sidebar_label: Introduction
---

# Introduction

By using an MCP server you can connect your AI models and agents directly to BAV data. This allows your agents to
retrieve up-to-date information from BAV and use it to answer user queries, generate insights, and power your workflows.

MCP (Model Context Protocol) is an open standard that allows AI models and agents to interact with external data
sources through a set of defined tools. Think of it as an API but specifically designed for AI models and agents to call
tools to retrieve data.

We're excited to see how you and your agents use BAV data to power your workflows. If you have questions, feedback, or
requests for new MCP tools, please let us know.

## Our MCP Servers

We currently offer a few different MCP servers that you can connect to depending on which dataset you want to access.
Please refer to each server's documentation for more details on the available tools.

| Server                                          | URL                                           | Data                                                              |
|-------------------------------------------------|-----------------------------------------------|-------------------------------------------------------------------|
| [BAV](./bav.md)                                 | `https://mcp-beta.wppbav.com/v1/bav`            | WPP BAV brand equity data and metadata.                           |
| [Best Countries](./best-countries.md)           | `https://mcp-beta.wppbav.com/v1/best-countries` | WPP BAV Best Countries data on how countries and cities are seen. |
| [Financial Data](./financial-data.md)           | `https://mcp-beta.wppbav.com/v1/futures`        | Financial data and share prices for listed companies worldwide.   |
| [Market Share](./market-share.md)               | `https://mcp-beta.wppbav.com/v1/market-share`   | Euromonitor market share for brands and companies.                |

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

In addition to our own servers, the [Social Data](./social.md) connector by our partner Sightly is available as a
third-party connector in WPP Open. It gives your agents access to real-time social and news listening data that works
well alongside BAV brand perception data.

## Getting started

- **[Concepts](./concepts.md)** explains how the servers, tools and data fit together.
- **[Access & Authorization](./access-authorization.md)** covers who can connect and how authorization works.
- **[Connecting Clients](./connecting-clients.md)** shows how to add the servers to Claude, ChatGPT, Copilot, WPP Open
  and other MCP clients.

## Building an internal tool?

Getting started with the BAV MCP server has a little learning curve in familiarizing yourself with BAV data, concepts
and methodology to make the most out of it. If you are building an internal tool to release to the group, please do [get
in touch with us](mailto:bavsupport@wpp.com) for assistance and collaboration.

## Issues and Feedback

If you encounter any issues while using the MCP servers or have suggestions for improvements, please reach out to us.
The AI development speed is rapid and we are continuously working to enhance our MCP offerings as new capabilities are
possible.

Your needs and feedback are invaluable in helping us prioritize our development efforts. We look forward to hearing from
you!
