---
displayed_sidebar: apiSidebar
---
# Rate Limiting

The API has a rate limit of 500 requests per minute based on the user. This means that the rate limit applies to all of
your personal access tokens collectively.

Each API response will return headers informing you of the rate limit and how many requests you have left.
The `X-RateLimit-Limit` header will specify the current rate limit and `X-RateLimit-Remaining` will give you how many
requests are left in the current minute.

If you reach the limit, a `429 - Too Many Requests` error will be returned along with two additional headers.
The `X-RateLimit-Reset` header will give you a timestamp of when the rate limit will be reset and the `Retry-After`
header will give you how many seconds are left until you may retry again.
