---
sidebar_label: Reference Classes
---

# Reference Classes

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The SDK can generate some convenience reference classes. These classes map Fount resource IDs to more readable names.
They make the IDs easier to use and give autocompletion in IDEs.

A console command generates these classes automatically. This command becomes available after you install `bavapi`.

:::note Protected Access
You need a Fount API token to generate reference files. For more information, and for instructions on how to use
`.env` files in your Python project, see the [Authentication](developer-tools/python/authentication.md) section.
:::

As of `v1.1`, the command generates the following reference classes in a folder named `bavapi_refs`:

- `Audiences`: encodes audience IDs
- `Countries`: encodes country IDs

This is an example of a reference class:

```py
class Audiences(Enum):
    ALL_ADULTS = 27  # Random ID
    ...
```

You can use it to make your filters for API responses easier to read:

<Tabs>
  <TabItem value="ref" label="Using Reference class" default>

```py title="Explicit audience filter"
bavapi.brandscape_data(country_code="US", year=2022, audiences=Audiences.ALL_ADULTS)
```

  </TabItem>
  <TabItem value="no-ref" label="Not using Reference class">

```py title="Audience filter not human-readable"
bavapi.brandscape_data(country_code="US", year=2022, audiences=27)
```

  </TabItem>
</Tabs>

:::caution Ignore reference classes on public repositories
Do not commit reference classes to public repositories. Add `bavapi_refs/` to your `.gitignore` file.
:::

When you generate these reference classes, you have two options to authenticate your requests:

- Specify the Fount API token with the `-t`/`--token` argument.
- Store your Fount API token in a `.env` file, and install `python-dotenv` to read the file into your environment.
  For more information, see the [Authentication](authentication.md#recommended-way-to-manage-api-keys) section.

Run the following command:

<Tabs>
  <TabItem value="with-env" label="With a `.env` file" default>

```prompt
bavapi-gen-refs --all
```

  </TabItem>
  <TabItem value="without-env" label="Using the `-t`/`--token` argument">

```prompt
bavapi-gen-refs -t "TOKEN" --all
```

  </TabItem>
</Tabs>

You can also specify the name of the reference class to generate:

```prompt
bavapi-gen-refs --name audiences
```

To update your reference classes with the latest data, run `bavapi-gen-refs --all` again in your terminal.

:::caution Keep the reference classes up to date
The audiences and markets change over time. We recommend that you update your reference classes regularly. Usually,
audiences and markets are not deleted. But we cannot guarantee that this will never occur.
:::
