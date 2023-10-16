# Brand Metrics

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `brand-metrics` endpoint has full support, including query validation.

| Endpoint          | Function        | `Client` method        | Filters class         |
| ----------------- | --------------- | ---------------------- | --------------------- |
| `"brand-metrics"` | `brand_metrics` | `Client.brand_metrics` | `BrandMetricsFilters` |

For more information on available filters and functionality, see the main API documentation for the [`brand-metrics` endpoint](/core-resources/audiences.md).

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

- `name`
- `active`
- `inactive`
- `public`
- `private`
- `groups`

For other filters, passing an `BrandMetricsFilters` instance to the `filters` parameter is required.
