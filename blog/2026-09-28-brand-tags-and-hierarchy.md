---
slug: brand-tags-and-hierarchy
title: Brand tags and brand hierarchy
authors: erikbernskiold
---

The brands endpoint can now tell you more about what a brand is, and how it relates to other brands and companies.

<!-- truncate -->

## Brand tags

Brand tags describe what a brand is, rather than how it performs. The new [Brand Tags](/docs/2.x/brands/brand-tags)
endpoint lists every tag, and you can filter brands with `filter[tags]` and include their tags with `include=tags`.
Tags can be named by their ID or their key.

In MCP, the `get-brands` tool has a new `tags` filter, and the new `list-brand-tags` tool lists the tags available.

## Brand hierarchy and companies

You can now filter brands by the company that owns them with `filter[companies]`. Each brand also includes its
`parent_brand_id`, and you can include its `parent` and `children` brands.

See [Brands](/docs/2.x/brands) for the full documentation.
