---
slug: new-cities-endpoint
title: New Cities Endpoint
authors: erikbernskiold
---

For some of the data that we track, we need to map it to a city. For this reason we maintain a database of cities in the
world with a population over 500 people, based on the [GeoNames](https://www.geonames.org/) database.

We have now made this database available through the API. You can find the documentation for the new endpoint in the
[API reference](/docs/2.x/core-resources/cities).

The cities endpoint comes with a few filters that you can use to narrow down the results. For example, you can filter
by country or region, or for example retrieve capitals only.