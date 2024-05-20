# Brands

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`brands` endpoint](/core-resources/brands.md).
:::

The `brands` endpoint has full support, including query validation.

| Endpoint   | Function | `Client` method | Filters class   |
| ---------- | -------- | --------------- | --------------- |
| `"brands"` | `brands` | `Client.brands` | `BrandsFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.brands("TOKEN", name="Facebook")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.brands(name="Facebook")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`, `country_codes`, `year_numbers`
- Keyword filters: `brand_id`, `studies`

For other filters, passing a `BrandsFilters` instance to the `filters` parameter is required.
