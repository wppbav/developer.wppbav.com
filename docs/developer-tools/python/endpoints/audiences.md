# Audiences

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`audiences` endpoint](/core-resources/audiences.md).
:::

The `audiences` endpoint has full support, including query validation.

| Endpoint      | Function    | `Client` method    | Filters class      |
| ------------- | ----------- | ------------------ | ------------------ |
| `"audiences"` | `audiences` | `Client.audiences` | `AudiencesFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.audiences("TOKEN", name="All Adults")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.audiences(name="All Adults")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`, `active`, `public`
- Keyword filters: `audience_id`, `private`, `groups`

For other filters, passing an `AudiencesFilters` instance to the `filters` parameter is required.
