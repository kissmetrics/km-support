---
layout: post
title: Tracking UTM Variables
categories: integrations
author: Eric Fung
summary: Some notes to consider when using Google Analytics' UTM variables with KISSmetrics.
---
Many of our customers use KISSmetrics side-by-side with Google Analytics. Similar to Google Analytics, KISSmetrics can track site visits via your UTM-tagged ads, including AdWords traffic. To enable this behavior, please make sure that `Tagged URLs` is `On` in your [JavaScript Settings][].

Keep in mind that since Google analytics has no identifiers, it cannot combine one **person**'s web traffic from multiple computers/browsers/mobile devices into one "unique visit". As a result, you may see **2-5x** more views in Google Analytics than in KISSmetrics.

Generally, we can track your usual UTM-tagged links out of the box, without any problems. There are, however, two cases that may require some additional consideration:

[JavaScript Settings]:https://www.kissmetrics.com/product.js_settings

## Google Analytics' Auto-Tagging vs. Manual Tagging

Google Analytics has a method of tagging your URLs called ["Destination URL Auto-tagging"][auto-tagging]. If your links have `?gclid=` at the end of your URL (ie. `www.mysite.com/?gclid=123xyz`), your ads are auto-tagged. When visitors click on this link, we'll log the event `Ad Campaign Hit`, but we cannot log any additional information about the campaign source, medium, terms, etc.

However, if your URLs include [UTM variables][url-builder] like `utm_source=`, we'll log the event `Ad Campaign Hit` and also store as Properties the campaign information embedded in the URL.

For example, if someone clicks on the link `www.mysite.com/?utm_source=google&utm_medium=email&utm_campaign=20off`, this information is passed to KISSmetrics:

    Event triggered: Ad Campaign Hit
    URL: www.mysite.com/?utm_source=google&utm_medium=email&utm_campaign=20off
    Campaign Source: google
    Campaign Medium: email
    Campaign Name: 20off

[auto-tagging]:http://support.google.com/analytics/bin/answer.py?hl=en&answer=1033981
[url-builder]:http://support.google.com/analytics/bin/answer.py?hl=en&answer=1033867

## When UTM Information Is Not Recorded

Suppose you notice that your links are properly tagged with UTM variables, but they are still not being recorded in KISSmetrics. The main thing to consider is: Are visitors being redirected to a different page on your site?

### An Example

Let's say your links are set up to track one thing: that the Campaign Source is "affiliates".

`www.mysite.com/?utm_source=affiliates`

But when they follow that link, they actually wind up on a different URL - your landing page.

`www.mysite.com/landingpage`

You notice that the `Ad Campaign Hit` did not register, though it should have.

### What happened?

Your site redirected from the tagged URL to another page before the KISSmetrics script could even load and detect that a Campaign Hit event occurred. The redirect stripped away the UTM variables that brought the visitor here. By the time the KM script loads on `/landingpage`, the UTM variables have been dropped.

There are a few solutions:

1) Delay the redirect action until the KM script has loaded.

    // This script would go on www.mysite.com
    <script>
    _kmq.push(function(){
    
    // The logic to redirect to /landingpage goes here
    
    });
    </script>

2) Capture the UTM variables attached to `www.mysite.com`, then append them to `www.mysite.com/landingpage` where the KM script can detect them.