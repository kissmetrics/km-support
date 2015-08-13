---
layout: post
title: Step 6 - What We Mean by "People"
categories: learn
portal: university
summary: (<em>Kissmetrics Concept</em>) Events and properties are associated with each <strong>person</strong>, which lets you visualize the entire lifecycle of individual people.
---
* Table of Contents
{:toc}
* * *

# Exercise
<div class="alert alert-success alert-block">
Try segmenting your reports by `Customer ID`. Each row of data now represents an individual person.
</div>

# Takeaways

1. People are the core element in your KM data. When you report on your events, you're looking up which ***people*** are doing these events. When you use properties to create segments, you're looking up which ***people*** are grouped into each segment. In fact, our [People Search][people-demo] is designed to help you get a list of people who meet certain criteria.
2. People are represented by "identities".
3. We can combine data from different sources about one person, if that data is attributed to one of the person's identities.

An example:

  * `nbTo2Y6gBMjpu12wKz5pgPBeIXk=` did the event **Visited Site** - a JS API event.
  * `efung@kissmetrics.com` did the event **Signed Up** - a MySQL event.
  * `efung@kissmetrics.com` did the event **Purchased** - a Recurly event.
  * If KM knows that `nbTo2Y6gBMjpu12wKz5pgPBeIXk=` and `efung@kissmetrics.com` represent the same person, we will combine the data from JS, MySQL, and Recurly to form a more holistic picture about this person.

[people-demo]: https://demo.kissmetrics.com/people
