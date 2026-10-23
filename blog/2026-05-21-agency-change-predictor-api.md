---
slug: agency-change-predictor-api
title: Agency Change Predictor in the API
authors: erikbernskiold
---

The Agency Change Predictor is now available in the API. It runs ten weighted checks
on a brand's equity, compared with its category, to assess how likely the brand is to change agency.

<!-- truncate -->

Send a request to `/api/v2/tools/agency-change-predictor` with the brands and studies (or countries and years) you're
interested in, and you'll get a prediction for each brand.

Since launch, the endpoint has been brought in line with the other data model endpoints. It accepts arrays of IDs
or names, supports study types, and returns the standard `meta` and `data` response.

See [Agency Change Predictor](/docs/2.x/brand-data/agency-change-predictor) for the full documentation.
