---
layout: post
title: JavaScript Settings
categories: [apis, javascript]
author: Eric Fung
summary: JavaScript settings let you adjust what our JavaScript library can do automatically for you.
---
Our JavaScript Library tracks several events for you automatically. 

# Events Automatically Tracked

If you are using the JavaScript library, we automatically track certain events and properties by default:

* ## "Visited Site"
  * The Property `referrer` indicates the URL the visitor came from
  * The Property `URL` indicates the URL of the page they started browsing your site
  * We record **Visited Site** once for each visitor's browsing session. After 30 minutes of inactivity, the next time the visitor comes back will trigger a new **Visited Site** event, and they will also have the `Returning` Property set to 1.
* ## Form Fields
  * If you set up an event to log a form submission (either through the API call `trackSubmit` or the Event Library's 'Submits a Form'), then we also capture the data from the form's fields.
  * Each `<input>` field will be saved as Property; we use the `name` attribute of the `<input>`'s to name each Property.
  * [Hidden fields and sensitive fields (passwords, credit card numbers, and social security numbers) are not captured][fields-not-tracked].
* ## "Ad Campaign Hit" (listed in settings as "Google Ad Traffic")
  * Triggered if a visitor reaches your site via a Google Ad Campaign (eg. paid search). We detect this by checking the URL for `?gclid` or `?utm_` parameters, which indicate a URL tagged for ad purposes.
  * All the `utm` variables will be captured as Properties, if they are present in the URL. Please refer to our [article regarding Google Analytics][utm] to determine whether the `utm` variables are available or not:
    * `Campaign Source`
    * `Campaign Medium`
    * `Campaign Terms`
    * `Campaign Content`
    * `Campaign Name`
* ## "Search Engine Hit" (listed in settings as "Search Engine Traffic")
  * Triggered if a visitor reaches your site via a search engine, through organic search.
  * The Property `Search Engine` indicates which search engine was used.
  * The Property `Search Terms` indicates the search terms used.
* ## "Page View"
  * (*disabled by default!*)
  * Triggered every time a visitor views _any_ page on your site.
  * The Property `Viewed URL` indicates the page viewed.
  * The Property `Referrer` indicates the page last viewed.
  * Enabling this event can quickly use up your event quota, which is why it is initially disabled.

# Additional Settings

There are three additional settings that are not tied to specific events:

* ## Include URL Host and Subdomain (Event Library)
  * With this option on, the Event Wizard can differentiate URL-based events that come from two or more of your subdomains (for example, `www.example.com/pricing` and `subdomain.example.com/pricing` are treated differently). With this option off, we don't use the domain to determine a URL hit (so the previous two URLs would trigger the same event).
* ## Tagged URLs
  * Enable or disable the use of our [URL API][url].
* ## Respect Do Not Track Header
  * Different web browsers allow a user to request that they do not be tracked. Toggling this 'on' honors that request so that their activity will not be tracked by our JavaScript Library.

# Toggling Automatic Behavior

If you'd prefer to, you can toggle whether these events should be tracked or not. Please go to [https://www.kissmetrics.com/product.js_settings][js-settings] to do so, which is reached from your [site settings][settings]. Also, please keep in mind that the JavaScript settings in KISSmetrics only apply to the JavaScript library hosted by KISSmetrics. They *do not* apply to other official or unofficial libraries (PHP, Ruby, etc.) unless otherwise noted.

[settings]: https://www.kissmetrics.com/settings
[js-settings]: https://www.kissmetrics.com/product.js_settings
[url]: /apis/url
[privacy]: http://www.kissmetrics.com/user-privacy
[fields-not-tracked]: /apis/javascript/javascript-specific/protected-form-fields
