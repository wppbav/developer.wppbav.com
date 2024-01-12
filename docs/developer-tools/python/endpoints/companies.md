# Companies

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `companies` endpoint has full support, including query validation.

| Endpoint      | Function    | `Client` method    | Filters class      |
| ------------- | ----------- | ------------------ | ------------------ |
| `"companies"` | `companies` | `Client.companies` | `CompaniesFilters` |

For more information on available filters and functionality, see the main API documentation for the
[`companies` endpoint](/core-resources/companies.md).

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.companies("TOKEN", name="Unilever")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.companies(name="Unilever")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `public`, `private`, `brands`
- Keyword filters: `company_id`

For other filters, passing an `CompaniesFilters` instance to the `filters` parameter is required.
