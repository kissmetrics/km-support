---
layout: post
title: Step 2 - Start Installation by Adding Our JavaScript Library to Your Website
categories: learn
portal: university
summary: Once you know what KPIs to begin focusing on, let's start creating events, starting with installing our JavaScript Library.
---
* Table of Contents
{:toc}
* * *

<div id="wistia_256139b3f9" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400">
</div>

# Takeaways

1. It loads asynchronously, so it **does not slow your site** down. If you *absolutely* need to host our code yourself, you can, but [keep these points in mind][self-hosting].
2. It is the easiest of our libraries to install and start using. There's a 95% chance you will find a use for the JavaScript Library, even if you plan to use our integrations or implement server-side tracking.
3. Installation starts tracking traffic events immediately.

The most common ones you'll want to know about:

* `Visited Site`: triggers when a person starts a browsing session on your website.
* `Search Engine Hit`: triggers when a person arrives to your site via organic search.
* `Ad Campaign Hit`: triggers when a person arrives to your site using a [UTM-tagged URL][utm].

**Get familiar with the full list of [Events the JavaScript Library Automatically Tracks][auto-track]**.

## If you are tracking several domains...

We recommend you add our tracking to all of your *subdomains* (`www.kissmetrics.com` and `app.kissmetrics.com` for example). That way, we can accurately capture incoming traffic, so that it doesn't look like people are being referred to your website by other pages in your website. However, tracking *several root level domains* is significantly more difficult, and we'll go into more detail on this page about [Tracking Multiple Domains][multiple-domains].

## If you use a tag manager...

Customers have successfully installed our JavaScript library through their tag management system, like [Google Tag Manager][gtm].

## If you use a CMS like WordPress...

Content-management systems often allow plugins to help you extend your site's functionality. We provide an official [WordPress plugin][wp-plugin] - the plugin already does the job of adding the JavaScript library to every page of your WordPress installation. If you use the plugin, you won't have to go digging in the WordPress templates to manually add our JS.

See if your own CMS has a Kissmetrics plugin; chances are it will also try to add the JavaScript to each page. Please check the plugin's documentation!

## If you plan to test Kissmetrics locally (`localhost`)...

We highly recommend [creating a new API key][create-product] to separate your testing data from your actual live, production data. Additionally, read about [developing locally][local] with our JavaScript library, because its functionality depends on the existence of browser cookies.

# Exercise
<div class="alert alert-success alert-block">
Install the JS snippet on your website or a testing/staging website.
</div>

[self-hosting]: /apis/javascript/hosting-js-yourself
[auto-track]: /apis/javascript#events-automatically-tracked
[utm]: /integrations/utm-variables
[multiple-domains]: /apis/javascript/tracking-multiple-domains
[gtm]: /apis/javascript/google-tag-manager
[create-product]: /how-tos/create-site
[local]: /advanced/local-development
[wp-plugin]: /integrations/wordpress
