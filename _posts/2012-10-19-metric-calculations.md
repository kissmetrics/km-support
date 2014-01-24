---
layout: post
title: Metric Calculations
categories: [tools, metrics]
author: Eric Fung
summary: You can create metrics based on one of these calculations.
---
* Table of Contents
{:toc}
* * *

You can create different metrics based on your existing events and properties.

## Quick Reference

Metric Calculations|Description
-------------------|-----------
[Number of **People** Who Did Event][people]|Counts each person who does an event, even if they completed this event multiple times.
[Number of **Times** Event Happened][times]|Counts each time the event was completed, regardless of the number of people involved.
[Average Number of Times Event Happened Per Person][average]|Number of times event happened / Number of people who did it.
[Conversion Rate][conversion]|Calculates the conversion rate between two events.
[Average Time Between Events][time]|The time between two **different** events happening / Number of people who do both events.
[Total Value for Property][total]|Total value of a numeric property across all people you specify.
[Average Value for Property][average-prop]| Total value of a numeric property / Either number of times property was set, or number of people with this property.

[people]: #number-of-people-who-did-event
[times]: #number-of-times-event-happened
[average]: #average-number-of-times-event-happened-per-person
[conversion]: #conversion-rate
[time]: #average-time-between-events
[total]: #total-value-for-property
[average-prop]: #average-value-for-property

## Examples


### Number of People Who Did Event
Count each person a maximum of 1 time, even if they completed this event multiple times.

*Example: "How many* **people** *Visited Site in the last 7 days?"*


### Number of Times Event Happened
Counts each time the event was completed, regardless of the number of people involved.

*Example: "How many* **times** *did people click through an Ad Campaign Hit in the last month?"*


### Average Number of Times Event Happened Per Person
Takes the number of times an event was done and divides by the number of people who completed the event.

*Example:* **On average, how many times** *did each person Purchase in the last 90 days?*


### Conversion Rate
Calculates the conversion rate between two events. For someone to be counted, they need to have done **both events in order**.

* **This conversion happens once.** We look for all the people who have done Event #1 in the date range of the metric. Then we calculate, of those people, how many of them performed Event #2 *for the first time ever* after doing Event #1. (If a person first does Event #2 before #1, then they are excluded completely.)

*Example:* **At what rate** *did people Sign Up after Visiting the Site during the past week?*

* **This conversion repeats.**  We take the total occurrences of Event #2 and divide by the total number of occurrences of Event #1.

*Example:* **At what rate** *did people Purchase after each Visit to the Site during the past week?*

_The conversion rate's calculation method excludes the people who have already converted. You can refer to our calculation method on the [Funnels vs. Metrics][fvm] page._


### Average Time Between Events
Adds up the time elapsed between the completion of two different events, divided by the number of people who completed both events. For someone to be counted, they need to have done **both events in order**.

* **Use first occurrence**: use the first time that a person ever did the First event. This might fall outside of the date range of your metric. This option is useful for one-off events, like Signups.

*Example:* **On average, how much time passes** *between a person's* **first** *Visit to when they finally Sign Up?*

* **Only look at time frame of the calculation**: look for the times that people did both events in the date range of your metric. This option is useful for repeatable events, like Purchases.

*Example:* **On average, how much time passes** *between a person Viewing a Potential Purchase to finally Purchasing* (**focusing only on this week's data**)*?*


### Total Value for Property
Calculates total value of a numeric property across all people who meet a specific property criteria.

*Example: "What is my* **Total** *Revenue from the last month?"*


### Average Value for Property
Calculates total value of a numeric property, and then divides by an amount dictated by the other options:

#### Calculation Method

* **Total Average Per Person**: sums up all the values of this property, and then divides by the number of ***people*** (see `Population` below).

*Example: "What is the* **Average** *Revenue* **of each person** *from the last 90 days?"*

* **Average Per Incident**: sums up all the values of this property, and then divides by the number of ***values*** (ie. the number of times the property was set).

*Example: "What is the* **Average value** *of each Purchase Amount from the last 90 days?"*

#### Population

* **Only people who have done a certain event** (optional): you can optionally filter the population to include only people if they've done an event.

*Example: "What is the* **Average** *Revenue* **of each person who clicked through an Ad Campaign Hit** *from the last 90 days?"*

* **Only those who have the property set** (default): include only the people who have a value for this property.

*Example: "What is the* **Average** *Revenue* **of each person who has paid** *from the last 90 days?"*

* Include everyone: count every person. If they don't have a value for this property, count them as `0`.

*Example: "What is the* **Average** *Revenue* **of each person (including non-paying visitors)** *from the last 90 days?"*

[fvm]: /tools//funnels-vs-metrics
