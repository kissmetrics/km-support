---
layout: post
title: How do I calculate average occurrences between two events?
categories: [tools, metrics]
summary: Learn how to calculate the average number of times an event happens before a conversion event.
---
* Table of Contents
{:toc}
* * *

#How do I calculate average number of times an event happens before a conversion event?

You can calculate the average number of times (not duration) someone performs an event before performing a second event by setting up a metric called, "Average Number of Times an Event Happens Before Conversion Event." 

For example, you can see: 

1. How many times on average someone visits your website before they subscribe to your newsletter

2. The number of PDFs on average someone downloads before they sign up for a free trial

3. How many times on average someone uses feature A in the trial before they purchase

##How it’s calculated

First, this metric finds the total average number of times an event happens before a conversion event happened. Then, we’ll divide by the number of times the conversion event happened in the date range.

![Average calculation][2]

For someone to be counted, they need to have 1) done the first event before the conversion event, and 2) done the conversion event in the date range. 

**Example**: On average, how many times does someone view the product details page before purchasing in the month of January?

In this instance: 

1 = Viewed product details

2 = Purchased

<table>
  <tr>
    <td></td>
    <td>12/29</td>
    <td>12/30</td>
    <td>12/31</td>
    <td>1/1</td>
    <td>1/2</td>
    <td>1/3</td>
    <td>1/4</td>
    <td>1/5</td>
  </tr>
  <tr>
    <td>Andy</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Keara</td>
    <td>2</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>Ryan</td>
    <td></td>
    <td></td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>2</td>
    <td></td>
    <td></td>
  </tr>
</table>


**Total average: 2.33 times **

Let’s dive deeper to see how we got that average. 

Andy’s average: 3/2 = 1.5

If a conversion event happens *outside* the date range, we’ll stop counting any events *before* that conversion event. Because Andy purchased on 12/31, we stop counting any times he viewed product details before that. 

And because he purchased 2 times in January, the denominator is 2. 

Keara’s average: 5/2 = 2.5

Keara viewed product details 5 times and purchased 2 times in January. 

Ryan’s average: 3/1 = 3

Ryan viewed product details 3 times and purchased 1 time in January. 

##How to set up Average Number of Times an Event Happens Before Conversion Event

###Step 1

Log into Kissmetrics and select "Add new metric"

![Add new metric][1]

###Step 2

Select "Average Number of Times an Event Happens Before Conversion Event" and “Continue with this metric” 

###Step 3

Name your metric. (Suggestion: Average Number of Times ___________ Before ____________) 

###Step 4

Select your first event. (example: Viewed product page)

###Step 5

Select your conversion event. (example: Purchased)

*Optional*: Choose a property and property value to filter this metric’s results (example: property=country, property value=Canada)

###Step 6

Click "Save metric" and view it in your [dashboard](https://app.kissmetrics.com/metrics). 

##What other metrics can I track?

Here’s a full list of [metrics](http://support.kissmetrics.com/tools/metrics/metric-calculations) you can place in your dashboard.


[1]: http://kissmetrics-support-files.s3.amazonaws.com/assets/tools/average-times/Add-new-metric.png
[2]: http://kissmetrics-support-files.s3.amazonaws.com/assets/tools/average-times/average-calc.png
