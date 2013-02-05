---
layout: post
title: SaaS Essentials
categories: best-practices
author: Charles Liu
summary: Here's a list to get you started with picking the right events to track for your SaaS business.
---
## Introduction

Welcome to KISSmetrics! This handy guide will help you get started by showing you what we think are the best practice essentials for tracking SaaS data.

We are a SaaS business, and we want to help other SaaS businesses become successful by using customer analytics. Before you start tracking customer data with KISSmetrics, it’s important to think about what you need to know about your customers so that you can provide a better experience for them.

A SaaS business wants to move customers through five major stages in their lifecycle:

1. **Acquisition** - the customer arrives from various channels
2. **Activation** - the customer signs up AND engages with the service
3. **Retention & Engagement** - the customer comes back to use your service
4. **Referral** - the customer refers others
5. **Revenue** - the customer pays you or conducts monetization behavior

Here’s our recommended best practices for events and properties get started on tracking data for SaaS businesses.

*Note: Every SaaS business is unique, and your event and property name choices are up to you. Use this as a barebones guideline for your own business and change your events and properties as needed for your particular processes, market, or industry. Have some fun naming your events and properties too while you’re at it.*

This guide will use the following format:

**Example Recommended Event** <br />
When to trigger the event and any other contextual information
* Recommended property to set at the same time an event triggers
* Recommended property to set at the same time an event triggers
* Etc.

---

## Tracking Acquisition Behavior

**KISSmetrics automatically tracks all of these marketing events and properties for you!**

### Visited Site

Triggered when a customer visits your site. We record **Visited Site** once for each visitor’s browsing session. After 30 minutes of inactivity, the next time the visitor comes back will trigger a new **Visited Site** event, and they will also have the `Returning` Property set to 1.

* `Referrer` indicates the URL the visitor came from.
* `URL` indicates the landing URL when a customer arrived on your website.

### Ad Campaign Hit

Triggered when a customer reaches your site via a Google Ad Campaign (eg. paid search). We detect this by checking the URL for `?gclid` or `?utm_` parameters, which indicate a URL tagged for ad purposes. All the `utm` variables will be captured as Properties, if they are present in the URL. Please refer to our [article regarding Google Analytics][ga-utm] to determine whether the `utm` variables are available or not:

* `Campaign Source`
* `Campaign Medium`
* `Campaign Terms`
* `Campaign Content`
* `Campaign Name`

[ga-utm]: /integrations/utm-variables#google-analytics-8217-auto-tagging-vs-manual-tagging

### Search Engine Hit

Triggered when a customer reaches your site via a search engine, through organic search.

* `Search Engine` indicates which search engine was used.
* `Search Terms` indicates the search terms used.

---

## Tracking Activation Behavior

### Signed Up

Triggered when a customer signs up for an account.

* `Customer ID` indicates the email address or username the customer entered upon sign up. **Note: Rather than passing `Customer ID` as a property, you should use the `identify` API command before triggering `Signed Up` to indicate the new Customer ID.**
* `Plan Name` indicates the search terms used by the customer in the product search bar.
* `Referral Code` indicates the referral code used by the customer if they were invited by another existing customer.

### Subscribed to Newsletter/Blog/RSS/Widget/Whitepaper/Webinar

Triggered when a customer subscribes to anything content-related for your business.

* `Customer ID` indicates the email address or username the customer entered upon sign up. **Note: Rather than passing `Customer ID` as a property, you should use the `identify` API command to indicate the new Customer ID.**

### Activated Account / Used Core Feature #1 / (Your Definition of Active)

Triggered when customers activate your service, do their first action with the app/service, or do something that makes them “active”.

Activation is a loose term that you must define. What's the minimum behavior that makes you consider a user "active"?

**Examples of Activation Events:**

* Customer must install something
* Customer must complete profile
* Customer must publish a post
* Customer must invite other friends
* Customer must connect with Facebook/Twitter
* Customer must play a game

---

## Tracking Retention and Engagement Behavior

### Used Core Feature #1/ #2 / #3 / Etc.

Triggered when a customer uses any core feature of your app or service. These are your essential events that define what your business does. Think of your business’ main features that you would want to track so that you can measure engagement rates and what to improve next.

We can’t tell you exactly what to track because each different SaaS business is unique, but here are some examples of events to give you an idea of what we mean by “Used Core Feature”.

**Example: SaaS Survey Tool**

* Created Survey
* Ended Survey
* Received Survey Response
* Analyzed Survey Results
* Shared Survey Link

**Example: SaaS Website Builder**

* Created Website
* Picked Website Theme
* Added Custom Domain
* Viewed Site Statistics

Your goal is to track every action a customer could perform so that you have a complete picture of what your customers are doing. If your subscription, app, or service  is simple, you may only have a few events to track. On the flipside, if your business is complex, you may have to set up more events in order to capture your customer’s activities.

### Clicked Through Email

Triggered when a customer clicks a link from a newsletter, marketing campaign, or product announcement.

We detect this by checking the URL for `?gclid` or `?utm_` parameters, which indicate a URL tagged for ad purposes. All the `utm` variables will be captured as Properties, if they are present in the URL. Please refer to our [article regarding Google Analytics][ga-utm] to determine whether the utm variables are available or not:

* `Campaign Source`
* `Campaign Medium`
* `Campaign Terms`
* `Campaign Content`
* `Campaign Name`

### Upgraded

Triggered when a customer upgrades to a higher priced plan or subscription.

* `Plan Name` indicates the name of the higher priced plan.

You’ll notice that there is no "From Plan" property. This is because KISSmetrics keeps a whole history for each person so there is no need to pass in which plan a person is upgrading from. KISSmetrics already knows this!

### Downgraded

Triggered when a customer downgrades to a lower priced plan or subscription.

* `Plan Name` indicates the name of the lower priced plan.

You’ll notice that there is no "From Plan" property. This is because KISSmetrics keeps a whole history for each person so there is no need to pass in which plan a person is upgrading from. KISSmetrics already knows this!

### Ended Trial (if you have a trial period)

Triggered when a customer ends their trial if your business has a trial offer.

* `Trial Description` indicates the trial description such as *14 day trial*, *30 day trial*, or *Pro Level trial*.

---

## Tracking Referral Behavior

### Invited / Referred Friend (or any Social Actions)

Triggered when a customer refers a friend or invites them to subscribe or sign up through a social channel. Applicable only if your business has referrals or social sharing.

* `Referral Recipient` indicates the email address, name, or any other identifying information of the person receiving the referral.

---

## Tracking Revenue Behavior

### Billed / Paid

Triggered when a customer is billed / has paid for their subscription. Record this event only after a successful billed so that it does not record failed charge attempts.

* `Billing Amount` indicates the amount that the customer paid.
* `Billing Description` indicates the description of what bill was for. This is an optional property to describe things like *Monthly Subscription* or *Annual Subscription* or *Overage Fee*.

### Canceled

Triggered when a customer cancels their subscription with you.

* `Cancellation Reason` indicates the reason why a customer cancelled (if this information is available)

---

# What’s Next?

## Creating Your Reports

After you have your events and properties tracking, the first thing you should do is create a Report. Reports help you see which areas of your business you need to improve visualizing the events and property data you’ve just set up. A good place to start is with our [Funnel Reports][funnels].

## Creating Your Metrics

Now that you’ve created your first report, it’s time to create your Metrics so that you can view your most important business metrics at-a-glance. Check out our [Metrics introduction][metrics] to get familiar!

[funnels]: /tools/funnels
[metrics]: /tools/metrics