# Audience Groups

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Read more in the API documentation for the [`audience-groups` endpoint](/core-resources/audience-groups.md).
:::

The `audience-groups` endpoint has full support, including query validation.

| Endpoint            | Function          | `Client` method          | Filters class           |
| ------------------- | ----------------- | ------------------------ | ----------------------- |
| `"audience-groups"` | `audience_groups` | `Client.audience_groups` | `AudienceGroupsFilters` |

## Usage

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py title="Using top-level functions"
import bavapi

result = bavapi.audience_groups("TOKEN", name="age")
```

  </TabItem>
  <TabItem value="async" label="Async">

```py title="Using Client asynchronously"
import bavapi

async with bavapi.Client("TOKEN") as bav:
    result = await bav.audience_groups(name="age")
```

  </TabItem>
</Tabs>

## Available filters in function calls

These filters are available directly within the function/method:

- Positional filters: `name`
- Keyword filters: `audience_group_id`

For other filters, passing an `AudienceGroupsFilters` instance to the `filters` parameter is required.
