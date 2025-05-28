# Introduction

WPP BAV has a modern REST API available for consuming data through external systems. Most of the system's data can be
accessed and we have made it a priority to make access as simple as possible.

To use the API you need to have an access token. Please see the [authentication section](authentication.md) for more
information on how to get one.

:::note Building a user-facing app? Please let us know...
If you are integrating BAV data into an application, reporting tool or any other system where others will also be
consuming the data, please [let us know before](/support). It's important to the credibility of BAV that the data is
used correctly and displayed in the right context. Because BAV can be complex, we want to ensure that you have the
right support and guidance to do so.
:::

## Structure

The API is divided into several sections, each of which has its own set of resources. Endpoints include both
those that return the research data that you might primarily think of when you think of BAV, such as
how a brand is perceived. However, it also includes endpoints that return metadata about the data, such as
the studies, years, and countries that the data is available for. This metadata is important to understand the context
of the data and to be able to filter it correctly.

The brand data itself can be accessed in two ways. Either through each specific "data model", which is a set lens of
metrics that go together and give a specific view of the brand. Such as "Pillars", "Powergrid" or "Imagery". These
endpoints are perfect for getting only a specific set of data. They also include the right phrases and descriptions
needed to chart and display the data correctly.

Alternatively you can query our flexible "brandscape data" endpoint, which gives you access to all of the
metrics for a brand in a specific study, year, country, audience, and category.
