# Introduction

WPP BAV has a modern REST API that external systems can use to get data. You can access most of the data in the
system. We made it a priority to make access as simple as possible.

To use the API, you need an access token. See the [authentication section](authentication.md) for information about
how to get one.

:::note Building a user-facing app? Please let us know...
If you integrate BAV data into an application, reporting tool or other system where other people also use the data,
[tell us before you do this](/support). It is important for the credibility of BAV that the data is used correctly and
shown in the correct context. BAV can be complex, so we want to make sure that you have the correct support and
guidance.
:::

## Structure

The API has several sections, and each section has its own set of resources. Some endpoints return the research data
that you primarily think of when you think of BAV, for example how people perceive a brand. Other endpoints return
metadata about the data, for example the studies, years and countries that the data is available for. This metadata is
important to understand the context of the data and to filter it correctly.

You can access the brand data itself in two ways. The first way is through each specific "data model". A data model is
a fixed set of metrics that together give a specific view of the brand, for example "Pillars", "Powergrid" or
"Imagery". These endpoints are ideal if you need only a specific set of data. They also include the correct phrases and
descriptions that you need to chart and show the data correctly.

The second way is our flexible "brandscape data" endpoint. This endpoint gives you access to all of the metrics for a
brand in a specific study, year, country, audience and category.
