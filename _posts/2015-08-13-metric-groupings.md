---
layout: post
title: Metric Groupings
categories: tools
summary: People can be segmented in different ways within a single metric.
---
* Table of Contents
{:toc}
* * *

## Metric Detail Groupings

* **First Ever**: Will group your users according to the first property value they ever received (can be outside the date range).

* **Last Ever**: Will group your users according to the last property value they ever received (can be outside of date range). This type of grouping is used to group users according to the value they currently have.

* **First in Date Range**: Will group your users according to the first property value they received within the date range.

* **Last in Date Range**: Will group your users according to the last property value they received within the date range.

* **Breakdown Over Time**: Will group your users according to the property value they had at the time of performing the metric’s event. This is the only grouping that makes it possible for one user to be counted across multiple property values. For the metrics "Total Value for Property" and "Average Value for Property", we’ll first need to distinguish between the segmented property value and the property value we are looking to calculate.  We will refer to the segmented property value as `property value` and to the calculated value as `amount`. In this grouping, we’ll attribute the `amount` to the `property value` on the person at the time we received the `amount`.

## Example

Lets walk through an example to show the output for each type of grouping.  In our example, let's create a metric for "Total Value for Property" where our calculated property will be `revenue`. In our example, Bob will receive the following events and properties on the following dates:


***April 16***

> Visited Site
>
> > Referrer: linkedin.com

***May 2***

> Visited Site
>
> > Referrer: facebook.com

> Purchased
>
> > Revenue: 50

***May 5***

> Visited Site
>
> > Referrer: google.com
>
> Purchased
>
> > Revenue: 100

***June 3***

> Visited Site
>
> > Referrer: pinterest.com


### Examples of Segmentation Results

Here is the output for each type of grouping for the date range of May, segmented by `referrer`:

**First Ever** |
Linkedin.com | 150
|
**Last Ever** |
Pinterest.com | 150
|
**First in Date Range** |
Facebook.com | 150
|
**Last in Date Range** |
Google.com | 150
|
**Breakdown Over Time** |
Facebook.com | 50
Google.com | 100

Note: For the metrics "Conversion Rate" and "Average Time Between Event" -- to be grouped in any bucket using "Breakdown Over Time", the user must have the same value at the time of both events. Otherwise, they are excluded from calculation.
