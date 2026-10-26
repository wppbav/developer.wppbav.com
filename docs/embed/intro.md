---
sidebar_label: Introduction
---

# Embed Integration

BAV gives you the option to integrate its analytical tools into your application through an embedded integration. You
can embed any of the BAV products into your application in an iframe, without our application scaffolding. You can
also pass the existing user from your application and log in as that user. This gives the user a seamless experience.

## How does it work?

At a high level, the integration flow has these steps:

1. Authenticate a user against the BAV API and receive an authentication token.
2. Call the embeddable product in an iframe with the authentication token and the required parameters for the
   product.