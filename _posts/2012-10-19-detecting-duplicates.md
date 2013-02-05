---
layout: post
title: Detecting Duplicates
categories: troubleshooting
author: Eric Fung
summary: KISSmetrics detects and ignores duplicate events and properties.
---
## Duplicate Events

We ignore a KISSmetrics event if the two requests match along three parameters (according to our [API specifications][specs]):

1. Identity (`_p` parameter)
2. Name of the event (`_n` parameter)
3. Timestamp of the event (`_t` parameter)

In other words, if we see the *same* person doing the *same* event at the exact same *second*, then we ignore any duplicates and count only one instance of that event.

## Duplicate Properties

We handle KISSmetrics properties similarly, if the two (or more) requests match along three parameters (according to our [API specifications][specs]):

1. Identity (`_p` parameter)
2. Name of the property (`[property name]` parameter)
3. Timestamp of the event (`_t` parameter)

In other words, if we see the *same* person setting the *same* property (with *any value*) at the exact same *second*, then we only set one of the values for that particular property. Note that it doesn't matter if the values to the single property are different.

<!--

### Exception: Beacon API

Nearly all of our APIs already include the timestamp (`_t` parameter) in each request to our tracking server. However, our Beacon API generally *does not*, because you won't know the time each person sees the Beacon. That's fine - we can use the time that the tracking server got the event.

However, ***when it's up to our tracking servers to determine the time, we may ignore duplicate requests when they come within 5 minutes of each other.***

As an example, suppose you have a Beacon in a marketing email, to trigger an event for "Viewed Email".

* I open the email, initially triggering the "Viewed Email" event. 
* I close the email right away, but open it again in 3 minutes. I don't trigger any events because I did the same event twice within 5 minutes.
* I close the email again, but check it again an hour later. I trigger "Viewed Email" for the second time.

To reiterate: ***when it's up to our tracking servers to determine the time***, we ignore duplicate requests when they come within 5 minutes of each other. This usually happens only with the Beacon API, because our other APIs do specify the timestamp.

*Technical notes: If you send the exact same request to the same tracking server (which is not guaranteed since we have many servers and load balance between them) the server may respond with an HTTP 304 response instead of an HTTP 200 response. The event is actually still logged, but will be ignored (since the HTTP status is 304). This only happens if the client (such as a browser) sends an If-Modified header and the same request hits the same server within 5 minutes. These 304 requests are hidden in Live and our other reports.*

-->

### Notes

Duplicates can come up when...

* If a customer's browser makes multiple attempts at sending an event.
* When a server-side API retries attempts to send data to our tracking data.
* Retrying the import of a `.csv` file of data

The duplicates are excluded during reporting. If you are using our [Raw Data Export][export], you may find duplicates among your logs.

[specs]: /apis/specifications
[beacon]: /apis/beacon
[export]: /apis/data