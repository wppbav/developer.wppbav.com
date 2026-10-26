---
sidebar_label: Connecting Clients
---

# Connecting Clients

Our MCP servers are remote servers. They work with all MCP clients that support the Streamable HTTP transport and the
standard MCP authorization flow. In most clients, you only need to give the server URL. The client then opens a browser
window. In this window, you sign in with your WPP Okta account. You then authorize the client to get data on your
behalf.

:::warning Authorized Agent Environments
Connect to the BAV MCP servers only from authorized agent environments that WPP legal approved. If you are not sure
that your environment is authorized, contact us. For more information, refer to
[access and authorization](./access-authorization.md).
:::

## Server URLs

| Server                                | URL                                           |
|---------------------------------------|-----------------------------------------------|
| [BAV](./bav.md)                       | `https://mcp-beta.wppbav.com/v1/bav`            |
| [Best Countries](./best-countries.md) | `https://mcp-beta.wppbav.com/v1/best-countries` |
| [Financial Data](./financial-data.md) | `https://mcp-beta.wppbav.com/v1/futures`        |
| [Market Share](./market-share.md)     | `https://mcp-beta.wppbav.com/v1/market-share`   |

:::note
The domain will change to `mcp.wppbav.com` in the future. We will tell you about this change a sufficient time before
it occurs, so that you can update your applications.
:::

You add each server to your client separately. Thus, you can connect only the servers that you need.

## WPP Open

All of the BAV MCP servers are available in WPP Open through Creative Studio and its agent builder.

Thus, you can build agents that use the BAV MCP servers directly in WPP Open. You can also use the capabilities of the
agent builder to create custom workflows and integrations.

To start to use the BAV MCP servers in WPP Open, do these steps:

1. Log in to your WPP Open account.
2. Go to Creative Studio.
3. Open your playground or one of your current projects.
4. In the Agent Builder, create a new agent or open a current agent.
5. In the Instructions tab, open Tools & Settings.
6. Find the server that you want in the Tools list.

You can now use the MCP servers in your WPP Open agents. The servers add capabilities to your agents and make more
powerful workflows possible.

The [Social Data](./social.md) connector from our partner Sightly is also available in WPP Open as a third-party
connector. You can use it together with the BAV MCP servers in the same agent.

### Using pre-built agents

To get the most from the BAV MCP server, you must first learn about BAV data, concepts and methodology. If you build an
internal tool, contact us for help.

To help you start quickly, we made some pre-built agents. These agents create summaries and reports from key BAV data.
You can add them as one part of a multi-step agent workflow. BAV manages these agents. With them, you can start to use
BAV data with a minimum of setup. For more information, refer to [BAV Agents](../agents.md).

## Claude

In the Claude apps, you can add our servers as custom connectors:

1. Add a new custom connector.
2. Give it a name.
3. Paste the server URL.

Claude then takes you through the sign-in and authorization flow. On some plans, an organization administrator must
first add the connector for your organization.

In Claude Code, you can add a server from the command line:

```bash
claude mcp add --transport http wpp-bav https://mcp-beta.wppbav.com/v1/bav
```

Then run `/mcp` in Claude Code to sign in and authorize the server.

## ChatGPT

On some plans and workspace settings, ChatGPT supports remote MCP servers as custom connectors. Possibly, your
workspace administrator must first enable custom connectors.

1. Create a new connector with the server URL.
2. Select OAuth as the authentication method.

ChatGPT then takes you through the sign-in and authorization flow.

## Microsoft 365 Copilot

To use our servers in Microsoft 365 Copilot, add them as a tool to an agent in
[Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent). Then
publish the agent to Microsoft 365 Copilot and Teams.

1. Open your agent in Copilot Studio and go to the **Tools** page.
2. Select **Add a tool**, then **New tool**, then **Model Context Protocol**.
3. Enter a **Server name**, a **Server description** and the **Server URL**, for example
   `https://mcp-beta.wppbav.com/v1/bav`. Write a clear description of the server function. The agent uses the
   description to decide when to call the server. For example: "WPP BAV brand equity data: brands, studies, pillars,
   imagery and other brand metrics."
4. Select **OAuth 2.0** as the authentication type and **Dynamic discovery** as the OAuth type. Our servers support
   dynamic client registration. Thus, you do not need a client ID or secret.
5. Select **Create**, then **Next**.
6. Select **Create a new connection**.
7. Sign in with your WPP account and authorize access.
8. Select **Add to agent**.

Do these steps again for each server that you want the agent to use. Each user of the agent signs in with their own
account. Thus, each user sees only the tools that they have access to.

The data policies of your organization for Power Platform connectors also apply to MCP servers. Thus, possibly an
administrator must first allow the connection.

## GitHub Copilot in VS Code

In VS Code, you can add the servers to an `mcp.json` file. This file can be in your workspace (`.vscode/mcp.json`) or
in your user configuration:

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

When the server starts, VS Code tells you to sign in and authorize it. The tools are then available to Copilot in
agent mode.

## Other clients

All MCP clients that support remote servers over Streamable HTTP can connect to our servers. Remember these points:

- **Streamable HTTP only.** The servers accept only `POST` requests. The servers do not support the older SSE
  (Server-Sent Events) transport. `GET` and `DELETE` requests to the server URL return `405 Method Not Allowed`.
- **OAuth discovery.** Clients that support the MCP authorization flow find all the data that they need in the `401`
  response and the `.well-known` metadata. This includes dynamic client registration. For more information, refer to
  [access and authorization](./access-authorization.md).
- **Personal access tokens.** Some clients do not support OAuth, but let you set custom headers. In these clients, send
  a personal access token as a Bearer token in the `Authorization` header.
- **Local-only clients.** If your client supports only local (stdio) servers, use a proxy such as
  [mcp-remote](https://www.npmjs.com/package/mcp-remote) to connect it to a remote server.

If you cannot connect a specific client, [contact us](mailto:bavsupport@wpp.com).
