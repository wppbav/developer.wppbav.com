# Brands

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `brands` endpoint has full support, including query validation.

| Endpoint   | Function | `Client` method | Filters class   |
| ---------- | -------- | --------------- | --------------- |
| `"brands"` | `brands` | `Client.brands` | `BrandsFilters` |

For more information on available filters and functionality, see the main API documentation for the [brands endpoint](/core-resources/brands.md).

## Usage

<Tabs>
  <TabItem value="async" label="Async" default>

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.brands(name="Facebook")
```

  </TabItem>
  <TabItem value="sync" label="Sync">

```py title="Using top-level functions"
import bavapi

result = bavapi.brands("TOKEN", name="Facebook")
```

  </TabItem>
</Tabs>
