---
layout: post
title: SaaS Marketing Power Report Use Case
categories: use-cases
summary: How to track multiple marketing metrics using the Power Report
---
* Table of Contents
{:toc}
* * *

## How to track multiple marketing metrics using the Power Report

What if we wanted to go beyond revenue metrics for our marketing campaigns and see how many signups we received or what our engagement was like? How would we get that data?

Let's say we want to know the total revenue, the average revenue per person, total signups, and the average time between signup and billed (we have a free trial). We also want to see how these numbers differ between our marketing campaigns AND how they change from one month to the next. Sounds pretty complicated right?

Before KISSmetrics, the only way you could answer this question was to go to your customer database and write come code that would pull out the information you needed. If you have a technical background and a basic knowledge of MySQL, this isn't such a big deal. But for the rest of us, we're completely limited to the types of reports we're able to build within our analytics platforms. Sadly, these reports aren't nearly robust enough to handle such a complicated set of data.

This is where the KISSmetrics Power Report gives you the flexibility you need to answer any business question you have. It's as robust as it gets. No matter how detailed or complex your question, you'll be able to pull the data you need from the Power Report. And you don't need to touch a single line of code.

I'm going to show you step-by-step how to get this report built and give you a detailed guide on how the Power Report works.

First, let's build a SUPER simple version of the report to get our feet wet. Then we'll build a more complex version.

## The Foundation of the Report

To find your Power Reports, go to your KISSmetrics Reports.

![KM-Nav-Bar-Reports][ss1]

Then click the "Create a new power report" button in the Power Report section.

![KM-Reports-New-Power-Report][ss2]

If you can't find the Power Report section in your Reports list, that means Power Reports have not been enabled for your account. The Power Reports are only available to customers that have subscribed to one of our advanced plans ($499/month and up). If you'd like to upgrade in order to get access to the Power Reports, send us a quick email at sales@kissmetrics.com.

The top of your new report will look like this:

![KM-Power-Report-Blank-Name-and-Date][ss3]

This is where we can name the report and set the date range. As soon as you click one of the "Save Changes" button, the report will be listed in your Reports tab under the name you've picked.

Now let's set up the segment for our report:

![KM-Power-Report-New-Segment-Over-Time][ss4]

Segments are just different groups of people that we want to compare to each other. You can use any event or property that you're tracking to segment your customers.

You'll also find the "Over Time" segment which I've used above. This will break your table down by time. And in this case, I've decided to look at "Every month". You can also look at hours, days, weeks, quarters, and years.

For all of your segments and columns (metrics), you'll have the option to pick another date range for each. For example, you might want to look at your customers from February but you want to see the total revenue they've generated since then. Unless you have a specific reason to set up different dates, stick to the default selection which will be the global date (the same date range that you picked at the top of the report) or a relative date range which will use the same dates from another segment.

In your Power Reports, you can include up to three segments in a single report. We'll cover how this works in just a minute.

For now, we'll stick to the Over Time segment to see what kind of data it gives us.

The second set of settings will be your columns, this is where you pick your metrics:

![KM-Power-Report-New-Column-Revenue][ss5]

You can pick any metric that you've already set up within your Metrics tab. You'll also find several calculations that the Power Report can do for you like:

- Number of people that did an event
- Number of times an event happened
- Average times an event happened per person
- Conversion rates
- Average time between two different events
- Total value of a property
- Average value of a property

For the event-based metrics, you'll be able to select any event that you've been tracking.

Unlike segments, you can build as many metrics as you want.

In this example, we're using the Revenue metric which has already been set up in the Metrics tab.

When we run this report, we get a Power Report that looks like this:

![KM-Power-Report-Revenue-Over-Time][ss6]

Pretty basic stuff. On the left, we have a breakdown of different months. And the revenue column shows how much revenue we earned during each month.

But this is a little too basic. After all, we could use the revenue report or a metric to grab this kind of data.

Now let's jump into something a bit more complex.

Instead of just revenue, what if we wanted some more metrics side-by-side to get a solid feel for how we're doing? And not just revenue-related metrics either, let's look at some engagement metrics. Here are 4 metrics we can grab:

1. Revenue
2. Average revenue per person
3. Number of signups
4. Average time between signup and billed

Then let's go a step further and break our timeline down by campaign medium. This will tell us which types of marketing campaigns contributed to the revenue above. With the extra metrics we'll add, we'll also know how those campaigns perform along several different goals.

KISSmetrics uses UTM parameters to track campaign URLs (the same way that Google Analytics does). [Check out our guide here][campaign-urls] to learn how to do this.

## Building the Rest of the Report

First, let's build the segments out:

![KM-Power-Report-Time-and-Medium-Segments.png][ss7]

We still have the Over Time segment at the top. But now we've built a second segment for the campaign medium. If we wanted, we could easily replace campaign medium with referrer, campaign name, search term, or any other set of data that we want to look at.

When you select variables like this, you'll have the option to pick "First value," "last value," or "every value."

Be careful when selecting the every value for a segment. For this report, using every value on the campaign medium means that the report will pull data include people multiple times if they've been through more than one campaign which will inflate your metrics. Revenue and signups would get counted multiple times for the people that went through multiple campaigns.

When you're looking at marketing data, you'll want to stick to first value or last value. The first value will grab the earliest campaign medium that a person went through within the selected date range. And the last value will grab the most recent.

Now let's build out those columns. Here's the second metric we'll add after the revenue column we already built:

![KM-Power-Report-Avg-Revenue][ss8]

This one's pretty basic but you'll need to create a new metric in your Metrics tab to track the average revenue per person if you haven't already.

Here's how we'll set up a column for tracking the number of signups:

![KM-Power-Report-Signups][ss9]

For this one, pick the "Number of Times Event Happened" from the calculation section in the drop-down. You won't need to create a new metric for it. Then pick the event that you want to track which will be "Signed up" in this case.

For the last column, we want to know how long it takes for people to go from signup to a paid plan. Here's how we do it:

![KM-Power-Report-Time-From-Signup-to-Billed][ss10]

Again, this is one of the calculations built into the power reports so we don't have to create a new metric. Pick "Average Time Between Events" for your metric/calculation, then pick the two events you want to look at. In this case, the first event is Signed up and the second event is Billed.

We also want to add a condition for this one. If people don't sign up, they'll never get to the billed event. But if we include them in the calculation, they'll skew the data. So we'll add a condition that selects people that have performed the signup event at least one time.

## The Final Report

Here's what the final results look like:

![KM-Power-Report-Medium-Over-Time-Total-and-Avg-Revenue][ss11]

See how the campaign medium is within the over time segments? To see the campaign mediums in different months, all we have to do is click on the month we want to look at and it will expand to show us the data on our campaigns.

We could also add a third segment for the campaign name to see which campaigns for each medium are driving growth. This would let us expand the campaign mediums to get even more granular with our data. Remember, you can build three segments for each of your Power Reports.

At the edge of the report, you'll see the beginning of the next column. In the Power Reports, a horizontal scroll bar will appear when you have three or more columns. This way, you can scroll through all your data even if you've built dozens of columns. Here's what the rest of the data looks like when we scroll to the right:

![KM-Power-Report-Medium-Over-Time-Signups-and-Time-to-Billed][ss12]

Now we have a complete breakdown of our marketing channels. We know which ones are driving signups, the revenue generated, how quickly people signup, and can compare these numbers over time.

Once you have your Power Report built just the way you want it, go ahead and save it. Then it'll be ready to go whenever you want to look through your data.

When you feel like your Power Report has become too large to manage, there's an "Export data" button just above your results. By clicking this button, you'll receive a CSV file at the email you've used to log into KISSmetrics.

If you run into data that doesn't seem to make sense, the first thing you want to check are the dates for your segments and metrics. You'll usually want to stick with the default selection which will be the Global date or a relative date to one of your segments. But when you're editing a report, it's easy for your date selections to get switched around. If you're not using the default selection, a short message will display next to the date picker telling you what the default is.

[campaign-urls]: /how-tos/campaign-tracking

[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/01-KM-Nav-Bar-Reports.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/02-KM-Reports-New-Power-Report.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/03-KM-Power-Report-Blank-Name-and-Date.png
[ss4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/04-KM-Power-Report-New-Segment-Over-Time.png
[ss5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/05-KM-Power-Report-New-Column-Revenue.png
[ss6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/06-KM-Power-Report-Revenue-Over-Time.png
[ss7]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/07-KM-Power-Report-Time-and-Medium-Segments.png
[ss8]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/08-KM-Power-Report-Avg-Revenue.png
[ss9]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/09-KM-Power-Report-Signups.png
[ss10]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/10-KM-Power-Report-Time-From-Signup-to-Billed.png
[ss11]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/11-KM-Power-Report-Medium-Over-Time-Total-and-Avg-Revenue.png
[ss12]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/marketing-power-report/12-KM-Power-Report-Medium-Over-Time-Signups-and-Time-to-Billed.png
