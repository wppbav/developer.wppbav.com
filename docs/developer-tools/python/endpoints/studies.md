# Studies

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `studies` endpoint has full support, including query validation.

| Endpoint    | Function  | `Client` method  | Filters class    |
| ----------- | --------- | ---------------- | ---------------- |
| `"studies"` | `studies` | `Client.studies` | `StudiesFilters` |

For more information on available filters and functionality, see the Fount documentation for the [`studies`](https://developer.wppbav.com/docs/2.x/core-resources/studies) endpoint.

## Usage

<Tabs>
  <TabItem value="async" label="Async" default>

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.studies(country_codes="US")
```

  </TabItem>
  <TabItem value="sync" label="Sync">

```py title="Using top-level functions"
import bavapi

result = bavapi.studies("TOKEN", country_codes="US")
```

  </TabItem>
</Tabs>
