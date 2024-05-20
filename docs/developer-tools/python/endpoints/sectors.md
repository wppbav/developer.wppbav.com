# Sectors

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`sectors` endpoint](/core-resources/sectors.md).
:::

The `sectors` endpoint has full support, including query validation.

| Endpoint    | Function  | `Client` method  | Filters class    |
| ----------- | --------- | ---------------- | ---------------- |
| `"sectors"` | `sectors` | `Client.sectors` | `SectorsFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.sectors("TOKEN", name="Distribution")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.sectors(name="Distribution")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`, `in_most_influential`
- Keyword filters: `sector_id`

For other filters, passing an `SectorsFilters` instance to the `filters` parameter is required.
