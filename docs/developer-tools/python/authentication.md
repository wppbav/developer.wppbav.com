# Authentication

Access to the API through the Python SDK works the same way as access to the API in general. To start, follow the
instructions in the [Authentication](/authentication.md) section of the main API documentation.

To keep your API token secure, do not put your token directly in your code and applications.

Instead, put the token in a `.env` file at the top of your project directory. Then use `python-dotenv` to load the
token into your environment:

```prompt
my-project-folder
├─── .env
└─── ... (other stuff)
```

Create this `.env` file (note the leading dot) in the top level of your working directory. Write your token in the
file as follows:

```env
BAV_API_TOKEN = "your_token_here"
```

To use this file, install the [`python-dotenv`](https://github.com/theskumar/python-dotenv)
package:

```prompt
pip install python-dotenv
```

Then, paste this code at the top of your Python files or Jupyter Notebooks:

```py
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from `.env` into the system's environment
TOKEN = os.environ["BAV_API_TOKEN"]  # Assign our "BAV_API_TOKEN" environment variable to `TOKEN`
```

You can then use `TOKEN` in your API requests:

```py
bavapi.brands(TOKEN, name="Swatch")
```
