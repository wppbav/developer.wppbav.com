# Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

The SDK requires python 3.8 or higher to run.

If you don't have python installed, you can download it from the official Python [website](https://www.python.org/downloads/) or [Anaconda](https://www.anaconda.com/).

You will also need a BAV API token to peform requests to the Fount. For instructions on how to get your own API token, see the [Authentication](authentication.md) section.

## Dependencies

The SDK depends on the following excellent libraries:

- `httpx` for communication with the Fount API.
- `pandas` for processing retrieved data into tables.
- `pydantic` to validate query and filter parameters.
- `nest-asyncio` to support Jupyter notebooks.
- `tqdm` to show helpful progress bars.
- `typing-extensions` for type checking compatibility in older Python versions.

These libraries will be installed automatically when you install `bavapi`.

## Installing the SDK in your project

Once you have your virtual environment activated, you can install `bavapi` with the following command:

```prompt
pip install wpp-bavapi
```

:::tip Installing with conda

`bavapi` is not currently available from `conda` directly, though it should be possible to install and use it within a `conda` environment.

Use the following commands to maximize compatibility between `conda` and `pip`:

```prompt
conda install httpx, pandas, pydantic, nest-asyncio, tqdm, typing_extensions

pip install wpp-bavapi --no-deps
```

:::

### Installing from source

To install from source, clone the GitHub repository into your local machine:

```prompt
git clone https://github.com/wppbav/bavapi-sdk-python.git
```

Go into the cloned directory and install `bavapi`:

```prompt
cd bavapi-sdk-python
pip install .
```

## Installing `bavapi` *Reference* classes

`bavapi` can generate some convenience reference classes which map Fount resource IDs with a more readable name, both for ease of use and for autocompletion in IDEs. These classes are automatically generated by a console command that becomes available once `bavapi` is installed.

Please see the [Reference Classes](reference-classes.md) section for more information.
