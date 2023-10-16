# Brand Metric Groups

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `brand-metric-groups` endpoint has full support, including query validation.

| Endpoint                | Function              | `Client` method              | Filters class              |
| ----------------------- | --------------------- | ---------------------------- | -------------------------- |
| `"brand-metric-groups"` | `brand_metric_groups` | `Client.brand_metric_groups` | `BrandMetricGroupsFilters` |

For more information on available filters and functionality, see the main API documentation for the [`brand-metric-groups` endpoint](/core-resources/brand-metric-groups.md).

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.brand_metric_groups("TOKEN", name="Pillars")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.brand_metric_groups(name="Pillars")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- `name`
- `active`
- `inactive`

For other filters, passing an `BrandMetricGroupsFilters` instance to the `filters` parameter is required.
