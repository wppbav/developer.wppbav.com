# Authentication

Access to the API via the Python SDK works the same way as it does in the API as a whole. Please follow the instructions
in the [Authentication](/authentication.md) section of the main API documentation to get started.

In order to keep your API token secure, you should avoid using your token directly in your code and applications.

Instead, place the code in a `.env` file at the top of your project directory, and use `python-dotenv` to load the token
into your environment:

```prompt
my-project-folder
├─── .env
└─── ... (other stuff)
```

Create this `.env` file (note the leading dot) in the top level of your working directory, and write down your token
like so:

```env
BAV_API_TOKEN = "your_token_here"
```

To now use this file, you will need to install the [`python-dotenv`](https://github.com/theskumar/python-dotenv)
package:

```prompt
pip install python-dotenv
```

Now, paste this code at the top of your Python files or Jupyter Notebooks:

```py
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from `.env` into the system's environment
TOKEN = os.environ["BAV_API_TOKEN"]  # Assign our "BAV_API_TOKEN" environment variable to `TOKEN`
```

Now you can use `TOKEN` in your API requests:

```py
bavapi.brands(TOKEN, name="Swatch")
```
