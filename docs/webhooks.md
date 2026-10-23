import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Webhooks allow you to receive HTTP push notifications for data changes in BAV. This allows you to build richer
integrations on top of BAV. You could, for example, use it to react in realtime to new data being available or make
audiences seamlessly available in your own systems.

Our webhooks belong to the global platform. You can configure webhooks to provide events based on all users and
operating companies or specific users and/or operating companies. For example, you may only want to listen to new
audiences created by users within GroupM. Filtering on users and operating companies applies to the audience and
collection events. Other events are always sent for all changes.

## Events

When a webhook is set up, it is subscribed to one or more events. The data change events are triggered when data is
created, updated or deleted in BAV:

| Event                        | `type` in the payload | Description                                                                           |
|------------------------------|-----------------------|---------------------------------------------------------------------------------------|
| `audiences_data_change`      | `Audience`            | An [audience](audiences/audiences.md) was created, updated or deleted.                |
| `brands_data_change`         | `Brand`               | A [brand](brands/brands.md) was created, updated or deleted.                          |
| `brand_metrics_data_change`  | `BrandMetric`         | A [brand metric](metrics/metrics.md) was created, updated or deleted.                 |
| `collections_data_change`    | `Collection`          | A [collection](brands/collections.md) was created, updated or deleted.                |
| `studies_data_change`        | `Study`               | A [study](studies/studies.md) was created, updated or deleted.                        |

The following events can also be added to a webhook, but are not currently being sent:

| Event                                 | Description                                    |
|---------------------------------------|------------------------------------------------|
| `audience_origin_metrics_data_change` | An Audience Origin metric was changed.         |
| `tools_data_change`                   | A tool was changed.                            |
| `tool_queries_data_change`            | A tool query was changed.                      |
| `audience_export_italy_creator`       | An audience was exported to Italy Creator.     |

## How does a webhook work?

A webhook is simply a HTTP POST request to a URL you specify. The request is automatically triggered by BAV when data
updates or the event occurs. The request contains a [JSON payload](#the-webhook-payload) with the data that has changed
or the event that has occurred.

To receive data from the webhook all you need is a simple HTTP endpoint that:

- Is available on a publicly accessible HTTPS, non-localhost URL with a valid SSL certificate.
- Responds with a `2xx` status code (for example `HTTP 200`) to the webhook POST request within 5 seconds.

If your endpoint does not respond with a `2xx` status code within 5 seconds, the request will be retried. Each webhook
call is attempted up to 10 times in total. We use an exponential backoff delay between retries, which means that the
delay gets longer for each retry: 10 seconds after the first attempt, then 100 seconds, 1,000 seconds (about 17
minutes), 10,000 seconds (about 2.8 hours) and then 100,000 seconds (about 28 hours) between each of the remaining
attempts.

If all attempts fail, the webhook will be automatically disabled and the webhook's contacts will receive an email
notification. It must then be manually re-enabled when the issue has been fixed.

## Getting started

Implementing webhooks is simpler than you might think. In summary, you'll need to do the following in your application:

- Create a receiving endpoint for the webhook.
- Verify the authenticity of the webhook request by validating the signature in the request.
- Parse the JSON payload in the request to get the data that has changed or the event that has occurred and process it.
- Respond to the request with a `2xx` status code (for example `HTTP 200`).

As some events are triggered by BAV it can be useful to use the sample payloads provided in the documentation to use as
test data. This will allow you to test your endpoint without having to wait for the event to occur in BAV.

## Creating the webhook on The Fount

Currently, you cannot create webhooks on The Fount yourself. You will need to reach out to us
at [support@bernskiold.com](mailto:support@bernskiold.com). We will then add the webhook to the system for
you and provide you with the secret key that you will need to verify the authenticity of the webhook requests.

You are more than welcome to reach out as you start to plan your integration and we can help you get started.

When adding a webhook we will need the following information from you:

- The URL of the endpoint that will receive the webhook.
- The events that you want to receive webhooks for. This can be all events or specific events.
- If you want to only receive events for specific users and/or operating companies.

:::tip Handle webhooks asynchronously
When you receive a webhook request, it is helpful to handle it asynchronously. This will ensure that your application
can respond to the webhook request quickly and avoid timeouts. You can use a queue to handle the webhook request and
then process it in the background.
:::

## The Webhook Payload

The webhook HTTP payload will include information that you'll need both in its HTTP headers and in its request body.

For data change events the request body will include the data that has changed in the same format as the API endpoints
for each resource.

The payload will be sent with the following headers:

```
Accept-Charset: utf-8
Content-Type: application/json
BAV-Delivery: 7efba5b3-f551-4862-ad1e-2667d09a40bb
BAV-Event: Brand
BAV-Signature: d0e1c26711234ca18e4c7c879d5c41a5221db7ea5349c07073573341378aa2b4
User-Agent: BAV-Webhook
```

The custom headers sent by BAV are:

| Name            | Description                                        |
|-----------------|----------------------------------------------------|
| `BAV-Delivery`  | A UUID (v4) that uniquely identifies this payload. |
| `BAV-Event`     | The resource type that triggered this event. This is the same as the `type` field in the body. |
| `BAV-Signature` | The HMAC signature of the webhook payload.         |

The payload is sent with the following body:

| Field              | Description                                                                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `action`           | The type of action that took place. For data change events, one of: `created`, `updated`, `deleted`.                                                 |
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

When implementing webhooks it is important to secure your endpoint to ensure that the data you receive is from BAV. We
use a HMAC signature to sign the payload with a secret key. This signature is included in the `BAV-Signature` header of
the request. You should use this signature to verify that the payload was sent by BAV.

The payload body also includes `webhookTimestamp` and `webhookDate` fields. We recommend that you use them to verify
that they are within a reasonable time frame (≈ a minute). This will help to prevent replay attacks.

To verify the webhook, calculate the signature from the request body using the webhook secret that we provide you with.
Then compare the calculated signature with the signature in the `BAV-Signature` header. We recommend using the raw
request body content for the hashing as JSON parsing may change it.

:::warning Securing the webhook secret
We strongly remind you to keep the webhook secret secure. Do not expose it in your frontend code or in any public or
private repositories. Do not hardcode it into your code. It should be considered as sensitive as a password.

If you accidentally expose the secret, or commit it to version control, please contact us immediately so that we can
reset it for you.
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

In addition to verifying the signature we recommend that you also verify the `webhookTimestamp` and `webhookDate` fields
to within approximately a minute of the current time. This will help to prevent replay attacks.