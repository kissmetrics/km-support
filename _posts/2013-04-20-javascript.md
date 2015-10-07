---
layout: post
categories: apis
title: "JavaScript Library"
tags: []
summary: Our JavaScript Library is our most full-featured library and is what we recommend for most users.
permalink: /apis/javascript/index.html
---

Our Javascript Library is our most full-featured library and is what we recommend for most users. It has extra provisions for things like automatically handling identities and aliasing, tracking common web events and running A/B tests. 


* Table of Contents
{:toc}
* * *

## Setup

This article is a technical reference of everything a developer can do with the JavaScript Library. If you're looking for general instructions on how to install Kissmetrics on your site, refer to our [Installing Kissmetrics' JavaScript Tracking Code](http://support.kissmetrics.com/tutorial/installation/index.html) article.

### Asynchronous API

The JavaScript library loads asynchronously, in the background, just like Google Analytics' Asynchronous Tracking. It has two main benefits:

1. It does **not** affect your page's load times.
2. It is compatible with pages served using both HTTP or HTTPS. The `//` before the path of your JS files is a protocol-independent absolute path, which detects whether your site uses HTTP or HTTPS.

You can place the JavaScript snippet anywhere in the HTML document, but we ask that you place the JavaScript snippet in the `<head>` for two reasons:

1. To let our script load as soon as possible, to be able to send events before the visitor leaves. Remember that page load times aren't affected.
2. To let you queue events to be triggered when the library finishes loading. This prevents JavaScript errors from cropping up if you try to call events before the script has loaded:  `ReferenceError: _kmq is not defined`

## Quick Reference

[Common API Methods][common] | Description
---------------------------- | -----------
`_kmq.push(['record', 'EVENT_NAME']);` | Records an event.
`_kmq.push(['record', 'EVENT_NAME', {'PROPERTY_NAME':'VALUE'}]);` | Records an event with additional properties.
`_kmq.push(['record', 'EVENT_NAME', {'PROPERTY_NAME':'VALUE'}, CALLBACK_FUNCTION]);` | Records an event and executes the callback function after it's recorded.
`_kmq.push(['set', {'PROPERTY_NAME':'VALUE'}]);` | Sets properties to the current user.
`_kmq.push(['identify', 'IDENTITY']);` | Identifies the current person with a **unique** ID, and attributes future events from this browser to this provided ID. If the current person is 'anonymous', it also connects their 'anonymous' ID to the provided ID so we recognize both as being the same person (`alias`ing). Calling `identify` does *not* count as an "event".

JavaScript-Specific Methods | Description
--------------------------- | -----------
`_kmq.push(['record', 'EVENT_NAME', {'PROPERTY_NAME':'VALUE'}, callbackFn]);` | Will execute `callbackFn` after event has been successfully tracked.
`_kmq.push(['set', {'PROPERTY_NAME':'VALUE'}, callbackFn]);` | Will execute `callbackFn` after properties have been successfully tracked.
`_kmq.push(['trackClick', 'AN_ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);` | Tags an HTML element to [record an event *when it is clicked*][trackClick].
`_kmq.push(['trackClickOnOutboundLink', 'AN_ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);` | Tags a link that takes someone to another domain. Provides enough time to [record an event *when the link is clicked, before being redirected*][trackOutbound].
`_kmq.push(['trackSubmit', 'AN_ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);` | Tags a form to [record an event *when it is submitted*][trackSubmit].
`_kmq.push(['clearIdentity']);` | If the current person is already 'identified', this [clears their identity][clear-id] and generates a new anonymous ID for their browser. Does nothing if the current person is currently 'anonymous'.
`_kmq.push(function() { } );` | You can push [callback functions][callback] to be executed when our library has fully loaded. Useful when invoking functions of the `KM` object (see examples below).
`_kmq.push(function() {KM.record('EVENT_NAME');} );` | Equivalent to `_kmq.push(['record', 'EVENT_NAME']);`
`KM.ab('PROPERTY_NAME', [ARRAY_OF_VALUES])` | [Initiates an A/B test][a-b-km] and sets the property that indicates which variation was randomly picked.
`KM.i()` | Returns the [current person's ID][kmi], which can be their 'named ID' if they have one or 'anonymous ID' if they don't.
`KM.ts()` | Returns the current Unix timestamp in seconds. This is what we use to determine the current time.
`KM.um("/some-url")` | Returns true or false, depending on whether the page you are currently on will match up with the Event Wizard pattern you've typed in (`"/some-url"`). This helps you test Event Wizard urls much more quickly.

### Example Calls

{% highlight html %}
<script type="text/javascript">
// Identifies the current person as "bob@bob.com" for future events
_kmq.push(['identify', 'bob@bob.com']);

// Records an event "Viewed Homepage"
_kmq.push(['record', 'Viewed Homepage']);

/* Records an event "Signed Up" with additional properties
 * (Plan & Amount) plus related values (Pro & 99.95)
 */
_kmq.push(['record', 'Signed Up', {'Plan':'Pro', 'Amount':99.95}]);

// Sets the "Gender" property to "Male" for the current person
_kmq.push(['set', {'gender':'male'}]);

/* Records an event "Signed Up" in the past.
 * This demonstrates how to pass the '_t' and '_d' from our
 * specifications as regular Kissmetrics properties.
 * 1234567890 = 13 Feb 2009 23:31:30 GMT
 */
_kmq.push(['record', 'Signed Up', {'_d':1, '_t':1234567890}])
</script>
{% endhighlight %}

## Events Automatically Tracked

If you are using the JavaScript library, we automatically track certain events and properties by default:

* ### Visited Site
  * The Property `referrer` indicates the URL the visitor came from
  * The Property `URL` indicates the URL of the page they started browsing your site
  * We record **Visited Site** once for each visitor's browsing session. After 30 minutes of inactivity, the next time the visitor comes back will trigger a new **Visited Site** event, and they will also have the `Returning` Property set to 1.
  * `Returning` is also set if your customer has already had the Google Analytics `__utma` cookie set.
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

View all the events here: [https://app.kissmetrics.com/product.js_settings][js-settings]. You can enable/disable these events on this page, too.

## What's Different From Google Analytics

The above events are familiar to Google Analytics users, but there are two things **we do not automatically track:**

* Time spent on site
* IP Addresses

Our experience has shown that when making business decisions, it is more useful to consider _what the visitors are doing_ over _how long they've been on the site_.

You may still find this information useful. If you have that information separately recorded in your databases, you can pass that information along to us as Kissmetric properties.

## Kissmetrics Identities

The function `KM.i()` will return the visitor's Kissmetrics ID, in case you need to pass that along to another function.

Remember to wrap this in a [callback function][callback] to ensure the JavaScript library has loaded before you try to fetch this information:

{% highlight html %}
<script type="text/javascript">
_kmq.push(function()
  { alert(KM.i()) } // Display an alert box with your current KM identity
);
</script>
{% endhighlight %}

### Anonymous Identities

If the JavaScript library has never seen a visitor before, it will create a randomized identity for them to attribute all of that person's events to the same browser. This lets you track this particular person's activity across sessions.

The generated ID is Base64 encoded, so the IDs are generated with only these characters: `a-z, A-Z, 0-9, +, /, and =`.

## API Functions

### Tracking Individual Page Views

If you are just looking to track every page view on your site we recommend [Google Analytics][ga]. With Kissmetrics we recommend tracking only significant pages with specifically named events. You can use the Event Library to do this, or you can add a `record` command to your pages:

{% highlight js %}
_kmq.push(['record', 'Viewed Signup']);
{% endhighlight %}

So when the browser executes the line `_kmq.push(['record', 'Viewed Signup']);`, your event is recorded.

### Tracking Clicks - `trackClick`

If you are just looking to track every click on your your site we recommend [Crazy Egg][crazyegg]. With Kissmetrics we recommend tracking only significant elements. To accomplish this, you can use `trackClick`. This sets up an element to record an event _only_ when the visitor has clicked on the element.

`trackClick` takes two parameters: the HTML ID or CSS class of the element you are tracking, and the name of the event to record when someone clicks said element:

{% highlight html %}
<script type="text/javascript">
  _kmq.push(['trackClick', 'ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);
</script>
{% endhighlight %}

To put it another way, refer to this example:

{% highlight html %}
<script type="text/javascript">
// This line...
_kmq.push(['trackClick', '.classname', 'Some Event Name']);

// ...is basically equivalent to this line:
$('.classname').click(function() {
   _kmq.push(['record', 'Some Event Name']);
});
</script>
{% endhighlight %}

For example, you might have an invite link you want to track:

{% highlight html %}
<a href="invite.php" id="invite_link">Invite your friends!</a>
<script type="text/javascript">
  // EXAMPLE 1
  _kmq.push(['trackClick', 'invite_link', 'Invite Friends Clicked']);
</script>
{% endhighlight %}

Notice that the code uses the `id` attribute from the link (`invite_link`). You can also pass in an `Element` object instead of the `id`. You can also track all the clicks on any element for a given CSS class by prepending a the CSS class with a `.`. For example, if you want to track clicks an any element with the CSS class `play_button` you can do:

{% highlight js %}
// EXAMPLE 2
_kmq.push(['trackClick', '.play_button', 'Play Button Clicked']);
{% endhighlight %}

This method will work on buttons, `<div>`s, links, images, or any other HTML element. It will still fire all of your existing `onclick` events. You can also pass in properties via an additional argument:

{% highlight js %}
_kmq.push(['trackClick', 'invite_link', 'Invite Friends Clicked', {
  'color':'red'
}]);
{% endhighlight %}

### Tracking Outbound Link Clicks - `trackClickOnOutboundLink`

The default method of tracking clicks by Kissmetrics works well for most cases. However, if you are trying to track a click on an outbound link (a link to a different website), it is possible for the browser to change pages before it has a chance to send the data to Kissmetrics. For these cases, there is an alternative function available: `trackClickOnOutboundLink`:

{% highlight html %}
<a href="http://othersite.com" id="link1">Visit Other Site</a>
<script type="text/javascript">
  _kmq.push(['trackClickOnOutboundLink', 'link1', 'Visited Other Site']);
</script>
{% endhighlight %}

This builds in time to send the event by:

1. Canceling the original click event's default behavior
2. Sending the data to Kissmetrics
3. Waiting 250ms
4. Redirecting the browser by setting `document.location`

For this reason we don't recommend this for usual click tracking. Please make sure to test this with your site so that this performs as expected.

### Tracking Forms - `trackSubmit`

You can use the `trackSubmit` function to track when a form is submitted. This sets up the element to record an event _only_ when the visitor has submitted the form.

`trackSubmit` takes two parameters: the HTML ID or CSS class of the `<form>` you are tracking, and the name of the event to record when someone submits said form:

{% highlight html %}
<script type="text/javascript">
_kmq.push(['trackSubmit', 'ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);
</script>
{% endhighlight %}

For example, you might have a signup form you want to track:

{% highlight html %}
<form id="signup_form">
... </form>
<script type="text/javascript">
  // EXAMPLE 3
  _kmq.push(['trackSubmit', 'signup_form', 'Sign Up Form Submitted']);
</script>
{% endhighlight %}

Notice that the code uses the `id` attribute from the form (`signup_form`). You can also pass in an `Element` object instead of the `id`. You can also track all the form submissions for all forms with a given CSS class by prepending a the CSS class with a `.`. For example, if you want to track form submits from any form with the CSS class `invite_form` you can do:

{% highlight js %}
_kmq.push(['trackSubmit', '.invite_form', 'Invite Form Submitted']);
{% endhighlight %}

It will still fire all of your existing `onsubmit` events.

You can also pass in properties via an additional argument:

{% highlight js%}
_kmq.push(['trackSubmit', 'signup_form', 'Sign Up Form Submitted', { 'variation': 'single page' }]);
{% endhighlight %}

*Note: our code does not validate the contents of the form. If a visitor fills out a form incorrectly and submits it, we will* **still** *count that as a submit event. Certain events like Signups could be tracked more accurately by recording the event on the following page, or using a server-side library to record the event when an entry is created in your database.*

#### Auto-Tracking Form Fields

By default, if you are tracking forms with `trackSubmit`, we will also capture all non-sensitive form fields as Kissmetrics properties. (We won't record [passwords, hidden fields, textarea fields, or sensitive fields like credit card numbers and social security numbers][protected].)

You can toggle whether to automatically capture form fields in your [JavaScript Settings][js-settings], under the *Form Fields* section.

When the JS is set to automatically capture form fields, including these CSS classes to the form `<input>`s will customize what is recorded:

* `.km_ignore`: forces us to ignore a field
* `.km_include`: forces us to include a field we normally would not capture

##### Property Name and Value to Expect

For the Property Name, we use each `<input>`'s `name` attribute. *If there is no name, we cannot capture the information from that `<input>` field.*

The Value for the Property will be whatever the customer enters into the form.

##### Identifying a Person From a Form Field

If an anonymous person submits a tracked form, we also check for any fields that could be used as an identity, such as a username or email address. This is especially useful on forms where people subscribe to newsletters.

We will only use an `<input>` as an identity if its Name attribute contains one of the following:

* `userid`
* `login`
* `username`
* `email`

If the ID includes `_`, that will also work. So `user_id`, `user_name`, and `e_mail` will also be used as identities.

[js-settings]: https://app.kissmetrics.com/product.js_settings

##### Form Fields Not Tracked

There are form fields we do not track:

* Passwords
* Hidden textarea fields
* Sensitive fields

We determine this by looking at the `name` attributes of each `<input>`. After ignoring certain connecting symbols like `_`, `\`, and `-` (for example, `user[name]` is converted to `user_name` and then finally `username`), we use this regular expression to figure out which fields are ignored:

    /pass|billing|creditcard|cardnum|^cc|ccnum|exp|seccode|securitycode|securitynum|cvc|cvv|ssn|socialsec|socsec|csc/i

#### Incompatibility with jQuery `.submit()`

`trackSubmit` works with regular HTML forms. If you trigger the submission of forms via code, like `$('form').submit()`, then this will bypass the tracking that `trackSubmit` sets up. Please refer to this [Stack Overflow][jquery-submit] discussion.

An alternative is to write an API call that uses jQuery's `.submit()` function, like so:

{% highlight js%}
$('form').submit(function() {
  _kmq.push(['record', 'Form Submitted']);
});
{% endhighlight %}

If you are unsure whether your forms behave this way, please contact your site's developer. We are investigating ways to improve our form tracking so you don't have to worry about this.

[jquery-submit]: http://stackoverflow.com/questions/645555/should-jquerys-form-submit-not-trigger-onsubmit-within-the-form-tag

### Override the Referrer

If you anticipate that your site will be hosted in an iFrame (say, within a Facebook Canvas app), then you'll want to make sure to save the true Referrer, the site that brought a person to your page, rather than the site hosting the iFrame itself.

You can do this by setting the variable `KM_REFERRER` like so:

{% highlight html %}
<script type="text/javascript">
  var KM_REFERRER = parent.document.referrer;
  var _kmq = _kmq || [];
  ...
</script>
{% endhighlight %}

Even if your site is not in an iFrame, `parent.document.referrer` should still be the same as `document.referrer` and behave normally.


### Callback Functions

You can also pass in function objects as a third parameter. If you don't have properties to record, you can pass an empty hash like so:

{% highlight js %}
_kmq.push(['record', 'An Event Happened', {}, (function() {alert("Event Recorded");}) ]);
{% endhighlight %}

Alternatively:

{% highlight js %}
_kmq.push(function() {
   KM.record('An Event Happened');
   alert("Event Recorded");
 });
{% endhighlight %}

This can be useful if you want to record a series of events or if you have conditionals that need to be executed first.

#### Combining Callback Functions with jQuery

[Jon](https://github.com/jonazri) points out that you can combine jQuery's [`trigger()`][jquery-trigger] to abstract out the event of when the KM object is loaded:

{% highlight js %}
_kmq.push(function() {
  $.event.trigger("kmLoaded");
});
{% endhighlight %}

For stuff that requires the KM object to be ready, listen for *that* custom event:

{% highlight js %}
$("body").on("kmLoaded", function() {
  // doStuff;
});
{% endhighlight %}

This is most beneficial when you're working with a tag manager, where you might have to separate out the event logic from the initialization of the JS library. See the full discussion [here](https://github.com/kissmetrics/km-support/issues/11).

## Cookies

Kissmetrics uses these *first-party* cookies on your domain. They expire after 5 years unless otherwise specified.

Cookie Name | Description
----------- | -----------
`km_abi` |  A unique string that is used to remember which [KM A/B test][a-b-km] variation was seen.
`km_ai` | A person's Anonymous ID.
`km_ni` | A person's Named ID.
`km_lv` | Time of the last visit, to determine whether they are a returning visitor or not. Has a value of `x` if they're already designated as a returning visitor.
`km_vs` | Set to 1 if the visitor is in an active browsing session. It expires after 30 minutes.
`km_uq` | A URL queue that preserves unsent tracking URLs from page to page. It empties out if our tracking servers are online.


### Cookie Domain

By default, if you have put the JavaScript code on several of your subdomains, it uses the same cookies for all of your subdomains (not just `www`):

{% highlight html %}
<script type="text/javascript">
  // This is the default behavior, and is redundant:
  var KM_COOKIE_DOMAIN = ".mysite.com";
  var _kmq = _kmq || [];
  ...
</script>
{% endhighlight %}

If you want to track the subdomains separately in two different accounts, you can specify a cookie domain `KM_COOKIE_DOMAIN` before the Kissmetrics Javascript is included. This might look like:

{% highlight html %}
<script type="text/javascript">
  var KM_COOKIE_DOMAIN = "www.mysite.com";
  var _kmq = _kmq || [];
  ...
</script>
{% endhighlight %}

### Testing Locally

The JavaScript Library depends on using cookies to keep your identity consistent from page to page. If you test with `localhost`, you'll need a domain on which to set cookies, which you can set up in one of two ways:

* Set up a local development domain. For example, edit `/etc/hosts` to include a line like `127.0.0.1  myproject.dev`.
* Use an existing address like `http://myproject.localhacks.com/`, which has a wildcard A record pointing to `127.0.0.1`.

Alternatively, you can replace the last two lines of our JavaScript snippet with the following, to prevent our script from loading locally altogether. However, this prevents any events from occurring, even if you are testing your API calls:

{% highlight js %}
// Don't load KM locally
if (!window.location.host.match(/localhost/)) {
  _kms('//i.kissmetrics.com/i.js');
  _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
}
{% endhighlight %}

{% include summaries/javascript_summary.html %}

[common]: /apis/common-methods
[trackclick]: #tracking-clicks---trackclick
[trackoutbound]: #tracking-outbound-link-clicks---trackclickonoutboundlink
[tracksubmit]: #tracking-forms---tracksubmit
[a-b-km]: /a-b-testing/using-km-js
[kmi]: #kissmetrics-identities
[clear-id]: /advanced/multiple-people-same-browser
[callback]: #callback-functions
[protected]: /apis/javascript/javascript-specific/protected-form-fields
[referrer]: #override-the-referrer
[ga]: http://www.google.com/analytics/
[crazyegg]: http://www.crazyegg.com/

[jquery-trigger]: http://api.jquery.com/trigger/

[utm]: /integrations/utm-variables#google-analytics-8217-auto-tagging-vs-manual-tagging
[js-settings]: https://app.kissmetrics.com/product.js_settings
[settings]:https://app.kissmetrics.com/settings
[fields-not-tracked]: /apis/javascript/javascript-specific/protected-form-fields

[common]: /apis/common-methods
[js-specific]: /apis/javascript
