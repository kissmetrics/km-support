---
layout: post
title: Power Report
categories: tools
summary: The Power Report lets you manipulate all of your events and properties in different ways, like a pivot table.
permalink: /tools/power-report/index.html
---
* Table of Contents
{:toc}
* * *

**The Power Report is available to our customers on our [Professional Plans][pricing].**

The Power Report lets you manipulate all of your events and properties in nearly any way you can imagine, like an easy-to-use pivot table on all of your customer data. You have a lot of flexibility in how to report on your data. Here are three tasks unique to the Power Report:

* Segmenting your customers on more than one Property
* Segmenting your customers on every value of a property they've received, not just the first or last
* Showing the performance of two or more unrelated metrics and looking for correlation among them.

# Data Sheet

This data sheet provides some sample use cases for which the Power Report can be used, and how to create one to answer these cases.

Link: [Kissmetrics Power Report Data Sheet][data-sheet]

# Creating a Report

Each Power Report has three main areas to configure:

1. Global Date Range
2. Report Segments
3. Report Columns

## 1. Global Date Range

You can set a "global" date range, which helps you refine the Segments and Columns that make up the Power Report. You can reuse the Global Date Range rather than manually set the dates for each Segment and Column.

However, realize that for each segment and column, you have the option to individually tweak the date ranges. Here's an example report that would use two different date ranges: "*Show people who Signed Up this month, segmented by when they first Visited Site last month.*"

## 2. Report Segments

Report segments are the **rows** of the report. They usually provide the interesting ***comparisons*** you are looking for. "How does X perform differently than Y?" "How did Week 1 compare to Week 2?"

The Power Report is unique because:

* You can segment by both Properties *and* Events.
* You can also create up to three segments, to see how they interact with each other.

![Report Segments][ss-segments]

### Report Segment Options

* **Properties**: Group people based on *the first value/the last value/every value* they received for a property. Display the value as:
  - Text
  - A full URL
  - A URL domain
  - URL path
* **Numeric Properties**: Group people based on *total/min/max/avg* for a property.
* **Events, Date**: Group people based on *the first time/the last time/every time* they did an event. Create segments based on these time windows of doing the event:
  - Date (e.g. "2010-10-11")
  - Month and year (e.g. "2010-10")
  - Month (e.g. "10 - Oct")
  - Year (e.g. "2010")
  - Day of Week (e.g. "Monday")
  - Day of Month (e.g. "11")
  - Hour (e.g. "17:00")
* **Events, Frequency**: Group people based on *how many times* they did an event.

Finally, you can limit the **date range** to whether they got the Property or did the Event *At Any Time*, *within the Global Date Range*, or *within any other dates* you pick.


## 3. Report Columns

Report columns are the **columns** of the report. They provide the **initial dataset** that will be broken apart into segments. "How many people did X?" "What was my conversion rate for this week?" "What was my revenue for this month?"

The Power Report is unique because you can:

* Look at *Every Person* Kissmetrics has recorded.
* Look at *Every Time* an event was done or a property was set.

![Report Columns][ss-columns]

### Report Column Options

* **Existing Metrics**: Reuse any existing Metric that is currently in your metrics dashboard.
* **On-the-fly Metrics**: Use any of the [Metric Calculations][calcs] just for this power report.
* **Total People**: Look at *Every Person* Kissmetrics has recorded.
* **Total Times**: Look at *Every Time* an event was done or a property was set.

#### Populations

You can refine each column even further by using "[Populations][populations]". These are additional conditions that are very similar to what you see in our [People Search][people-search].

#### Date Ranges

Finally, you can limit the **date range** to *Any Time*, *within the Global Date Range*, or *within any other dates* you pick. There's also an additional *"[Relative To][relative]"* date range, which is a flexible date range based on your segments.

# Results

Here's what the example configuration above would look like after you run the report:

![Report Results][ss-results]

# Video Examples

## Translating a Business Question into a Power Report

<div id="wistia_7lmaiffmf4" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400">
</div>

In this video, we explore an example business question:

> Of the people who canceled, 1) which cancelation page was seen? 2) What plan were these customers last on? 3) Exactly who canceled?

## How 'Relative To' Affects a Power Report

<div id="wistia_36h8v5kqfw" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400">
</div>

## How 'Every Value' Affects a Power Report

<div id="wistia_a3pfna7kb4" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400">
</div>

{% include summaries/power_report_summary.html %}

[pricing]: http://www.kissmetrics.com/pricing/
[data-sheet]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/power-report/Kissmetrics-Power-Report-Data-Sheet.pdf

[calcs]: /tools/metrics/metric-calculations
[populations]: /tools/people-search#how-do-i-create-groups-in-kissmetrics-
[people-search]: /tools/people-search
[relative]: /tools/power-report/relative-to

[ss-columns]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/power-report/report-columns.png
[ss-segments]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/power-report/report-segments.png
[ss-results]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/power-report/results.png
