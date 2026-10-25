# Tools/TurboPitch

:::info
Read more in the API documentation for the [tools endpoint](/brand-data/tools.md).
:::

The `tools` namespace in `bavapi` and the API gives access to ready-made analyses and frameworks. These give direct insights from BAV data.

Each tool requests an analysis of specific brands, categories, markets or audiences. You identify these items by their ID in the Fount. The server does the analysis, and returns the results when they are available.

The filters and parameters of the tools are much simpler than the filters and parameters of the query API endpoints. Thus, you do not need `pydantic` models to make requests. The SDK still validates the types of the function parameters.

## Using `bavapi.tools`

You must use the `tools` interface through the `async` interface of the `bavapi.tools.ToolsClient` class:

```py
from bavapi.tools import ToolsClient

async with ToolsClient("TOKEN") as client:  # Replace `"TOKEN"` with your own API key
    result = await client.brand_worth_map(brands=1, studies=1)
```

You can also close the connection manually instead of with an `async with` block:

```py
from bavapi.tools import ToolsClient

client = ToolsClient("TOKEN")
try:
    result = await client.brand_worth_map(brands=1, studies=1)
finally:
    await client.aclose()  # Close the connection with the API server
```

After you use a `ToolsClient` object inside the `async with` block or call `aclose`, you must instantiate a new `ToolsClient` object.

:::caution Different return types by endpoint
Each tool returns results with a different signature. Some tools return only `pandas.DataFrame` instances. Other tools return a tuple: additional metadata as a JSON dictionary, and parsed data as a `pandas.DataFrame`. Check the return type for each endpoint method in the docstrings or type hints.

```py
await ToolsClient("TOKEN").brand_worth_map(...)  # returns (JSONDict, pd.DataFrame)

await ToolsClient("TOKEN").brand_personality_match(...)  # returns pd.DataFrame
```
:::

## Client settings

These tools do not return paginated results, which is different from the query API endpoints. Thus, the tools do not use many of the pagination parameters of the query endpoints. When you initialize `ToolsClient`, you can still specify the following:

- `auth_token`
- `base_url`
- `user_agent`
- `headers`: if you use this parameter, do not pass `auth_token` and `user_agent`
- `client`: if you use this parameter, do not pass `auth_token`, `headers` and `user_agent`
- `retries`

For more information about how to use these configuration parameters, see the [basic usage](basic-usage.md) section.

## Available endpoints

The available tools endpoints are:

- `archetypes`
- `brand_personality_match`
- `brand_vulnerability_map`
- `brand_worth_map`
- `commitment_funnel`
- `cost_of_entry`
- `love_plus`
- `partnership_exchange_map`

These endpoints are not implemented at this time:

- `category_worth_map`
- `swot`
- `toplist_market`
