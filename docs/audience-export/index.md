---
sidebar_label: Overview
---

# Audience Export Integration

[Audiences](../core-resources/audiences.md) are the core of all our datasets. They are used to define the group of
respondents we want to analyze data for. It can be useful to make audiences created within The Fount available in
your own systems. This is what the Audience Export Integration is designed for.

## How it works

All audiences are available through the [Audiences API](../core-resources/audiences.md) and you can listen to data
change
events for updated audiences through [Webhooks](../webhooks.md). However, doing so requires you to always maintain the
full list of audiences in your system. This is where the Audience Export Integration comes in.

With the Audience Export Integration your application is added as an export destination for an audience within The
Fount. At any point in time users can export the audience, selecting your application as the destination. This triggers
a webhook event to your application with the audience data.

You can then use the data to update your application with the latest audience data, letting the user access the audience
right away in your application.

## Export formats

We offer four formats for the audience export:

1. **Audience Definition**. This is the full audience definition with segments and metrics and their logic. This is
   useful if you want to recreate the audience in your own system. This is the same format as is available through
   the [Audiences API](../core-resources/audiences.md).
2. **[BAV Respondent IDs](./audience-export/bav-respondent-ids)**. A list of BAV Respondent IDs that are part of the
   audience. This format requires specific approval from BAV.
3. **[Audience Origin Respondent IDs](./audience-export/ao-respondent-ids)**. A list of AO IDs for each respondent that
   matches the audience definition. This format requires specific approval from Choreograph.
4. **[Audience Origin Respondent Progressive Numbers](./audience-export/ao-progressive-numbers)**. A list of progressive
   number IDs for each respondent that matches the audience definition. These numbers are primarily used within the
   Italy Audience Creator. This format requires specific approval from Choreograph.

Which format you choose depends on your use case and the data you need, as well as which studies you are working with.
The first format is always available for all datasets. The second format is available for all BAV studies. Formats 3 and
4 are available for all Audience Origin studies.

In addition, formats 2, 3 and 4 are available for all Honeycomb studies. These are studies where BAV and Audience Origin
data have been fused together.

## Access control

As part of the integration you may control which users are allowed to export audiences to your application. This can
either be done by allowing on an operating company level, or on a user-by-user basis. We can also provide you with
a method of programmatically sharing with us a list of users are allowed to export audiences to your application based
on their e-mail address.

## Getting started

To get started with the Audience Export Integration you'll want to become familiar with:

- The different type of supported formats for the audience export.
- The [Audiences API](../core-resources/audiences.md) and how to use it to create and manage audiences.
- The [Webhooks](../webhooks.md) and how to listen to audience export events.

As you start thinking about how to use the Audience Export Integration,
please [reach out to us](mailto:support@bernskioldmedia.com) so that we can start planning the integration activities
that need to happen on The Fount side to make your application visible as an export destination.

We want to make sure that the integration is as smooth as possible for you and your users.