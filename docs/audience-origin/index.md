---
sidebar_label: Overview
---

# Audience Origin

Audience Origin is WPP's global study of people's media consumption, attitudes and behaviors. It contains demographic,
psychographic and behavioral data on people from around the world.

The Audience Origin API has two parts:

- **The catalog.** The measured [metrics](metrics.md), the [metric groups](metric-groups.md) that contain them, and the
  [touchpoints](touchpoints.md) and [frequencies](frequencies.md) that media metrics measure. Use these endpoints to
  find the data that you can request.
- **The data.** The [query endpoint](query.md) returns the Audience Origin data for a set of metrics in one or more
  studies, for an [audience](../audiences/audiences.md).

Audience Origin studies are [studies](../studies/studies.md) like any other, with their own study type. Use the studies
endpoint to find the Audience Origin studies you have access to.

## Access

All Audience Origin endpoints require the `bav:audience-origin-data` scope. This scope shows as **Audience Origin
Data** when you create your API key. Your user also needs access to Audience Origin data in The Fount.

:::note Access is granted separately
You can add the Audience Origin Data scope to an API key only if your user has access to Audience Origin data.
:::

## Building audiences from Audience Origin

You can use Audience Origin metrics as conditions when you [build your own audiences](../audiences/managing-audiences.md).
Use the `audience-origins-metric` metric type together with the ID of the metric.
