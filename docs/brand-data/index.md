# Overview

While the core of BAV is the [brandscape data](brandscape-data.md) and the metrics within, the metrics are
often used in specific ways. Either by combining a set of metrics together to tell a specific story, or to do some
further mathematical work on the data to arrive at new insights. This is what each tool within BAV and its TurboPitch
suite does.

The other endpoints in the API correspond to each "data model" in BAV. Each response is
slightly different, based on the data. The data returned includes, where applicable, brandscape data, calculated data
and all relevant wording.

Each endpoint documentation will show you which parameters each endpoint takes and what the response will look like.
However, we suggest that you also try each tool in the graphical interface on The Fount to get a better understanding of
the results.

## Access

All tool endpoints require a token with the `bav:brand-data` scope. In addition, each tool requires that the user has
access to that tool in The Fount; otherwise a `403` response is returned.

## Parameter formats

Most tool endpoints take comma-separated lists of IDs, for example `brands=148,149`. Where a page lists a parameter as
taking a single ID, only one value is accepted. The [Commitment Funnel](commitment-funnel.md) instead follows the
[brandscape data models](brandscape-data.md) and takes array parameters (`brands[]=148&brands[]=149`), which also accept
names, and can select studies by `countries` and `years`.

Unless stated otherwise, the `audiences` parameter defaults to All Adults (audience ID `1`), and responses are returned
as JSON in a `data` key.

