---
layout: post
categories: troubleshooting
tags: []
author: Eric Fung
title: "When I segment by a property, what does 'None' mean?"
summary: "'None' or 'Direct means we did not find a value for this person."
---
* Table of Contents
{:toc}
* * *

When you segment your reports by a property, you'll notice some people are listed in the "None" segment, or "Direct" for URL-based properties like `Referrer`.

Generally speaking, this means we did not find a value for the KISSmetrics Property for this set of people. Three things may explain this:

1. They did not yet do the event which sets the properties for these people.
2. In our funnels, we provide [many more flexible options][adv] for showing which properties to look up. You might find it more meaningful to use 'First Ever', 'Last Ever', or 'First/Last within Date Range'.
3. If you are using several methods of sending us data (for example, our JavaScript Library as well as via our API), your visitors may not be appropriately identified by the various ID's in their lifetimes as your customers. Please refer to [Identity Example #4][no-alias] to see a deeper explanation and suggested solutions.


## What does `Not Provided` mean in my Search Terms?

In October 2011, Google [obscured the searches made by people who were logged into their Google accounts][not-provided]. If you are segmenting your reports by the `Search Terms` property, "Not Provided" means that customers are searching from Google but we can't tell with which keywords they are searching.


[not-provided]: http://www.seomoz.org/blog/google-hides-search-referral-data-with-new-ssl-implementation-emergency-whiteboard-friday
[adv]: http://support.kissmetrics.com/advanced/advanced-properties#last-property-name-before-some-step-of-this-report
[no-alias]: http://support.kissmetrics.com/troubleshooting/troubleshooting-identities#4
