---
sidebar_label: Connecting Clients
---

# Connecting Clients

Our MCP servers are remote servers that work with any MCP client that supports the Streamable HTTP transport and the
standard MCP authorization flow. In most clients, all you need to provide is the server URL. The client will then
open a browser window where you sign in with your WPP Okta account and authorize the client to access data on your
behalf.

:::warning Authorized Agent Environments
Please note that you may only connect to the BAV MCP servers from authorized agent environments that have been
vetted by WPP legal. If you are not sure whether your environment is authorized, please reach out. See
[access and authorization](./access-authorization.md) for more information.
:::

## Server URLs

| Server                                | URL                                           |
|---------------------------------------|-----------------------------------------------|
| [BAV](./bav.md)                       | `https://mcp-beta.wppbav.com/v1/bav`            |
| [Best Countries](./best-countries.md) | `https://mcp-beta.wppbav.com/v1/best-countries` |
| [Financial Data](./financial-data.md) | `https://mcp-beta.wppbav.com/v1/futures`        |
| [Market Share](./market-share.md)     | `https://mcp-beta.wppbav.com/v1/market-share`   |

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

Each server is added to your client separately, so you can choose to only connect the servers you need.

## WPP Open

All of the BAV MCP servers are available in WPP Open via Creative Studio and its agent builder.

This allows you to build agents that can access the BAV MCP servers directly from within WPP Open,
and leverage the capabilities of the agent builder to create custom workflows and integrations.

To get started with using the BAV MCP servers in WPP Open, follow these steps:

1. Log in to your WPP Open account and navigate to Creative Studio.
2. Open your playground or one of your existing projects.
3. Create a new agent or open an existing one in the Agent Builder.
4. In the Instructions tab, open Tools & Settings and find the server you want in the Tools list.

And that's it! You can now use the MCP servers in your WPP Open agents to enhance their capabilities and create more
powerful workflows.

The [Social Data](./social.md) connector by our partner Sightly is also available in WPP Open as a third-party
connector, and can be combined with the BAV MCP servers in the same agent.

### Using pre-built agents

Getting started with the BAV MCP server has a little learning curve in familiarizing yourself with BAV data, concepts
and methodology to make the most out of it. If you are building an internal tool, please do get in touch with us for
assistance.

To help you get started quickly, we have created some pre-built agents that create summaries and reports using key BAV
data. These can be helpful to drop in as part of a multi-step agent workflow. They are managed by BAV and make it
super-simple for you to get started with BAV data with minimal setup. See [BAV Agents](../agents.md) for more
information.

## Claude

In the Claude apps, our servers can be added as custom connectors. Add a new custom connector, give it a name and
paste the server URL. Claude will then take you through the sign-in and authorization flow. Depending on your plan, an
organization administrator may need to add the connector for your organization first.

In Claude Code, you can add a server from the command line:

```bash
claude mcp add --transport http wpp-bav https://mcp-beta.wppbav.com/v1/bav
```

Then run `/mcp` inside Claude Code to sign in and authorize the server.

## ChatGPT

ChatGPT supports remote MCP servers as custom connectors, depending on your plan and workspace settings. Create a new
connector using the server URL and choose OAuth as the authentication method. ChatGPT will then take you through the
sign-in and authorization flow. Your workspace administrator may need to enable custom connectors first.

## Microsoft 365 Copilot

To use our servers in Microsoft 365 Copilot, add them as a tool to an agent in
[Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent), and
then publish the agent to Microsoft 365 Copilot and Teams.

1. Open your agent in Copilot Studio and go to the **Tools** page.
2. Select **Add a tool**, then **New tool**, then **Model Context Protocol**.
3. Enter a **Server name**, a **Server description** and the **Server URL**, for example
   `https://mcp-beta.wppbav.com/v1/bav`. Describe what the server does clearly, as the agent uses the description to
   decide when to call it. For example: "WPP BAV brand equity data: brands, studies, pillars, imagery and other brand
   metrics."
4. Choose **OAuth 2.0** as the authentication type and **Dynamic discovery** as the OAuth type. Our servers support
   dynamic client registration, so no client ID or secret is needed.
5. Select **Create**, then **Next**.
6. Select **Create a new connection**, sign in with your WPP account and authorize access, then select
   **Add to agent**.

Repeat the steps for each server you want the agent to use. Each user of the agent signs in with their own account,
so they only see the tools they have access to.

Your organization's data policies for Power Platform connectors also apply to MCP servers, so an administrator may
need to allow the connection first.

## GitHub Copilot in VS Code

In VS Code, you can add the servers to an `mcp.json` file, either in your workspace (`.vscode/mcp.json`) or in your
user configuration:

```json
{
  "servers": {
    "wpp-bav": {
      "type": "http",
      "url": "https://mcp-beta.wppbav.com/v1/bav"
    },
    "wpp-best-countries": {
      "type": "http",
      "url": "https://mcp-beta.wppbav.com/v1/best-countries"
    }
  }
}
```

When the server starts, VS Code will prompt you to sign in and authorize it. The tools are then available to Copilot in
agent mode.

## Other clients

Any MCP client that supports remote servers over Streamable HTTP can connect to our servers. A few things to keep in
mind:

- **Streamable HTTP only.** The servers only accept `POST` requests. The older SSE (Server-Sent Events) transport is not
  supported, and `GET` and `DELETE` requests to the server URL return `405 Method Not Allowed`.
- **OAuth discovery.** Clients that support the MCP authorization flow will discover everything they need from the
  `401` response and the `.well-known` metadata, including dynamic client registration. See
  [access and authorization](./access-authorization.md) for details.
- **Personal access tokens.** If your client does not support OAuth but lets you set custom headers, you can pass a
  personal access token as a Bearer token in the `Authorization` header instead.
- **Local-only clients.** If your client only supports local (stdio) servers, you can use a proxy such as
  [mcp-remote](https://www.npmjs.com/package/mcp-remote) to connect it to a remote server.

If you have trouble connecting a specific client, please [get in touch with us](mailto:bavsupport@wpp.com).
