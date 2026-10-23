---
slug: health-check-and-acp-updates
title: Health check without a token, and Agency Change Predictor updates
authors: erikbernskiold
---

A couple of smaller improvements to the API.

<!-- truncate -->

## Health check without a token

The [health check](/docs/2.x/health-check) endpoint at `/api/v2/health` no longer needs an API token. That means you
can tell the difference between the API being down and your token having expired, and uptime monitors no longer need
credentials.

## Agency Change Predictor

The [Agency Change Predictor](/docs/2.x/brand-data/agency-change-predictor) now works like the other brandscape
model endpoints. It accepts arrays of IDs or names, honours study types and years, returns the standard `meta` and
`data` envelope, and includes each brand's classification. The comma-separated format still works, so existing
integrations keep running.
