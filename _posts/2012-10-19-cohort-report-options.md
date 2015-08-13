---
layout: post
title: Cohort Report Options
categories: [tools, cohort-report]
summary: An overview of the different options you have when generating cohort reports.
---
* Table of Contents
{:toc}
* * *

![Cohort][cohort]

## Date Range

Specify the date range to search for all people who have done Event #1. If you set the end date to some day in the past, it's possible for the report to show the performance of these people doing __Event #2__ outside of the indicated date range.

## Split into Buckets

This option specifies the time span of each cell. It lets you narrow the scope of the question "After doing Event 1, how many hours, days, weeks, or months did it take these people to do Event 2?".

The available options are:

* Hourly
* Daily
* Weekly
* Monthly (30-day buckets)

## Count People who did Event 2 First Time Only/Every Time

* __First Time Only__: the report looks at only the first instance of the person doing Event 2 after doing Event 1, and places them in the corresponding cell.
* __Every Time__: the report looks at every time the person did Event 2 after doing Event 1, and places them in all the corresponding cells. With this option, people can be found in more than one cell of the report.

## Group People who did Event 1 by Time/Property

* __Time__: group people into cohorts based on when they did Event 1, within the specified the date range. You can create cohorts across individual days, weeks, or months.
* __Property__: group people into cohorts based on a specific property that is set for them. You can choose to use either the first or last value that was ever set.

We'll place a person in only one __cohort__. If you were grouping people by `Time`, we look at the earliest instance that they did Event 1 (within the date range you are reporting on) and place them in a cohort according to that earliest instance.

## Display

You can change what is displayed in each cell of the report:

* Number of people
* Percentage of people
* Cumulative number of people
* Cumulative percentage of people

[cohort]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/cohort-report/cohort.png