---
sidebar_label: Overview
---

# Audience Origin

Audience Origin is WPP's global study of people's media consumption, attitudes and behaviors. It contains demographic,
psychographic and behavioral data on people from around the world.

The Audience Origin API is made up of two parts:

- **The catalog.** The [metrics](metrics.md) that are measured, the [metric groups](metric-groups.md) they are
  organized in, and the [touchpoints](touchpoints.md) and [frequencies](frequencies.md) that media metrics measure. Use
  these to find out what you can ask for.
- **The data.** The [query endpoint](query.md) returns the Audience Origin data for a set of metrics in one or more
  studies, for an [audience](../audiences/audiences.md).

Audience Origin studies are [studies](../studies/studies.md) like any other, with their own study type. Use the studies
endpoint to find the Audience Origin studies you have access to.

## Access

All Audience Origin endpoints require the `bav:audience-origin-data` scope (shown as **Audience Origin Data** when you
create your API key). Your user also needs access to Audience Origin data in The Fount.

:::note Access is granted separately
The Audience Origin Data scope can only be added to an API key if your user has access to Audience Origin data.
:::

## Building audiences from Audience Origin

Audience Origin metrics can be used as conditions when [building your own audiences](../audiences/managing-audiences.md).
Use the `audience-origins-metric` metric type together with the ID of the metric.
