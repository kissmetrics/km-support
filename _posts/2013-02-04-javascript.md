---
layout: post
categories: apis
title: "JavaScript Library"
tags: []
author: Eric Fung
summary: Our JavaScript Library is our most full-featured library and is what we recommend for most users.
permalink: /apis/javascript/index.html
---
Our Javascript Library is our most full-featured library and is what we recommend for most users. It has extra provisions for:

* Automatically tracking identities using a variety of technologies
* Automatically aliasing users *anonymous identities* with *named identities* you provide
* Automatically tracking common web events (e.g. search engine traffic)
* A/B Testing

## Setup

Log into your KISSmetrics account and locate your personalized code snippet in your [Site Settings][settings]. You'll be able to find your unique embed code and instructions there.

The JavaScript library looks like this:

    <script type="text/javascript">
      var _kmq = _kmq || [];
      var _kmk = _kmk || 'foo';
      function _kms(u){
        setTimeout(function(){
          var d = document, f = d.getElementsByTagName('script')[0],
          s = d.createElement('script');
          s.type = 'text/javascript'; s.async = true; s.src = u;
          f.parentNode.insertBefore(s, f);
        }, 1);
      }
      _kms('//i.kissmetrics.com/i.js');
      _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
    </script>

## Usage

Please see:

* [@apis/common-methods] for information and examples on recording events, setting properties and identifying users.
* [@javascript-specific] for information on our asynchronous API, tracking clicks, forms, multiple domains and other issues specific to the Javascript API

## Events Automatically Tracked

If you are using the JavaScript library, we automatically track certain events and properties by default:

* ### Visited Site
  * The Property `referrer` indicates the URL the visitor came from
  * The Property `URL` indicates the URL of the page they started browsing your site
  * We record **Visited Site** once for each visitor's browsing session. After 30 minutes of inactivity, the next time the visitor comes back will trigger a new **Visited Site** event, and they will also have the `Returning` Property set to 1.
* ### Form Fields
  * If you set up an event to log a form submission (either through the API call `trackSubmit` or the Event Library's 'Submits a Form'), then we also capture the data from the form's fields.
  * Each `<input>` field will be saved as Property; we use the `name` attribute of the `<input>`'s to name each Property.
  * [Hidden fields and sensitive fields (passwords, credit card numbers, and social security numbers) are not captured][fields-not-tracked].
* ### Ad Campaign Hit
  * Triggered if a visitor reaches your site via a Google Ad Campaign (eg. paid search). We detect this by checking the URL for `?gclid` or `?utm_` parameters, which indicate a URL tagged for ad purposes.
  * All the `utm` variables will be captured as Properties, if they are present in the URL. Please refer to our [article regarding Google Analytics][utm] to determine whether the `utm` variables are available or not:
    * `Campaign Source`
    * `Campaign Medium`
    * `Campaign Terms`
    * `Campaign Content`
    * `Campaign Name`
* ### Search Engine Hit
  * Triggered if a visitor reaches your site via a search engine, through organic search.
  * The Property `Search Engine` indicates which search engine was used.
  * The Property `Search Terms` indicates the search terms used.
* ### Page Views
  * (*disabled by default!*)
  * Triggered every time a visitor views _any_ page on your site.
  * The Property `Viewed URL` indicates the page viewed.
  * The Property `Referrer` indicates the page last viewed.
  * Enabling this event can quickly use up your event quota, which is why it is initially disabled.

View all the events here: [https://www.kissmetrics.com/product.js_settings][js-settings]. You can enable/disable these events on this page, too.

## What's Different From Google Analytics

The above events are familiar to Google Analytics users, but there are two things **we do not automatically track:**

* Time spent on site
* Demographic information (what country your visitors are coming from)
* IP Addresses

Our experience has shown that when making business decisions, it is more useful to consider _what the visitors are doing_ over _how long they've been on the site_, or _where they are browsing from_.

You may still find this information useful. If you have that information separately recorded in your databases, you are welcome to pass that information along to us as KISSmetric properties.

## Example Calls

    <script type="text/javascript">
        // Identifies the current person as "bob@bob.com" for future events
        _kmq.push(['identify', 'bob@bob.com']);  

        // Records an event "Viewed Homepage"
        _kmq.push(['record', 'Viewed Homepage']);  

        // Records an event "Signed Up" with additional properties
        _kmq.push(['record', 'Signed Up', {'Plan':'Pro', 'Amount':99.95}]);  

        // Sets the "Gender" property to "Male" for the current person
        _kmq.push(['set', {'gender':'male'}]);  

        // Connects "bob" and "bob@bob.com" to represent the same person
        _kmq.push(['alias', 'bob', 'bob@bob.com']);
    
        /* Records an event "Signed Up" in the past.
         * This demonstrates how to pass the '_t' and '_d' from our
         *  specifications as regular KISSmetrics properties.
         * 1234567890 = 13 Feb 2009 23:31:30 GMT
         */  
        _kmq.push(['record', 'Signed Up', {'_d':1, '_t':1234567890}])
    </script>

# Developing in `localhost`

Our JavaScript library depends on cookies to work properly. Browsers do not let you set cookies in `localhost`, so please refer to our guide on [developing locally][local].

[utm]: /integrations/utm-variables#google-analytics-8217-auto-tagging-vs-manual-tagging
[js-settings]: https://www.kissmetrics.com/product.js_settings
[settings]:https://www.kissmetrics.com/settings
[local]: /advanced/local-development
[fields-not-tracked]: /apis/javascript/javascript-specific/protected-form-fields