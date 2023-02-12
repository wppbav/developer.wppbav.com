
# Errors

The Fount's API uses standard HTTP response codes to indicate success or failure of an API request.

In general codes in the `200` range indicate success. Codes in the `400` range indicate some sort of error in the
information provided. Codes in the `500` range indicate errors with The Fount's servers and systems.

Along with the response code a human readable `error` attribute is generally sent explaining what went wrong.

## Response Codes

| Code                                       | Description                                                                                          |
|--------------------------------------------|------------------------------------------------------------------------------------------------------|
| `200` - OK                                 | Everything works as expected.                                                                        |
| `400` - Bad Request                        | The request could not be handled, often due to a missing required parameter or badly formatted data. |
| `401` - Unauthorized                       | No valid API token provided or the API token used does not have the required scopes.                 |
| `403` - Forbidden                          | The user does not have permission to perform the requested action.                                   |
| `404` - Not Found                          | The requested resource doesn't exist.                                                                |
| `500`, `502`, `503`, `504` - Server Errors | These are rare errors when something's wrong on The Fount's end.                                     |

## Response

```json
{
  "data": {
    "error": "Human readable error message."
  }
}
```
