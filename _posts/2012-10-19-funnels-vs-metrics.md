---
layout: post
title: Conversion Calculation in Funnels vs. Metrics
categories: tools
summary: Explains how the method we use to calculate conversions in a metric is different from the one we use to calculate conversions in a funnel.
---
* Table of Contents
{:toc}
* * *

The way conversions are calculated in funnels and in metrics differ subtly.

## Funnels:

1. Take the last time a person did each event for each day. So if a person does some event multiple times in a single day take the last time they did that event.
2. As long as the person did event 2 sometime after event 1 within the time range it counts as a conversion. If the two events happen in the same second, that's also counted as a conversion.

## Metrics:

1. Count the person as doing the first event if they did the event in the date range.
2. Find the very first time the person did the second event (up to the end date). If this is after the first time they did the first event in the date range, then it counts as a conversion.
3. If the person did convert, but prior to the metric's date range, then they are excluded from the calculation altogether.

The net effect is that if a person _ever_ did event 2 before the user did event 1 during the date range it is not a conversion.

If you check the box saying that the metric repeats, then we take the total occurrences of event #2 and divide by the total number of occurrences of event #1.

### An Example Question:

***How many non-members are coming to my site and signing up for accounts?***

This would be a conversion between two events, `Visited Site` and `Signed Up`.

* If you use a funnel report, visits from both members and anonymous/non-members are counted, potentially inflating the Visited Site number and lowering the conversion rate.
* If you use a metric, the people who have already signed up are not counted. It is calculated as:

(All the people who Visited Site in the time period AND whose first Signed Up event occurred after this Visited Site)

divided by

(The people who Visited Site in the time period, EXCLUDING people whose first ever 'Signed Up' event occurred prior to the first Visited Site inside the date range.)