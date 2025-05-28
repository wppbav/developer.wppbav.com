# Studies

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`studies` endpoint](/studies/studies.md).
:::

The `studies` endpoint has full support, including query validation.

| Endpoint    | Function  | `Client` method  | Filters class    |
| ----------- | --------- | ---------------- | ---------------- |
| `"studies"` | `studies` | `Client.studies` | `StudiesFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.studies("TOKEN", country_codes="US")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.studies(country_codes="US")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `country_codes`, `year_numbers`, `full_year`, `released`, `bav_study`
- Keyword filters: `study_id`

For other filters, passing a `StudiesFilters` instance to the `filters` parameter is required.
