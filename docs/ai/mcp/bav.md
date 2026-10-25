---
sidebar_label: BAV Server
---

# BAV MCP Server

The BAV MCP Server gives access to the WPP BAV proprietary brand data through a set of tools that AI agents can call.
With these tools, you can build AI applications that use the large set of BAV brand data. These applications can give
insights, recommendations, and analysis.

The tools (refer to the sections below) include research data on brands, metadata about coverage and taxonomy,
audiences, collections, AURA (AI brand research), media performance and interactive charts.

## Connecting to the server

Our remote MCP server supports Streamable HTTP. To connect to the BAV MCP server, use this URL:

```
https://mcp-beta.wppbav.com/v1/bav
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We will tell you about this change a sufficient time before
it occurs, so that you can update your applications.
:::

For authorization, refer to the [access and authorization](./access-authorization.md) section.

If you build an agent on the server, we also recommend that you read [Concepts for agents](./concepts.md). It explains
how studies, score types and data generation work. Most agents have problems with these concepts.

## Available Tools

The tools are in groups by their function:

- **Metadata and lookup tools:** Find brands, markets, studies, sectors, categories, audiences and metric definitions.
- **Brand data tools:** Get the BAV brand data, one data model for each tool.
- **Collection tools:** Create, update and share brand collections.
- **Audience tools:** Build, deploy and find the size of audiences. Read how a population answered survey questions.
- **AURA tools:** How large language models perceive brands, and how this is different from consumers.
- **Media performance tools:** Campaign performance data and benchmarks.
- **Display tools:** Show interactive charts in clients that support [MCP Apps](./mcp-apps.md).

### Which tools you will see

The server registers each tool only for users who have permission to use it. Thus, two people who connect to the same
server can see different lists of tools. If your client does not show a tool from the tables below, the signed-in user
does not have access to that part of the platform. Most tools are available to all BAV users. Some data models and
products need more access. The access column in the tables below tells what each tool requires.

**Tip:** You can ask the agent to list the available tools. You can also use
the [list tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#listing-tools) mechanism from
the MCP specification. This mechanism returns the full tool definitions, with parameters and descriptions.

### Metadata and Lookup Tools

| Tool              | What it does                                                                                                                                                      | Access                                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `get-markets`     | Lists the markets and years with BAV data, and the **study IDs** you need to request data. Each study shows its type, and the recommended study has a mark.         | Users who can view studies.                                    |
| `get-brands`      | Searches brands and returns their details (website, social links, sector, company, tags) and a summary of the markets and years in the studies of each brand.     | Users who can view brands.                                     |
| `list-brand-tags` | Lists the brand tags (such as luxury, direct-to-consumer or family owned) and their keys, for use with the `tags` filter on `get-brands`.                          | Users who can view brands.                                     |
| `get-sectors`     | Lists the sectors in the BAV taxonomy.                                                                                                                            | Users who can view BAV categories.                             |
| `get-categories`  | Lists the categories in the BAV taxonomy. You can filter them by search, sector, study, country or year.                                                          | Users who can view BAV categories.                             |
| `get-audiences`   | Lists the audiences you can segment brand data by. The default audience is "All Adults".                                                                          | Users who can view brand data.                                 |
| `get-glossary`    | Returns definitions of brand metrics, brand measures or audience questions (`type` is required). You can limit them to the items that given studies measured.    | Users who can view at least one of metrics, measures or questions. Each `type` needs its own access. |

#### Finding brands with `get-brands`

`get-brands` accepts the following parameters, all optional:

- `search` - Free text search on the brand name. This is the best way to find a brand by name.
- `brands` - A list of brand IDs.
- `sectors` - A list of sector names or IDs.
- `countries` - A list of country codes (ISO 3166-1 alpha-2) or IDs. Returns only brands with data in these markets.
- `years` - A list of years or IDs. Returns only brands with data in these years.
- `studies` - A list of study names or IDs. Returns only brands that these studies include.
- `tags` - A list of brand tag keys or IDs from `list-brand-tags`. If you send several tags, the tool returns brands
  that have *any* of them, not all of them.
- `include_study_history` - Set to `true` to list all studies for each brand. By default, each brand has only a
  `study_coverage` summary. This summary gives the years and, for each market, the number of studies, the first and
  latest year and the latest study. The reason is that some brands with a long history are in more than a thousand
  studies.
- `page` - The page number. Each page contains 50 brands.

### Brand Data Tools

These tools return the BAV brand data, each for one data model. All of them use the shared
[data selection parameters](#selecting-data) below. Some of them also have their own parameters.

| Tool                            | What it does                                                                                                     | Extra parameters                                                                                       | Access                                       |
|---------------------------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------|
| `get-pillar-data`               | The four pillars of brand equity: Differentiation, Relevance, Esteem and Knowledge.                              | `metrics`                                                                                              | BAV users.                                   |
| `get-powergrid-data`            | Brand Strength and Brand Stature, the PowerGrid position.                                                        | `metrics`                                                                                              | BAV users.                                   |
| `get-imagery-data`              | Imagery (perception) attributes that describe how people see a brand.                                            | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-personality-data`          | Personality, a higher-level summary built from the imagery attributes.                                          | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-archetypes-data`           | The twelve brand archetypes. Supports a competitive mode.                                                        | `comparison_categories`, `comparison_collections`                                                      | BAV users.                                   |
| `get-commitment-funnel-data`    | The Commitment Funnel: the behavioural and emotional relationship between brands and consumers.                  | -                                                                                                      | BAV users.                                   |
| `get-usage-data`                | Usage on a scale from Never Used to Regularly Use.                                                               | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-preferences-data`          | Preference on a scale from Would Never Use to One I Prefer.                                                      | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-recommendation-data`       | The share of consumers who would recommend the brand to a friend.                                                       | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-brand-worth-data`          | The Brand Worth Map: "worth paying more for" versus "providing good value".                                      | -                                                                                                      | BAV users.                                   |
| `get-perception-swot-data`      | A Brand Perception SWOT of the brand against its category or a collection, across imagery attributes. Requires `brands`. | `comparison_categories`, `comparison_collections`, `enable_drivers`, `x_axis_driver`, `y_axis_driver` | BAV users.                                   |
| `get-category-drivers-data`     | Which imagery attributes drive the equity pillars within a category or collection.                               | `categories`, `collections`, `driver_metrics`, `x_axis_metric`, `y_axis_metric`                        | BAV users.                                   |
| `get-correspondence-map-data`   | A correspondence (perception) map of brands against imagery attributes, for positioning and whitespace analysis. | `categories`, `collections`, `selectedMetricKeys`                                                      | BAV users.                                   |
| `get-toplist-data`              | The top-ranking brands for one or more metrics, by percentile rank. No `brands` parameter.                       | `metrics` (required), `categories`, `amount` (1-200, default 10)                                       | BAV users.                                   |
| `get-influence-data`            | How influential a brand is and what makes it influential.                                                        | `metrics`                                                                                              | Users with access to Influence.              |
| `get-customer-experience-data`  | Perceived customer experience through the Super CX analysis.                                                     | -                                                                                                      | Users with access to Super CX.               |
| `get-creative-premium-data`     | The Creative Premium rank, creativity and influence scores.                                                      | -                                                                                                      | Users with access to Creative Premium.       |
| `get-partnership-exchange-data` | Compares the imagery of a brand and a potential partner to find partnership opportunities.                       | Takes one `brand` and one `partner` (both required) in place of `brands`.                              | Users with access to the Imagery Exchange Map. |

#### Selecting data

The brand data tools share these parameters:

- `studies` - A list of study IDs. **This parameter selects the data, and you must send it to get data.** A study is
  one market and year of one study type. Get the study IDs from `get-markets`.
- `brands` - A list of brand names or IDs.
- `audiences` - A list of audience names or IDs to segment the data by. If you do not send it, the tool uses the
  "All Adults" audience. The response then tells that the tool assumed this audience.
- `countries` - A list of country names or codes (e.g. `GB`).
- `years` - A list of years (e.g. `2025`).

`countries` and `years` alone do **not** return data. More than one type of study can include the same market and
year (for example the standard BAV study and a SnapBAV study). You cannot use one type in place of another. The tool
does not guess. It responds with the applicable studies and marks the recommended study. It then tells the agent to call
it again with an explicit `studies` value. If you send `studies`, the tool ignores `countries` and `years`. The server
never selects a study on behalf of the agent. For more information, refer to
[studies](./concepts.md#studies-not-markets-and-years).

The tool removes the studies that the user does not have access to from the request. If no studies remain, the tool
responds as if the request had no study.

#### Limiting metrics with `metrics`

Many brand data tools accept an optional `metrics` parameter. It is a list of metric keys that limits the response to
some of the metrics of the model. If you do not send it, the tool returns all metrics of the model. The definition of
each tool lists the permitted keys. Thus, your agent can see them without another call. `get-glossary` with `type` set
to `metrics` explains the meaning of each key.

For `get-toplist-data`, `metrics` is required. It sets the metrics that the tool uses to rank the brands.

#### Choosing scores with `score_type`

`get-imagery-data`, `get-personality-data`, `get-usage-data`, `get-preferences-data` and `get-recommendation-data`
accept an optional `score_type`:

- `rank` - Percentile rank scores from 0 to 100, ranked against all brands in the study.
- `percentage` - The percentage of respondents.

Imagery and personality use `rank` by default. Usage, preferences and recommendation use `percentage` by default. The
definition of each tool gives the default. To learn how to read the two types, refer to
[rank vs percentage](./concepts.md#rank-vs-percentage-scores).

#### Data that is still generating

The system aggregates brand data on demand. When a user asks for a study and audience combination for the first
time, the data possibly does not exist yet. The tool does not return an empty result. It starts to generate the data. It
replies with a message that starts with `DATA GENERATING`. This message tells the agent to inform the user and to call
the tool again soon with the same parameters. This usually takes one or two minutes.

If only part of a request is not ready, the tool returns the data that it has. At the start, it adds a notice that lists
the data that is not ready yet. For more information, refer to [data generation](./concepts.md#data-generation).

### Collection Tools

Collections are saved lists of brands. You can also use the collection IDs as `comparison_collections` or
`collections` in the brand data tools.

| Tool                            | What it does                                                                                                     | Access                                                    |
|---------------------------------|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `create-collection`             | Creates a collection from a `name` and a list of `brand_ids`. Set `is_public` to make it public (private by default). | Users who can create collections.                        |
| `update-collection`             | Updates the name, the public status, or both, of a collection.                                                   | Users who can update collections and can edit that collection. |
| `add-brands-to-collection`      | Adds brands to a collection.                                                                                     | Users who can update collections and can manage its brands. |
| `remove-brands-from-collection` | Removes brands from a collection.                                                                                | Users who can update collections and can manage its brands. |
| `share-collection`              | Shares a collection with up to 10 people by email, with `view` (default) or `edit` permission.                   | Users who can share collections and collaborate on that collection. |

### Audience Tools

With these tools, an agent can build audiences (custom respondent segments). The agent can then use them to segment
the brand data. For more information about the structure of audiences, refer to
[audiences](../../audiences/audiences.md).

| Tool                         | What it does                                                                                                                                  | Access                                       |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| `get-audience-metrics`       | Lists the metrics that you can use as audience criteria, with their IDs, types and value dictionaries. Call this before you create or update an audience. | Users who can view audiences.            |
| `get-audience-groups`        | Lists the groups that you can put audiences into.                                                                                             | Users who can view audiences.                |
| `get-audience-studies`       | Lists the studies that have the audience, with its respondent count and projected population in each. Use it to find the size of the audience before analysis. | Users who can view audiences.                |
| `create-audience`            | Creates an audience with its definitions, segments and metrics in one call.                                                                   | Users who can create audiences.              |
| `update-audience`            | Updates the name, description or group of an audience. Does not change its definitions.                                                      | Users who can build audiences.               |
| `add-audience-definition`    | Adds a definition (for example a market-specific override) to an existing audience.                                                           | Users who can build audiences.               |
| `update-audience-definition` | Replaces all segments and metrics of a definition with the structure provided.                                                                | Users who can build audiences.               |
| `deploy-audience`            | Deploys an audience (makes it active and starts processing) or undeploys it.                                                                  | Users who can build audiences.               |
| `get-audience-question-data` | How a market's population answered BAV survey questions about themselves, such as demographics and attitudes. Takes up to 25 `questions` plus the shared data selection parameters (without `brands`). | Users with access to Audience 360. |

### AURA Tools

AURA is the AI brand research of WPP Open, powered by WPP BAV. It sends BAV surveys to large language models, not to
human respondents. Thus, the numbers show how AI models perceive a brand, not how consumers perceive it.

| Tool                          | What it does                                                                                                         |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------|
| `get-aura-studies`            | Lists the markets and waves with AURA data and their study IDs. We field AURA frequently (often monthly). Thus, `latest_only` returns only the most recent wave for each market. |
| `get-aura-audiences`          | Lists the AI perspectives to segment by: "All LLMs" (the default), individual AI providers and individual models.   |
| `get-aura-pillar-data`        | How AI models perceive a brand across the four pillars.                                                              |
| `get-aura-powergrid-data`     | How AI models position a brand on the PowerGrid.                                                                     |
| `get-aura-personality-data`   | The personality attributes AI models associate with a brand.                                                         |
| `get-aura-imagery-data`       | The imagery attributes AI models associate with a brand.                                                             |
| `get-aura-drift-data`         | The drift score: the gap between how AI models and consumers perceive a brand. Up to 25 brands, grouped by `brand` or `country`. |

All AURA tools require access to AURA.

The AURA data tools use the same `brands`, `countries`, `years`, `audiences`, `studies` and `metrics` parameters as the
brand data tools. There are two differences: `audiences` takes AI perspectives from `get-aura-audiences`, and `studies`
is optional. If you do not send AURA studies, the tool uses the latest AURA study for each market. If you send `years`,
it uses all AURA studies in those years. `get-aura-drift-data` uses `ai_audiences` and `consumer_audiences` in place of
`audiences`.

### Media Performance Tools

| Tool                                             | What it does                                                                                                                                             |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `get-media-performance-funnels`                  | Lists the funnel stages that classify campaigns.                                                                                                         |
| `get-media-performance-business-units`           | Lists business units (franchises), optionally for given brands.                                                                                          |
| `get-media-performance-media-sub-types`          | Lists media sub-types, optionally for given brands.                                                                                                      |
| `get-media-performance-campaign-classifications` | Lists campaign classifications, optionally for given brands.                                                                                             |
| `get-campaign-performance-data`                  | Weekly campaign performance (impressions, clicks, costs, visits, conversions, revenue) per brand, country, funnel, business unit, media sub-type and classification. Use `fields` to limit the returned metrics. It does not include derived metrics such as CPM. |
| `get-campaign-performance-benchmarks`            | Aggregated performance with derived metrics (CPM, CPC, CTR, ROI and more) already calculated. Use `group_by` to aggregate by country, funnel, business unit, media sub-type, campaign classification, month, week or in total. |

The media performance tools are available only to users who have access to media performance data for one or more
brands.

### Display Tools

In clients that support MCP Apps, the display tools show interactive charts directly in the conversation. They use
the same data selection parameters as the brand data tools. For more information, refer to [MCP Apps](./mcp-apps.md).

| Tool                                | What it does                                                         | Access     |
|-------------------------------------|----------------------------------------------------------------------|------------|
| `display-pillar-chart`              | A column chart of the four pillars.                                  | BAV users. |
| `display-imagery-chart`             | A chart of imagery attributes.                                       | BAV users. |
| `display-powergrid-chart`           | A PowerGrid scatter chart with its quadrants.                        | BAV users. |
| `display-brand-relationship-chart`  | Preferences, recommendation and usage, with a toggle between them.   | BAV users. |

:::note Unstable Responses
Traditional API responses are stable over time. We do not promise that MCP server responses will be stable. The data
can change, and the models can also change how they respond to user requests. If your application needs stable
responses, we recommend this procedure. After the agent calls the tools, ask it for a structured data response.
:::
