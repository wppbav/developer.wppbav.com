# Regions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`regions` endpoint](/core-resources/regions.md).
:::

The `regions` endpoint has full support, including query validation.

| Endpoint    | Function  | `Client` method  | Filters class    |
| ----------- | --------- | ---------------- | ---------------- |
| `"regions"` | `regions` | `Client.regions` | `RegionsFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.regions("TOKEN", name="Europe")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.regions(name="Europe")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`
- Keyword filters: `region_id`

For other filters, passing an `RegionsFilters` instance to the `filters` parameter is required.
