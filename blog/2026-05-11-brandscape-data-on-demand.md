---
slug: brandscape-data-on-demand
title: Brandscape data is now generated on request
authors: erikbernskiold
---

The [Brandscape Data](/docs/2.x/brand-data/brandscape-data) endpoint now makes sure the data you ask for exists. If
a combination of study and audience hasn't been generated yet, requesting it starts the generation for you.

<!-- truncate -->

While data is being generated the endpoint responds with **202 Accepted** instead of 200 OK, and includes a
`meta.generation` block. Its `status` is `pending` when nothing is ready yet, or `partial` when some of the requested
data is available and the rest is on its way. Retry the request after a short while to get the complete data. Once
everything is available, you'll get a 200 OK as usual.

We've also added a safeguard for very wide requests. If you don't filter by study, country or year, the endpoint
now returns data for the latest available study rather than scanning all of BAV.
