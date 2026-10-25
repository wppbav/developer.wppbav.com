# Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

The SDK requires python 3.8 or higher.

If you do not have python, you can download it from the official Python [website](https://www.python.org/downloads/) or [Anaconda](https://www.anaconda.com/).

You also need a BAV API token to send requests to the Fount. For instructions on how to get your own API token, see the [Authentication](authentication.md) section.

## Dependencies

The SDK depends on the following excellent libraries:

- `httpx` for communication with the Fount API.
- `pandas` to process the data into tables.
- `pydantic` to validate query and filter parameters.
- `nest-asyncio` to support Jupyter notebooks.
- `tqdm` to show helpful progress bars.
- `typing-extensions` for type checking compatibility in older Python versions.

When you install `bavapi`, the installer also installs these libraries automatically.

## Installing the SDK in your project

After you activate your virtual environment, install `bavapi` with the following command:

```prompt
pip install wpp-bavapi
```

:::tip Installing with conda

`bavapi` is not currently available directly from `conda`. But you can probably install and use it in a `conda` environment.

To get the best compatibility between `conda` and `pip`, use the following commands:

```prompt
conda install httpx, pandas, pydantic, nest-asyncio, tqdm, typing_extensions

pip install wpp-bavapi --no-deps
```

:::

### Installing from source

To install from source, clone the GitHub repository to your local machine:

```prompt
git clone https://github.com/wppbav/bavapi-sdk-python.git
```

Go to the cloned directory. Then install `bavapi`:

```prompt
cd bavapi-sdk-python
pip install .
```

## Installing `bavapi` *Reference* classes

`bavapi` can generate some convenience reference classes. These classes map Fount resource IDs to more readable names. They make the IDs easier to use and give autocompletion in IDEs. A console command generates these classes automatically. This command becomes available after you install `bavapi`.

For more information, see the [Reference Classes](reference-classes.md) section.
