---
layout: post
title: "Installing: How to Send Us Data"
categories: getting-started
tags: [developer_portal]
summary: There are many different ways of sending data to Kissmetrics. Review your options here.
---
* Table of Contents
{:toc}
* * *

Kissmetrics provides a huge variety of ways of bringing in event data into your account. Pick the method(s) that fit your needs!

Each method works independently; you don't necessarily need to set up two methods for the same event. For example, if you've already written PHP Library commands to record an event, you don't need to create a corresponding entry in the Event Library. Or if you're already connected your database to log all of your signups, you don't need to hook up the Ruby Library to also record your signups.

## Language-specific APIs

* [JavaScript Library][js]: write API calls in JavaScript, when you need the flexibility of JavaScript to record events that our Event Library cannot record. Requires that your site contains the Kissmetrics JS code block from your [site settings][settings].

  [Event Library][event-library]. Once the main Kissmetrics code is on your site, sign into [kissmetrics.com][settings] to create events without additional code changes. Requires that your site contains the Kissmetrics JS code block from your [site settings][settings].

  [URL API][url]. When visitors click on a tagged URL that leads to your site, an event gets recorded. Requires that your site contains the Kissmetrics JS code block from your [site settings][settings].
* [Ruby Library][ruby]
* [PHP Library][php]
* [Python Library][python]
* [Objective-C API][obj-c]

If your language is not listed here...

* [API Specifications][specs]. Make HTTP calls against our tracking servers to record events. All of our APIs are built around these specifications.

  [Other 3rd-party APIs][other]. Our customers have shared their own unofficial libraries for languages not listed here. They are built using the specifications.

  [Beacon API][beacon]. Embed images in your email campaigns to record email impressions. The beacons are constructed using our API specifications.


## Integrations with Existing Data

We are continuously developing integrations to make it easier to include data from all the customer-centric platforms you use. Please go to our [Integrations Section][integrations] to find any you're currently using!

## Tracking Offline Events

Please refer to this guide for [how to track events that happen offline][offline], for example, if part of your sales, upgrade, or purchase process is handled manually.

[event-library]: /tools/event-library
[js]: /apis/javascript
[ruby]: /apis/ruby
[php]: /apis/php
[python]: /apis/python
[obj-c]: /apis/objective-c
[url]: /apis/url
[beacon]: /apis/beacon
[other]: /apis/other
[specs]: /apis/specifications

[integrations]: /integrations

[settings]: https://app.kissmetrics.com/settings
[offline]: /how-tos/tracking-offline-events
