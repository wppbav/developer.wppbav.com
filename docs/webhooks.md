import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

With webhooks, you can receive HTTP push notifications for data changes in BAV. You can use them to build richer
integrations on top of BAV. For example, you can react in real time when new data becomes available. You can also make
audiences available in your own systems automatically.

Our webhooks belong to the global platform. You can configure webhooks to send events for all users and operating
companies, or for specific users and/or operating companies. For example, you can listen only to new audiences that
users in GroupM create. The filter on users and operating companies applies to the audience and collection events. BAV
always sends the other events for all changes.

## Events

When a webhook is set up, it subscribes to one or more events. BAV triggers the data change events when data is
created, updated or deleted in BAV:

| Event                        | `type` in the payload | Description                                                                           |
|------------------------------|-----------------------|---------------------------------------------------------------------------------------|
| `audiences_data_change`      | `Audience`            | An [audience](audiences/audiences.md) was created, updated or deleted.                |
| `brands_data_change`         | `Brand`               | A [brand](brands/brands.md) was created, updated or deleted.                          |
| `brand_metrics_data_change`  | `BrandMetric`         | A [brand metric](metrics/metrics.md) was created, updated or deleted.                 |
| `collections_data_change`    | `Collection`          | A [collection](brands/collections.md) was created, updated or deleted.                |
| `studies_data_change`        | `Study`               | A [study](studies/studies.md) was created, updated or deleted.                        |

## How does a webhook work?

A webhook is an HTTP POST request to a URL that you specify. BAV triggers the request automatically when data changes
or the event occurs. The request contains a [JSON payload](#the-webhook-payload) with the data that changed or the
event that occurred.

To receive data from the webhook, you need only an HTTP endpoint that:

- Is available on a public HTTPS URL that is not localhost and has a valid SSL certificate.
- Responds with a `2xx` status code (for example `HTTP 200`) to the webhook POST request within 5 seconds.

If your endpoint does not respond with a `2xx` status code within 5 seconds, BAV retries the request. BAV tries each
webhook call up to 10 times in total. We use an exponential backoff delay between retries. This means that the delay
increases for each retry:

1. 10 seconds after the first attempt.
2. Then 100 seconds.
3. Then 1,000 seconds (about 17 minutes).
4. Then 10,000 seconds (about 2.8 hours).
5. Then 100,000 seconds (about 28 hours) between each of the remaining attempts.

If all attempts fail, BAV disables the webhook automatically and sends an email notification to the webhook's contacts.
After the problem is fixed, the webhook must be enabled again manually.

## Getting started

It is not difficult to implement webhooks. In summary, do these steps in your application:

- Create an endpoint that receives the webhook.
- Validate the signature in the request to verify that the webhook request is authentic.
- Parse the JSON payload in the request to get the data that changed or the event that occurred. Then process it.
- Respond to the request with a `2xx` status code (for example `HTTP 200`).

BAV triggers some events itself. You can use the sample payloads in the documentation as test data. Then you can test
your endpoint before the event occurs in BAV.

## Creating the webhook on The Fount

At this time, you cannot create webhooks on The Fount yourself. Contact us
at [bavsupport@wpp.com](mailto:bavsupport@wpp.com). We will then add the webhook to the system for you. We will
also give you the secret key that you need to verify that the webhook requests are authentic.

You are welcome to contact us when you start to plan your integration. We can help you with the first steps.

When we add a webhook, we need this information from you:

- The URL of the endpoint that will receive the webhook.
- The events that you want to receive webhooks for. This can be all events or specific events.
- If you want to receive events only for specific users and/or operating companies.

:::tip Handle webhooks asynchronously
When you receive a webhook request, we recommend that you handle it asynchronously. Then your application can respond
to the webhook request quickly and prevent timeouts. You can put the webhook request in a queue, and then process it in
the background.
:::

## The Webhook Payload

The webhook HTTP payload contains information that you need in its HTTP headers and in its request body.

For data change events, the request body contains the data that changed. The format is the same as the format of the
API endpoints for each resource.

BAV sends the payload with these headers:

```
Accept-Charset: utf-8
Content-Type: application/json
BAV-Delivery: 7efba5b3-f551-4862-ad1e-2667d09a40bb
BAV-Event: Brand
BAV-Signature: d0e1c26711234ca18e4c7c879d5c41a5221db7ea5349c07073573341378aa2b4
User-Agent: BAV-Webhook
```

The custom headers that BAV sends are:

| Name            | Description                                        |
|-----------------|----------------------------------------------------|
| `BAV-Delivery`  | A UUID (v4) that uniquely identifies this payload. |
| `BAV-Event`     | The resource type that triggered this event. This is the same as the `type` field in the body. |
| `BAV-Signature` | The HMAC signature of the webhook payload.         |

BAV sends the payload with this body:

| Field              | Description                                                                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `action`           | The type of action that occurred. For data change events, one of: `created`, `updated`, `deleted`.                                                   |
| `data`             | The data for the object in the same format as the object's full response schema. You can find this in the documentation for each endpoint.           |
| `type`             | The type of resource that was targeted, for example `Brand`. See [events](#events).                                                                  |
| `url`              | The URL to the object's page on The Fount, when it has one. Otherwise `null`.                                                                        |
| `webhookDate`      | The date of the event in ISO 8601 format.                                                                                                            |
| `webhookTimestamp` | The date of the event in Unix timestamp format.                                                                                                      |
| `webhookId`        | A UUID (v4) that uniquely identifies this payload.                                                                                                   |

For example:

```json
{
  "action": "created",
  "data": {
    "id": 1,
    "name": "BAV@WPP"
    // ... other fields
  },
  "type": "Brand",
  "url": "https://fount.wppbav.com/brands/1",
  "webhookDate": "2024-01-01T00:00:00+00:00",
  "webhookTimestamp": 1704067200,
  "webhookId": "7efba5b3-f551-4862-ad1e-2667d09a40bb"
}
```

## Security and validation

When you implement webhooks, it is important to secure your endpoint. Make sure that the data that you receive is from
BAV. We use an HMAC signature to sign the payload with a secret key. This signature is in the `BAV-Signature` header of
the request. Use this signature to verify that BAV sent the payload.

The payload body also contains the `webhookTimestamp` and `webhookDate` fields. We recommend that you use them to
verify that their values are within a reasonable time frame (≈ a minute). This helps to prevent replay attacks.

To verify the webhook, calculate the signature from the request body with the webhook secret that we give you. Then
compare the calculated signature with the signature in the `BAV-Signature` header. We recommend that you use the raw
request body content for the hash, because JSON parsing can change it.

:::warning Protect the webhook secret
Always keep the webhook secret secure. Do not expose it in your frontend code or in public or private repositories. Do
not hardcode it into your code. The secret is as sensitive as a password.

If you accidentally expose the secret, or commit it to version control, contact us immediately. We will then reset it
for you.
:::

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>

```javascript
const signature = crypto.createHmac("sha256", WEBHOOK_SECRET).update(rawBody).digest("hex");

if (signature !== request.headers['bav-signature']) {
    throw "Invalid signature"
}
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
$rawBody = '--- the raw request body ---';
$receivedSignature = '--- the signature from the BAV-Signature header ---';
$expectedSignature = hash_hmac('sha256', $rawBody, WEBHOOK_SECRET);

if ($receivedSignature !== $expectedSignature) {
    throw new Exception('Invalid signature');
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import hmac
import hashlib

signature = hmac.new(WEBHOOK_SECRET.encode('utf-8'), raw_body, hashlib.sha256).hexdigest()

if signature != request.headers['BAV-Signature']:
    raise Exception('Invalid signature')
```

  </TabItem>
  <TabItem value="r" label="R">

```r
library(openssl)

signature <- hmac("sha256", rawBody, key = WEBHOOK_SECRET, serialize = FALSE)

if (signature != request$headers$`BAV-Signature`) {
    stop("Invalid signature")
}
```

  </TabItem>
</Tabs>

We recommend that you also verify the `webhookTimestamp` and `webhookDate` fields, not only the signature. Make sure
that their values are within about one minute of the current time. This helps to prevent replay attacks.