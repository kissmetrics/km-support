---
layout: post
title: Cohort Report
categories: tools
summary: The Cohort report provides a breakdown of the time it took people to do one event to doing another event.
permalink: /tools/cohort-report/index.html
---
* Table of Contents
{:toc}
* * *

Our cohort report shows you the people who progress from doing one event to doing another event. It also shows you if people are repeatedly doing a single event.

What sets it apart from a regular conversion funnel or metric is that you can further segment these people by *when* they did the first event, or segment them using your typical KISSmetrics properties (the method for segmenting any other report). These different segments are called ***cohorts***, hence the name of the report. Then you can see how your cohorts perform the second event over a long period of time.

Every KISSmetrics account has access to a basic Retention Report, which tells you about visitors who repeatedly come back to your site.

*(Note: advanced cohort analysis, and the ability to create multiple cohort reports is generally reserved for paying customers only.)*

## How do I read this?

The easiest way to show how to read the cohort report is through an example. Let's look at an example Retention Report.

### Example: Default Retention Report

Using the Retention Report in every account, let's analyze the people who:

* `Visited Site` (**event 1**)…
* From January 1, 2012 - May 31, 2012 (**date range**), and...
* Group these people by week (**grouping**).
* Of these people, analyze how many of them `Visited Site` again (**event 2**)…
* For *each* subsequent occurrence of `Visited Site` (**count**), and…
* Group/bucket these people by how many *weeks* it took them to do `Visited Site` again (**buckets**)

![Full Options][full-options]

To say this again in one sentence, we're looking at the people who Visited the Site from Jan 1, 2012 to May 31, 2012 (organized by which week they `Visited Site`), and of these people, seeing what percentage of them returned to Visit Site again, week over week.

Running this report gives you something like the graph below. Let's look at this one piece at a time.

![Cohort report][report]

### The Cohorts

Let's start with how the cohorts are created. This is the information in the leftmost columns.

![People][people]

Three options go into creating this area:

* **Event #1**: `Visited Site`
* **Date Range**: Jan 1 to May 31, 2012
* **Grouping**: group across weeks

Essentially, we do a people search for *all* the people who `Visited Site` from Jan 1 to May 31, 2012. Then we create the groups like this:

* Of all of these people, take the people who `Visited Site` during the first group of the date range (Week of Jan 1). Assign these **6,136** people to Cohort #1 for the Week of Jan 1.
* Of the *remaining people not in Cohort #1*, take the people who `Visited Site` during the second group of the date range, the week of Jan 8. Assign these **6,088** people to Cohort #2 for the Week of Jan 8.
* Of the *remaining people not in Cohorts #1 or #2*, take the people who `Visited Site` during the third group of the date range, the week of Jan 15. Assign these **5,992** people to Cohort #3 for the Week of Jan 15.
* And so on, until you've finished grouping the entire date range.

#### Notes on Cohort Assignment

Notice that the cohort assignment really depends on the date ranges. A people search for those who `Visited Site` the week of Jan 15 will likely return ***more*** than 5,922 people, because it returns *everyone* who `Visited Site` that week. The 5,922 people of Cohort #3 does not include people from Cohorts #1 and #2, some of whom might have happened to perform `Visited Site` during the week of Jan 15.

For the same reason, a cohort report run for data between Jan 15 to May 31, 2012 would differ slightly. The Week of Jan 15 is now Cohort #1, rather than Cohort #3, and would give you a different set of people.

### The Buckets

Now to the meat of the report.

![Buckets][buckets]

Three options go into creating this area:

* **Event #2**: `Visited Site` again
* **Count**: count *every time* they `Visited Site` again after the first instance
* **Buckets**: divide people into weekly buckets

For each cohort, what percentage of people `Visited Site` again within 1 week of doing the first event? Within 2 weeks? 3-8 weeks?

* For Cohort #1 (the top row), **23.3%** of people came back to perform `Visited Site` again within 1 week (0-6 days).
* For Cohort #1, **14.2%** of people came back to perform `Visited Site` again within 2 weeks (7-13 days)...and so on.
* For Cohort #2 (the second row), **16.3%** of people came back to perform `Visited Site` again within 1 week (0-6 days).
* For Cohort #2, **7.6%** of people came back to perform `Visited Site` again within 2 weeks (7-13 days)...and so on.



In fact, you are able to click into each cell and get a list of say, the people from Cohort #2 who returned within 3 weeks.

#### Notes on Buckets

When looking at a cohort report, it's clear what the date ranges for the *cohorts* are, but not the *buckets*. In the above example, Cohort #1 is well-defined as being people who `Visited Site` between Jan 1-7, 2012. Consider the bucket for repeat Visits between 7-14 days of the first visit - Bucket #2. You might expect this bucket to nicely cover the week of Jan 8, 2012 (Jan 8-14), but Bucket #2 actually includes *more* days.

Let's say Bob originally `Visited Site` on January 6. He is placed in Cohort #1. 7-14 days after this particular visit would actually span Jan 13-20. If Bob `Visited Site` again in this time frame, he would show up in Bucket #2. Because of this behavior, Bucket #2 (repeat Visits between 7-14 days after Cohort #1's first visit) would thus actually span Jan 8-21, 2012.

# Extra Reading

This guide explained how to *read* a cohort report, but these articles will give you better ideas for how to *use* a cohort report:

* Andrew Chen - "How to measure if users love your product using cohorts and revisit rates". <http://andrewchen.co/2008/09/08/how-to-measure-if-users-love-your-product-using-cohorts-and-revisit-rates/>
* Joshua Porter - "Cohort Analysis - Measuring Engagement Over Time". <http://52weeksofux.com/post/646711369/cohort-analysis-measuring-engagement-over-time?40a7f3b8>
* Ash Maurya - "3 Rules to Actionable Metrics in a Lean Startup". <http://www.ashmaurya.com/2010/07/3-rules-to-actionable-metrics/>
* Dan Martell - "Cohort Metrics for Startups Revealed – Part I: Plain English". <http://500.co/2011/07/13/cohort-metrics-for-startups-revealed-part-i-plain-english/>
* Dan Martell - "Cohort Metrics for Startups Revealed – Part Ii: Aged Groups". <http://500.co/2011/07/14/cohort-metrics-for-startups-revealed-part-ii-aged-groups/>

{% include summaries/cohort_report_summary.html %}

[full-options]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/cohort-report/full-options.png
[report]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/cohort-report/graph.png
[people]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/cohort-report/people.png
[buckets]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/cohort-report/buckets.png

[options]: /tools/cohort-report/cohort-report-options