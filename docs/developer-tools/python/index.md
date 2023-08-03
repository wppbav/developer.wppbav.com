---
sidebar_label: Overview
---

# Python SDK

The Python SDK for the BAV API makes it easy to consume BAV data within your Python scripts. It is published
as `wpp-bavapi` in [PyPI](https://pypi.org/project/wpp-bavapi/) and hosted
on [GitHub](https://github.com/wppbav/bavapi-sdk-python/).

Queries are validated automatically thanks to `pydantic` and retrieved asynchronously via the `httpx` package.

To start using `bavapi`, go to the [Installation](installation.md) section.

After going through the Installation, please see [Basic Usage](basic-usage.md). For more advanced topics,
see the [Advanced Usage](advanced-usage.md) section.

Each Fount API endpoint may behave slightly differently. You can find detailed explanations in
the [Endpoints](python/endpoints/) section.

## Features

- Support for all endpoints in the Fount API. Extended support for the `audiences`, `brands`, `brandscape-data`
  and `studies` endpoints. Other endpoints are available via the `raw_query` functions and methods.
- Validates query parameters are of the correct types and provides type hints for better IDE support.
- Retrieve multiple pages of data simultaneously, as well as monitors and prevents exceeding API rate limit.
- Both synchronous and asynchronous APIs for accessing BAV data.

## Issues

For bug reports and feature requests, please open an issue
on [GitHub](https://github.com/wppbav/bavapi-sdk-python/issues/).

## Contributing

We welcome contributions to the Python SDK which is hosted as a public repository on GitHub. Please see the [Contributing](https://github.com/wppbav/bavapi-sdk-python/blob/main/CONTRIBUTING.md) document for more information.
