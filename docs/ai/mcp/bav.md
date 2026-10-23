---
sidebar_label: BAV Server
---

# BAV MCP Server

The BAV MCP Server provides access to the WPP BAV proprietary brand data through a set of tools that can be
called by AI agents. This allows you to build AI applications that can leverage the rich brand data collected
by BAV to provide insights, recommendations, and analysis.

The tools (see below) span research data on brands, metadata around coverage and taxonomy, audiences, collections,
AURA (AI brand research), media performance and interactive charts.

## Connecting to the server

Our remote MCP server supports Streamable HTTP. To connect to the BAV MCP server, you need to use the following URL:

```
https://mcp-beta.wppbav.com/v1/bav
```

:::note
The domain will change to `mcp.wppbav.com` in the future. We'll communicate this change in advance with a good notice
period so you can update your applications accordingly.
:::

For authorization, please see the [access and authorization](./access-authorization.md) section.

If you are building an agent on top of the server, we recommend reading [Concepts for agents](./concepts.md) as well. It
explains how studies, score types and data generation work, which is what most agents trip over.

## Available Tools

The tools are grouped by the job they do:

- **Metadata and lookup tools:** Find brands, markets, studies, sectors, categories, audiences and metric definitions.
- **Brand data tools:** Fetch the BAV brand data itself, one data model per tool.
- **Collection tools:** Create, update and share brand collections.
- **Audience tools:** Build, deploy and size audiences, and read how a population answered survey questions.
- **AURA tools:** How large language models perceive brands, and how that differs from consumers.
- **Media performance tools:** Campaign performance data and benchmarks.
- **Display tools:** Render interactive charts in clients that support [MCP Apps](./mcp-apps.md).

### Which tools you will see

Each tool is only registered for users who have permission to use it. Two people connecting to the same server can
therefore see a different list of tools. If a tool below is missing from your client, the signed-in user does not have
access to that part of the platform. Most tools are available to every BAV user, while some data models and products
need additional access. The access column in the tables below describes what each tool requires.

**Tip:** You can always ask the agent to list the available tools interactively, or you can use
the [list tools](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#listing-tools) mechanism as
defined in the MCP specification. This will return the full tool definitions including parameters and descriptions.

### Metadata and Lookup Tools

| Tool              | What it does                                                                                                                                                      | Access                                                         |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| `get-markets`     | Lists the markets and years with BAV data, and the **study IDs** you need to request data. Each study is labelled with its type, and the recommended one is marked. | Users who can view studies.                                    |
| `get-brands`      | Searches brands and returns their details (website, social links, sector, company, tags) and a summary of the markets and years each brand was studied in.        | Users who can view brands.                                     |
| `list-brand-tags` | Lists the brand tags (such as luxury, direct-to-consumer or family owned) and their keys, for use with the `tags` filter on `get-brands`.                          | Users who can view brands.                                     |
| `get-sectors`     | Lists the sectors in the BAV taxonomy.                                                                                                                            | Users who can view BAV categories.                             |
| `get-categories`  | Lists the categories in the BAV taxonomy, optionally filtered by search, sector, study, country or year.                                                          | Users who can view BAV categories.                             |
| `get-audiences`   | Lists the audiences you can segment brand data by. The default audience is "All Adults".                                                                          | Users who can view brand data.                                 |
| `get-glossary`    | Returns definitions of brand metrics, brand measures or audience questions (`type` is required), optionally limited to what was measured in given studies.       | Users who can view at least one of metrics, measures or questions. Each `type` needs its own access. |

#### Finding brands with `get-brands`

`get-brands` accepts the following parameters, all optional:

- `search` - Free text search on the brand name. This is the best way to find a brand by name.
- `brands` - A list of brand IDs.
- `sectors` - A list of sector names or IDs.
- `countries` - A list of country codes (ISO 3166-1 alpha-2) or IDs. Only returns brands with data in these markets.
- `years` - A list of years or IDs. Only returns brands with data in these years.
- `studies` - A list of study names or IDs. Only returns brands included in these studies.
- `tags` - A list of brand tag keys or IDs from `list-brand-tags`. Passing several tags returns brands carrying *any*
  of them, not all of them.
- `include_study_history` - Set to `true` to list every study each brand appears in. By default each brand only
  carries a `study_coverage` summary (years, and per market the number of studies, first and latest year and the latest
  study), because long-running brands are in over a thousand studies.
- `page` - The page number. Results are returned 50 brands per page.

### Brand Data Tools

These tools return the BAV brand data, each for one data model. Every one of them takes the shared
[data selection parameters](#selecting-data) below, and some take a few extra parameters of their own.

| Tool                            | What it does                                                                                                     | Extra parameters                                                                                       | Access                                       |
|---------------------------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------|
| `get-pillar-data`               | The four pillars of brand equity: Differentiation, Relevance, Esteem and Knowledge.                              | `metrics`                                                                                              | BAV users.                                   |
| `get-powergrid-data`            | Brand Strength and Brand Stature, the PowerGrid position.                                                        | `metrics`                                                                                              | BAV users.                                   |
| `get-imagery-data`              | Imagery (perception) attributes describing how people see a brand.                                               | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-personality-data`          | Personality, a higher-level summary built from the imagery attributes.                                          | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-archetypes-data`           | The twelve brand archetypes. Supports a competitive mode.                                                        | `comparison_categories`, `comparison_collections`                                                      | BAV users.                                   |
| `get-commitment-funnel-data`    | The Commitment Funnel: the behavioural and emotional relationship between brands and consumers.                  | -                                                                                                      | BAV users.                                   |
| `get-usage-data`                | Usage on a scale from Never Used to Regularly Use.                                                               | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-preferences-data`          | Preference on a scale from Would Never Use to One I Prefer.                                                      | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-recommendation-data`       | Whether consumers would recommend the brand to a friend.                                                         | `metrics`, `score_type`                                                                                | BAV users.                                   |
| `get-brand-worth-data`          | The Brand Worth Map: "worth paying more for" versus "providing good value".                                      | -                                                                                                      | BAV users.                                   |
| `get-perception-swot-data`      | A Brand Perception SWOT of the brand against its category or a collection, across imagery attributes. Requires `brands`. | `comparison_categories`, `comparison_collections`, `enable_drivers`, `x_axis_driver`, `y_axis_driver` | BAV users.                                   |
| `get-category-drivers-data`     | Which imagery attributes drive the equity pillars within a category or collection.                               | `categories`, `collections`, `driver_metrics`, `x_axis_metric`, `y_axis_metric`                        | BAV users.                                   |
| `get-correspondence-map-data`   | A correspondence (perception) map of brands against imagery attributes, for positioning and whitespace analysis. | `categories`, `collections`, `selectedMetricKeys`                                                      | BAV users.                                   |
| `get-toplist-data`              | The top-ranking brands for one or more metrics, by percentile rank. No `brands` parameter.                       | `metrics` (required), `categories`, `amount` (1-200, default 10)                                       | BAV users.                                   |
| `get-influence-data`            | How influential a brand is and what makes it influential.                                                        | `metrics`                                                                                              | Users with access to Influence.              |
| `get-customer-experience-data`  | Perceived customer experience through the Super CX analysis.                                                     | -                                                                                                      | Users with access to Super CX.               |
| `get-creative-premium-data`     | The Creative Premium rank, creativity and influence scores.                                                      | -                                                                                                      | Users with access to Creative Premium.       |
| `get-partnership-exchange-data` | Compares the imagery of a brand and a potential partner to find partnership opportunities.                       | Takes a single `brand` and `partner` (both required) instead of `brands`.                              | Users with access to the Imagery Exchange Map. |

#### Selecting data

The brand data tools share these parameters:

- `studies` - A list of study IDs. **This is how data is selected, and it is required to get data back.** A study is
  one market and year of one study type. Get the study IDs from `get-markets`.
- `brands` - A list of brand names or IDs.
- `audiences` - A list of audience names or IDs to segment the data by. If left out, the "All Adults" audience is used,
  and the response says that it was assumed.
- `countries` - A list of country names or codes (e.g. `GB`).
- `years` - A list of years (e.g. `2025`).

`countries` and `years` do **not** return data on their own. A market and year can be covered by more than one type of
study (for example the standard BAV study and a SnapBAV study), and these are not interchangeable. Rather than guess,
the tool responds with the matching studies, the recommended one marked, and asks the agent to call it again with an
explicit `studies` value. If `studies` is given, any `countries` and `years` are ignored. The server never picks a
study on the agent's behalf. See [studies](./concepts.md#studies-not-markets-and-years) for more on how this works.

Studies the user does not have access to are dropped from the request. If none are left, the tool responds as if no
study had been given.

#### Limiting metrics with `metrics`

Many brand data tools accept an optional `metrics` parameter, a list of metric keys that limits the response to a
subset of the model's metrics. If it is left out, all of the model's metrics are returned. The allowed keys are listed in
each tool's definition, so your agent can see them without another call. `get-glossary` with `type` set to `metrics`
explains what each key means.

For `get-toplist-data`, `metrics` is required and decides which metrics the brands are ranked on.

#### Choosing scores with `score_type`

`get-imagery-data`, `get-personality-data`, `get-usage-data`, `get-preferences-data` and `get-recommendation-data`
accept an optional `score_type`:

- `rank` - Percentile rank scores from 0 to 100, ranked against all brands in the study.
- `percentage` - The percentage of respondents.

Imagery and personality default to `rank`. Usage, preferences and recommendation default to `percentage`. The default
is stated in each tool's definition. See [rank vs percentage](./concepts.md#rank-vs-percentage-scores) for how to read
the two.

#### Data that is still generating

Brand data is aggregated on demand. The first time anyone asks for a particular study and audience combination, the
data may not exist yet. Instead of returning an empty result, the tool starts generating it and replies with a
message starting `DATA GENERATING`, asking the agent to tell the user and call the tool again shortly with the same
parameters. This usually takes a minute or two.

If only part of a request is still generating, the tool returns the data it has and prepends a notice listing what is
still being prepared. See [data generation](./concepts.md#data-generation) for details.

### Collection Tools

Collections are saved lists of brands. The collection IDs can also be used as `comparison_collections` or
`collections` in the brand data tools.

| Tool                            | What it does                                                                                                     | Access                                                    |
|---------------------------------|------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| `create-collection`             | Creates a collection from a `name` and a list of `brand_ids`. Set `is_public` to make it public (private by default). | Users who can create collections.                        |
| `update-collection`             | Updates a collection's name and/or public status.                                                                | Users who can update collections and may edit that collection. |
| `add-brands-to-collection`      | Adds brands to a collection.                                                                                     | Users who can update collections and may manage its brands. |
| `remove-brands-from-collection` | Removes brands from a collection.                                                                                | Users who can update collections and may manage its brands. |
| `share-collection`              | Shares a collection with up to 10 people by email, with `view` (default) or `edit` permission.                   | Users who can share collections and collaborate on that collection. |

### Audience Tools

These tools let an agent build audiences (custom respondent segments) and then use them to segment the brand data.
See [audiences](../../audiences/audiences.md) for more about how audiences are structured.

| Tool                         | What it does                                                                                                                                  | Access                                       |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| `get-audience-metrics`       | Lists the metrics that can be used as audience criteria, with their IDs, types and value dictionaries. Call this before creating or updating an audience. | Users who can view audiences.            |
| `get-audience-groups`        | Lists the groups audiences can be organised into.                                                                                             | Users who can view audiences.                |
| `get-audience-studies`       | Lists the studies an audience is available in, with its respondent count and projected population in each, to size it before analysis.       | Users who can view audiences.                |
| `create-audience`            | Creates an audience with its definitions, segments and metrics in one call.                                                                   | Users who can create audiences.              |
| `update-audience`            | Updates an audience's name, description or group. Does not change its definitions.                                                           | Users who can build audiences.               |
| `add-audience-definition`    | Adds a definition (for example a market-specific override) to an existing audience.                                                           | Users who can build audiences.               |
| `update-audience-definition` | Replaces all segments and metrics of a definition with the structure provided.                                                                | Users who can build audiences.               |
| `deploy-audience`            | Deploys an audience (making it active and starting processing) or undeploys it.                                                               | Users who can build audiences.               |
| `get-audience-question-data` | How a market's population answered BAV survey questions about themselves, such as demographics and attitudes. Takes up to 25 `questions` plus the shared data selection parameters (without `brands`). | Users with access to Audience 360. |

### AURA Tools

AURA is WPP Open's AI brand research, powered by WPP BAV. It fields BAV surveys to large language models instead of
human respondents, so the numbers describe how AI models perceive a brand rather than how consumers do.

| Tool                          | What it does                                                                                                         |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------|
| `get-aura-studies`            | Lists the markets and waves with AURA data and their study IDs. AURA is fielded often (often monthly), so `latest_only` returns just the most recent wave per market. |
| `get-aura-audiences`          | Lists the AI perspectives to segment by: "All LLMs" (the default), individual AI providers and individual models.   |
| `get-aura-pillar-data`        | How AI models perceive a brand across the four pillars.                                                              |
| `get-aura-powergrid-data`     | How AI models position a brand on the PowerGrid.                                                                     |
| `get-aura-personality-data`   | The personality attributes AI models associate with a brand.                                                         |
| `get-aura-imagery-data`       | The imagery attributes AI models associate with a brand.                                                             |
| `get-aura-drift-data`         | The drift score: the gap between how AI models and consumers perceive a brand. Up to 25 brands, grouped by `brand` or `country`. |

All AURA tools require access to AURA.

The AURA data tools take the same `brands`, `countries`, `years`, `audiences`, `studies` and `metrics` parameters as the
brand data tools, with two differences: `audiences` takes AI perspectives from `get-aura-audiences`, and `studies` is
optional. If no AURA studies are given, the tool uses the latest AURA study per market (or every AURA study in the given
`years`). `get-aura-drift-data` takes `ai_audiences` and `consumer_audiences` instead of `audiences`.

### Media Performance Tools

| Tool                                             | What it does                                                                                                                                             |
|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `get-media-performance-funnels`                  | Lists the funnel stages campaigns are classified by.                                                                                                     |
| `get-media-performance-business-units`           | Lists business units (franchises), optionally for given brands.                                                                                          |
| `get-media-performance-media-sub-types`          | Lists media sub-types, optionally for given brands.                                                                                                      |
| `get-media-performance-campaign-classifications` | Lists campaign classifications, optionally for given brands.                                                                                             |
| `get-campaign-performance-data`                  | Weekly campaign performance (impressions, clicks, costs, visits, conversions, revenue) per brand, country, funnel, business unit, media sub-type and classification. Use `fields` to limit the metrics returned. Derived metrics such as CPM are not included. |
| `get-campaign-performance-benchmarks`            | Aggregated performance with derived metrics (CPM, CPC, CTR, ROI and more) already calculated. Use `group_by` to aggregate by country, funnel, business unit, media sub-type, campaign classification, month, week or in total. |

The media performance tools are only available to users who have access to media performance data for at least one
brand.

### Display Tools

The display tools render interactive charts directly in the conversation, in clients that support MCP Apps. They take
the same data selection parameters as the brand data tools. See [MCP Apps](./mcp-apps.md) for details.

| Tool                                | What it does                                                         | Access     |
|-------------------------------------|----------------------------------------------------------------------|------------|
| `display-pillar-chart`              | A column chart of the four pillars.                                  | BAV users. |
| `display-imagery-chart`             | A chart of imagery attributes.                                       | BAV users. |
| `display-powergrid-chart`           | A PowerGrid scatter chart with its quadrants.                        | BAV users. |
| `display-brand-relationship-chart`  | Preferences, recommendation and usage, with a toggle between them.   | BAV users. |

:::note Unstable Responses
We do not promise that MCP server responses will be stable over time, in contrast to traditional API responses. The
data may be updated, and the models may also change how they respond to user requests. If you need stable responses for
your application we suggest prompting for a structured data response after the agent has called the tools.
:::
