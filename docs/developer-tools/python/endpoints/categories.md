# Categories

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`categories` endpoint](/studies/categories.md).
:::

The `categories` endpoint has full support. This support includes query validation.

| Endpoint       | Function     | `Client` method     | Filters class       |
| -------------- | ------------ | ------------------- | ------------------- |
| `"categories"` | `categories` | `Client.categories` | `CategoriesFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.categories("TOKEN", name="Soap")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.categories(name="Soap")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`, `sector`
- Keyword filters: `category_id`

For other filters, you must give a `CategoriesFilters` instance to the `filters` parameter.

## Default includes

`bavapi` requests some `include` values by default: `sector`. These values give critical information about the data
from `categories`. They also make its structure align with data downloads from the Fount or BAV's Cultural Rank Tool
(CRT).

```py
# All default (sector) includes will be requested
bavapi.categories("TOKEN", name="Soap")
```

To suppress default includes, set `include` to `"no_default"`.
