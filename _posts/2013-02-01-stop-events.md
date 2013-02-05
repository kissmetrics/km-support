---
layout: post
title: How To Stop Sending Events
categories: how-tos
author: Eric Fung
summary: How to keep events from contributing to your event count.
---
To stop events from counting towards your monthly quota, you'll have to make sure to keep people from generating those events. Remember that the [Event Library][event-lib] groups events into two sets, so here's how to approach stopping both types of events.

## Events Created By You

![Delete an Event][delete-event]

These are removed by clicking "Delete Event". Unchecking "Show Event" only hides the event from your reports, but it still allows us to track the event in the background, in case you need to refer back to it again.

*Note that when you delete the event, it will get moved to Events Tracked Via API to indicate it's inactively tracking but to still let you pull historic event data.*

## Events Tracked Via API

These events can come from several sources.

* If you have API calls on your site, server, or app that generate these events, remove those lines of code.
* If you have an [integration][integration] sending us these events, refer to the documentation to prevent those from sending to us.

[event-lib]: /tools/event-library
[integration]: /integrations
[delete-event]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/stop-events/delete-event.png