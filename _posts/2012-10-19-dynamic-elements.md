---
layout: post
title: Tracking Dynamically-Loaded Elements
categories: how-tos
author: Eric Fung
summary: How to track interactions with dynamic elements on your site.
---
Your site might include **dynamic elements** -- those forms or buttons that are loaded (for example, via Ajax) after the page has loaded. Dynamic elements should tracked by using JavaScript API calls instead of using the Event Library. (For events in the Event Library, we scan the page just once for trackable elements, when our script loads.)

Developers should call our `trackClick` and `trackSubmit` API functions after dynamic elements are loaded, so that they can be tracked correctly. Please refer to our [JavaScript Library documentation][js] for more information.

[js]: /apis/javascript/javascript-specific