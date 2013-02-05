---
layout: post
title: Events - Submits a Form
categories: [tools, event-library]
author: Eric Fung
summary: Trigger events when someone submits a form.
---
## Create the Event

You can track whether people are filling out your lead gen forms, newsletter signups, and contact forms. Not only will you know that they filled out a form, but you can refer to the information they entered into these forms. (The form inputs can be saved as KISSmetrics properties.)

This works for form and email services like:

* Gravity Forms
* Contact Form 7
* AWeber
* Mailchimp
* ConstantContact
* Any other HTML `<form>`

Just like click events, we’re going to grab the ID or a Class name of the `<form>` we want to track. You’ll go to your site, click view source (or inspect element in Chrome) and look for the id or CSS name in the form code. Copy and Paste it the Event Wizard, name the event so you can keep track of it easily, and you’re done.

## Example

Let's look at a very basic form that asks for two things, first name and last name.

    <form id="example_form">
      First name: <input type="text" name="firstname"> </input> <br />
      Last name: <input type="text" name="lastname"> </input> <br />
	  <input type="submit" value="Submit"> </input>
	</form>

This is what the above code looks like in your browser, below:

<form id="example_form">
First name: <input type="text" name="firstname"> </input> <br />
Last name: <input type="text" name="lastname"> </input> <br />
<input type="submit" value="Submit" > </input> 
</form>
<br />
<br />

### Setting Up Form Tracking

Notice the `id` in the first line, `<form id="example_form">`. That's the form's ID, and we'll give that to the Event Wizard:

![Event Wizard: Example Form][example-form]

When you save changes here, we'll wait to trigger an event for people who submit the form. So for the above example, when someone submits the form, you'll see that...

	Person X did event "Submitted Example Form" and got properties:
       "Firstname" = (whatever they entered in the *Firstname* field)
       "Lastname" = (whatever they entered in the *Lastname* field)	

How do we know to call the new KISSmetrics properties "Firstname" and "Lastname"? We use the `name` attributes of the form's `<input>`'s. See if you can identify them in the code example above.

## Technical Notes

* The "Submits the Form" event type in the Event Library is equivalent to the JavaScript Library command [`trackSubmit`][trackSubmit]. You can use one or the other.
* Our Event Library has trouble interacting with some `<form>`'s. These forms will be better tracked by using JavaScript Library calls:
  * If you use **jQuery** to customize a form's `submit()` function. Submitting via jQuery bypasses the default KISSmetrics event listener.
  * If you use **Ajax** to [dynamically load a form][dyn] into the page after the page has loaded (`document.ready()`).
* Currently, the Event Library takes only a *single* HTML ID or a *single* class name. If you'd like to use the full range of nested CSS selectors, please use JavaScript Library calls to set up these types of events.

[trackSubmit]: /apis/javascript/javascript-specific#tracking-forms
[example-form]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/event-library/events-form/example-form.png
[dyn]: /how-tos/dynamic-elements