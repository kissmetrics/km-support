---
layout: post
title: Events - Clicks On
categories: [tools, event-library]
summary: Trigger events when someone clicks on an element.
---
* Table of Contents
{:toc}
* * *

## Create The Event

There are probably some key buttons on your site that are critical to the success of your business. They might be:

* Buttons to sign up
* Buttons to buy something

Many clickable elements on your site can be tracked so don’t limit yourself to just buttons. If it’s important and clickable, start tracking it.

It’s easy to tell KISSmetrics what clicks to keep track of. You’re going to go to your site, view the source code, and find the ID or a Class name of the clickable element you want to track. Name your new event, enter in the id or class name, and you’re done.


## Choosing Between Multiple Classes

Sometimes a button will have multiple classes applied to it. In this example below, three classes are being applied to the element and each are separated by a space:

`<a href="/buy class="button button-buy green">Buy</a>`

The classes are .button, .button-buy & .green (the periods are preceding each class because KISSmetrics expects periods when you type a class into the Event Wizard's event creation form).

Make sure to select one class. Do NOT copy/paste all three classes into the event creation form. Out of the three classes, be sure to copy/paste a class that's unique to that element (e.g. .button-buy). If that class is applied to any other element on any other webpage where the KISSmetrics code block lives, KISSmetrics will also fire this event when those other elements are clicked. This will skew your data because the event is firing more times than you're expecting it to fire.

If this is the first time you've encountered classes, please track the element using an ID instead of a class. It's less complicated. If an ID doesn't exist on the element already, either add an ID to the element yourself or ask your web developer to do it.

## Technical Notes

* The "Clicks On" event type in the Event Library is equivalent to the JavaScript Library command [`trackClick`][trackClick]. You can use one or the other.
* The Event Library has trouble if you use **Ajax** to dynamically load page elements after the page has loaded (`document.ready()`). Our script scans the page once for the elements on which to instrument tracking.
* Currently, the Event Library takes only a *single* HTML ID or a *single* class name. If you'd like to use the full range of nested CSS selectors, please try using JavaScript Library calls for these types of events. If that does not work for you, please let us know if you are interested in seeing this functionality within the Event Library.

[trackClick]: /apis/javascript/javascript-specific#tracking-clicks