---
slug: explicit-study-types
title: Explicit study types across the API and MCP
authors: erikbernskiold
---

BAV data comes from different types of studies: our standard studies, SnapBAV, AO+BAV Fused and custom studies. They
aren't interchangeable, so you now always choose which type of study your data comes from.

<!-- truncate -->

## In the API

The brandscape endpoints accept a new `filter[study_types]` parameter, with the values `syndicated`, `snap`, `fused`
and `custom`. It defaults to `syndicated`. If a market is only covered by another study type, you get no rows and a
`meta.available_alternatives` block that tells you what exists and how to ask for it. Each row now also includes its
study type.

## In MCP

The brandscape tools now work from studies. If an agent asks for a country and year, it gets a list of matching studies
with their type, caveats and a recommendation, and is asked to pick one. Models handle this well, but it is a change in
behaviour worth knowing about. The `get-markets` tool now returns each study's ID as `study_id`.

## Other changes

- The "BAV (Syndicated)" study type is now called **BAV (Standard)**. The `syndicated` value in the API and MCP stays
  the same.
- Audiences now include population projections. `GET /api/v2/audiences/{id}/studies` returns a `population` per study,
  and the new `get-audience-studies` MCP tool does the same.
- The audience tools on the BAV MCP server are now available to all users.

Read more in [Brandscape Data](/docs/2.x/brand-data/brandscape-data) and
[Concepts for Agents](/docs/2.x/ai/mcp/concepts).
