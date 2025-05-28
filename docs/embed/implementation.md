# Implementation

## 1. Authenticate your user

To bypass the Okta login screen in the embed we allow you to pre-authenticate your user. There are a couple of
dependencies:

- The API key you use must have a specific set of permissions (please contact support@bernskiold.com to receive
  these)
- Your application should be using Okta.
- You can pass an email address, first name and last name of your user.

:::note Getting access approval
To use the embed integration through our auto-login flow and bypass a user connection approval screen you will need to
request approval. Please contact support@bernskiold.com.
:::

:::tip How to authenticate?
For more information about how to authenticate against the API, see the [Authentication](docs/authentication.md) section
in the API docs.
:::

To authenticate the user, make a request against the auto login endpoint:

To authenticate the user, make a request against the auto login endpoint:

```json
POST https://fount.wppbav.com/api/v1/auto-login

{
"email": "my-email@example.org"
"first_name": "Test",
"last_name": "Person",
}
```

Your request will return an access token for the user that you will need to pass to the embed iframe in the next step.

```json
{
  "access_token": "....."
}
```

:::caution Access Token Expiration
Access tokens expire every day at 00:00 UTC.
:::

## 2. Embed the iframe

With the user authenticated, you can embed the iframe. At its simplest, you only need the embed product URL and the
access token:

```html

<iframe src="https://fount.wppbav.com/embed/turbopitch/brand360?access_token=XXXXXX"></iframe> 
```

From the supported products endpoint you can find the required and optional filters that you may pre-populate the
request with.

```html

<iframe src="https://fount.wppbav.com/embed/turbopitch/brand360?access_token=XXXXXX&brands[0]=1020"></iframe> 
```

:::caution Parameters Format
The supported parameters should always be passed in an array format, for example:`?brands[0]=998&brands[1]=999`
:::