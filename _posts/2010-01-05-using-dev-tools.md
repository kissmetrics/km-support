---
layout: post
title: "Testing: Using Your Browser's Developer Tools"
categories: [getting-started, testing-km]
tags: [developer_portal]
author: Eric Fung
summary: If you are familiar with your web browser's developer tools, you can quickly examine the HTML and JavaScript of the page to debug the KISSmetrics JavaScript API.
---
You can use your web browser's developer tools to quickly poke at the HTML and JavaScript of the page, as well as to debug the KISSmetrics JavaScript API.

<a name="opening-the-developer-tools"></a>
# Opening the Developer Tools

## Chrome

* Option 1: Right-click almost anything on the page and "Inspect Element"
* Option 2: View Menu  -> Developer -> View Developer Tools

## Firefox

* Option 1: Install the Firebug add-on, whose interface is pretty similar to Chrome's developer tools.
* Option 2: Tools -> Web Developer -> Developer Toolbar, where you can turn on the Web Console and Inspector as well.

<a name="elements"></a>
# Elements

The elements panel shows the HTML source of a page in a neat hierarchy. This helps with two tasks:

* Look up the ID or Class of an element, to [track clicks][clickvid] or [form submissions][formvid]. The previous links are tutorial videos for tracking clicks and forms in the Event Wizard.
* On the right, you can look at a selected element's "Event Listeners", to see if our JavaScript library is hooked in and "listening" for when someone clicks (`onmousedown`) or submits (`submit`) the selected form or button. In the screenshot, the signup form is selected, and one of the `submit` event listeners includes `doug1izaerwt3.cloudfront.net….` which represents our JS library. That means our Event Wizard or an API call has found this form and is listening for the form's `submit` event to fire off a KISSmetrics event of its own.

[![Elements Panel][elements-ss]][elements-ss]

<a name="network"></a>
# Network

As you browse during testing, look for requests to `trk.kissmetrics.com`; these tracking URLs will be structured according to our [API specifications][specs].

* `trk.kissmetrics.com/e` : for `record`ing an event
* `trk.kissmetrics.com/a` : for `alias`
* `trk.kissmetrics.com/s` : for `set`ting properties without an event

[![Network Panel][network-ss]][network-ss]

## Network Headers

Referring to the screenshot, there are some things to note:

* `Status Code: 200 OK`. That means our tracking server received the event just fine, and you can consider this event as successfully triggered. Then it's just a matter of time (about 2-5 hours) to allow our servers to process these recently-fired events for reporting everywhere else in our application.
* There's a group of information called `Query String Parameters`. Again, these refer to our API specifications, and it's straightforward to understand what these mean:
  - `_n`: View Sign Up Page (name of the event being recorded)
  - `_k`: the API key
  - `_p`: the person/identity doing the event
  - `_t`: the timestamp in seconds in Unix time. This is a good site to translate the time into a human-readable date. http://www.epochconverter.com/
  - `Any KISSmetrics Property`: `Its Recorded Value`.
  
The info here is nicely broken down, but you can see it all contained in the full Request URL (top item) as one big URL-encoded URL.

Viewing the network requests help you confirm a few key items all at once:

* Does the API key match the one for the KISSmetrics site you're using?
* Who is the person doing the event?
* What is the name of the event?
* Are additional properties being passed?

Last thing: there's a black circle in the bottommost bar (5th icon from the left), which "Preserves Log Upon Navigation" so you don't lose the history of events as you go from page to page. Turn it on if you expect to look at events across multiple pages.

<a name="console"></a>
# Console

In the console you can run JavaScript commands. Our [JavaScript Library specifics][js-specific] has a reference on available commands.

[![Console Panel][console-ss]][console-ss]

[js-specific]: /apis/javascript/javascript-specific

[network-ss]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/testing-km/network.png
[elements-ss]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/testing-km/elements.png
[console-ss]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/testing-km/console.png

[clickvid]: /tutorial/event-library-tutorial/events-clicks-tutorial
[formvid]: /tutorial/event-library-tutorial/events-form-tutorial

[specs]: /apis/specifications
