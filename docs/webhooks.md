import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webhooks

Webhooks allow you to receive HTTP push notifications for data changes in BAV. This allows you to build richer
integrations on top of BAV. You could, for example, use it to react in realtime to new data being available or make
audiences seamlessly available in your own systems.

Our webhooks belong to the global platform. You can configure webhooks provide events based on all users and operating
companies or specific users and/or operating companies. For example, you may only want to listen to new audiences
created by users within GroupM.

The webhooks come in two categories "data change webhooks" and other events. The data change webhooks are triggered
when data changes in BAV. The other events are triggered when other events occur in BAV.

The data change webhooks are currently supported for the following objects:

- `Audiences`
- `Brands`
- `Brand Metrics`
- `Collections`
- `Studies`

The other events are currently supported for the following events:

- `Audience Export` - [Documentation](#)

## How does a webhook work?

A webhook is simple a HTTP POST request to a URL you specify. The request is automatically triggered by BAV when data
updates or the event occurs. The request contains a [JSON payload](#the-webhook-payload) with the data that has changed
or the event that has occurred.

To receive data from the webhook all you need is a simple HTTP endpoint that:

- Is available on a publicly accessible HTTPS, non-localhost URL.
- Responds with a `HTTP 200` status code to the Webhook POST request.

If your endpoint does not respond with a `HTTP 200` status code the request will be retried a few times. We use an
exponential backoff delay between retried. This means that for each retry the delay between retries will be longer. If
your endpoint continues to fail to respond it will be automatically disabled. You'll receive a notification when this
occurs. It must then be manually re-enabled when the issue has been fixed.

## Getting started

Implementing webhooks is simpler than you might think. In summary, you'll need to do the following in your application:

- Create a receiving endpoint for the webhook.
- Verify the authenticity of the webhook request by validating the signature in the request.
- Parse the JSON payload in the request to get the data that has changed or the event that has occurred and process it.
- Respond to the request with a `HTTP 200` status code.

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
| `BAV-Event`     | The resource type that triggered this event.       |
| `BAV-Signature` | The HMAC signature of the webhook payload.         |

The payload is sent with the following body:

| Field              | Description                                                                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| `action`           | The type of action that took place. This is only available for data change events and is otherwise not present. One of: `create`, `update`, `delete` |
| `data`             | The data for the object in the same format as the object's full response schema. You can find this in the documentation for each endpoint.           |
| `type`             | The type of resource that was targeted.                                                                                                              |
| `url`              | The URL to the object's page on The Fount.                                                                                                           |
| `webhookDate`      | The date of the event in ISO 8601 format.                                                                                                            |
| `webhookTimestamp` | The date of the event in Unix timestamp format.                                                                                                      |
| `webhookId`        | A UUID (v4) that uniquely identifies this payload.                                                                                                   |

For example:

```json
{
  "action": "create",
  "data": {
    "id": 1,
    "name": "BAV@WPP"
    // ... other fields
  },
  "type": "Brand",
  "url": "https://fount.wppbav.com/brands/1",
  "webhookDate": "2024-01-01T00:00:00Z",
  "webhookTimestamp": 1672531200,
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