---
layout: post
categories: best-practices
title: "Segmenting Types of Revenue"
tags: []
author: Eric Fung
summary: Properties are designed to help you segment people. If you want to segment your *revenue*, consider adding additional properties to structure the data for reports you want.
---
KISSmetrics properties are designed to help you segment **people**. It's great for looking at the first-touch *attribution data* that brought visitors to your site, but when you want to report on the different ways **revenue** is generated, you'll find it useful to add more properties to provide the data structure you're looking for.

One example of segmenting revenue instead of segmenting people is if you are comparing *one-time* purchases vs. *recurring* revenue. In these cases, an indvidual customer may pay you through a mix of one-time purchases and recurring billing.

## What do I need to do?

To tease apart the different revenue channels, let's create new properties, each of which is responsible for data from only one type of revenue.

Here is a JavaScript code example:

    // For Person 1 "foo"
    _kmq.push(['identify', 'foo']);
    _kmq.push(['record', 'Billed', {
      'Subscription Billing Amount':90,
      'Revenue Type':'Recurring',
      'Recurring Revenue'90}]);   // The key part
    
    // For Person 2 "bar"
    _kmq.push(['identify', 'bar']);
    _kmq.push(['record', 'Billed', {
      'Subscription Billing Amount':45,
      'Revenue Type':'One-Time',
      'One-Time Revenue':45}]);   // The key part

## What's different about this structure?

With the data isolated into predefined buckets, you can narrow in on each bucket in turn to look at your revenue in different ways:

* `Billing Amount`: use our "total over a property" metric to find **Total Revenue**, regardless of where the revenue came from.
* `Recurring Revenue`: use our "total over a property" metric to find **Total Recurring Revenue**, which excludes revenue from one-time purchases.
* `One-Time Revenue`: use our "total over a property" metric to find **Total Revenue from One-Time Purchases**, which excludes recurring revenue.
* `Revenue Type`: Segment people based on whether their first or last charge was a Recurring charge or a One-Time charge.

## Additional Notes

The properties you add can be combined with our other recommendations for [Tracking SaaS Revenue][saas-revenue].

[saas-revenue]: /best-practices/saas-revenue-essentials