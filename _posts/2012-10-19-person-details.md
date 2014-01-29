---
layout: post
title: Person Details
categories: tools
summary: KISSmetrics is unique because it tracks activity down to the person level. Our Person Details pages help summarize each person's activity.
---
* Table of Contents
{:toc}
* * *

KISSmetrics is unique because it tracks activity down to the person level. Our Person Details pages help summarize each person's activity.

## Individual Metrics

Display up to 3 different metrics about this user. (These are different from the metrics you have set up in the [Metrics Dashboard][metrics].) These metrics depend on certain events and properties, some of which we provide in our JavaScript library, but others which depend on your implementation. So if you're recording the right data, you can review your [site's mappings][mapping] to make sure we use the data you give us.

Here's the list of the metrics, and which mapped events and properties they require:

* Last Seen (`Visited Site` event)
* Average Time Between Visits (`Visited Site` event)
* Total Visits (`Visited Site` event)
* Customer Since (`Signed Up` event)
* Average Time Between Purchases (`Purchased` event)
* Number of Purchases (`Revenue` property - how often it is set)
* Largest Purchase Amount (`Revenue` property)
* Total Revenue (`Revenue` property)
* Average Purchase Amount (`Revenue` property)


## Acquisition Metrics

Similar to the Individual Metrics, we'll list some data about how this person first came to your site. Again, please review your [site's mappings][mapping] to make sure you have the data we're looking for:

* First Referrer (`Referrer` property)
* First Search Term (`Search Terms` property)
* Visits to Signup (`Visited Site` and `Signed Up` events)
* First Visit to Signup (`Visited Site` and `Signed Up` events)
* Signup to Upgrade (`Signed Up` and `Upgraded` events)

## Activity Calendar

In the main area of Person Details, we provide a calendar of when each particular user was active. Switch between week and month views, and narrow in on what a person did within any particular day. That way, you can "play back" what a person did on that day, as if you were rewatching their activity in [KISSmetrics Live][live].

[mapping]: https://app.kissmetrics.com/mapping
[metrics]: https://app.kissmetrics.com/metrics
[live]: /tools/live