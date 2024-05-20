# Countries

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`countries` endpoint](/core-resources/countries.md).
:::

The `countries` endpoint has full support, including query validation.

| Endpoint      | Function    | `Client` method    | Filters class      |
| ------------- | ----------- | ------------------ | ------------------ |
| `"countries"` | `countries` | `Client.countries` | `CountriesFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.countries("TOKEN", name="France")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.countries(name="France")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `active`, `regions`, `with_studies`
- Keyword filters: `country_id`, `with_recent_studies`

For other filters, passing an `CountriesFilters` instance to the `filters` parameter is required.
