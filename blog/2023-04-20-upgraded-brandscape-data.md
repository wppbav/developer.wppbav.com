---
slug: upgraded-brandscape-data
title: New company and sector details on Brandscape Data
authors: erikbernskiold
---

The [Brandscape Data](/docs/2.x/core-resources/brandscape-data) endpoint has been extended with details and filtering based on two new relationships: Sector and Company.

The sector is a higher-level grouping of categories to create larger groups of brands. Whereas categories can vary greatly between markets, sectors stay consitent. This makes them perfect for cross-market and cross-year analysis.

The company is the legal entity that owns a given brand. One company can own many brands. Through the company you can tie together financial performance such as annual results or stock price details with the brandscape data.

Both are available now as includes in the brandscape data endpoint. This means that for each brandscape data record you can get the company and sector details along with all other data.

```bash
# Include the company
GET /api/v2/brandscape-data/?include=company

# Include the sector
GET /api/v2/brandscape-data/?include=company
```

Both of them are also available to filter by so that you can get the brandscape data for all brands in one or more sectors and/or companies:


```bash
# Only include two specific companies.
GET /api/v2/brandscape-data/?filter[companies]=1,2

# Only include the sector with ID 1.
GET /api/v2/brandscape-data/?filter[sectors]=1
```

You can read more in the [Brandscape Data endpoint docs](/docs/2.x/core-resources/brandscape-data).

If you are having problems with using the API, or if you have any questions or feedback,
please [do reach out to us](mailto:support@bernskiold.com). We are happy to help.
