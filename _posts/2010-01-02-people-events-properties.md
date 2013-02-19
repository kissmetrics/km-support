---
layout: post
title: Your Data Is All People, Events and Properties
categories: getting-started
author: Eric Fung
summary: All the data in KISSmetrics comes down to three groups - people, events and properties.
---
All the data in KISSmetrics is in the form of one of three items: **people**, **events** and **properties**. In short, these indicate who your users are, what they do, and additional information about them.

![Simple API][simple-api]

## People

The core unit in KISSmetrics is a person, and we really do mean a ***person*** -- a human being, not a unique visit or a session. We strive to make your data intelligible across a lot of people, but in the end, it's possible to see data for each individual person.

People are represented by "**identities**". A person can be represented by one or more identities:

* *Anonymous identities* are placeholders to represent a new person you don't know much about. You know that this is a new person who visited your site or installed your application, but they haven't signed up for an account, or subscribed to your newsletter, etc.
* *Named identities* are IDs that are meaningful to you. Some examples include email addresses, usernames, Facebook IDs, or some other account ID. You choose what type of named identity to represent your customers. When your customer creates an account, logs in, or subscribes to your newsletters, you have a more tangible piece of information to represent that *person*.

### API Example for Identifying People

Set up identities by using the [`identify` command][identify]. An example JavaScript Library call could look like this:

    // This is just a demonstration
    _kmq.push(['identify', 'mister.roboto']);

Realistically, though, you would write the API call to look at your available code and substitute in the appropriate value. Something like this:

    // This is just a demonstration
    _kmq.push(['identify', '<%=SessionDetails.UserName%>']);

The details for saving identities can vary, depending on how you're sending us us data. To read more on the topic, please see [Understanding Identities][id-management].

---

## Events

People perform ***events*** in your site or application. Think of events as *actions* your users do. For example:

* Started a browsing session (`Visited Site`)
* `Saw homepage`
* `Saw landing page`
* `Downloaded app`
* `Subscribed to newsletter`
* `Opened Email`
* `Signed up`
* `Shared content` (on Twitter or Facebook, for example)
* `Billed` or `Purchased` (ie. paid you)

Notice that these *actions* aren't limited to just being on a particular URL. The event might happen on one of your servers, or even happen offline (as a result of a phone call, for example). To handle such a variety of actions, KISSmetrics provides a [large number of ways for you to send us this data][data-ways]. Whichever ways you choose to send us data will depend on your setup and on the developer resources available to you.

To get started quickly, though, we suggest trying our [JavaScript Library][js] because:

1. It can be installed in 5 minutes or less.
2. It starts tracking [a few important events][auto-track] for you automatically.
3. Once the JavaScript snippet is installed on your site, a non-developer can get started with creating some events by using our [Event Library][event-library].

### API Example for Events

In general, record events using the [`record` command][record]. An example JavaScript Library call could look like this:

    _kmq.push(['record', 'Viewed Homepage']);

But as mentioned above, there are [a lot of ways to send us data][data-ways], not all of which require writing code. Please refer to the documentation for whichever method you choose, to find out how to record events.

### Notes on Events

* If you're not sure where to start, you can refer to our [Best Practices][best-practices] to get some ideas for what to track, and how to name your events. We have guides for SaaS and e-commerce businesses.
* When naming events, you can use almost any name you like. (There are only a few limitations, listed below.)
* Please keep event names under 255 characters. Commas (`,`), and colons (`:`) will be changed to spaces, so an event "`foo:bar,baz`" will be saved as "`foo bar baz`".
* Event names are not case sensitive, so `Signed Up` and `Signed up` will be treated as the same event. That said, events that share the same name will be aggregated. For example, if you have 10 different landing pages on 10 different URLs, you can set up each URL to record the same `Saw landing page` event. That way, everyone who sees **any** landing page is counted as doing that event, regardless of which one they saw.
* Each account can have up to 65,535 unique event *names*. In other words, you can track 65,535 different *types* of actions. For example, `Viewed Homepage` and `Signed Up` would be 2 of your 65,535 event names. We can still record whether millions of people can do these two events.
* For each person, we save the last 1000 instances of each event. For example, we'll remember the last 1000 times that I `Viewed Homepage`.

---

## Properties

***Properties*** indicate additional information about each person. Primarily, properties let you segment similar people into groups (called "**values**" of a property) based on one criteria (this is the "**property**" itself). Here are some example properties, with their corresponding values:

* Gender (example values could be "`Male`" or "`Female`")
* Which referral website URL brought the person to your site (an example value is "`http://www.google.com`")
* Is this a returning visitor? (eg. "`Yes`" or "`No`")
* Which A/B test variation did they see (eg. "`Original`", "`June 2 variation`" or "`August variation`")
* Which plan they signed up for (eg. "`Enterprise`", "`Premium`" or "`Free`")

Properties can be numeric too:

* Amount of revenue gained from a transaction (eg. "`49.99`" or "`-10.50`" for a refund)
* Age (eg. "`21`")

Numeric properties are special, because our reports can do some math in finding sums, averages, mins, and maxes. For example, for a numeric `Revenue` property, you'd be able to:

* Find the total revenue, across all transactions and all people
* Find the average transaction size, or the smallest/min, or the largest/max.
* Find the average net revenue per person (sum up the revenue per person and take the average across all people)

The best part is that KISSmetrics saves all the values of each property; nothing is ever "overwritten". This lets you toggle the [report options][prop-options] to show the First Value or Last Value set, and soon, we'll provide a way to show Every Value ever set across many people at a time.

## Properties of a Person

Properties can be recorded on their own, or as part of a generic event to distinguish that event. In both cases, KISSmetrics stores the value as a property *of the person*. This lets you segment your reports on a property that may have been recorded outside of the events in the report you're looking at -- for example, looking at the effects of a past A/B test on the number of upgrades this month.

You can still set the [report options][prop-options] to reconnect a property with the event it came from.

### API Example for Setting Properties

In general, set properties as part of an event by using the [`record` command][record], or set standalone properties with the [`set` command][set]. Example JavaScript Library calls could look like this:


    // This …
    _kmq.push(['record', 'Viewed Homepage',
       {'Homepage A/B Test':'Original Variation'}]);

    // Is more or less equivalent to this…
    _kmq.push(['record', 'Viewed Homepage']);
    _kmq.push(['set', {'Homepage A/B Test':'Original Variation'}]);

But as mentioned above, there are [a lot of ways to send us data][data-ways], not all of which require writing code. Please refer to the appropriate documentation for how to actually go about setting properties.

### Notes on Properties

* If you're not sure where to start, you can refer to our [Best Practices][best-practices] to get some ideas for what to track, and how to name your properties. We have guides for SaaS and e-commerce businesses.
* When naming properties, you can use almost any name you like. (There are only a few limitations, listed below.)
* Please keep property names under 255 characters. Commas (`,`), and colons (`:`) will be changed to spaces, so an event "`foo:bar,baz`" will be saved as "`foo bar baz`".
* Property names are not case sensitive, so `Plan Type` and `Plan type` will be treated as the same property. That said, properties that share the same name will be aggregated. For example, if the `Amount` property is set in three different areas, it will all contribute to the same `Amount` property.
* However, the values of those properties *are* case sensitive. So for a scenario like: `Plan Type:Gold` and `Plan Type:gold`, we'll see two different plan types - "Gold" and "gold".
* Each account can have up to 65,535 unique property *names*. In other words, you can track 65,535 different *types* of actions. For example, `Returning` and `URL` would be 2 of your 65,535 event names. We can still record whether millions of people receive these properties.
* The values of properties can be text or numbers (8 KB of data, in theory). We can't yet support JSON-structured values.
* You can think of the `Customer ID` or identity as a special property of each person.

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

# Code Examples

Additional code examples are available at [Common Methods][common].

[id-management]: /getting-started/understanding-identities
[identify]: /apis/common-methods#identify

[simple-api]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/simple-api.png

[data-ways]: /getting-started/ways-to-send-us-data
[js]: /apis/javascript
[auto-track]: /apis/javascript#events-automatically-tracked
[event-library]: /tutorial/event-library-tutorial/
[record]: /apis/common-methods#record

[best-practices]: /best-practices
[prop-options]: /advanced/advanced-properties#property-options
[set]: /apis/common-methods#set

[tips]: /apis/api-tips
[common]: /apis/common-methods