---
layout: post
title: How to Name and Structure Your Data
categories: getting-started
tags: [common_dev_pitfalls]
summary: Learn how to name and structure you data for successful implementation
---

The best practice for naming and implementing analytics is to track only what you would actually use to measure your marketing, campaign or product effectiveness. In this article, we’ll show you how to avoid common event and property naming pitfalls and how to structure your events and properties.

* Table of Contents
{:toc}
* * *

## How should I structure my data?


We like to recommend that you think of structuring your data as if you were describing something that happened in the past.

For example, you could tell your coworker that *“600 people signed up for the app by clicking the top right button last month.”*

![Twitter Sign Up Example][TwitterSignupSS]

When we break this statement down into events and properties, we can figure out what parts we need to implement:

* Event: Signed Up
* Property: Sign Up Button Type
* Property Value: Top Right Menu Button

Here is a code example that you can share with your developer to track a Sign Up event that logs the position of the button:
 * `_kmq.push(['record', 'Signed Up', {'Sign Up Button Type':Top Right Menu Button}]);`

Notice that this logs one event (`Signed Up`) with one property (`Sign Up Button Type`). We can add more properties to describe other Sign Up buttons if we want to.

## How many events and properties should I have?

Most of our customers have around 20 key events they track on their website or app.

For a SaaS website or app, we recommend using these key events to start out:

* Visited Site
* Viewed Features Page
* Viewed Pricing Page
* Signed Up
* Completed Setup
* Used Feature X
* Upgraded
* Downgraded
* Canceled

For an E-Commerce website or app, we recommend using these key events to start out:

* Visited Site
* Searched
* Viewed Product
* Added to Cart
* Viewed Cart
* Registered
* Checkout - Start
* Checkout - Billing
* Checkout - Shipping
* Checkout - Review Page
* Checkout - Completed

We recommend that you only track what you need to make decisions. It’s common to track too many things and not even use the data you have in Kissmetrics.

## How do I make sure I don’t end up with thousands of different events and properties?

One thing we’ve seen that you will want to avoid is having your developer write tracking code in a very generic way that creates more events than you might have expected. Some example scenarios include:

* Logging an event for every error code
* Logging an event for viewing or purchasing each product or SKU
* Logging an event for every single unique URL a visitor can hit, like this: `“_kmq.push(['record', document.URL]); // Please don't use this!”`

We are happy to work with your development team to plan, strategize and help provide example code for what is best for your website or app.

Want help structuring your data and naming them? Contact us at <customeraccounts@kissmetrics.com> and we’ll help you plan your analytics strategy.

[TwitterSignupSS]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/how-to-name-and-structure-your-data/TwitterSignUp.png