# Collections

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`collections` endpoint](/brands/collections.md).
:::

The `collections` endpoint has full support, including query validation.

| Endpoint        | Function      | `Client` method      | Filters class        |
| --------------- | ------------- | -------------------- | -------------------- |
| `"collections"` | `collections` | `Client.collections` | `CollectionsFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.collections("TOKEN", name="Unilever")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.collections(name="Unilever")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`, `public`
- Keyword filters: `collection_id`, `shared_with_me`, `mine`

For other filters, passing an `CollectionsFilters` instance to the `filters` parameter is required.
