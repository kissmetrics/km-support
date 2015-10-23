---
layout: post
title: Technical Notes on Events and Properties
categories: getting-started
tags: [common_dev_pitfalls]
summary: Have you ever wondered if Events are case sensitive? Or how many unique Property names you can have? This document has more information about the technical limitations related to how Events and Properties.
---
* Table of Contents
{:toc}
* * *

## Events

* Keep event names under 255 characters. 

* Commas (,), and colons (:) will be changed to spaces, so an event “foo:bar,baz” will be saved as “foo bar baz”.

* Event names are **not** case sensitive. For example “Signed Up” and “signed up” will be treated as the same event. 

* Events that share the same name will be aggregated.

* Each KM product has an upper limit of 65,535 unique event names. We recommend starting with just a few key events. You can find out more information about structuring your events in this support document.

* For each person, we save the last 1000 instances of each event. For example, we’ll remember the last 1000 times that “steve@apple.com” did the event “Viewed Homepage”.

* We keep data from 2009, going forward. We will not be able to store your imported data from 2008 or before.


## Properties

* Keep property names under 255 characters. 

* Commas (,), and colons (:) will be changed to spaces, so an event “foo:bar,baz” will be saved as “foo bar baz”.

* Property names are **not** case sensitive. For example “Plan Type” and “plan type” will be treated as the same property. 

*Properties that share the same name will be aggregated. An example of this is, if the “Billed Amount” is set in three different areas, it will all contribute to the same “Billed Amount”.

* The value of the property **is** case sensitive. Example, if you set “Plan Type” : “Gold” and “Plan Type” : “gold”, you’ll see both values, “Gold” and “gold” for the property “Plan Type”.

* Each Kissmetrics product can have up to 65,535 unique property names. 

* The values of properties can be text or numbers (8 KB of data, in theory). We do not support JSON-structured values.

* We keep data from 2009, going forward. We will not be able to store your imported data from 2008 or before.

* The type of property is determined by the value. If you pass in a string "123", Kissmetrics will treat that as the integer 123.

* Currency should be passed to Kissmetrics without a currency symbol.

