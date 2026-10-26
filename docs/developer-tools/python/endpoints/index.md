---
sidebar_label: Overview
---

# Endpoints

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As of `v1.1`, `bavapi` has full implementations of these endpoints:

- [`audiences`](audiences.md)
- [`audience-groups`](audience-groups.md)
- [`brand-metrics`](brand-metrics.md)
- [`brand-metric-groups`](brand-metric-groups.md)
- [`brands`](brands.md)
- [`brandscape-data`](brandscape-data.md)
- [`categories`](categories.md)
- [`cities`](cities.md)
- [`collections`](collections.md)
- [`companies`](companies.md)
- [`countries`](countries.md)
- [`regions`](regions.md)
- [`sectors`](sectors.md)
- [`studies`](studies.md)
- [`years`](years.md)

"Implemented" means that the endpoint has a related function, `Client` method, and filters class. For more
information, see the section for each endpoint in the list above.

If an endpoint is not in the list above, you can still send queries to it with the `raw_query` methods (see
[below](#other-endpoints)). But `bavapi` will not validate the filter parameters.

The section for each endpoint has examples for the top-level, synchronous functions and for the asynchronous methods in
`bavapi.Client`.

For a summary of all Fount endpoints and their parameters and supported filters, see the
[Resources](/intro.md) section of the Fount API documentation.

## Other endpoints

Some commonly used endpoints have more extensive validation support. But there are a *lot* of other endpoints that
you can query.

With the `raw_query` functions and methods, you can send requests to any endpoint in the Fount. This is also true for
endpoints that do not have dedicated code.

| Endpoint | Function    | `Client` method    | Filters class  |
| -------- | ----------- | ------------------ | -------------- |
| `{any}`  | `raw_query` | `Client.raw_query` | `FountFilters` |

Queries from `raw_query` functions and methods return a list of JSON dictionaries, not a `pandas` DataFrame.

:::note
You must use a `Query` instance to send queries with `raw_query` methods.
[More info](../advanced-usage.md#other-endpoints)
:::

### Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py
import bavapi

result = bavapi.raw_query("TOKEN", "companies", bavapi.Query())
```

  </TabItem>
  <TabItem value="async" label="Async">

```py
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.raw_query("companies", bavapi.Query())
```

  </TabItem>
</Tabs>

The result of these queries is a list of JSON dictionaries. To parse the JSON response into a DataFrame, use the
`parse_response` function in the `bavapi.parsing.responses` module:

```py
import bavapi
from bavapi.parsing.responses import parse_response

result = bavapi.raw_query("TOKEN", "companies", bavapi.Query())

parsed = parse_response(result)  # will return a DataFrame
```
