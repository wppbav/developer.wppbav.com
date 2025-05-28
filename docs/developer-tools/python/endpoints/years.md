# Years

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`years` endpoint](/metadata/years.md).
:::

The `years` endpoint has full support, including query validation.

| Endpoint  | Function | `Client` method | Filters class  |
| --------- | -------- | --------------- | -------------- |
| `"years"` | `years`  | `Client.years`  | `YearsFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.years("TOKEN", name=2023)
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.years(year=2023)
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `year`
- Keyword filters: `year_id`

For other filters, passing an `YearsFilters` instance to the `filters` parameter is required.
