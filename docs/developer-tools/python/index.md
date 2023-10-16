---
sidebar_label: Overview
---

# Python SDK

[![CI status](https://github.com/wppbav/bavapi-sdk-python/actions/workflows/ci.yml/badge.svg)](https://github.com/wppbav/bavapi-sdk-python/actions/workflows/ci.yml)
[![coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/nachomaiz/32196acdc05431cd2bc7a8c73a587a8d/raw/covbadge.json)](https://github.com/wppbav/bavapi-sdk-python/actions/workflows/ci.yml)
[![release status](https://github.com/wppbav/bavapi-sdk-python/actions/workflows/release.yml/badge.svg)](https://github.com/wppbav/bavapi-sdk-python/actions/workflows/release.yml)
[![PyPI](https://img.shields.io/pypi/v/wpp-bavapi)](https://pypi.org/project/wpp-bavapi/)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/wpp-bavapi)
](https://pypi.org/project/wpp-bavapi/)

The Python SDK for the BAV API makes it easy to consume BAV data within your Python scripts. It is published
as `wpp-bavapi` in [PyPI](https://pypi.org/project/wpp-bavapi/) and hosted
on [GitHub](https://github.com/wppbav/bavapi-sdk-python/).

Queries are validated automatically thanks to `pydantic` and retrieved asynchronously via the `httpx` package.

To start using `bavapi`, go to the [Installation](installation.md) section.

After going through the Installation, please see [Basic Usage](basic-usage.md). For more advanced topics,
see the [Advanced Usage](advanced-usage.md) section.

Each Fount API endpoint may behave slightly differently. You can find detailed explanations in
the [Endpoints](python/endpoints/) section.

## Example usage

:::info "Protected access"
:lock: To use `bavapi`, you will need a Fount API token. Read more in the [Authentication](../authentication) section.
:::

```py
>>> import bavapi
>>> result = bavapi.brands("TOKEN", name="Swatch") # Replace "TOKEN" with your token.
>>> result
```

|     | sector_id | sector_name           | id   | name   | ... |
| --: | :-------- | :-------------------- | :--- | :----- | :-- |
|   0 | 233       | Apparel & Accessories | 8635 | Swatch | ... |
| ... | ...       | ...                   | ...  | ...    | ... |


## Features

- Support for all endpoints in the Fount API.
    - Extended support for the following endpoints:
        - `audiences`
        - `brand-metrics`
        - `brand-metric-groups`
        - `brands`
        - `brandscape-data`
        - `categories`
        - `collections`
        - `sectors`
        - `studies`
    - Other endpoints are available via the `raw_query` functions and methods.
- Validates query parameters are of the correct types and provides type hints for better IDE support.
- Retrieve multiple pages of data simultaneously, as well as monitors and prevents exceeding API rate limit.
- Both synchronous and asynchronous APIs for accessing BAV data.

## Issues

For bug reports and feature requests, please open an issue
on [GitHub](https://github.com/wppbav/bavapi-sdk-python/issues/).

## Contributing

We welcome contributions to the Python SDK which is hosted as a public repository on GitHub. Please see the [Contributing](https://github.com/wppbav/bavapi-sdk-python/blob/main/CONTRIBUTING.md) document for more information.
