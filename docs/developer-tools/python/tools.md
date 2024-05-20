# Tools/TurboPitch

:::info
Read more in the API documentation for the [tools endpoint](/tools/index.md).
:::

The `tools` namespace in `bavapi` and the API enables access to ready-made analyses and frameworks to gain direct insights from BAV data.

Every tool operates by requesting the analysis to be performed on specific brands, categories, markets or audiences, specified by their ID in the Fount. The analysis is performed on the server, and the results are returned once retrieved.

Because the breadth of filters and parameters is much simpler than the query API endpoints, `pydantic` models are not needed to make requests. Function parameters are still type validated.

## Using `bavapi.tools`

The `tools` interface must be used through the `async` interface provided by the `bavapi.tools.ToolsClient` class:

```py
from bavapi.tools import ToolsClient

async with ToolsClient("TOKEN") as client:  # Replace `"TOKEN"` with your own API key
    result = await client.brand_worth_map(brands=1, studies=1)
```

You can also manually close the connection instead of using an `async with` block:

```py
from bavapi.tools import ToolsClient

client = ToolsClient("TOKEN")
try:
    result = await client.brand_worth_map(brands=1, studies=1)
finally:
    await client.aclose()  # Close the connection with the API server
```

You will need to instantiate a new `ToolsClient` object once you use it inside the `async with` block or call `aclose`.

:::caution Different return types by endpoint
Each tool will return results with different signatures. Some will return simply `pandas.DataFrame` instances, and others will return a tuple of additional metadata as a JSON dictionary and parsed data as a `pandas.DataFrame`. Please check the return type for each endpoint method in the docstrings or type hints.

```py
await ToolsClient("TOKEN").brand_worth_map(...)  # returns (JSONDict, pd.DataFrame)

await ToolsClient("TOKEN").brand_personality_match(...)  # returns pd.DataFrame
```
:::

## Client settings

Unlike the query API endpoints, these tools do not return paginated results, so many of the parameters to control pagination behavior in the query endpoints are not used. You can still specify the following when initializing `ToolsClient`:

- `auth_token`
- `base_url`
- `user_agent`
- `headers`: if used, don't pass `auth_token` and `user_agent`
- `client`: if used, don't pass `auth_token`, `headers` and `user_agent`
- `retries`

Please refer to the [basic usage](basic-usage.md) section for more information on how to use these configuration parameters.

## Available endpoints

The available tools endpoints are the following:

- `archetypes`
- `brand_personality_match`
- `brand_vulnerability_map`
- `brand_worth_map`
- `commitment_funnel`
- `cost_of_entry`
- `love_plus`
- `partnership_exchange_map`

Endpoints not currently implemented are:

- `category_worth_map`
- `swot`
- `toplist_market`
