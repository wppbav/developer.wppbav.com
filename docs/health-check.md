# Health Check

For some integrations and applications it can be helpful to check if the BAV API is up and running. This can be done by
sending a GET request to the health endpoint. This endpoint is designed to return a simple response indicating the
health status of the API.

## Endpoint

```http request
GET /api/v2/health
```

This endpoint does not require authentication, so you don't need to send an API token. It is still subject to
the [rate limit](rate-limiting.md).

## Response

The endpoint will return a 200 OK HTTP status code if the API is healthy. The response will be in JSON format and will
include a status message and a timestamp of the check. The timestamp is in UTC, in the `YYYY-MM-DD HH:MM:SS` format.

Any status code that isn't 200 OK should be considered a failure. Because this endpoint is very lightweight its response
time should be very low. When connecting to the endpoint you may set a short timeout (e.g. 1 second) to avoid long waits
in case of an issue.

```json
{
  "status": "ok",
  "timestamp": "2026-10-01 12:00:00"
}
```
