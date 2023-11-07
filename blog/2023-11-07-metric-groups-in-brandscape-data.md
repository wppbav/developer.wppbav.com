---
slug: metric-groups-in-brandscape-data
title: New filter on Brandscape Data - Metric Groups
authors: erikbernskiold
---

We strive to make working with the core, raw dataset in
the Brandscape Data endpoint as easy as possible. To reduce the
complexity in querying the dataset, we have added a new Metric Groups filter.

The filter works the same as the existing metrics filter, but customizes the response to include all the metrics in a
given group instead of you having to specify each metric individually.

For example, if you want to retrieve all the metrics in the "Imagery" group, you can use the following request:

```http request
GET /api/v2/brandscape-data?metric_group_keys=imagery
```

You can also specify multiple groups by separating them with a comma:

```http request
GET /api/v2/brandscape-data?metric_group_keys=imagery,pillars
```

For a full list of the available groups you can refer to the UI in The Fount or query
the Metric Groups endpoint.