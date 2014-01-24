---
layout: post
title: Revenue Report
categories: tools
author: Eric Fung
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
[Churn][churn] | The number of customers who stop paying. How this is counted depends on whether you are using a `Canceled` event (see your [site mappings][mapping]).

<div id="wistia_3f023d87a8" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400"></div>

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


### Revenue Mapping

Once you have `Billing Amount` data recorded with KISSmetrics, we do our best to find and use the property name where the data is located. If the information in the report looks really strange, [please check your site's property mappings][mapping] to ensure that your `Revenue` property is actually using the correct property under which you provided revenue data.


# Total Customers

The revenue report can also look into your data to see how many paying customers you still have.

* **Paying Customers**: - the number of people we count as still "actively paying". That is, this is a count of people who we have recorded Revenue from, and who have not churned. Churn is explained in the next section.
* **Paying Customers Gained**: - the number of people whose first recorded Revenue happened in the time frame you're looking at.
* **Paying Customers Lost**: - the number of people who have churned, which is explained in the next section.


## Churn - What about customers who stop paying?

In addition to revenue, we can show you the number of customers gained and lost over the date range you're reporting on. **Churn** describes customers who are no longer active and are no longer contributing revenue. *Each business type tends to calculate churn differently. By default, KISSmetrics uses a SaaS 30-day subscription model to determine churn.*

* If you are not sending in an event for Cancelations (`Canceled`), then we use our calculation to determine Churn. If a customer has not paid you in *30 days*, we consider them `churned` on the last day that they paid.
* If you do send us a `Canceled` event, we consider a customer `churned` on the day of their cancelation. (Like Revenue, if Cancelations look strange, [please check your site's event mappings][mapping] to ensure that the `Canceled` event is using the event that corresponds with cancelations.)

We realize that these two options may not sufficiently define churn for every business. For example, you may be an e-commerce business that doesn't track explicit cancelations, but gives customers longer than 30 days until you consider them churned. If so, we're interested in hearing how *you* define churn, and how you would use a Revenue Report most effectively. Please send in your feedback using the feedback box at the bottom of the Revenue Report!


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

[revenue-graph]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/revenue-report/revenue-graphs.png
[revenue-segments]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/revenue-report/revenue-segments.png

[send]: /getting-started/ways-to-send-us-data
[mapping]: https://app.kissmetrics.com/mapping
[recurly]: /integrations/recurly
[import]: /advanced/importing-data

[churn]: #churn__what_about_customers_who_stop_paying
[ltv]: #lifetime_value

<script charset="ISO-8859-1" src="http://fast.wistia.com/static/E-v1.js">
</script>
<script type="text/javascript">
loadKMTrackableVideo("3f023d87a8", "Blank Slate: Revenue Report");
</script>