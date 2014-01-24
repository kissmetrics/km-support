---
layout: post
title: Events - Submits a Form
categories: [tutorial, event-library-tutorial]
author: Lars Lofgren
summary: Trigger events when someone submits a form.
---
<div id="wistia_1b184d5c16" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400">
</div>

## Create the Event

You can track whether people are filling out your lead gen forms, newsletter signups, and contact forms. Not only will you know that they filled out a form, but you can refer to the information they entered into these forms.

This works for form and email services like:

* Gravity Forms
* Contact Form 7
* AWeber
* Mailchimp
* ConstantContact
* Any other HTML `<form>`

Just like click events, we’re going to grab the ID or a Class name of the `<form>` we want to track. You’ll go to your site, click view source (or inspect element in Chrome) and look for the id or CSS name in the form code. Copy and Paste it in the Event Wizard, name the event so you can keep track of it easily, and you’re done.

More detailed instructions coming soon!

## Technical Notes

* The "Submits the Form" event type in the Event Library is equivalent to the JavaScript Library command [`trackSubmit`][trackSubmit]. You can use one or the other.
* Our Event Library has trouble interacting with some `<form>`'s. These forms may be better tracked by using JavaScript Library calls:
  * If you use **jQuery** to customize a form's `submit()` function.
  * If you use **Ajax** to dynamically load a form into the page after the page has loaded (`document.ready()`).
* Currently, the Event Library takes only a *single* HTML ID or a *single* class name. If you'd like to use the full range of nested CSS selectors, please try using JavaScript Library calls for these types of events. If that does not work for you, please let us know if you are interested in seeing this functionality within the Event Library.

[trackSubmit]: /apis/javascript/javascript-specific#tracking-forms