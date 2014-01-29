---
layout: post
title: Too Many Unique Event Names or Property Names
categories: troubleshooting
tags: [common_dev_pitfalls]
summary: Having too many event names slows the experience with our app. Please avoid sending us too many event names.
---
* Table of Contents
{:toc}
* * *

If you have over about a thousand unique event names or unique property names, it impacts the speed of browsing around the KISSmetrics site. We can handle millions of people doing the same event millions of times, but this is a matter of having too many different types of events or properties.

## How is it possible to end up with thousands of different events?

This typically happens if you write API calls in a very generic way that creates more events than you might have expected. Some example scenarios include:

* Logging an event for every single unique URL a visitor can hit, like this: "`_kmq.push(['record', document.URL]); // Please don't use this!`"
* Logging an event for every error code
* Logging an event for vieweing or purchasing each product or SKU


## How should I structure my data instead?

There is often a way to pass the data you're looking for as the ***value*** to a KISSmetrics property, so that we can capture all of the data while making it more manageable to report on. For example:

* Page views: `_kmq.push(['record', 'Page View', {'Viewed URL': document.URL}]);`
* Viewing a product: `_kmq.push(['record', 'Viewed Potential Purchase', {'Viewed Product SKU':code-to-get-sku}]);`

Notice that this logs *one* event (`Page View` or `Viewed Potential Purchase`) with *one* property (`Viewed URL` or `Viewed Product SKU`) while keeping the various data points as values to that single property.

Please contact us if you have additional questions about structuring your data.