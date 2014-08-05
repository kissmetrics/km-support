---
layout: post
title: Revenue Report
categories: tools
summary: The Revenue Report gives you a wholistic view of your revenue and your paying customers.
---
* Table of Contents
{:toc}
* * *

## Quick Reference

Calculation | Description
----------- | -----------
Total Revenue | Total value of your Revenue Property, within the date range of the report. Not to be confused with "[Lifetime Value][ltv]". You can verify which property we're using in your [site's mappings][mapping].
Average {Daily/Weekly/Monthly} Revenue | Total of the Revenue Property / Number of Days in the report. You can verify which property we're using in your [site's mappings][mapping].
[Lifetime Value][ltv] | A **prediction** of how much revenue a customer will be worth. Calculated as `Average Revenue per Customer / Total Churn Rate`
Avg Customers / {Day/Week/Month} | The average number of **paying** customers per Day/Week/Month
Avg {Daily/Weekly/Monthly} Churn | The average rate that **paying** customers churn per Day/Week/Month
[Churn][churn] | The number of customers who stop paying. How this is counted depends on whether you are using your report configurations.

<div id="wistia_3f023d87a8" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400">
</div>

## Introduction

Chances are, you are using analytics to increase the number of people using your product, so that they can ultimately increase your revenue. The Revenue Report gives you an overall picture of your revenue. Furthermore, you can segment your paying customers using your existing KISSmetrics properties. For example, you might be interested in…

* How much revenue did I make this month compared to last month?
* Which of my *pricing plans* is contributing the most revenue?
* Which *ads* have brought in the most paying customers?
* What *referring sites* do most paying customers come from?
* How much did an *A/B test* affect revenue?

![Revenue graph][revenue-graph]


# How do I pass in revenue data?

The Revenue Report looks for a single KISSmetrics Property across all customers. In our examples, we call this property `Billing Amount`. But you can use any other property name, as long as you are consistent across all customers.

Typically, you'll only include the net amount, minus tax and shipping:

{% highlight ruby %}
# Ruby example. When madeup@person.com is billed for $29.99, execute:
KM.identify('madeup@person.com')
KM.record('Billed', {'Billing Amount' => 29.99 })
{% endhighlight %}

Refunds can also inform your total revenue. Pass in the refunded value under the same `Billing Amount` property with a negative value:

{% highlight ruby %}
# Ruby example. When madeup@person.com is refunded $29.99, execute:
KM.identify('madeup@person.com')
KM.record('Refunded', {'Billing Amount' => -29.99 })
{% endhighlight %}

Remember, there are [many ways to send us event data][send]. You might find it most accurate to [import data][import] from another data source that's already keeping track of each transaction.


# Creating your Revenue Report(s)

The revenue report lets you choose how you want to calculate your revenue for your specific business model. You can create as many Revenue Reports as you'd like to measure different sources of revenue and/or different payment periods.

![Revenue configuration][revenue-newconfig]

* **Calculate revenue from**:  the property which you want to calculate revenue from for this report.
* **Show revenue in X buckets**:  how you want to display your revenue graph in terms of days/weeks/months (graph is limited to 60 data points)
* **Calculate churn by**:  choose how your business defines churn by a time period (no purchase activity), an event that happens (such as cancelation), or both.

By default, the Revenue Report will use a churn time period with 30 days as the definition of churn. Customize this to your needs when building your own Revenue Report.

## Choosing a custom churn time period

If your business defines churn as a period of time (common for E-Commerce businesses), then you'll be able to choose from common definitions of churn as well as defining your own custom time period to fit your use case.

Note: There is a limit of 750 days for a custom churn period, which is over 2 years. Of the businesses we interviewed, none defined churned longer than that duration. If you have concerns about defining churn as more than 2 years of no payment received, please write to feedback@kissmetrics.com with your use cases.

![Revenue custom time churn][revenue-customtimechurn]


## Choosing a custom churn event

If your business defines churn as an event such as cancelation (common for SaaS businesses), then you'll be able to choose any event that you've tracked with KISSmetrics to use as the churn event.

![Revenue custom event churn][revenue-customeventchurn]


# Total Customers

The revenue report can also look into your data to see how many paying customers you still have.

* **Paying Customers**: - the number of people we count as still "actively paying". That is, this is a count of people who we have recorded Revenue from, and who have not churned. Churn is explained in the next section.
* **Paying Customers Gained**: - the number of people whose first recorded Revenue happened in the time frame you're looking at.
* **Paying Customers Lost**: - the number of people who have churned, which is explained in the next section.

## Lifetime Value

**Lifetime Value** (LTV) is a *prediction* of how much a single customer will provide you in their time as a paying customer. There are many mathematical models for calculating LTV. Our report uses this one:

    Lifetime Value = Average Revenue per Customer / Total Churn Rate

To simplify further:

    Lifetime Value = (Total Revenue / Total Customers) /
       (Total Number of People who Churned / Total Customers)
    Lifetime Value = Total Revenue / Number of People who Churned

This means that if no one has churned, we can't make a prediction of your customers' LTV (we can't divide by 0).


# Segmenting Revenue

As mentioned above, you can segment your revenue and customers using your existing KISSmetrics properties. Some example questions you might answer:

* Which of my *pricing plans* is contributing the most revenue?
* Which *ads* have brought in the most paying customers?
* What *referring sites* do most paying customers come from?
* How much of an effect did an *A/B test* affect revenue?

![Revenue segments][revenue-segments]

*Note: remember that we track a person's lifecycle on your site, which includes every referral source they took to reach your site. Choosing `First ever` or `Last ever` lets you attribute a person to either the first property they received (usually for `Referrer` or `Campaign Name`), or to the most recent property.*

[revenue-newconfig]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/revenue-report/setup.png
[revenue-customtimechurn]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/revenue-report/custom-time-churn.png
[revenue-customeventchurn]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/revenue-report/event-churn.png

[revenue-graph]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/revenue-report/revenue-graphs.png
[revenue-segments]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/revenue-report/revenue-segments.png

[send]: /getting-started/ways-to-send-us-data
[mapping]: https://app.kissmetrics.com/mapping
[recurly]: /integrations/recurly
[import]: /advanced/importing-data

[churn]: #churn__what_about_customers_who_stop_paying
[ltv]: #lifetime_value
