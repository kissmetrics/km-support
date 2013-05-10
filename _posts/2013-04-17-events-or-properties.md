---
layout: post
categories: how-tos
title: "Should I set up my data as Events or Properties?"
tags: [common_dev_pitfalls]
author: Eric Fung
summary: If you're not sure whether to use events or properties to store your data, consider this rule.
---

In general, the way to think about structuring your data looks like this:

* Create **Events** to group people who do similar actions.
* Record *Properties* for the criteria you are comparing/contrasting similar people.

## Tradeoffs

* Tracking with events could lead to [too many events][too-many], and it becomes difficult to create aggregate reports without recording at least 2 events for each user action. But it's still the best way to count the number of times Action X happened.
* Tracking with properties is the best way to compare and contrast sets of people. The downside is that our reports do not make it elegant to list the number of times each Property Y was set -- this is exclusive to the Power Report.

In practice, there's a balance in the way you structure your data, mainly because the reports you're looking for can change as time goes on. Let's walk through three examples:

<a name="example-1"></a>
### Example 1: Very generic event names (in bold) with one set of specific properties (name of the property is italicized and the values of the property are underlined).

If you're only running tests on a few Landing Pages, you'll likely get less confused by a generic event name.


*04-06-2013 Landing Page Test* | **Received Email** | **Viewed Landing Page**
-- | -- | --
LP-Variation1 | 50 | 25
LP-Original-01-01-2013 | 50 | 10

<a name="example-2"></a>
### Example 2: Specific event names with one set of specific properties.

If you run simultaneous tests on several Landing Pages, you might want to report on the results of this particular test in isolation.)

*04-06-2013 Landing Page Test* | **Received Email** | **Participated in “04-06-2013 Landing Page Test”**
-- | -- | --
LP-Variation1 | 50 | 25
LP-Original-01-01-2013 | 50 | 10

<a name="example-3"></a>
### Example 3: Specific event names combined with two sets of specific properties.

If you are running simultaneous tests on two parts of the funnel -- the email AND the landing page, each of those two should be their own Property.

<font color="blue">*04-06-2013 Introduction Email Test*</font> & <font color="purple">*04-06-2013 Landing Page Test*</font> | **Received Email** | **Participated in “04-06-2013 Landing Page Test”**
-- | -- | --
<font color="blue">Email Variation1</font> | 50 | 25
  &nbsp; &nbsp; <font color="purple">LP-Variation1</font> | &nbsp; &nbsp; 25 | &nbsp; &nbsp; 15
  &nbsp; &nbsp; <font color="purple">LP-Original-01-01-2013</font> | &nbsp; &nbsp; 25 | &nbsp; &nbsp; 10
<font color="blue">Email Control</font> | 50 | 10
  &nbsp; &nbsp; <font color="purple">LP-Variation1</font> | &nbsp; &nbsp; 25 | &nbsp; &nbsp; 6
  &nbsp; &nbsp; <font color="purple">LP-Original-01-01-2013</font> | &nbsp; &nbsp; 25 | &nbsp; &nbsp; 4

## Takeaways

In each of these cases, Properties are named to be specific (rather than "A/B Test"), so that you don't mix data in from other tests.

[too-many]: /troubleshooting/too-many-event-names