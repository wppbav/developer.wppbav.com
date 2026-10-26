---
slug: mcp-metrics-and-sharing
title: Focused data and sharing collections in MCP
authors: erikbernskiold
---

We've made several improvements to the BAV MCP server to help agents get exactly the data they need, and share their
work.

<!-- truncate -->

- **Metric subsets**: The imagery, personality, PowerGrid, preferences, usage, recommendation, influence and pillar
  tools accept a new `metrics` parameter. Agents can ask for just the metrics they need, which keeps responses smaller
  and more focused.
- **Clearer metric keys**: Metric keys now say what type of data they hold, so models are less likely to mix up ranks
  and percentages.
- **Sharing collections**: The new `share-collection` tool shares a brand collection with up to 10 people by email, with
  view or edit access.
- **Creative Premium**: The new `get-creative-premium-data` tool is available to users with access to Creative Premium.

See the [BAV MCP Server](/docs/2.x/ai/mcp/bav) documentation for details.
