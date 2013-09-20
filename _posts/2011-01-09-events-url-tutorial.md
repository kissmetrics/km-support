---
layout: post
title: Events - Visits the URL
categories: [tutorial, event-library-tutorial]
author: Lars Lofgren
summary: Trigger events when someone visits a URL.
---
<div id="wistia_700b63755a" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400"></div>

## Create the Event

To track that people have viewed a certain page, grab the URL of the page and name the event something easy to remember.

![Visits the URL][visits-the-url]

Some examples include:

* The URL of a landing page
* The payment confirmation page of a checkout process
* The URL of your pricing page
* A URL to download a key document of yours
* The final page of any funnel on your site

If you want to track *every* [page view][page-views], you can enable it in your [JavaScript settings][js-settings]. However, we really, really recommend you create unique events for individual URLs to make the most of our reporting tools.

## Wildcards

You can also record visits to similar URLs under one event name. Use `*` to indicate wildcards.

For example, let’s say you’re giving out beta invites to your site. All of the URLs are generated according to a pattern, like:

* `yourdomain.com/beta/TIC04tRF9Y`
* `yourdomain.com/beta/89rrPNMWsD`

You could record visits to `yourdomain.com/beta/*/`, which encompasses all of these similar URLs. Please refer to [Wildcards][wildcards] for more examples.

## Partial URLs

Rather than typing in the domain of your site every time, you can use partial URLs. Here are some examples:

* `https://yourdomain.com/plans` is the same as `/plans`
* `http://yourdomain.com/reports/*` is the same as `/reports/*`

To clarify, a partial URL is the entire part of the URL that follows the domain.

Don't forget about that initial `/`!

## Tracking Different Subdomains

However, if you do want to differentiate different subdomains, we can support that too! Please verify in your site's [JavaScript Settings][js-settings] that the option for **Include URL Host and Subdomain (Event Library)** is enabled. This lets our Event Library differentiate events that occur on similar URLs:

* `https://sub1.yourdomain.com/foo`
* `https://sub2.yourdomain.com/foo`
* `https://sub3.yourdomain.com/foo`

This option is enabled by default.

## Query Strings

The Event Library can differentiate between two *query strings*, (the ends of some URLs that start with `?`). That is, you can safely set up these events to be different from each other:

* Event 1 = `http://yourdomain.com/foo.html?id=1`
* Event 2 = `http://yourdomain.com/foo.html?id=2`

(In this example, we detect the difference between `?id=1` and `?id=2` though they're on the same page `/foo.html`.)

## Technical Notes

* Our Event Library URL detection has difficulty with *hash symbols* `#` in the URL. Considering placing `record` calls from our JavaScript Library on the pages you wish to track, especially if you are using *backbone.js*.
* We do not support regular expressions. Please try using JavaScript Library calls for these types of events. If that does not work for you, please let us know if you are interested in seeing this functionality within the Event Library.

### Testing

To quickly test your URL pattern without creating an event, you can open up your browser's JavaScript console and run `KM.um(pattern)`, where `pattern` is your URL pattern:

    > KM.um("/beta/*");
    true

[visits-the-url]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/event-library/visits-the-url.png
[page-views]: /apis/javascript#page-views
[js-settings]: https://app.kissmetrics.com/product.js_settings
[wildcards]: /tools/event-library/events-url/wildcards

<script charset="ISO-8859-1" src="http://fast.wistia.com/static/E-v1.js">
</script>
<script type="text/javascript">
loadKMTrackableVideo("700b63755a", "Events: Visits the URL");
</script>