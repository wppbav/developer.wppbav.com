# Overview

The brand data endpoints give you access to BAV's research data on brands. They come in three kinds:

- **[Brandscape data](brandscape-data.md)** is the raw data: every metric for each brand, study and audience. Use it when
  you want full control over which metrics you use and how you combine them.
- **[Data models](data-models.md)** return the metrics behind one of the core BAV models, such as the
  [Powergrid](powergrid.md), [Pillars](pillars.md) or [Imagery](imagery.md). You ask for the model, and get back the
  relevant metrics for each brand, without needing to know which metrics make it up. All data models share the same
  parameters and response.
- **Tools** do further work on the data, such as combining metrics to tell a specific story or running calculations to
  arrive at new insights. They correspond to the tools in The Fount and its TurboPitch suite, such as the
  [Commitment Funnel](commitment-funnel.md), [SWOT](swot.md) or [Agency Change Predictor](agency-change-predictor.md).
  Each tool has its own parameters and response.

Each endpoint page shows which parameters it takes and what the response looks like. We also suggest that you try each
tool in The Fount to get a better understanding of the results.

## Access

All tool endpoints require a token with the `bav:brand-data` scope. In addition, each tool requires that the user has
access to that tool in The Fount; otherwise a `403` response is returned.

## Parameter formats

Most tool endpoints take comma-separated lists of IDs, for example `brands=148,149`. Where a page lists a parameter as
taking a single ID, only one value is accepted. The [Commitment Funnel](commitment-funnel.md) instead follows the
[data models](data-models.md) and takes array parameters (`brands[]=148&brands[]=149`), which also accept
names, and can select studies by `countries` and `years`.

Unless stated otherwise, the `audiences` parameter defaults to All Adults (audience ID `1`), and responses are returned
as JSON in a `data` key.

