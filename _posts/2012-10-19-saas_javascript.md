---
layout: post
title: SaaS Events - Implementation
categories: apis
author: John Butler
summary: Here are suggestions for implementing important SaaS events using our JavaScript Library.
---
If you are familiar with [what events are important to track for your SaaS business](/apis/saas_events), let’s look at the technical details of implementing these events using our JavaScript Library	.

## Initial Setup

Before you can start tracking the events below, you'll need to make sure that you’ve included the KISSmetrics javascript on your site. To do this, visit the “Settings” link in the Site menu for the site you want to use KISSmetrics on:

![](/images/site_settings_link.png)

Next, locate the section titled **“Your javascript code”**:
  
![](/images/your_javascript_code.jpg)

Copy the code there and paste it into the `<head>` section of every page of your site.
  
Once the javascript is on your site, then you can start passing events through to KISSmetrics as described below.

### Identifying your customers

In order to make sure that the events below are associated with a specific customer using your site, you'll want to make sure that you're passing through an identifier to KISSmetrics:

    _kmq.push(['identify', 'your_identifier_here']);
    
In the above example, 'your_identifier_here' would be replaced with an ID that you would provide us with (e.g. an email address). To learn more about passing through identities to KISSmetrics see our documentation on [Understanding Identities][ids].

Let’s take a look at the SaaS Events we'll need to integrate and how we can use the Javascript SaaS API to do so.

## API Methods

The following is a list of available methods for the Javascript SaaS API:

* [`signedUp`](#signed-up) - Records [Signed Up](/apis/saas_events#signed-up) events
* [`upgraded`](#upgraded) - Records [Upgraded](/apis/saas_events#upgraded) events
* [`downgraded`](#downgraded) - Records [Downgraded](/apis/saas_events#downgraded) events
* [`billed`](#billed) - Records [Billed](/apis/saas_events#billed) events
* [`canceled`](#canceled) - Records [Canceled](/apis/saas_events#canceled) events

*Note:* The [Visited Site](/apis/saas_events#visited-site) event is automatically tracked for you if you use the Javascript SaaS API. 

Also, keep in mind that all events are tracked on a per-person basis. If you want to learn more about how KISSmetrics treats events, please read our documentation on People, Events and Properties.

## `signedUp`

Records a [Signed Up](/apis/saas_events#signed-up) event. The `signedUp` method optionally accepts a `Plan Name` as an additional argument. We recommend passing through the `Plan Name` property so that you know which plan a user signed up for. This will allow you to determine which of your plans generate the most revenue overall. This event and properties are [described here](/apis/saas_events#signed-up).

*Note:* If you immediately collect money from a user upon signup you'll need to record a `Billed` event separately.

#### Example 1

The following records a [Signed Up](/apis/saas_events#signed-up) event for the current person:

    _kmq.push(['signedUp']);

#### Example 2 - with a Plan Name

The following example records a [Signed Up](/apis/saas_events#signed-up) event and sets `Plan Name` to "Premium Plan".

    _kmq.push(['signedUp', 'Premium Plan']);

#### Example 3 - with Additional Properties

Like all the Javascript SaaS API methods you can pass in additional properties that make sense for your application:

    _kmq.push(['signedUp', 'Premium Plan', {'Coupon Code': 'FREE10'} ]);

*Note:* If you don’t want to pass through a `Plan Name`, but you still want to pass through a custom property, you can simply use `null` for the `Plan Name` argument:

    _kmq.push(['signedUp', null, {'Affiliate ID': 123} ]);

## `upgraded`

Records an [Upgraded](/apis/saas_events#upgraded) event. The `upgraded` method optionally accepts a `Plan Name` as an additional argument. We recommend passing through the `Plan Name` property so that you know which plan a user upgraded to. This will allow you to determine which of your plans generate the most revenue overall. As [described here](/apis/saas_events#upgraded) there is no need to pass in what plan a user is upgrading from, because KISSmetrics keeps a whole history for every user.

*Note:* If you immediately collect money from a user upon upgrade you'll need to record a `Billed` event separately.

#### Example 1

The following records an [Upgraded](/apis/saas_events#upgraded) event for the current person:

    _kmq.push(['upgraded']);

#### Example 2 - with a Plan Name

The following example records an [Upgraded](/apis/saas_events#upgraded) event and sets `Plan Name` to "Premium Plan".

    _kmq.push(['upgraded', 'Premium Plan']);

#### Example 3 - with Additional Properties

Like all the Javascript SaaS API methods you can pass in additional properties that make sense for your application:

    _kmq.push(['upgraded', 'Premium Plan', {'Coupon Code': 'FREE10'} ]);

*Note:* If you don’t want to pass through a `Plan Name`, but you still want to pass through a custom property, you can simply use `null` for the `Plan Name` argument:

    _kmq.push(['upgraded', null, {'Upgraded From': 'Dashboard'} ]);

## `downgraded`

Records a [Downgraded](/apis/saas_events#downgraded) event. The `downgraded` method optionally accepts a `Plan Name` as an additional argument. We recommend passing through the `Plan Name` property so that you know which plan a user downgraded to. This will allow you to determine which of your plans generate the most revenue overall. As [described here](/apis/saas_events#downgraded) there is no need to pass in what plan a user is downgrading from, because KISSmetrics keeps a whole history for every user.

*Note:* If you immediately collect money from a user upon upgrade you'll need to record a `Billed` event separately.

#### Example 1

The following records a [Downgraded](/apis/saas_events#downgraded) event for the current person:

    _kmq.push(['downgraded']);

#### Example 2 - with a Plan Name

The following example records a [Downgraded](/apis/saas_events#downgraded) event and sets `Plan Name` to "Premium Plan".

    _kmq.push(['downgraded', 'Basic Plan']);

#### Example 3 - with Additional Properties

Like all the Javascript SaaS API methods you can pass in additional properties that make sense for your application:

    _kmq.push(['downgraded', 'Basic Plan', {'Downgrade Reason': 'Not using premium 
      features'} ]);

*Note:* If you don’t want to pass through a `Plan Name`, but you still want to pass through a custom property, you can simply use `null` for the `Plan Name` argument:

    _kmq.push(['upgraded', null, {'Downgraded From': 'Dashboard'} ]);

## `canceled`

Records a [Canceled](/apis/saas_events#canceled) event.

#### Example 1

The following records a [Canceled](/apis/saas_events#canceled) event for the current person:

    _kmq.push(['canceled']);

#### Example 2 - with Additional Properties

Like all the Javascript SaaS API methods you can pass in additional properties that make sense for your application:

    _kmq.push(['canceled', {'Cancel Reason': 'Too expensive'} ]);

## `billed`

Records a [Billed](/apis/saas_events#billed) event. The `billed` method requires the `Billing Amount` to be passed in as the first argument. It also accepts a `Billing Description` as an optional second argument. This event and properties are [described here](/apis/saas_events#billed).

Unlike the other events, we realize that `billed` is more likely to be called on the server-side. If this is the case for your application, please read through our documentation on our APIs to learn how to call server-side billing events.

*Note:* As we previously mentioned, you must call `billed` when you call either `signedUp` or `upgraded` *if you are charging users immediately*:

    _kmq.push(['upgraded', 'Premium Plan']);
    _kmq.push(['billed', 149.99, 'Upgraded']);

#### Example 1

In the following example we record a [Billed](/apis/saas_events#billed) event with a `Billing Amount` of "29.99":

    _kmq.push(['billed', 29.99]);

#### Example 2 - with a Billing Description

In the following example we record a [Billed](/apis/saas_events#billed) event with a `Billing Description` of "Monthly Bill":

    _kmq.push(['billed', 29.99, 'Monthly Bill' ]);

#### Example 3 - with Additional Properties

Like all the Javascript SaaS API methods you can pass in additional properties that make sense for your application:

    _kmq.push(['billed', 29.99, 'Monthly Bill', {'Billing Method': 
      'Credit Card'} ]);

    // Equivalent to this API call that uses `record`
	_kmq.push(['record', 'Billed' {'Billing Amount':29.99, 'Billing Description':'Monthly Bill', 'Billing Method':'Credit Card'}]);

*Note:* If you don’t want to pass through a `Billing Description`, but you still want to pass through a custom property, you can simply use `null` for the `Billing Description` argument:

    _kmq.push(['billed', 29.99, null, {'Billing Method': 'Credit Card'} ]);

[ids]: /getting-started/understanding-identities