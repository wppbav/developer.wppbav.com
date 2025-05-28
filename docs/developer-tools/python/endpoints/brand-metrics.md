# Brand Metrics

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`brand-metrics` endpoint](/metrics/metrics.md).
:::

The `brand-metrics` endpoint has full support, including query validation.

| Endpoint          | Function        | `Client` method        | Filters class         |
| ----------------- | --------------- | ---------------------- | --------------------- |
| `"brand-metrics"` | `brand_metrics` | `Client.brand_metrics` | `BrandMetricsFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.brand_metrics("TOKEN", name="Differentiation")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.brand_metrics(name="Differentiation")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`, `active`, `public`
- Keyword filters: `metric_id`, `private`, `groups`

For other filters, passing an `BrandMetricsFilters` instance to the `filters` parameter is required.
