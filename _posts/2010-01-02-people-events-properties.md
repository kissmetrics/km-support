---
layout: post
title: Your Data Is All People, Events and Properties
categories: getting-started
author: Eric Fung
summary: All the data in KISSmetrics comes down to three groups - people, events and properties.
---
All the data in KISSmetrics is in the form **people**, **events** and **properties**. In short, these indicate who your users are, what they do, and additional information about them (which lets you group similar people together).

![Simple API][simple-api]

## People

The core unit in KISSmetrics is a person, and we really do mean a ***person*** -- a human being, not a unique visit or a session. You may often be looking at aggregate reports of user behavior, but at the end of the day, it's possible to see data for each individual person.

People are represented by "**identities**", usually more than one. There are two types:

* ***Named Identities***: a *recognizable* word or phrase that represents a person:
  * `foo@example.com`
  * `User #12345`
  * `Facebook ID #67890`
* ***Anonymous Identities***: a *randomly-generated* string that represents a person before you know who they are:
  * `y75Fe33597qBqkR4obZZYV+wF3Y=`
  * `6j1KH1zrwBS6T2iIsixvpfnCnxY=`

When KISSmetrics is appropriately implemented, you can follow a person's lifecycle with your product from when they were just any other visitor to when they finally sign up and repeatedly log in.

## Events

People interact with your site or application. Think of **events** as the *actions* your users do. For example:

* Started a browsing session (`Visited Site`)
* `Saw homepage`
* `Saw landing page`
* `Downloaded app`
* `Subscribed to newsletter`
* `Opened Email`
* `Signed up`
* `Shared content` (on Twitter or Facebook, for example)
* `Billed` or `Purchased` (ie. paid you)

These *actions* aren't limited to just visiting a particular URL. The event might happen on one of your servers, or even happen offline (the customer responds to your sales person's phone call, for example). To handle such a variety of actions, KISSmetrics provides a [large number of ways for you to send us this data][data-ways].

Our [Best Practices][best-practices] are a great start to introduce you to important events to record. We have guides for SaaS and e-commerce businesses.

## Properties

***Properties*** indicate additional information about each person. Primarily, properties let you segment similar people into groups (using the "**values**" of a property) based on one criteria (this is the "**property**" itself). Here are some example properties, with their corresponding values:

* Gender (example values could be "`Male`" or "`Female`")
* Which referral website URL brought the person to your site? (An example value is "`http://www.google.com`")
* Is this a returning visitor? (eg. "`Yes`" or "`No`")
* Which A/B test variation did they see? (eg. "`Original`", "`June 2 variation`" or "`August variation`")
* Which plan did they signed up for? (eg. "`Enterprise`", "`Premium`" or "`Free`")

Properties can be numeric too:

* Amount of revenue gained from a transaction (eg. "`49.99`" or "`-10.50`" for a refund)
* Age (eg. "`21`")

Numeric properties are special, because our reports can do some math in finding sums, averages, mins, and maxes. For example, for a numeric `Revenue` property, you'd be able to:

* Find the total revenue, across all transactions and all people
* Find the average transaction size, or the smallest/min, or the largest/max.
* Find the average net revenue per person (sum up the revenue per person and take the average across all people)

The best part is that KISSmetrics saves all the values of each property; nothing is ever "overwritten". This lets you toggle the [report options][prop-options] to show the First Value or Last Value set, and with the [Power Report][power-report], even show Every Value ever set across many people at a time.

## Properties Are Saved to Each Person

Whether you record properties as part of an event or set them individually, KISSmetrics remembers the property ***as being associated with the person***. This lets you use properties to segment reports in ways you may not have expected.

For example, you can look at the correlation between last month's A/B test and the number of upgrades this month. Most other analytics solutions would require you to re-record the A/B test property when the Upgrade occurs.

Again, our [Best Practices][best-practices] are a great start to introduce you to important properties to record. We have guides for SaaS and e-commerce businesses.

# Putting It All Together

Let's put it all together. Pretend you're collecting analytics for a marathon. You might structure the data like this:

Show me the people who…

1. Signed Up for the Race (event)
2. Started the Race (event)
3. Finished the Race (event)

Then you can segment the people who did these events by different properties:

* What brand of shoe the runner wore
* Gender
* A runner's sponsors
* How many miles the runner ran for each training session (you'd be able to look at total, average, minimum, and maximum)
* How many hours of sleep the runner got the night before (also a numeric property)
* Bib number, or name, or email address (aka `Customer ID`, representative of the person)

[simple-api]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/simple-api.png

[best-practices]: /best-practices
[prop-options]: /advanced/advanced-properties
[power-report]: /tools/power-report
[data-ways]: /getting-started/ways-to-send-us-data