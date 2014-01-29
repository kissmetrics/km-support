---
layout: post
title: Main SaaS Funnel Use Case
categories: use-cases
summary: How to track the steps of your customer acquisition.
---
* Table of Contents
{:toc}
* * *

## How to Track the Steps of Your Customer Acquisition

Acquiring a customer takes time. People need to move through multiple stages before they fully trust your business.

To track these stages, we use funnels. They show us the number of people at each step and the percentage of people that move to the next one.

Once you know where people drop off in large batches, you'll know which part of your business needs the most improvement. And once you've fixed the problem, **you'll get more customers with the same amount of traffic**.

Let's walk through how to setup a funnel for your SaaS business in KISSmetrics.

### What should we be tracking?

KISSmetrics funnels can be built from ANY event that you're tracking with KISSmetrics, the funnels are as flexible as it gets. For tracking the flow of your customer acquisition, here are the basic steps you'll want to track:

* **Visited Site**: This will be the first step of your funnel and we track this for you [automatically][visited-site]. There's nothing you need to do on this one.

* **Trial Signup**: Most SaaS companies offer a free trial or a freemium plan of some kind. Make sure you're tracking this with a "Signup" event.

* **Activation**: This is the "ah-ha" moment when people see the value of your product first-hand and understand your main benefit. If your product helps people build and distribute surveys, you'd want to track when people receive their first survey response. Don't worry about naming the event "Activation" which is a bit vague -- use a more descriptive term for the action taken.

* **Upgrade to Paid Plan**: When people purchase one of your plans, set up a "Billed" event and record the revenue amount from the transaction. You won't need the revenue data for your funnel reports but it'll come in handy elsewhere. For more info on how revenue reporting works, look through our [Revenue Report documentation][revenue-report].

And if you'd like an overview on how to set up events, we've outlined the basics [here][send].

Now that we know which events are part of the customer acquisition, let's build the funnel.

## How to Build Your SaaS Funnel in KISSmetrics

First, go to the Reports tab in the navigation.

![KM-Nav-Bar-Reports][ss1]

Then scroll down to your Funnel Reports and click on the "Create new funnel report" button.

![KM-Reports-New-Funnel][ss2]

Now we have a blank funnel in front of us.

![KM-New-Funnel][ss3]

Using the dropdown, select the event that you want to track at that step. For additional steps, click the "+" button to the right and select the events for each step you want.

Your main funnel will look pretty similar to this (don't worry about picking a property for the table below, we'll get to that in a second):

![KM-New-SaaS-Funnel][ss4]

Remember, you probably won't have an event called "Activated". Instead, use the event that means someone has started to use the core feature of your product. This might be "Received First Survey Response" or "Sent an Invoice".

At this point, we can pick a date range and run the report which will give us the performance of our funnel:

![KM-Main-SaaS-Funnel][ss5]

This is great data but we can get even better insights by segmenting our funnel into different groups of customers. Now let's go back to that property:

![KM-Funnel-Property][ss6]

You can segment your funnel by **any** property you're tracking to see how conversion rates differ between different groups of customers. This includes things like:

* Referrer (traffic source - includes organic traffic and traffic sources paid for)
* Campaign (campaigns you've tagged as part of your marketing efforts)
* Subscription Plan
* Customer Type
* A/B Tests

Referrers and campaigns will get tracked automatically by KISSmetrics. For the rest, you'll need to set up the events and properties to track them.

Let's segment by referrer and see what kind of data we get:

![KM-SaaS-Funnel-Segmented-by-Referrer][ss7]

Even though the funnel has an average conversion rate of 0.1%, traffic from Google converts 4.6% of the time and Facebook comes in at 9.5%. Traffic from Google and Facebook may be a small percentage of traffic but it's extremely valuable. If this business focused on acquiring traffic from Google and Facebook, it would probably make a noticeable impact on revenue.

## 4 Best Practices for Optimizing Your SaaS Funnel

When working with your funnels and optimizing them, use these 4 best practices.

### 1. Start With Benchmarks
Comparing yourself to other products or competitors won't give you any valuable insights. Small differences between industries, target markets, and businesses can have a massive impact on conversion rates within funnels. Instead, get enough data to establish benchmarks for yourself. Once you know where you are, work to improve your conversion rates.

### 2. Look for Bottle-Necks
When you're looking at your entire funnel and trying to decide which step gets your attention first, start with the bottle-necks. Many funnels will have one or two steps where the majority of people drop off. Find your bottle-necks and focus your time on those steps.

### 3. Test Improvements
You'll find countless best practices for every marketing problem you find. Some will work, most won't. The only way to know which ones actually make a difference is to test them. The best way to do this is with an A/B test (also called a split test). This let's you show two versions of a page to your visitors so you can see which one gets more people to the next step. Check out [Visual Website Optimizer][vwo] or [Optimizely][optimizely] to get these up and running. Both of these tools [integrate with KISSmetrics][a-b-platforms] so that you can easily track who's going through which version of your test.

### 4. Track A/B Tests Through the Entire Funnel
Most A/B tests only track the performance of the next step. So if you're trying to get more free trials, the test would only track the conversion rate between people visiting the site and signing up for a free trial. This is dangerous and you might slow your growth by accident. On a regular basis, you'll find tests that improve the conversion rate at one step of your funnel but reduce conversion rates at later steps. By integrating your A/B test data with KISSmetrics, you can go to your funnel, select your A/B tests as the property you want to segment by, and compare conversion rates for the entire funnel. This way, you'll know which version of your test gives you the best long-term results.

[visited-site]: /apis/javascript#visited-site
[revenue-report]: /tools/revenue-report
[send]: /getting-started/ways-to-send-us-data
[a-b-platforms]: /a-b-testing/integration
[vwo]: http://visualwebsiteoptimizer.com/
[optimizely]: https://www.optimizely.com/

[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/main-saas-funnel/01-KM-Nav-Bar-Reports.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/main-saas-funnel/02-KM-Reports-New-Funnel.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/main-saas-funnel/03-KM-New-Funnel.png
[ss4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/main-saas-funnel/04-KM-New-SaaS-Funnel.png
[ss5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/main-saas-funnel/05-KM-Main-SaaS-Funnel.png
[ss6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/main-saas-funnel/06-KM-Funnel-Property.png
[ss7]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/main-saas-funnel/07-KM-SaaS-Funnel-Segmented-by-Referrer.png