---
layout: post
title: How to Track Campaign URLs
categories: how-tos
author: Eric Fung
summary: Different methods for tracking links to take people to your website.
---
You'll likely be interested in tracking external links that point inbound to your website. By "External", I am referring to links that are not within your site itself, but are outside your site pointing people to it. This can include:

* Email campaigns
* Ad campaigns (on Facebook, Adwords, etc.)
* Other referral links you have control over posting (like Twitter or an affiliate)

There are three main ways to go about implementing these events and properties.

# I. UTM Variables

If your links are already tagged with Google-style [UTM variables][utm], then great! When the visitor reaches your site, our JavaScript library reads the incoming URL and triggers an *event* `Ad Campaign Hit` with various `Campaign ____` *properties* to classify what kind of Ad Campaign Hit it was.

## Example

    http://www.example.com/landing-page?utm_source=google&
      utm_medium=email&utm_campaign=march2012

Anyone who clicks the above link will land on `http://www.example.com/landing-page` and have this data recorded for them:

    Event triggered: Ad Campaign Hit
    Campaign Source: google
    Campaign Medium: email
    Campaign Name: march2012
  
* **Pros**: It's easy to set up, especially if your ads are already tagged this way.
* **Cons**: Every UTM-tagged URL is treated as an `Ad Campaign Hit`, which may not make sense if you want to easily separate UTM-tagged email newsletters or Feedburner RSS articles from your paid ads.

# II. URL API

Our [URL API][url] lets you tag a link, so that anyone following that link triggers a KISSmetrics event. Just like with UTM variables, you do this by adding query strings to the destination URL. Unlike with UTM variables, you can do three main actions specific to KISSmetrics: record events, set properties, and identify people.

## Example with Events and Properties

    http://www.example.com/landing-page?kme=Followed+LP+Link&
      km_email+type=march2012

Anyone who clicks the above link will land on `http://www.example.com/landing-page` and have this data recorded for them:

    Event triggered: Followed LP Link
    Email type: march2012

## Example with Identity

    http://www.example.com/landing-page?kmi=example%40example.com

Whoever clicks on the above link will land on `http://www.example.com/landing-page` and will start the browsing session as `example@example.com`. (The `%40` represents the `@` symbol in URLs.)

# III. Custom Solution

The last solution is to do everything custom. You can use JavaScript to get the `document.URL` and parse it for any parameters you're interested in passing to us. At which point, you can record that data using our basic `record` and `set` commands.

* **Pros**: This is most extensible with whatever you're already using, especially affiliate links that don't fall into the above two categories.
* **Cons**: This requires the most effort to set up.

[utm]: /integrations/utm-variables
[url]: /apis/url
[auto-tagging]: http://support.google.com/analytics/bin/answer.py?hl=en&answer=1033981

[ga-builder]: http://support.google.com/analytics/bin/answer.py?hl=en&answer=1033867
[km-builder]: /apis/url#url-builder