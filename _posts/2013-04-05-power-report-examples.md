---
layout: post
title: Power Report Examples
categories: [tools, power-report]
author: Eric Fung
tags: [power-report]
summary: Common power reports and how to set them up.
---
* Table of Contents
{:toc}

* * *

These are common, useful power reports our customers have set up. Because the Power Report provides so many options to configure, you can refer to these examples after which to model your own reports. Obviously the event and property names here may not match what you have been using, but the examples demonstrate occasions for using the different ranges.

As a rule of thumb, this is the mindset to help you create a report:

* **Report Columns**: what's the number you're getting at the end of the day? [Number of people, number of times an event happens, a sum over a property][calculations]?
* **Report Segments**: what criteria are you using to divide your numbers from above into more interesting pieces? Are you looking to compare X this month vs. last month ("Over Time")? Are you looking to compare X based on which Referrer brought people to your site? What is the *comparison* criteria?

<a name="measuring-retention"></a>
## Example 1: Measuring Retention

This will show *retention* by 1) grouping people into cohorts based on what month they visited your site for the first time, then 2) showing how many of those people also Visited in the last 30 days.

[![Use Case 1][case-1]][case-1]

<a name="list-every-property-recorded"></a>
## Example 2: List Every Property Recorded

This is listing *all* of the Email Addresses of people who were Referred by an existing customer. Notice that when you want lists of all the different values of a property, that segmenting by "Every Value" will always come up.

[![Use Case 2a][case-2a]][case-2a]

<a name="segmenting-revenue"></a>
## Example 3: Segmenting Revenue

Look up Total Revenue (the sum of "Order Total"), segmented based on which Product Names were purchased *and* whether an Optimizely A/B test influenced that Revenue.

[![Use Case 2b][case-2b]][case-2b]

<a name="revenue-from-old-customers-vs-new"></a>
## Example 4: Revenue from Old Customers vs. New

"I'm trying to build a report for revenue over the past 12 months with a breakdown of new customers (who have not been billed before this month) and return customers (who have been billed before this month)."

[![Use Case 3][case-3]][case-3]

[case-1]: http://cl.ly/image/0I3L2z1Y3Z2R/01-use-case.png
[case-2a]: http://cl.ly/image/2Z46083V0M2b/02a-use-case.png
[case-2b]: http://cl.ly/image/2M0E0n07013E/02b-use-case.png
[case-3]: http://cl.ly/image/3q3Q0V1X2O2B/03-use-case.png

[calculations]: /tools/metrics/metric-calculations
