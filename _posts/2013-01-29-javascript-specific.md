---
layout: post
title: JavaScript Library Specifics
categories: [apis,javascript]
tags: [km_include, km_exclude]
author: Eric Fung
summary: Information on extra capabilities of our JavaScript Library, in addition to the methods common to all APIs.
permalink: /apis/javascript/javascript-specific/index.html
---
## Quick Reference

[Common API Methods][common] | Description
---------------------------- | -----------
`_kmq.push(['record', 'EVENT_NAME']);` | Records an event.
`_kmq.push(['record', 'EVENT_NAME', {'PROPERTY_NAME':'VALUE'}]);` | Records an event with additional properties.
`_kmq.push(['set', {'PROPERTY_NAME':'VALUE'}]);` | Sets properties to the current user.
`_kmq.push(['identify', 'IDENTITY']);` | Identifies the current person with a **unique** ID, and attributes future events from this browser to this provided ID. If the current person is 'anonymous', it also connects their 'anonymous' ID to the provided ID so we recognize both as being the same person (see `alias` below). Calling `identify` does *not* count as an "event".
`_kmq.push(['alias', 'ID1', 'ID2']);` | Connects two identities so we recognize both as being the same person. We need to see events done by both ID's; if you want to save additional identifying information like "First Name" or "Last Name", consider using `set` instead. Calling `alias` does *not* count as an "event".

JavaScript-Specific Methods | Description
--------------------------- | -----------
`_kmq.push(['trackClick', 'AN_ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);` | Tags an HTML element to [record an event *when it is clicked*][trackClick].
`_kmq.push(['trackClickOnOutboundLink', 'AN_ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);` | Tags a link that takes someone to another domain. Provides enough time to [record an event *when the link is clicked, before being redirected*][trackOutbound].
`_kmq.push(['trackSubmit', 'AN_ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);` | Tags a form to [record an event *when it is submitted*][trackSubmit].
`_kmq.push(['clearIdentity']);` | If the current person is already 'identified', this [clears their identity][clear-id] and generates a new anonymous ID for their browser. Does nothing if the current person is currently 'anonymous'.
`_kmq.push(function() { } );` | You can push [callback functions][callback] to be executed when our library has fully loaded. Useful when invoking functions of the `KM` object (see examples below).
`_kmq.push(function() {KM.record('EVENT_NAME');} );` | Equivalent to `_kmq.push(['record', 'EVENT_NAME']);`
`KM.ab('PROPERTY_NAME', [ARRAY_OF_VALUES])` | [Initiates an A/B test][a-b-km] and sets the property that indicates which variation was randomly picked.
`KM.i()` | Returns the [current person's ID][kmi], which can be their 'named ID' if they have one, or 'anonymous ID' if they don't.
`KM.ts()` | Returns the current Unix timestamp in seconds. This is what we use to determine the current time.
`KM.rf()` | Returns `document.referrer` unless you [override where to look for the referrer][referrer].
`KM.um("/some-url")` | Returns true or false, depending on whether the page you are currently on will match up with the Event Wizard pattern you've typed in (`"/some-url"`). This helps you test Event Wizard urls much more quickly.

[Recording SaaS Events][saas-events] | Description
------------------------------------ | -----------
`_kmq.push(['signedUp']);` | Equivalent to `_kmq.push(['record', 'Signed Up']);`
`_kmq.push(['upgraded']);` | Equivalent to `_kmq.push(['record', 'Upgraded']);`
`_kmq.push(['downgraded']);` | Equivalent to `_kmq.push(['record', 'Downgraded']);`
`_kmq.push(['canceled']);` | Equivalent to `_kmq.push(['record', 'Canceled']);`
`_kmq.push(['billed']);` | Equivalent to `_kmq.push(['record', 'Billed']);`

<a name="asynchronous-api"></a>
## Asynchronous API 

The JavaScript library loads asynchronously, in the background, just like Google Analytics' Asynchronous Tracking. It has two main benefits:

* It does **not** affect your page's load times.
* It is compatible with pages served using both HTTP or HTTPS. The `//` before the path of your JS files is a protocol-independent absolute path, which detects whether your site uses HTTP or HTTPS.

You can place the JavaScript snippet anywhere in the HTML document, but we ask that you place the JavaScript snippet in the `<head>` for two reasons:

1. To let our script load as soon as possible, to be able to send events before the visitor leaves. Remember that page loadtimes aren't affected.
2. To let you queue events to be triggered when the library finishes loading. This prevents JavaScript errors from cropping up if you try to call events before the script has loaded:  `ReferenceError: _kmq is not defined`

<a name="callback-functions"></a>
## Callback Functions

You can also pass in function objects, which will be executed once the KISSmetrics API is loaded:

    _kmq.push(function() {
       KM.record('My Event')
       // Do something else in JavaScript
       } );
    
This can be useful if you want to record a series of events or if you have conditionals that need to be executed first.

<a name="tracking-individual-page-views"></a>
## Tracking Individual Page Views

If you are just looking to track every page view on your site we recommend [Google Analytics][ga]. With KISSmetrics we recommend tracking only significant pages with specifically named events. You can use the Event Library to do this, or you can add a `record` command to your pages:

    _kmq.push(['record', 'Viewed Signup']);

So when the browser executes the line `_kmq.push(['record', 'Viewed Signup']);`, your event is recorded.

<a name="tracking-clicks-trackclick"></a>
## Tracking Clicks - `trackClick`

If you are just looking to track every click on your your site we recommend [Crazy Egg][crazyegg]. With KISSmetrics we recommend tracking only significant elements. To accomplish this, you can use `trackClick`. This sets up an element to record an event _only_ when the visitor has clicked on the element.

`trackClick` takes two parameters: the HTML ID or CSS class of the element you are tracking, and the name of the event to record when someone clicks said element:

    <script>
      _kmq.push(['trackClick', 'ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);
    </script>

To put it another way, refer to this example:

    <script>
    // This line...
    _kmq.push(['trackClick', '.classname', 'Some Event Name']);

    // ...is basically equivalent to this line:
    $('.classname').click(function() {
       _kmq.push(['record', 'Some Event Name']);
    });
    </script>

For example, you might have a invite link you want to track: 

    // EXAMPLE 1
    <a href="invite.php" id="invite_link">Invite your friends!</a>
    <script>
      _kmq.push(['trackClick', 'invite_link', 'Invite Friends Clicked']);
    </script>

Notice that the code uses the `id` attribute from the link (`invite_link`). You can also pass in an `Element` object instead of the `id`. You can also track all the clicks on any element for a given CSS class by prepending a the CSS class with a `.`. For example, if you want to track clicks an any element with the CSS class `play_button` you can do:

    // EXAMPLE 2
    _kmq.push(['trackClick', '.play_button', 'Play Button Clicked']);

This method will work on buttons, `<div>`s, links, images, or any other HTML element. It will still fire all of your existing `onclick` events. You can also pass in properties via an additional argument:

    _kmq.push(['trackClick', 'invite_link', 'Invite Friends Clicked', {
      'color':'red'
    }]);
    

<a name="tracking-outbound-link-clicks-trackclickonoutboundlink"></a>
## Tracking Outbound Link Clicks - `trackClickOnOutboundLink`

The default method of tracking clicks by KISSmetrics works well for most cases. However, if you are trying to track a click on an outbound link (a link to a different website), it is possible for the browser to change pages before it has a chance to send the data to KISSmetrics. For these cases, there is an alternative function available: `trackClickOnOutboundLink`:

    <a href="http://othersite.com" id="link1">Visit Other Site</a>
    <script>
      _kmq.push(['trackClickOnOutboundLink', 'link1', 'Visited Other Site']);
    </script>

This builds in time to send the event by:

* Canceling the original click event's default behavior
* Sending the data to KISSmetrics
* Waiting 250ms
* Redirecting the browser by setting `document.location`

For this reason we don't recommend this for usual click tracking. Please make sure to test this with your site so that this performs as expected.

<a name="tracking-forms-tracksubmit"></a>
## Tracking Forms - `trackSubmit`

You can use the `trackSubmit` function to track when a form is submitted. This sets up the element to record an event _only_ when the visitor has submitted the form.

`trackSubmit` takes two parameters: the HTML ID or CSS class of the `<form>` you are tracking, and the name of the event to record when someone submits said form:

    <script>
      _kmq.push(['trackSubmit', 'ELEMENT_ID_OR_CLASS', 'EVENT_NAME']);
    </script>

For example, you might have a signup form you want to track: 

    // EXAMPLE 3
    <form id="signup_form">
    ... </form>
    <script>
      _kmq.push(['trackSubmit', 'signup_form', 'Sign Up Form Submitted']);
    </script>

Notice that the code uses the `id` attribute from the form (`signup_form`). You can also pass in an `Element` object instead of the `id`. You can also track all the form submissions for all forms with a given CSS class by prepending a the CSS class with a `.`. For example, if you want to track form submits an any form with the CSS class `invite_form` you can do:

    _kmq.push(['trackSubmit', '.invite_form', 'Invite Form Submitted']);

It will still fire all of your existing `onsubmit` events. 

You can also pass in properties via an additional argument:

    _kmq.push(['trackSubmit', 'signup_form', 'Sign Up Form Submitted', {
      'variation': 'single page'
    }]);

*Note: our code does not validate the contents of the form. If a visitor fills out a form incorrectly and submits it, we will* **still** *count that as a submit event. Certain events like Signups could be tracked more accurately by recording the event on the following page, or using a server-side library to record the event when an entry is created in your database.*

<a name="auto-tracking-form-fields"></a>
### Auto-Tracking Form Fields

By default, if you are tracking forms with `trackSubmit`, we will also capture all non-sensitive form fields as KISSmetrics properties. (We won't record [passwords, hidden, textarea fields as well as sensitive fields like credit card numbers and social security numbers][protected].)

You can add CSS classes to the form inputs to modify what is recorded:

* `.km_ignore`: forces us to ignore a field
* `.km_include`: forces us to include a field we normally would not capture

You can toggle whether to automatically capture form fields in your [JavaScript Settings][js-settings], under the *Form Fields* section.

<a name="identifying-a-person-from-a-form-field"></a>
#### Identifying a Person From a Form Field

If an anonymous person submits a tracked form, we also check for any fields that could be used as an identity, such as a username or email address. This is especially useful on forms where people subscribe to newsletters.

We will only use an `<input>` as an identity if its Name attribute is one of the following:

* `userid`
* `login`
* `username`
* `email`

If the ID includes `_`, that will also work. So `user_id`, `user_name`, and `e_mail` will also be used as identities.

[js-settings]: https://www.kissmetrics.com/product.js_settings

### Incompatibility with jQuery .submit()

`trackSubmit` works with regular HTML forms. If you trigger the submission of forms via code, like `$('form').submit()`, then this will bypass the tracking that `trackSubmit` sets up. Please refer to this [Stack Overflow][jquery-submit] discussion.

An alternative is to write an API call that uses jQuery's `.submit()` function, like so:

    $('form').submit(function() {
      _kmq.push(['record', 'Form Submitted']);
    });

If you are unsure whether your forms behave this way, please contact your site's developer. We are investigating ways to improve our form tracking so you don't have to worry about this.

[jquery-submit]: http://stackoverflow.com/questions/645555/should-jquerys-form-submit-not-trigger-onsubmit-within-the-form-tag

<a name="override-the-referrer"></a>
## Override the Referrer

If you anticipate that your site will be hosted in an iFrame (say, within a Facebook Canvas app), then you'll want to make sure to save the true Referrer, the site that brought a person to your page, rather than the site hosting the iFrame itself.

You can do this by setting the variable `KM_REFERRER` like so:

    <script type="text/javascript">
      var KM_REFERRER = parent.document.referrer;
      var _kmq = _kmq || [];
      ...
    </script>

Even if your site is not in an iFrame, `parent.document.referrer` should still be the same as `document.referrer` and behave normally anyway.

<a name="cookie-domain"></a>
## Cookie Domain

By default, if you have put the JavaScript code on several of your subdomains, it uses the same cookies for all of your subdomains (not just `www`):

    <script type="text/javascript">
      // This is the default behavior, and is redundant:
      var KM_COOKIE_DOMAIN = ".mysite.com";
      var _kmq = _kmq || [];
      ...
    </script>

If you want to track the subdomains separately in two different accounts, you can specify a cookie domain `KM_COOKIE_DOMAIN` before the KISSmetrics Javascript is included. This might look like:

    <script type="text/javascript">
      var KM_COOKIE_DOMAIN = "www.mysite.com";
      var _kmq = _kmq || [];
      ...
    </script>

<a name="get-your-current-kissmetrics-id"></a>
## Get Your Current KISSmetrics ID

The function `KM.i()` will return the visitor's KISSmetrics ID, in case you need to pass that along to another function.

Remember to wrap this in a [callback function][callback] to ensure the JavaScript library has loaded before you try to fetch this information:

    <script type="text/javascript">
    _kmq.push(function()
      { alert(KM.i()) } // Display an alert box with your current KM identity
    );
    </script>

[common]: /apis/common-methods
[trackclick]: #tracking-clicks-trackclick
[trackoutbound]: #tracking-outbound-link-clicks-trackclickonoutboundlink
[tracksubmit]: #tracking-forms-tracksubmit
[a-b-km]: /a-b-testing/using-km-js
[kmi]: #get-your-current-kissmetrics-id
[saas-events]: /apis/saas_javascript
[clear-id]: /advanced/multiple-people-same-browser
[callback]: #callback-functions
[protected]: /apis/javascript/javascript-specific/protected-form-fields
[referrer]: #override-the-referrer
[ga]: http://www.google.com/analytics/
[crazyegg]: http://www.crazyegg.com/
