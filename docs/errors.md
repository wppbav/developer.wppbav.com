
# Errors

The Fount's API uses standard HTTP response codes to show if an API request succeeded or failed.

Usually, codes in the `200` range show success. Codes in the `400` range show an error in the information that you
sent. Codes in the `500` range show errors with The Fount's servers and systems.

With the response code, the API usually also sends a human-readable `message` attribute that tells you what went wrong.

:::note
If you get an HTML response when an error occurs, check your accept header. The Fount's API tries to send errors in a format that matches your request. Set the `Accept: application/json` header to always get a JSON response.
:::

## Response Codes

| Code                                       | Description                                                                                                                                                       |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `200` - OK                                 | Everything works as expected.                                                                                                                                     |
| `201` - Created                            | The resource was created.                                                                                                                                         |
| `202` - Accepted                           | The request was accepted, but some of the data is not ready yet. Retry the request after a short time. See for example [brandscape data](brand-data/brandscape-data.md#data-generation). |
| `204` - No Content                         | The request succeeded and there is no content to return, for example after you delete a resource.                                                                |
| `400` - Bad Request                        | The API could not handle the request, often because of a missing required parameter, an invalid filter, sort or include, or badly formatted data.               |
| `401` - Unauthorized                       | No valid API token was sent, or the API token does not have the required [scopes](authentication.md#scopes).                                                     |
| `403` - Forbidden                          | The user does not have permission to perform the requested action.                                                                                               |
| `404` - Not Found                          | The requested resource does not exist.                                                                                                                            |
| `422` - Unprocessable Content              | The request failed validation. The response includes an `errors` object with the validation errors for each parameter.                                          |
| `429` - Too Many Requests                  | You have exceeded the [rate limit](rate-limiting.md).                                                                                                            |
| `500`, `502`, `504` - Server Errors        | These are rare errors that occur when there is a problem on The Fount's side.                                                                                    |
| `503` - Service Unavailable                | The Fount, or an upstream provider that the endpoint relies on (such as the market data provider for [stock prices](company-data/stock-prices.md)), is temporarily unavailable. Retry the request later. |

## Response

```json
{
  "message": "Human readable error message."
}
```

Validation errors (`422`) also include the errors for each parameter:

```json
{
  "message": "The to field must be a date after or equal to from.",
  "errors": {
    "to": [
      "The to field must be a date after or equal to from."
    ]
  }
}
```
