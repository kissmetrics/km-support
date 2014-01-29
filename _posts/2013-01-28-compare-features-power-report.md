---
layout: post
title: Comparing Features with the Power Report
categories: use-cases
summary: How to compare the impact of different features on signups.
---
* Table of Contents
{:toc}
* * *

## How to Tell Which Features Increase Signup Rates the Most

A new customer has just logged into your SaaS product for the first time.

The next few minutes are critical.

You want to demonstrate as much value as possible. Or you might lose them.

But which features should you prioritize? Which ones get the most people to sign up? Do you focus on your core feature or get people to try several features?

And this goes WAY beyond just trying to figure out which features get the most attention in your UI. You have limited engineering time and can't improve every part of your product. You need to know exactly where your team needs to spend their time.

The KISSmetrics Power Report helps you make these decisions with confidence.

You'll be able to compare the conversion rates between customers that use certain features and those that don't. This tells you which features should get the most priority and which ones can be left for later.

To see how this works, let's jump in and build a Power Report.

## Building the Power Report

First, go to your reports tab in the navigation:

![KM-Nav-Bar-Reports][ss1]

Then create a new Power Report by clicking the "Create a new power report" button:

![KM-Reports-New-Power-Report][ss2]

Go ahead a select the dates you want to look at. You'll probably want to look at several months of data at least.

![KM-Power-Report-Blank-Name-and-Date][ss3]

There's two main sections you'll have to build for your Power Report: segments and columns.

### Segments

Segments allow you to group your data however you want. For this report, let's keep things simple and use a basic Over Time segment. This will group our data into different time periods like months. Here's what it looks like:

![KM-Power-Report-Over-Time][ss4]

You can add up to 3 segments in any Power Report. And each segment gets added to the segment above it. So if we added a second segment for Campaign Medium to the Over Time segment, we'd be able to see how campaigns from each month impacted signup rates. Any property that you've been tracking can be used as a Power Report segment.

### Columns

Columns are the metrics you want data on. Some basic metrics are included for you like how many times a certain event happened or the total value for a property. You can also pick any metric that you're already built under your Metrics tab.

In this case, we've already built a metric that tracks the conversion rate from free trial signups to the paid plan. This is the metric we'll use for each of our columns.

Whenever you build a new column, you can select a certain group of people to be included or excluded in the data.

For the first column, you want to include people that have used two features of your product. Let's use KISSmetrics as an example and compare the impact that Funnel Reports and Cohort Reports have on signup rates. So we'll build a column that gives us the signup rates for people that have used the Funnel Report AND the Cohort Report. Here's what the settings look like:

![KM-Feature-Power-Report-Funnel-Cohort][ss5]

Now we want to build two more columns. One for people that only looked at the Funnel Report:

![KM-Feature-Power-Report-Funnel-Only][ss6]

And one for people that only looked at the Cohort Report:

![KM-Feature-Power-Report-Cohort-Only][ss7]

## The Data

Remember to save your report so that you can easily come back to it without having to rebuild everything.

Then click the "Run Report" button to get your data. Here's what the report will look like:

![KM-Feature-Power-Report-Results][ss8]

When you include 3 or more columns, you'll find a horizontal scrollbar at the bottom of your report. Simply scroll to the right in order to see the rest of your data.

By comparing the conversion rates in each column, we can see how each feature impacts signup rates. And this report tells us that using both reports correlates with upgrades far more frequently than using just the Cohort or Funnel report.

## Test Your Insights

When you build a similar report for your own data, remember that this is a correlation, not a causation. In other words, there's a chance that the features aren't causing better (or worse) signups.

It's possible that the customers most likely to signup also tend to be customers that try every feature regardless of what it is.

Use this report to generate a hypothesis about your signups.

In the example above, our hypothesis is: Users that use both the Funnel and Cohort Reports have a greater likelihood of signing up. So let's encourage new users to use both reports.

But you'll still want to test your hypothesis before you commit to it. This can be done with a simple A/B test. For example, you could feature both products and compare the signup rates to your original signup flow.


[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/01-KM-Nav-Bar-Reports.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/02-KM-Reports-New-Power-Report.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/03-KM-Power-Report-Blank-Name-and-Date.png
[ss4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/04-KM-Power-Report-Over-Time.png
[ss5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/05-KM-Feature-Power-Report-Funnel-Cohort.png
[ss6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/06-KM-Feature-Power-Report-Funnel-Only.png
[ss7]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/07-KM-Feature-Power-Report-Cohort-Only.png
[ss8]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/compare-features-power-report/08-KM-Feature-Power-Report-Results.png


