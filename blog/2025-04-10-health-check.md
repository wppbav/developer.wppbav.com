---
slug: new-health-check-endpoint
title: New Health Check Endpoint
authors: erikbernskiold
---

For some integrations and applications it can be helpful to check if the BAV API is up and running. This can be done by
sending a GET request to the `/health` endpoint. This endpoint is designed to return a simple response indicating the
health status of the API.

The endpoint will return a 200 OK HTTP status code if the API is healthy. The response will be in JSON format and will
include a status message and a timestamp of the check.

Any status code that isn't 200 OK or a permissions issue (401 and 403) should be considered a failure. Because this
endpoint is very lightweight its response time should be very low. When connecting to the endpoint you may set a
short timeout (e.g. 1 second) to avoid long waits in case of an issue.

```json
{
  "status": "ok",
  "timestamp": "2023-10-01T12:00:00Z"
}
```

We thank Jakub at Choreograph for the suggestion to add this endpoint, and helping make BAV better.