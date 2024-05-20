# Cities

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`cities` endpoint](/core-resources/cities.md).
:::

The `cities` endpoint has full support, including query validation.

| Endpoint   | Function | `Client` method | Filters class   |
| ---------- | -------- | --------------- | --------------- |
| `"cities"` | `cities` | `Client.cities` | `CitiesFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.cities("TOKEN", name="Paris")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.cities(name="Paris")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `capitals`, `countries`, `in_best_countries`
- Keyword filters: `city_id`

For other filters, passing an `CitiesFilters` instance to the `filters` parameter is required.
