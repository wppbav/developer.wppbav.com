---
sidebar_label: Advanced Usage
---

# Advanced Usage

This section is intended for developers who are interested in embedding `bavapi` functionality into their APIs and applications.

:::note Async Support
`bavapi` natively supports asynchronous execution, so it is ready to work with popular `async` libraries such as [`fastapi`](https://fastapi.tiangolo.com/).
:::

## The `Client` interface

The `Client` class is the backbone of `bavapi`, and it is the recommended way to interact with the API for more advanced users.

:::tip
If you're familiar with the `requests` or `httpx` python packages, this is similar to using `requests.Session()` or `httpx.Client()`.
:::

Using the `Client` class instead of the top-level endpoint functions (`bavapi.brands`, for example), can bring significant performance improvements, especially when performing multiple requests at the same time.

The `Client` interface is based on `httpx.Client`, so it benefits from all the performance features from `httpx`:

:::note Quote from the `httpx` [docs](https://www.python-httpx.org/advanced/)

- Reduced latency across requests (no handshaking).
- Reduced CPU usage and round-trips.
- Reduced network congestion.

:::

By using `Client`, you will also get all these benefits, including in Jupyter Notebooks.

## Using the `Client` interface

It is recommended to use `Client` in an `async with` block:

```py
async with bavapi.Client("TOKEN") as bav:
    result = await bav.brands("Swatch")
```

Otherwise, it is possible to use `Client` methods outside of an `async with` block, but it might be slightly less performant.

```py
client = bavapi.Client("TOKEN")
result = await client.brands("Swatch")
await client.aclose()  # Close the connection after you're done making requests
```

## Other endpoints

Because of the large number of available endpoints in the Fount and the highly customizable queries, some endpoints won't have extended support from the start.

:::note Open for feedback
If you would like to see new endpoints with full type annotations and validation support, please open an [issue](https://github.com/wppbav/bavapi-sdk-python/issues) on GitHub with the "Feature Request" template.
:::

`bavapi` provides `raw_query` functions/methods to access all the available endpoints without existing endpoint functions/methods:

- `bavapi.raw_query` for synchronous requests.
- `bavapi.Client.raw_query` for asynchronous requests.

These `raw_query` methods require the use of `bavapi.Query` instances to make the request:

```py
async with bavapi.Client("TOKEN") as fount:
    res = fount.raw_query(
        "companies",
        bavapi.Query(filters=bavapi.filters.FountFilters(name="Apple"))
    )
```

These functions will return a list of JSON dictionaries, one for each entry retrieved from the Fount:

```json
[
    {"name": "Apple", "id": 1},
    {"name": "Applebee's", "id": 2},
    // ...
]
```

:::tip
These methods are meant to be used for custom processing of data (not resulting in a `pandas` DataFrame), but it is also possible to use some of the parsing functions available in `bavapising.responses`.
:::

### `Query` parameters

All Fount queries performed with `bavapi.Query` support the following parameters:

- `id`: Return only results for a specific id.
- `page`: The page number of results to return.
- `per_page`: The number of results to return per page. Default is 25 and maximum is 100.
- `max_pages`: The maximum number of pages to request. Defaults to requesting all pages in a query.
- `fields`: The keys for the fields to include in the response. Usually they are the field name in lower case.
- `sort`: The key(s) for the field(s) to order the response results by.
- `include`: Additional linked resources to include in the response.
- `updated_since`: Only return items that have been updated since this timestamp.

For more information on the behavior of each of these parameters, see the [main API docs](/intro.md).

## User Agent

:::info New in `v0.8.0`
:::

It is possible to set the `User Agent` parameter for HTTP requests.

The default user agent is `"BAVAPI SDK Python"`.

If you want to change the user agent for your application, you can set it when instantiating a `Client`:

```py
client = bavapi.Client(user_agent="Your User Agent")
```