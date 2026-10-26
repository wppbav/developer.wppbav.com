# Brandscape Data

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`brandscape-data` endpoint](/brand-data/brandscape-data.md).
:::

The `brandscape-data` endpoint has full support. This support includes query validation.

| Endpoint            | Function          | `Client` method          | Filters class       |
| ------------------- | ----------------- | ------------------------ | ------------------- |
| `"brandscape-data"` | `brandscape_data` | `Client.brandscape_data` | `BrandscapeFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.brandscape_data("TOKEN", brand_name="Facebook")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.brandscape_data(brand_name="Facebook")
```

  </TabItem>
</Tabs>

:::caution
Some `brandscape-data` filters have a slightly **different** name than the filters for other endpoints:

- `year_number` instead of `year_numbers`.
- `country_code` instead of `country_codes`.

:::

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `country_code`, `year_number`, `audiences`, `brand_name` (search by name)
- Keyword filters: `studies`

For other filters, you must give a `BrandscapeFilters` instance to the `filters` parameter.

## Required filters

`brandscape-data` can get brand datasets from any combination of studies, audiences and years. Thus, a request can
become too large for the server to deliver effectively for all users. For more details about the required filters, see
the main API documentation for the [brandscape data endpoint](/brand-data/brandscape-data.md).

If a query does not have one of these combinations of filters, it will raise a `ValidationError`:

```py
bavapi.brandscape_data("TOKEN")  # Error, no filters specified

bavapi.brandscape_data("TOKEN", year_number=2022) # Error, not enough filters

bavapi.brandscape_data("TOKEN", brand_name="Facebook") # OK

bavapi.brandscape_data(
    "TOKEN", filters=bavapi.filters.BrandscapeFilters(audiences=22, brands=123)
)  # OK
```

## Default includes

To give critical information about the data from `brandscape-data`, `bavapi` requests some `include` values by
default: `study`, `brand`, `category` and `audience`.

If you add one of these values in the `include` field by itself, `bavapi` does not use the default. It makes a request
with the specified `include` instead.

If you request an `include` that is *not* part of the default values, `bavapi` will add that new value to the default
`include` values.

```py
# All default includes will be requested
bavapi.brandscape_data("TOKEN", brand_name="Facebook")

# Only the "brand" include will be requested
bavapi.brandscape_data("TOKEN", brand_name="Facebook", include="brand")

# The "company" include will be appended to the default "include" values
bavapi.brandscape_data("TOKEN", brand_name="Facebook", include="company")

```

## Clashing column names

Some includes can have column names that clash with the column names of the original data. For example, the expanded
`"brand"` include has column names such as `"brand_name"`. The `brandscape-data` table already has this column.

To prevent this problem, the response parsing function adds the `"global_"` prefix to includes that can have clashing
names.

Thus, a set of columns from the `"brand"` include will have a `"global_"` prefix in their names.

:::caution
This can change in future versions of `bavapi` when the parsing logic changes.
:::

## Metric and metric group keys

`brandscape-data` functions and methods have two special parameters to specify which data *columns* the response
contains: `metric_keys` and `metric_group_keys`.

- Use `metric_keys` to specify the metrics for your response.
- Use `metric_group_keys` to specify the metric groups for your response.

The API will include all score types for each of these metrics or metric groups. Each parameter accepts one key or a
list of keys.

:::info Example
If you set `metric_keys` to `["differentiation", "relevance"]`, the request will return only the following columns:

- `differentiation_c`
- `differentiation_rank`
- `relevance_c`
- `relevance_rank`
- Brand information such as `id`, `brand_name`, and `category_name`
- Any additional columns from the `include` parameter
:::

```py
# Returns only the score columns for the "differentiation" metric
bavapi.brandscape_data("TOKEN", studies=111, metric_keys="differentiation")

# Returns only the score columns for the metrics in the "pillars" metric group
bavapi.brandscape_data("TOKEN", studies=111, metric_group_keys="pillars")
```

To find the available metric keys and metric group keys, use the [`brand-metrics`](brand-metrics.md) and
[`brand-metric-groups`](brand-metric-groups.md) endpoints.
