---
layout: post
categories: tools
title: "Path Report"
tags: []
summary: The Path Report can analyze and optimize any part of the customer journey you want. Simply pick the conversion point you care about and we'll tell you which paths lead up to it.
---
* Table of Contents
{:toc}
* * *

The KISSmetrics Path Report allows you to analyze the most common sequence of events or property values that eventually lead to a conversion. This lets you uncover what your customers do so that you can see exactly what series of events lead to more conversions, higher conversion rates, or shorter time to convert.


This report is best used for:

  * discovering the best series of events that people do that result in a high conversion rate
  * revealing the best marketing channels for acquiring leads and the best marketing channels for converting leads to customers
  * seeing how long customers take to convert based on what they do
  * analyzing the best events in each customer lifecycle that move them towards conversion


## Report Configuration

![Path Config Default][path-config1]

The Path Report lets you analyze:

  * The first 5 events that occur in order that lead to a conversion event
  * The last 5 events that occur in order that lead to a conversion event
  * The first 5 values of a property in order that lead to a conversion event
  * The last 5 values of a property in order that lead to a conversion event

![Path Config First or Last][path-config2]
![Path Config Event or Property][path-config3]
![Path Config Property Value][path-config4]


The Path Report lets you define:

  * An event that starts the sequence or path you want to analyze. This helps you narrow down the customer lifecycle that you want to optimize.
  * A conversion event that the starting event eventually leads to.
  * A date range for the conversion event.


Sample configurations for analyzing lead generation and marketing channel effectiveness could be:

  * Show me the first 5 events starting with Visited Site that lead to Signed Up within the last 30 days.
  * Show me the last 5 Channels starting with Visited Site that lead to Signed Up within the last 30 days.


Sample configurations for analyzing opportunities to closing customers could be:

  * Show me the first 5 events starting with Signed Up that lead to Subscription Billed.
  * Show me the last 5 events starting with Signed Up that lead to Subscription Billed.


Sample configurations for analyzing e-commerce purchase behaviors could be:

  * Show me the first 5 events starting with Visited Site that lead to Add To Cart.
  * Show me the first 5 Channels starting with Visited Site that lead to Add To Cart.
  * Show me the first or last 5 events starting with Purchased that lead to Purchased. This shows you the behavior of how people re-purchase.


## Path Report Results

### Path Summary

![Path Summary][path-summary]

The Path Report will show you up to 50 paths that people have done given your report configuration. A summary area will show you high-level information about:


  * The number of people who were found from your starting event to your conversion event
  * The number of conversions from all paths
  * The conversion rate across all paths
  * How long it took people to convert from starting event to conversion event (using a weighted average)

### Sorting the Path Report

![Path Sorting][path-sort]

Clicking a tab in the summary area lets you sort the Path Report by people, number of conversions, conversion rate, or time to convert. Use these tabs to sort your results based on what fits your marketing strategy. Some businesses care about number of conversions more than conversion rates. Some businesses optimize for shorter conversion times if they are meeting goals or quotas.

### Individual Path Performance

![Path Individual Performance][path-individual]

Each path will contain a series of numbers followed by an event name or property value. These numbers tell you the order or sequence that the event or property value happened.

### Repeat/Consecutive Events

If an event/property value happens consecutive times before another unique event, we will show this by adding a 2X, 3X, 4X to the event to show you many times the event happened consecutively.

![Path Repeat][path-repeat]

If two or more events/property values happen at the same exact time, the Path Report will show the event that occurs more frequently (thus showing the most common paths that people take towards conversion).

### Path Length

![Path Length][path-length]

If a path is more than 5 events/properties long, the Path Report will show a  "+ X more events”  item which will represent the median number of events/properties happening after the first 5 events/properties or preceding the last 5 events/properties. This gives you an idea of how many actions people take before they convert. This median number is rounded down to the nearest whole number in the event that a median has a 0.5 value. Note: In an export of the Path Report, you will still see 0.5 values in the raw data.

### Time to Convert

The time convert uses a median calculation from the starting event to the conversion event. This lets you view the overall time to convert in the summary as a median of how long people took the convery and a specific time to convert for any individual path. This is important if you are trying to optimize how fast people convert on your site or app.

The Overall Time to Convert metric in the summary area uses a weighted average to calculate the overall time to convert across all paths. This means that if you have one path with 1,000 conversions and a median time of 1 day, and another path with 10 conversions and a median time of 1 hour, the "overall time to convert" would be closer to a day.

## What happens when multiple conversions happen within the date range?

When multiple conversions (such as Purchases) happen within the date range you select, the Path Report will show the paths for the first conversion that happens in the date range. We are planning to improve this functionality to allow you select between the first or last conversion within the date range.


## Why do I get different numbers when I run a first 5 or last 5 report for the same starting and conversion events?

If you are doing a last 5 event/property report, a person can captured for more than one path because it is likely that people can have common ways of converting (i.e. people all have to go through the same checkout flow in E-Commerce or the same way to enter in your payment information for SaaS). In the first 5 event/property, people can be part of likely one path because people usually do a unique sequence of events when they first arrive on your site or app. Because of the differences of people’s behaviors, you’ll see different numbers for each configuration.

[path-summary]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportSummary.png
[path-config1]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportConfiguration1.png
[path-config2]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportConfiguration2.png
[path-config3]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportConfiguration3.png
[path-config4]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportConfiguration4.png
[path-individual]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportIndividualPath.png
[path-length]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportPlusMore.png
[path-sort]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportSortTabs.png
[path-repeat]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/path-report/PathReportRepeat.png