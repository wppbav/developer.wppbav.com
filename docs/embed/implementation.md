# Implementation

## 1. Authenticate your user

To bypass the Okta login screen in the embed, you can pre-authenticate your user. There are some dependencies:

- The API key that you use must have a specific set of permissions. Contact support@bernskiold.com to get these
  permissions.
- Your application must use Okta.
- You can pass an email address, first name and last name of your user.

:::note Getting access approval
To use the embed integration through our auto-login flow and bypass a user connection approval screen, you must
request approval. Contact support@bernskiold.com.
:::

:::tip How to authenticate?
For more information about how to authenticate against the API, see the [Authentication](docs/authentication.md) section
in the API docs.
:::

To authenticate the user, make a request against the auto login endpoint:

```json
POST https://fount.wppbav.com/api/v1/auto-login

{
"email": "my-email@example.org"
"first_name": "Test",
"last_name": "Person",
}
```

The request returns an access token for the user. Pass this token to the embed iframe in the next step.

```json
{
  "access_token": "....."
}
```

:::caution Access Token Expiration
Access tokens expire every day at 00:00 UTC.
:::

## 2. Embed the iframe

After you authenticate the user, you can embed the iframe. In the simplest case, you need only the embed product URL
and the access token:

```html

<iframe src="https://fount.wppbav.com/embed/turbopitch/brand360?access_token=XXXXXX"></iframe> 
```

The supported products endpoint gives the required and optional filters that you can pre-populate the request with.

```html

<iframe src="https://fount.wppbav.com/embed/turbopitch/brand360?access_token=XXXXXX&brands[0]=1020"></iframe> 
```

:::caution Parameters Format
Always pass the supported parameters in an array format, for example:`?brands[0]=998&brands[1]=999`
:::