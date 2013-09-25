---
layout: post
title: Monthly Recurring Revenue Report (SaaS Revenue Report)
categories: tools
author: Eric Fung
summary: The Monthly Revenue Report gives you a clearer picture of your monthly revenue when subscriptions contribute to more than one month of service.
---
## Introduction

With our event-based model, you're likely sending us billing events at the moment a customer is charged. However, that billing amount could apply towards an annual or semi-annual subscription. Our Monthly Recurring Revenue (MRR) Report deals with this by dividing revenue across the number of months it applies to.

![Revenue graph][revenue-graph]

<a name="how-do-i-pass-in-revenue-data-"></a>
# How do I pass in revenue data?

See what key events and properties you will need in our [SaaS Revenue Essentials][best-practices] page. Primarily, you'll be using two properties to tell us how much your customer was billed, and for how many months that charge applies.

<a name="revenue-mapping"></a>
## Revenue Mapping

If the report does not load, [please check your site's event and property mappings][mapping] to ensure that the SaaS Revenue events and properties are set to use the properties you have been recording.

<a name="segmenting-revenue"></a>
# Segmenting Revenue

As with our other reports, you can segment your revenue and customers using your existing KISSmetrics properties. Some example questions you might answer:

* Which of my *pricing plans* is contributing the most revenue?
* Which *ads* have brought in the most paying customers?
* What *referring sites* do most paying customers come from?
* How much of an effect did an *A/B test* affect revenue?

*Note: remember that we track a person's lifecycle on your site, which includes every referral source they took to reach your site. Choosing `First ever` or `Last ever` lets you attribute a person to either the first property they received (usually for `Referrer` or `Campaign Name`), or to the most recent property.*

[revenue-graph]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/mrr/saas-revenue.png
[best-practices]: /best-practices/saas-revenue-essentials

[mapping]: https://app.kissmetrics.com/mapping