# Overview

The brand data endpoints give you access to BAV's research data on brands. They come in two kinds:

- **[Brandscape data](brandscape-data.md)** is the raw data: every metric for each brand, study and audience. Use it when
  you want full control over which metrics you use and how you combine them.
- **[Data models](data-models.md)** return the metrics behind one of the core BAV models, such as the
  [Powergrid](powergrid.md), [Pillars](pillars.md) or [Imagery](imagery.md). You ask for the model, and get back the
  relevant metrics for each brand, without needing to know which metrics make up the model. All data models share the
  same parameters and response.

If you want BAV data with further work done on it, such as the Commitment Funnel, a SWOT or the Agency Change Predictor,
see the [tools](tools.md).

All brand data endpoints require a token with the **BAV Brand Data** (`bav:brand-data`) scope.
