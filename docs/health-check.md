# Health Check

For some integrations and applications, it is helpful to check if the BAV API is available. To do this, send a GET
request to the health endpoint. This endpoint returns a short response that shows the health status of the API.

## Endpoint

```http request
GET /api/v2/health
```

This endpoint does not require authentication, so you do not need to send an API token. The
[rate limit](rate-limiting.md) also applies to this endpoint.

## Response

If the API is healthy, the endpoint returns a 200 OK HTTP status code. The response is in JSON format and contains a
status message and a timestamp of the check. The timestamp is in UTC, in the `YYYY-MM-DD HH:MM:SS` format.

Consider all status codes other than 200 OK as a failure. This endpoint is lightweight, so we expect its response time
to be low. When you connect to the endpoint, you can set a short timeout (for example 1 second). This prevents long
waits if there is a problem.

```json
{
  "status": "ok",
  "timestamp": "2026-10-01 12:00:00"
}
```
