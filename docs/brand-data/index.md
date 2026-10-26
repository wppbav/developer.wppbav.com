# Overview

The brand data endpoints give you access to the BAV research data on brands. There are two kinds of endpoints:

- **[Brandscape data](brandscape-data.md)** is the raw data: every metric for each brand, study and audience. Use it when
  you want full control over which metrics you use and how you combine them.
- **[Data models](data-models.md)** return the metrics behind one of the core BAV models, such as the
  [Powergrid](powergrid.md), [Pillars](pillars.md) or [Imagery](imagery.md). You ask for the model and you get the
  relevant metrics for each brand. You do not need to know which metrics make up the model. All data models share the
  same parameters and response.

If you want BAV data that has more processing applied to it, such as the Commitment Funnel, a SWOT or the
Agency Change Predictor, see the [tools](tools.md).

All brand data endpoints require a token with the **BAV Brand Data** (`bav:brand-data`) scope.
