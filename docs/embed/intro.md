---
sidebar_label: Introduction
---

# Embed Integration

BAV offers the option to integrate its analytical tools into your application via an embedded integration. It
allows you to embed any of the BAV products into your application via an iframe, with our application scaffolding
removed. It also allows you to pass and log in as the existing user from your application, making the experience
seamless for the user.

## How does it work?

On a high level, the integration flow consists of:

1. Authenticating a user against the BAV API and receiving an authentication token.
2. Calling the embeddable product in an iframe with the authentication token and the required parameters for the
   product.