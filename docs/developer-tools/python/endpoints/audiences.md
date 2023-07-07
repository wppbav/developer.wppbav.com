# Audiences

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `audiences` endpoint has full support, including query validation.

| Endpoint      | Function    | `Client` method    | Filters class      |
|---------------|-------------|--------------------|--------------------|
| `"audiences"` | `audiences` | `Client.audiences` | `AudiencesFilters` |

For more information on available filters and functionality, see the Fount documentation for the [`audiences`](/core-resources/audiences.md) endpoint.

## Usage

<Tabs>
  <TabItem value="async" label="Async" default>

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.audiences(name="All Adults")
```

  </TabItem>
  <TabItem value="sync" label="Sync">

```py title="Using top-level functions"
import bavapi

result = bavapi.audiences("TOKEN", name="All Adults")
```

  </TabItem>
</Tabs>
