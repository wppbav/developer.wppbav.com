---
slug: mcp-apps-and-audiences
title: Interactive charts and audience building in MCP
authors: erikbernskiold
---

Agents connected to the BAV MCP server can now show interactive charts and build custom audiences, right in the
conversation.

<!-- truncate -->

## Interactive charts with MCP Apps

MCP Apps let a server return interactive interfaces alongside its data. In clients that support MCP Apps, the new
display tools render BAV charts directly in the chat:

- `display-powergrid-chart` for the PowerGrid
- `display-pillar-chart` for the brand pillars
- `display-imagery-chart` for imagery attributes
- `display-brand-relationship-chart` for brand relationships

Read more in [MCP Apps](/docs/2.x/ai/mcp/mcp-apps).

## Audience building

Agents can now create and manage custom audiences, add definitions and deploy them, using tools such as
`create-audience`, `add-audience-definition` and `deploy-audience`. Once deployed, an audience can be used across the
BAV data tools like any other.

See the [BAV MCP Server](/docs/2.x/ai/mcp/bav#audience-tools) documentation for the full list of audience tools.
