---
sidebar_label: MCP Apps (Charts)
---

# MCP Apps

The [BAV MCP server](./bav.md) includes a set of display tools that render interactive BAV charts directly in the
conversation. They are built on [MCP Apps](https://github.com/modelcontextprotocol/ext-apps), an extension to the
Model Context Protocol that lets a tool come with its own user interface.

## How it works

Each display tool declares a UI resource (a `ui://` URI) in its tool metadata. When an agent calls the tool, a client
that supports MCP Apps loads that resource, an HTML page served with the `text/html;profile=mcp-app` MIME type, and
renders it in a sandboxed frame inside the conversation. The tool result carries the chart configuration and data as
structured content, which the page uses to draw the chart.

You don't need to fetch the resources yourself. A client with MCP Apps support handles this automatically.

## Client support

MCP Apps is an extension, so not every MCP client supports it. Support is growing across AI assistants and agent
frameworks, but it varies between clients and versions, so please check the documentation of the client you use.

In a client without MCP Apps support, the display tools can still be called, but no chart is shown. The agent only
receives a short text confirmation. If your client does not support MCP Apps, have your agent use the regular data tools
instead.

## Display tools

| Tool                               | UI resource                      | Chart                                                                                       |
|------------------------------------|----------------------------------|---------------------------------------------------------------------------------------------|
| `display-pillar-chart`             | `ui://pillar-chart`              | A column chart of the four pillars of brand equity: Differentiation, Relevance, Esteem and Knowledge. |
| `display-imagery-chart`            | `ui://imagery-chart`             | A chart of brand imagery (perception) attributes.                                           |
| `display-powergrid-chart`          | `ui://powergrid-chart`           | A square scatter chart of Brand Strength against Brand Stature, with the Leadership, Momentum, Fatigued and Unfocused quadrants and the Mass Market line. |
| `display-brand-relationship-chart` | `ui://brand-relationship-chart`  | Preferences, Recommendation and Usage in one chart, with a toggle between the three.         |

All display tools are available to users who can view BAV brand data.

### Parameters

The display tools take the same data selection parameters as the brand data tools: `studies` (required to get a
chart), `brands`, `audiences`, `countries` and `years`. Selecting a study works exactly as described in
[selecting data](./bav.md#selecting-data). If only `countries` and `years` are given, the tool asks the agent to choose
a study first. If the data is still being generated, the tool says so and the agent should call it again shortly.

Some display tools take extra parameters:

- `display-imagery-chart`
  - `chart_type` - `line` (default), `bar` or `tree`. The treemap is only available when there is a single series.
  - `score_type` - `rank` (default) or `percentage`.
  - `sort_by` - A series ID to sort the attributes by, highest first. If left out, attributes are sorted alphabetically.
- `display-brand-relationship-chart`
  - `data_type` - The data shown first: `preferences` (default), `recommendation` or `usage`.

### Interacting with the charts

All charts:

- Follow the client's light or dark theme.
- Offer a fullscreen mode when the client supports it.
- Link to the same view in the WPP BAV platform, so the user can continue the analysis there.

The imagery chart also lets the user switch between line and bar, between rank and percentage scores, and change the
sort order, without another tool call. The brand relationship chart lets the user switch between preferences,
recommendation and usage.

## Charts and commentary

The display tools return a chart, not the data. The text the agent receives only confirms that the chart is shown, and
points it to the matching data tool. If you want the agent to comment on what the chart shows, it should also call the
data tool:

| Display tool                       | Data tool(s)                                                         |
|------------------------------------|----------------------------------------------------------------------|
| `display-pillar-chart`             | `get-pillar-data`                                                    |
| `display-imagery-chart`            | `get-imagery-data`                                                   |
| `display-powergrid-chart`          | `get-powergrid-data`                                                 |
| `display-brand-relationship-chart` | `get-preferences-data`, `get-recommendation-data`, `get-usage-data`  |
