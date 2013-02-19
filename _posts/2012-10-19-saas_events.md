---
layout: post
title: SaaS Events
categories: apis
author: John Butler
summary: SaaS businesses all often rely on a few key events.
---
The key SaaS events you'll want to integrate are:

* [Signed Up](#signed-up) - sent every time a person signs up for your service
* [Upgraded](#upgraded) - sent every time a person upgrades to a higher priced plan
* [Downgraded](#downgraded) - sent every time a person downgrades to a lower priced plan
* [Canceled](#canceled) - sent every time a person cancels their service with you
* [Billed](#billed) - sent every time you charge a person money
* [Visited Site](#visited-site) - sent every time a person starts a new session with your site

For even more detailed tracking, please refer to our [SaaS Essentials - Best Practices][saas].

Each of these events is described in more detail below. If you can't integrate everything at once - don't worry - KISSmetrics will show what it can based on what you have integrated so far. 

Also, there is no need to track events that do not make sense for your business (such as upgrading and downgrading if you only have one payment plan).

## Signed Up

**When:** Record the `Signed Up` event when someone signs up for your service. Do not record each form submit, just record this event once a user has successfully created their account.

**Note**: If you charge customers immediately upon signup, you will want to also record a separate `Billed` event with the amount charged. If it's possible for a user to signup, and then have billing fail you still want to record `Signed Up` first and then record `Billed` once the billing is successful. This may mean you have users who have `Signed Up` but haven't been able to successfully pay. By recording these events separately KISSmetrics will have the data to look into these kinds of issues.

When recording this event you can also optionally pass in these additional properties:

* `Plan Name` - The name of of the plan the person is signing up for.
* Discount or referral codes, if applicable.
* Demographic information, if available.
* Any other properties that make sense for your application.


## Upgraded

**When:** Record the `Upgraded` event every time a person successfully switches to a higher value plan.  Do not record each form submit, just record this event once a user has successfully upgraded their account.

**Note**: If you charge customers immediately upon upgrading, you will want to record a separate `Billed` event with the amount charged. If it's possible for a user to upgrade, and then have billing fail you still want to record `Upgraded` first and then record `Billed` once the billing is successful. This may mean you have users who have `Upgraded` but haven't been able to successfully pay. By recording these events separately KISSmetrics will have the data to look into these kinds of issues.

When recording this event you can also optionally pass in these additional properties:

* `Plan Name` - The name of of the plan the person is upgrading to.
* Which page or upgrade prompt they came from, if applicable.
* Any other properties that make sense for your application.

You'll notice that there is no `From Plan` property. This is because KISSmetrics keeps a whole history for each person so there is no need to pass in which plan a person is upgrading from - KISSmetrics already knows this!

## Downgraded

**When:** Record the `Downgraded` event every time a person successfully switches to a lower value plan. 

When recording this event you can also optionally pass in these additional properties:

* `Plan Name` - The name of of the plan the person is downgrading to.
* Which page they came from, if applicable.
* Any other properties that make sense for your application.

You'll notice that there is no `From Plan` property. This is because KISSmetrics keeps a whole history for each person so there is no need to pass in which plan a person is upgrading from - KISSmetrics already knows this!

## Canceled

**When:** Record the `Canceled` event every time a person successfully cancels their service with you. If you offer a trial for your service and the user's trial ends you should record that as a separate custom event (e.g. `Trial Ended`).

There are no default properties for this event.

When recording this event you can also optionally pass in these additional properties:

* Reason for cancellation (if you have requested this information from the customer).
* Any other properties that make sense for your application.

## Billed

**When:** Record the `Billed` event every time you bill a customer. 

If you run a monthly billing cycle you will need to record this event every month for each customer billed. 

If you bill customers immediately upon signing up or upgrading, you will need to record those events as well. 

The `Billed` event is the **most important** event to integrate as it lets KISSmetrics tie everything back to revenue for you.

You should only record this event when a person is *successfully* billed. Do not record failed credit card charge attempts. 

The `Billed` event has the following properties:

* `Billing Amount` - The amount that you billed the person. If you are using our Revenue Report, the amount should be in **dollars**.
* `Billing Description` - The optional description of why you charged the person, i.e. *Monthly Subscription* or *Overage Fee*.  Note that you'll want to group revenue by similar descriptions, so we do not recommend using overly specific descriptions such as including customer names or dates.
* Any other properties that make sense for your application.

*Note*: Although we provide a Javascript API method for recording `Billed` events most billing for applications is done server side or by a third-party service. 

This means you will likely have to use one of our server-side APIs such as our [Ruby API][ruby], [PHP API][php], [Python API][python], or [3rd Party APIs][other]. If you need any help with this step please feel free to contact us.

## Visited Site

**When:** The `Visited Site` event is automatically recorded every time someone starts a new browsing session with your site. 

This is not the same as "page views". With `Visited Site` you'll only want to record the event if the person has not been to your site in the last 30 minutes. 

This event can then be used to calculate *Return Frequency*, *Signup Conversion Rate* and other important metrics. 

The Javascript SaaS API takes care of all of these details for you automatically. *If you are using the Javascript API you don't have to do anything regarding this event*. If you are not using the Javascript API you will need to record this event by yourself using one of our other APIs.

The `Visited Site` event automatically records the following properties:

* `URL` - What URL the person started their browsing session on
* `Referrer` - What external site was the person on prior to visiting your site (or "Direct" if a person visited your site directly by typing in the URL or using a bookmark)

## Implementation

Please refer to [Implementing SaaS Events in JavaScript][saas-implementation] for tips.

[saas-implementation]: /apis/saas_javascript
[saas]: /best-practices/saas-essentials
[ruby]: /apis/ruby
[php]: /apis/php
[python]: /apis/python
[other]: /apis/other