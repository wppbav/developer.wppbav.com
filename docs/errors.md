
# Errors

The Fount's API uses standard HTTP response codes to indicate success or failure of an API request.

In general codes in the `200` range indicate success. Codes in the `400` range indicate some sort of error in the
information provided. Codes in the `500` range indicate errors with The Fount's servers and systems.

Along with the response code a human readable `message` attribute is generally sent explaining what went wrong.

:::note
If you receive an HTML response when an error occurs check your accept header. The Fount's API will attempt to respond to errors based on your request. By setting the `Accept: application/json` header you can ensure that you always get a JSON response in all instances.
:::

## Response Codes

| Code                                       | Description                                                                                                                                                       |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `200` - OK                                 | Everything works as expected.                                                                                                                                     |
| `201` - Created                            | The resource was created.                                                                                                                                         |
| `202` - Accepted                           | The request was accepted, but some of the data is still being generated. Retry the request shortly. See for example [brandscape data](brand-data/brandscape-data.md#data-generation). |
| `204` - No Content                         | The request succeeded and there is no content to return, for example after deleting a resource.                                                                  |
| `400` - Bad Request                        | The request could not be handled, often due to a missing required parameter, an invalid filter, sort or include, or badly formatted data.                       |
| `401` - Unauthorized                       | No valid API token provided or the API token used does not have the required [scopes](authentication.md#scopes).                                                 |
| `403` - Forbidden                          | The user does not have permission to perform the requested action.                                                                                               |
| `404` - Not Found                          | The requested resource doesn't exist.                                                                                                                             |
| `422` - Unprocessable Content              | The request failed validation. The response includes an `errors` object with the validation errors for each parameter.                                          |
| `429` - Too Many Requests                  | You have exceeded the [rate limit](rate-limiting.md).                                                                                                            |
| `500`, `502`, `504` - Server Errors        | These are rare errors when something's wrong on The Fount's end.                                                                                                 |
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
