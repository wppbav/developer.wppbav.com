---
sidebar_label: Basic Usage
---

# Basic Usage

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After you install `bavapi` and get a token from the Fount, you can use `bavapi` directly in Python or in a Jupyter
Notebook.

```py
import bavapi
```

## Making Requests

You can query the available [endpoints](endpoints/) with their related methods. Replace `TOKEN` with
your [API key](authentication).

```py
swatch = bavapi.brands("TOKEN", name="Swatch")  # Replace `TOKEN` with your API key
```

These endpoint methods return a pandas DataFrame that contains the data for your query:

|     | id     | name   | ... |
|----:|:-------|:-------|:----|
|   0 | 2342   | Swatch | ... |
|   1 | 127896 | Swatch | ... |
| ... | ...    | ...    | ... |

You can make requests to other [endpoints](endpoints/) in the same way:

```py
uk_studies = bavapi.studies("TOKEN", country_code="GB")

uk22 = bavapi.brandscape_data("TOKEN", year_number=2022, country_code="GB", audiences=1)

all_adults = bavapi.audiences("TOKEN", name="All Adults")
```

:::info Want to use other endpoints?
The BAV API is large, so the SDK does not fully implement all endpoints yet.

To query unsupported endpoints, see the [Other endpoints](advanced-usage#other-endpoints) section in Advanced Usage.
:::

## `bavapi` query parameters

`bavapi` validates the request parameters before it sends a request. It automatically checks that the parameters
from your query and filters are of the type that the Fount API expects. If a parameter does not agree with the API
requirements, `bavapi` will raise a `ValidationError`.

:::note How validation works
`bavapi` sends an initial request to make sure that the query parameters are valid. This request also gets the number
of pages that `bavapi` must fetch.

If the initial request fails, `bavapi` will not send more requests.

The initial request can return all of the query results. For example, there are only 10 results, and `per_page` is
more than 10 (the default value is more than 10). In this case, `bavapi` does not send more requests. It returns the data from the
initial response.
:::

### Filters

Each endpoint has its own filter requirements, so each endpoint has a related filters class:

| Endpoint                | Filters class              |
|-------------------------|----------------------------|
| `"audience-groups"`     | `AudienceGroupsFilters`    |
| `"audiences"`           | `AudiencesFilters`         |
| `"brand-metrics"`       | `BrandMetricsFilters`      |
| `"brand-metric-groups"` | `BrandMetricGroupsFilters` |
| `"brands"`              | `BrandsFilters`            |
| `"brandscape-data"`     | `BrandscapeFilters`        |
| `"categories"`          | `CategoriesFilters`        |
| `"cities"`              | `CitiesFilters`            |
| `"collections"`         | `CollectionsFilters`       |
| `"companies"`           | `CompaniesFilters`         |
| `"countries"`           | `CountriesFilters`         |
| `"regions"`             | `RegionsFilters`           |
| `"sectors"`             | `SectorsFilters`           |
| `"studies"`             | `StudiesFilters`           |
| `"years"`               | `YearsFilters`             |

These filters are available under the `bavapi.filters` namespace.

:::caution Use the correct filters class for each endpoint
If you use a filters class that is not for the specific endpoint, you will not get errors at the start. But you will
also not get IDE type support or type validation for the parameters of that endpoint.

Also, a dictionary (as in the example below) does not give validation or type hints. Be careful when you use the
dictionary method.
:::

The `bavapi` functions include some of the more common filters for each endpoint directly. For more information, see
the [endpoints](./endpoints/) section.

:::info Example
`bavapi.brands` has parameters such as `name`, `country_codes`, `year_numbers`, `brand_id` or `studies`. You can use
these parameters directly in the function. You do not need to create a filters instance.
:::

But you must specify less commonly used filters and [value filters](#value-filters) in the `filters` parameter of
each function.

You can specify filters with a python dictionary (if you know the names of the filters that you need). You can also
create a filters instance directly.

<Tabs>
  <TabItem value="filters" label="Filters instance (recommended)" default>

```py
result = bavapi.brands(
    "TOKEN", filters=bavapi.filters.BrandsFilters(name="Swatch", country_codes=["US", "GB"])
)
```

  </TabItem>
  <TabItem value="dict" label="Dictionary">

```py
result = bavapi.brands(
    "TOKEN", filters={"name":"Swatch", "country_codes":["US", "GB"]}
)
```

  </TabItem>
</Tabs>

:::caution
If you specify both regular function parameters and filters, the request uses the values in the filters parameter:

```py
result = bavapi.brands("TOKEN", name="Swatch", filters={"name": "Facebook"})
```

The request will use `name="Facebook"`, because values specified in the `filters` parameter take precedence.
:::

### Value filters

"Value" filters filter the values of the data that the endpoint returns. For example, they can filter by category
name or by sector.

You **must** specify these value filters in the `filters` parameter. If you add them to the function call as regular
keyword arguments, `bavapi` will raise a `ValidationError`.

```py
bavapi.brands("TOKEN", name="Swatch", filters={"sector_name": "Watches"})  # ok

bavapi.brands("TOKEN", name="Swatch", sector_name="Watches")  # raises ValidationError
```

Some value filters are not available as arguments to the function call. If you use these value filters, we recommend
that you use only the `filters` parameter. Do not mix function parameters and Filters parameters:

```py
bavapi.brands("TOKEN", filters=bavapi.filters.BrandsFilters(name="Swatch", sector_name="Watches"))
```

### Fields

You can [specify which fields](/customizing/fields.md) a response contains. If you do this, the API will return
**only** those fields.

```py
result = bavapi.brands("TOKEN", name="Swatch", fields=["id", "name"])
result.columns  # will only have ["id", "name"] as columns
```

### Sort

You can [sort the data](/customizing/filters.md#sorting-results) by a column from the response.

```py
# sorted by name
result = bavapi.brands("TOKEN", name="Swatch", sort="name")

# descending sorted by name (note the '-')
result = bavapi.brands("TOKEN", name="Swatch", sort="-name")
```

By default, responses are sorted by item id, in ascending order.

### Includes

Each resource in the Fount has its own data. Resources can also connect to other resources across endpoints.

Each endpoint supports different [included fields](/customizing/includes.md). For more information about the includes
that each endpoint supports, read the [API documentation](/intro.md).

```py
# will include info about the brand's company
result = bavapi.brands("TOKEN", name="Swatch", include="company")
```

:::note Default Includes
The `brandscape_data` function includes `study`, `brand`, `category` and `audience` by default.
:::

### Pagination

All requests to the Fount are [paginated](/pagination.md). This means that you request and receive one page at a
time from the server. For convenience, the SDK automatically combines all responses into one data table.

Three parameters control pagination:

- `page`
- `per_page`
- `max_pages`

If you set only `page` to an integer greater than `0`, `bavapi` requests only that page.

```py
bavapi.studies("TOKEN", page=1)  # Will request a single page of data
```

If you set `per_page` or `max_pages`, `bavapi` will request the applicable pages from the Fount API.

The Fount API default for `per_page` is `25`, but the `bavapi` default is `100`.

:::note
The Fount API allows a maximum of `1000` elements per page.
:::

`bavapi` calculates the number of pages from the total number of items that the Fount reports.

You can also set `max_pages`. This limits the number of pages that `bavapi` requests, independent of the reported
total.

`bavapi` uses the `page` value as the start page for the request. For example, if `page=10` and `max_pages=30`,
`bavapi` will request pages `10` to `40`.

```py
# Request pages with 50 items per page
# up to pages calculated from total reported
bavapi.studies("TOKEN", per_page=50)

# Request pages with 100 items (default) per page up to 10 pages
# or pages calculated from total reported, whichever is smaller
bavapi.studies("TOKEN", max_pages=10)

# Request pages with 10 items per page up to 100 pages
# or pages calculated from total reported, whichever is smaller
bavapi.studies("TOKEN", per_page=10, max_pages=100)

# Request pages with 100 items (default) per page from page 3 to 33
# or pages calculated from total reported, whichever is smaller
bavapi.studies("TOKEN", page=3, max_pages=30)
```

### Metric and metric group keys

`metric_keys` and `metric_group_keys` are special filters. They specify which data *columns* the response contains.

The API response will include all score types for that metric or metric group.

:::note
At this time, only the `brandscape-data` endpoint supports metric and metric group keys. All other endpoints
ignore this parameter. For more information, see the
[`brandscape-data`](endpoints/brandscape-data.md#metric-and-metric-group-keys) endpoint section.
:::

## Using `Query` objects

The parameters in the endpoint functions and methods are there for convenience. You can also use `bavapi.Query`
objects directly in function calls.

This works the same as filters objects. If you use `Query` in an endpoint method, the parameter values in the `Query`
object take precedence over the parameters at the function level.

```py
# will use `name="Facebook"` because `query` values take precedence.
bavapi.brands("TOKEN", name="Swatch", query=bavapi.Query(filters={"name":"Facebook"}))
```

:::note
For more information about `Query`, see the [Advanced usage](./advanced-usage#the-query-class) section.
:::

## Formatting output

Some of the data from the Fount can include multiple items.

:::info Example
For example, if you request the `studies` include in `bavapi.brands`, you get a column that contains lists of
dictionaries. These dictionaries contain study information for all studies that include the brand.

|     |    id | name     | studies                               |
|----:|------:|:---------|:--------------------------------------|
|   0 | 24353 | Facebook | `[{'id': 254, 'name': 'Argentina ...` |
| ... |   ... | ...      | ...                                   |

:::

The `bavapi` functions and methods have a `stack_data` parameter. This parameter takes those lists of dictionaries.
It then makes a new entry (row) in the resulting DataFrame for each element in the list.

```py
bavapi.brands("TOKEN", "Facebook", include="studies", stack_data=True)
```

|     |    id | name     | studies_id | studies_name            | ... |
|----:|------:|:---------|-----------:|:------------------------|-----|
|   0 | 24353 | Facebook |        254 | Argentina - Adults 2011 | ... |
|   1 | 24353 | Facebook |        787 | Argentina - Adults 2012 | ... |
| ... |   ... | ...      |        ... | ...                     | ... |

## Suppressing progress bars

`bavapi` shows progress bars for the download progress. Each tick in the progress bar is one downloaded page.

To hide the progress bars, use the `verbose` parameter in function calls and `Client` init methods:

<Tabs>
  <TabItem value="sync" label="Sync (Won't show progress bar)" default>

```py
bavapi.brands(TOKEN, "Facebook", verbose=False)
```

  </TabItem>
  <TabItem value="async" label="Async (Won't show progress bar)">

```py
async with bavapi.Client(TOKEN, verbose=False) as bav:
    await bav.brands("Facebook")
```

  </TabItem>
</Tabs>

## Timeout

By default, API requests time out after 30 seconds. This prevents requests that do not stop.

Timeouts occur more frequently in requests with more than 50-100 pages. If you get a `TimeoutError`, you can change
this parameter to let requests run longer before they time out.

You can set the time before the timeout when you send requests with `bavapi`:

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py
bavapi.brands(TOKEN, "Facebook", timeout=60)
```

  </TabItem>
  <TabItem value="async" label="Async">

```py
async with bavapi.Client(TOKEN, timeout=60) as bav:
    await bav.brands("Facebook")
```

  </TabItem>
</Tabs>

## Error handling

### Warn or raise when a page fails to download

To control how `bavapi` handles errors, change the `on_errors` parameter in top-level functions and the `Client`
interface.

Options and examples:

- `"warn"` (default): Returns all data that downloaded successfully. At the end, it shows a warning about all pages
  that did not download, so that you can try them again manually.
- `"raise"`: Raises each exception immediately when it occurs. This was the default behavior until `v0.13`.

<Tabs>
  <TabItem value="warn" label="Warn" default>

```py
>>> bavapi.brands("TOKEN", "Facebook", verbose=False, on_errors="warn") # Fails page 1
UserWarning: Could not fetch pages: ["page 1: Exception(...)"]  # Does not raise
```

  </TabItem>
  <TabItem value="raise" label="Raise">

```py
>>> bavapi.brands("TOKEN", "Facebook", verbose=False, on_errors="raise") # Fails page 1
Exception: ...  # Raised
```

  </TabItem>
</Tabs>

:::caution Some requests can still raise exceptions
During the initial handshake between `bavapi` and the Fount API, `bavapi` retries only SSL errors. Thus, some queries
can still raise exceptions when `on_errors` is set to `"warn"`:

- If parameters are not of the correct Python type, they raise a `ValidationError`
- Server errors raise an `APIError` with more details about the problem
- Queries that find no results raise a `DataNotFoundError`
- Requests that exceed the user's rate limit raise a `RateLimitExceededError`
  :::

### Retry failed requests

`bavapi` automatically retries requests that fail because of an exception. To control the number of retry attempts,
use the `retries` parameter in top-level functions and the `Client` interface:

```py
bavapi.brands("TOKEN", retries=5)  # Will retry pages 5 times after original failure
```

:::note
There are also some advanced options to control the behavior of `bavapi` requests. For more information, see the
[Control `bavapi` batching behavior](advanced-usage#control-bavapi-batching-behavior) section of the Advanced Usage
documentation.
:::
