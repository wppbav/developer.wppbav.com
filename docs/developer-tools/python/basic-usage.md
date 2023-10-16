---
sidebar_label: Basic Usage
---

# Basic Usage

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you have installed `bavapi` and acquired a token from the Fount, you can start using `bavapi` directly in Python or
in a Jupyter Notebook.

```py
import bavapi
```

## Making Requests

:::info SSL issues
It's possible that you get `SSL: CERTIFICATE_VERIFY_FAILED` errors when performing requests with `bavapi`. At the moment, it is not clear to what might be the source of the issue; as it only happens sometimes, and the error doesn't appear to happen with other tested URLs.

Usually, making the request again solves the issue, but you might have to do so a couple of times if the issue persists.

:bulb: If you have any thoughts on how to solve this, please open an [issue](https://github.com/wppbav/bavapi-sdk-python/issues/) on GitHub.
:::

You can query the available [endpoints](./endpoints) with their corresponding methods. Replace `TOKEN` with
your [API key](authentication.md)

```py
swatch = bavapi.brands("TOKEN", name="Swatch")  # Replace `TOKEN` with your API key
```

These endpoints methods will return a pandas DataFrame containing the data retrieved for your query:

|     | id     | name   | ... |
| --: | :----- | :----- | :-- |
|   0 | 2342   | Swatch | ... |
|   1 | 127896 | Swatch | ... |
| ... | ...    | ...    | ... |

You can make requests to other [endpoints](./endpoints/) in the same way:

```py
uk_studies = bavapi.studies("TOKEN", country_code="GB")

uk22 = bavapi.brandscape_data("TOKEN", year_numbers=2022, country_code="GB", audiences=1)

all_adults = bavapi.audiences("TOKEN", name="All Adults")
```

## Filtering responses

In order to validate the request parameters before sending a bad request, `bavapi` will automatically check that the
parameters from your query and filters are of the type expected by the Fount API. If any parameter doesn't conform to
the API requirements, `bavapi` will raise a `ValidationError`.

:::note What it's doing
`bavapi` performs an initial request to make sure the query parameters are valid, and to retrieve information about the
number of pages it will need to fetch.

If the initial request fails, `bavapi` will not perform more requests.

Similarly, if the initial request returns the entirety of the query (e.g., there are only 10 results and `per_page` is
above 10, which it is by default), no further requests will be performed, and instead the data from the initial response
will be returned.
:::

Each endpoint has a filter class associated with it, as each endpoint has its own filter requirements:

| Endpoint            | Filters class       |
|---------------------|---------------------|
| `"audiences"`       | `AudiencesFilters`  |
| `"brands"`          | `BrandsFilters`     |
| `"brandscape-data"` | `BrandscapeFilters` |
| `"studies"`         | `StudiesFilters`    |

These filters are available under the `bavapi.filters` namespace.

:::caution Don't mix and match filters
Using a filters class not meant for a specific endpoint will raise a `ValueError`.

However, using a dictionary instead (as seen in the instructions below) won't raise errors if the dictionary doesn't
match the expected filter types. Use the dictionary method with caution.
:::

These classes are available in the `bavapi.filters` module.

Some of the more common filters for each endpoint have been added directly to the `bavapi` functions. More info in the [endpoints](./endpoints/) section.

:::info Example
`bavapi.brands` has parameters such as `name`, `country_codes`, `year_numbers`, `brand_id` or `studies`, which you can
use directly from the function without creating a filters instance.
:::

However, less commonly used filters, as well as [value filters](#value-filters) must be specified by using the `filters` parameters in each function.

Filters can be specified using a python dictionary (if you know the name of the filters you need), or directly creating
a filter instance.

<Tabs>
  <TabItem value="filters" label="Filters instance (recommended)" default>

```py
result = bavapi.brands(
    filters=bavapi.filters.BrandsFilters(name="Swatch", country_codes=["US", "UK"])
)
```

  </TabItem>
  <TabItem value="dict" label="Dictionary">

```py
result = bavapi.brands(
    filters={"name":"Swatch", "country_codes":["US", "UK"]}
)
```

  </TabItem>
</Tabs>

:::caution
If both regular function parameters and filters are specified, the values in the filters parameter will take precedence
for the actual request:

```py
result = bavapi.brands(name="Swatch", filters={"name": "Facebook"})
```

The request will use `name="Facebook"`, because values specified in the `filters` parameter take precedence.
:::

### Value filters

"Value" filters refer to filtering on the values of the data returned by the endpoint. For example, filtering by
category name or by sector.

These value filters **must** be specified in the `filters` parameter. If they are added to the function call as regular
keyworrd arguments, a `ValidationError` will be raised.

```py
bavapi.brands(name="Swatch", filters={"sector_name": "Watches"})  # ok

bavapi.brands(name="Swatch", sector_name="Watches")  # raises ValidationError
```

When using additional value filters, which might not be available in the arguments to the function call, it is
recommended to use the `filters` parameter instead of mixing function parameters and Filters parameters:

```py
bavapi.brands(filters=bavapi.filters.BrandsFilters(name="Swatch", sector_name="Watches"))
```

## Using *Reference* Classes

The SDK provides reference classes to make API queries easier to construct. Please see
the [Reference Classes](./reference-classes) section for more info.

## Timeout

:::info New from `v0.8`
:::

By default, API requests will timeout after 30 seconds in order to avoid hangups.

This may happen more commonly when performing requests with more than 50-100 pages. If you get a `TimeoutError`, you can change this parameter to allow for longer timeouts.

It is possible to set the time before timeout when performing requests with `bavapi`:

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

## Suppressing progress bars

:::info New from `v0.9`
:::

`bavapi` displays progress bars to show download progress. Each tick in the progress bar refers to individual pages being downloaded.

It's possible to supress progress bar outputs via the `verbose` parameter in function calls and `Client` init methods:

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

## Other Parameters

### Fields

It is possible to [specify which fields](/customizing/fields.md) a response should contain. If so, the API will **only**
return those fields.

```py
result = bavapi.brands(name="Swatch", fields=["id", "name"])
result.columns  # will only have ["id", "name"] as columns
```

### Sort

It is possible to [sort the data](/customizing/filters.md#sorting-results) by a column from the response.

```py
# sorted by name
result = bavapi.brands(name="Swatch", sort="name")

# descending sorted by name (note the '-')
result = bavapi.brands(name="Swatch", sort="-name")
```

Responses are sorted by item id, in ascending order, by default.

### Includes

Aside from the data directly available for each of the resources in the Fount, these resources can also be connected
across endpoints.

Each endpoint supports different [included fields](/customizing/includes.md). Please read the
main [BAV API documentation](/intro.md) for more info on the specific set of includes supported by each endpoint.

```py
# will include info about the brand's company
result = bavapi.brands(name="Swatch", includes="company")
```

:::note Default Includes
The `brandscape_data` function includes `study`, `brand`, `category` and `audience` by default.
:::

### Pagination

All requests to the Fount are [paginated](/pagination.md), meaning that one must request and receive from the server one page at a
time. The SDK automatically combines all responses into one data table for convenience.

While the default value for the API is `100`, it is possible to set a custom number of `per_page` elements for each
request:

```py
# will send requests for the specified number of elements.
result = bavapi.brands(name="Swatch", per_page=1000)
```

The maximum number of elements per page allowed by the Fount API is `1000`.

## Formatting output

It is possible that some of the data retrieved from the Fount includes multiple items.

:::info Example
For example, requesting the `studies` include in `bavapi.brands` will return a column containing lists of dictionaries
with study info for all studies that a brand appears in.

|     |    id | name     | studies                             |
| --: | ----: | :------- | :---------------------------------- |
|   0 | 24353 | Facebook | [{'id': 254, 'name': 'Argentina ... |
| ... |   ... | ...      | ...                                 |
:::

`bavapi` provides an `stack_data` parameter to its functions and methods that will take those lists of dictionaries and generate a new entry (row) in the resulting DataFrame for each element in the list.

```py
bavapi.brands("Facebook", include="studies", stack_data=True)
```

|     |    id | name     | studies_id | studies_name            | ... |
| --: | ----: | :------- | ---------: | :---------------------- | --- |
|   0 | 24353 | Facebook |        254 | Argentina - Adults 2011 | ... |
|   1 | 24353 | Facebook |        787 | Argentina - Adults 2012 | ... |
| ... |   ... | ...      |        ... | ...                     | ... |

## Datetime in Fount responses

Parsing of datetime values in API responses is not currently supported, though it is a planned feature.

For now, parse datetime values manually using `pandas` instead.

:::tip
The functions shown in the "Basic usage" section are meant for easy use in Jupyter notebooks, experimentation, one-off
scripts, etc.

For more advanced uses and performance benefits, see [Advanced Usage](advanced-usage) next.
:::
