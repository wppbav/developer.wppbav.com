# Rate Limiting

The API has a rate limit of 500 requests per minute for each user. This means that the rate limit applies to all of
your personal access tokens together. For requests without authentication, for example to the
[health check](health-check.md), the rate limit applies to each IP address.

:::note
If you send several requests each second, the security suite in front of the API can block you before you reach the rate limit. This occurs especially when you run the requests on public clouds. If you have this problem, decrease the number of requests that you send. If the resulting number of requests each second is too low for your use case, contact us.
:::

Each API response contains headers that tell you the rate limit and how many requests you have left.
The `X-RateLimit-Limit` header gives the current rate limit. The `X-RateLimit-Remaining` header gives the number of
requests that are left in the current minute.

If you reach the limit, the API returns a `429 - Too Many Requests` error with two more headers.
The `X-RateLimit-Reset` header gives a timestamp of when the rate limit resets. The `Retry-After` header gives the
number of seconds until you can retry.
