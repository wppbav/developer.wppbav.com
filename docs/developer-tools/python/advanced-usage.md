---
sidebar_label: Advanced Usage
---

# Advanced Usage

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This section is for developers who want to embed `bavapi` functionality into their APIs and applications.

:::info Async Support
`bavapi` natively supports asynchronous execution, so it can work with popular `async` libraries such as
[`fastapi`](https://fastapi.tiangolo.com/).
:::

## The `Client` interface

The `Client` class is the backbone of `bavapi`. For more advanced users, we recommend `Client` to work with the API.

:::tip
If you know the `requests` or `httpx` python packages, this is similar to `requests.Session()` or `httpx.Client()`.
:::

The `Client` class can give significant performance improvements over the top-level endpoint functions (for example,
`bavapi.brands`). This is especially true when you send multiple requests at the same time.

The `Client` interface is based on `httpx.Client`, so it gets all the performance features of `httpx`:

:::note Quote from the `httpx` [docs](https://www.python-httpx.org/advanced/)

- Reduced latency across requests (no handshaking).
- Reduced CPU usage and round-trips.
- Reduced network congestion.

:::

When you use `Client`, you get all these benefits. This is also true in Jupyter Notebooks.

## Using the `Client` interface

We recommend that you use `Client` in an `async with` block:

```py
async with bavapi.Client("TOKEN") as bav:
    result = await bav.brands("Swatch")
```

You can also use `Client` methods outside of an `async with` block, but the performance can be slightly lower.

```py
bav = bavapi.Client("TOKEN")
result = await bav.brands("Swatch")
await bav.aclose()  # Close the connection after you're done making requests
```

## Other endpoints

The Fount has a large number of endpoints, and the queries are highly customizable. Thus, some endpoints do not have
extended support from the start.

:::note Open for feedback
If you want new endpoints with full type annotations and validation support, open an
[issue](https://github.com/wppbav/bavapi-sdk-python/issues) on GitHub with the "Feature Request" template.
:::

`bavapi` has `raw_query` functions/methods. Use them to access the available endpoints that do not have endpoint
functions/methods:

- `bavapi.raw_query` for synchronous requests.
- `bavapi.Client.raw_query` for asynchronous requests.

These `raw_query` methods require `bavapi.Query` instances to make the request:

```py
async with bavapi.Client("TOKEN") as bav:
    res = await bav.raw_query(
        "companies",
        bavapi.Query(filters=bavapi.filters.FountFilters(name="Apple"))
    )
```

These functions return a list of JSON dictionaries, one for each entry from the Fount:

```json
[
    {"name": "Apple", "id": 1},
    {"name": "Applebee's", "id": 2},
    // ...
]
```

:::tip
These methods are for custom data processing that does not make a `pandas` DataFrame. But you can also use some of
the parsing functions in `bavapising.responses`.
:::

## The `Query` class

`bavapi.Query` is a class that uses `pydantic`. It holds and validates all the common query parameters (not the
endpoint-specific filters) to send to the Fount API.

The default values for the class are the same as the default values in the Fount API. Thus, you can use an empty
`Query` object to get all entries for a specific endpoint:

```py
query = bavapi.Query()

async with bavapi.Client("TOKEN") as bav:
    # Returns all entries for `brand-metrics`. Similar to making a `GET` request with no parameters.
    res = await bav.raw_query("brand-metrics", query)
```

You can use `Query` to limit the number of pages that you get, or to request a specific page from a query:

```py
bavapi.Query(
    per_page = 200,
    max_pages = 50,
    ...  # Other params
)
```

### `Query` parameters

All Fount queries that use `bavapi.Query` support the following parameters:

- `id`: Return only results for a specific id.
- `page`: The page number of results to return.
- `per_page`: The number of results to return per page. Default is 25 and maximum is 100.
- `max_pages`: The maximum number of pages to request. By default, `bavapi` requests all pages in a query.
- `fields`: The keys for the fields to include in the response. Usually they are the field name in lower case.
- `sort`: The key(s) for the field(s) to order the response results by.
- `include`: Additional linked resources to include in the response.
- `updated_since`: Only return items that changed after this timestamp.

For more information about the behavior of each of these parameters, see the [customizing fields](/customizing/fields.md)
section.

### Raw parameter dictionary

Use the `to_params` method to parse the parameters into a dictionary. This dictionary shows what `bavapi` will send to
the Fount API:

```py
>>> bavapi.Query(
...     filters=BrandscapeFilters(
...         brand_name="Facebook",
...         year_numbers=[2012, 2013, 2014, 2015]
...     ),
...     include=["company"]
... ).to_params(endpoint="brandscape-data")  # (1)
{
    "include[brandscape-data]": "company",  # (2)
    "filter[brand_name]": "Facebook",
    "year_numbers": "2012,2013,2014,2015",
}
```

1. Needs the endpoint name to format the parameters correctly.
2. Parses `filters` and `include` into the correct format for the Fount API. Also parses all elements in lists of
   parameters to their string representation.

## Control `bavapi` batching behavior

`bavapi` automatically batches paginated requests to the API to improve latency and throughput. The default values
keep about twenty concurrent requests at a time.

`bavapi` also automatically retries failed requests. You can set the number of retries (default `2`).

Both top-level functions and the `Client` class have the following parameters to control the behavior of the requests:

- `batch_size`: Number of pages in each batch of requests, default `10`.
- `n_workers`: Number of worker coroutines that make batched requests at the same time, default `2`.
- `retries`: Number of times to retry a page request before `bavapi` raises an exception, default `3`.
- `on_errors`: Set to `"warn"` to get a warning about failed requests at the end of the query. Set to `"raise"` to
  raise an exception immediately after a failure (after retries). Default `"warn"`.

These parameters can be set in both top-level functions and the async `Client` class:

<Tabs>
  <TabItem value="sync" label="Sync" default>

```py
bavapi.brands(
    TOKEN,
    batch_size=5,  # number of requests per batch
    n_workers=5,  # number of concurrent workers
    retries=2,  # number of retry attempts
    on_errors="raise",  # raise on failure after retries
)
```

  </TabItem>
  <TabItem value="async" label="Async">

```py
async with bavapi.Client(
    TOKEN,
    batch_size=5,  # number of requests per batch
    n_workers=5,  # number of concurrent workers
    retries=2,  # number of retry attempts
    on_errors="raise",  # raise on failure after retries
) as client:
    await client.brands()
```

  </TabItem>
</Tabs>

The query in the examples above makes *25* concurrent API requests (5 `batch_size` * 5 `n_workers`). `bavapi` will
retry each failed request *twice* (after the initial request). If all retries for a page cause exceptions,
`on_errors="raise"` makes sure that `bavapi` raises an exception.

:::caution
To prevent SSL and timeout problems, we recommend that you set `batch_size` and `n_workers` so that `bavapi` sends a
maximum of 20-30 concurrent requests. The default is 20 concurrent requests (10 `batch_size` * 2 `n_workers`).
:::

## User Agent

You can set the `User Agent` parameter for HTTP requests.

The default user agent is `"BAVAPI SDK Python"`.

To change the user agent for your application, set it when you instantiate a `Client`:

```py
bav = bavapi.Client(user_agent="Your User Agent")
```
