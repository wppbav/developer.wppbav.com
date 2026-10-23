---
slug: rank-or-percentage-in-mcp
title: Choose between ranks and percentages in MCP
authors: erikbernskiold
---

The imagery, personality, preferences, recommendation and usage tools on the BAV MCP server now take an optional
`score_type` parameter. Set it to `rank` or `percentage` to choose how the data is returned.

<!-- truncate -->

If you leave it out, each tool keeps its existing default, so nothing changes for current agents. Imagery and
personality default to percentile ranks, while preferences, recommendation and usage default to percentages.

Not sure which to use? Our new [Concepts for Agents](/docs/2.x/ai/mcp/concepts) page explains the difference.
