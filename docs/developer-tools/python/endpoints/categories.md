# Categories

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`categories` endpoint](/core-resources/categories.md).
:::

The `categories` endpoint has full support, including query validation.

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

For other filters, passing an `CategoriesFilters` instance to the `filters` parameter is required.

## Default includes

In order to provide critical information about the data retrieved from `categories`, and to move its structure in line
with data downloads from the Fount or BAV's Cultural Rank Tool (CRT), some `include` values are requested by default:
`sector`.

```py
# All default (sector) includes will be requested
bavapi.categories("TOKEN", name="All Adults")
```

To suppress default includes, set `include` to `"no_default"`.
