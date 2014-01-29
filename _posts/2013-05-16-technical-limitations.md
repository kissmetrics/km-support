---
layout: post
title: Technical Limitations
categories: getting-started
tags: [common_dev_pitfalls]
summary: Consider these limitations as you are structuring your data and naming events and properties.
---
* Table of Contents
{:toc}
* * *

## Notes on Events

* Please keep event names under 255 characters. Commas (`,`), and colons (`:`) will be changed to spaces, so an event "`foo:bar,baz`" will be saved as "`foo bar baz`".
* Event names are not case sensitive, so `Signed Up` and `signed up` will be treated as the same event. That said, events that share the same name will be aggregated. For example, if you have 10 different landing pages on 10 different URLs, you can set up each URL to record the same `Saw landing page` event. That way, everyone who sees **any** landing page is counted as doing that event, regardless of which one they saw.
* Each KM Product has an upper limit of 65,535 unique event *names*, but you will find that our application is most manageable with under around 3,000 event names. Before you dynamically create an event for every single action, consider not creating [too many events][too-many-events].
* For each person, we save the last 1000 instances of each event. For example, we'll remember the last 1000 times that I `Viewed Homepage`.
* We keep data from 2009, going forward. We will not be able to store your imported data from 2008 or before.

## Notes on Properties

* Please keep property names under 255 characters. Commas (`,`), and colons (`:`) will be changed to spaces, so an event "`foo:bar,baz`" will be saved as "`foo bar baz`".
* Property names are not case sensitive, so `Plan Type` and `Plan type` will be treated as the same property. That said, properties that share the same name will be aggregated. For example, if the `Amount` property is set in three different areas, it will all contribute to the same `Amount` property.
* However, the values of those properties *are* case sensitive. So for a scenario like: `Plan Type:Gold` and `Plan Type:gold`, we'll see two different plan types - "Gold" and "gold".
* Each account can have up to 65,535 unique property *names*. In other words, you can track 65,535 different *types* of actions. For example, `Returning` and `URL` would be 2 of your 65,535 event names. We can still record whether millions of people receive these properties.
* The values of properties can be text or numbers (8 KB of data, in theory). We can't yet support JSON-structured values.
* You can think of the `Customer ID` or identity as a special property of each person.
* We keep data from 2009, going forward. We will not be able to store your imported data from 2008 or before.


### Property Data Types

KISSmetrics determines the type of property based on the value, not on the data type. So if you pass in a string `"123"`, KISSmetrics will treat that as the integer `123`.

We recommend not to include currency symbols or other non-numeric characters for data you want to take totals or averages of. KISSmetrics will treat `"$100"` as the string `"$100"`, not the integer `100`. Likewise with `"100 USD"`. Most likely you'll want KISSmetrics to treat such a value as a number so you'll want to pass in just the numeric values (so just `100` or `"100"`).

To force a property to be numeric, toggle it from the [Property Names page][data-type].



## Display Names vs. Original Names

No matter what the display name is it is **very important** that you use the same name within your code consistently. So if for example you later decide you want to call the property `T-Shirt Color` in your reports you should change this name from within the KISSmetrics website (by clicking the **Edit Site** button in the sidebar under your [site settings][site-settings] and clicking on the "Events" tab). However, in your code you would still use `shirt_color`. If you change your code to `tshirt_color`, KISSmetrics will think it is a new property, which is probably not what you want.

[too-many-events]: /troubleshooting/too-many-event-names
[data-type]: https://app.kissmetrics.com/product.edit
[site-settings]: https://app.kissmetrics.com/settings