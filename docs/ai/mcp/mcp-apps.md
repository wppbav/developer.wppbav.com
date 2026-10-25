---
sidebar_label: MCP Apps (Charts)
---

# MCP Apps

The [BAV MCP server](./bav.md) includes a set of display tools that show interactive BAV charts directly in the
conversation. These tools use [MCP Apps](https://github.com/modelcontextprotocol/ext-apps). MCP Apps is an extension to
the Model Context Protocol that lets a tool have its own user interface.

## How it works

Each display tool declares a UI resource (a `ui://` URI) in its tool metadata. The resource is an HTML page with the
`text/html;profile=mcp-app` MIME type. When an agent calls the tool, a client that supports MCP Apps loads that
resource. The client then shows the page in a sandboxed frame in the conversation. The tool result contains the chart
configuration and data as structured content. The page uses this content to draw the chart.

You do not need to get the resources yourself. A client with MCP Apps support does this automatically.

## Client support

MCP Apps is an extension. Thus, some MCP clients do not support it. More AI assistants and agent frameworks support it
over time. But the support is different between clients and versions. Refer to the documentation of your client.

In a client without MCP Apps support, the agent can call the display tools, but the client does not show a chart. The
agent gets only a short text confirmation. If your client does not support MCP Apps, tell your agent to use the regular
data tools.

## Display tools

| Tool                               | UI resource                      | Chart                                                                                       |
|------------------------------------|----------------------------------|---------------------------------------------------------------------------------------------|
| `display-pillar-chart`             | `ui://pillar-chart`              | A column chart of the four pillars of brand equity: Differentiation, Relevance, Esteem and Knowledge. |
| `display-imagery-chart`            | `ui://imagery-chart`             | A chart of brand imagery (perception) attributes.                                           |
| `display-powergrid-chart`          | `ui://powergrid-chart`           | A square scatter chart of Brand Strength against Brand Stature, with the Leadership, Momentum, Fatigued and Unfocused quadrants and the Mass Market line. |
| `display-brand-relationship-chart` | `ui://brand-relationship-chart`  | Preferences, Recommendation and Usage in one chart, with a toggle between the three.         |

All display tools are available to users who can view BAV brand data.

### Parameters

The display tools use the same data selection parameters as the brand data tools: `studies` (required to get a
chart), `brands`, `audiences`, `countries` and `years`. Study selection works as
[selecting data](./bav.md#selecting-data) describes. If the request has only `countries` and `years`, the tool tells the
agent to select a study first. If the data is not ready yet, the tool tells the agent. The agent must then call the
tool again soon.

Some display tools have more parameters:

- `display-imagery-chart`
  - `chart_type` - `line` (default), `bar` or `tree`. The treemap is available only when there is one series.
  - `score_type` - `rank` (default) or `percentage`.
  - `sort_by` - A series ID to sort the attributes by, highest first. If you do not give it, the tool sorts the
    attributes alphabetically.
- `display-brand-relationship-chart`
  - `data_type` - The data shown first: `preferences` (default), `recommendation` or `usage`.

### Interacting with the charts

All charts:

- Follow the client's light or dark theme.
- Offer a fullscreen mode when the client supports it.
- Link to the same view in the WPP BAV platform, so the user can continue the analysis there.

In the imagery chart, the user can also change between line and bar, and between rank and percentage scores. The user
can also change the sort order. These changes do not need another tool call. In the brand relationship chart, the user
can change between preferences, recommendation and usage.

## Charts and commentary

The display tools return a chart, not the data. The text that the agent gets only confirms that the client shows the
chart. The text also refers the agent to the applicable data tool. If you want the agent to comment on the chart, the
agent must also call the data tool:

| Display tool                       | Data tool(s)                                                         |
|------------------------------------|----------------------------------------------------------------------|
| `display-pillar-chart`             | `get-pillar-data`                                                    |
| `display-imagery-chart`            | `get-imagery-data`                                                   |
| `display-powergrid-chart`          | `get-powergrid-data`                                                 |
| `display-brand-relationship-chart` | `get-preferences-data`, `get-recommendation-data`, `get-usage-data`  |
