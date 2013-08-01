---
layout: post
title: Measuring Signups and Logins 
categories: how-tos
tags: []
author: Eric Fung
summary: Tap into Facebook's JS API to differentiate Logins and Signups via Facebook Connect.
---
Letting your users sign up and login with their Facebook accounts is extremely convenient. On the other hand, tracking these signups and logins accurately will require combining the [Facebook JavaScript SDK][fb-js-sdk] with KISSmetrics API calls.

## Check Login Status

As Facebook recommends in their [Login Flow For Web guide][login-flow], you can check two important things about the visitor:

* Whether someone is currently logged into Facebook
* Whether someone has previously logged into your app

There are two ways to do this:

1. Subscribe to the `auth.authResponseChange` event
2. Call the `FB.getLoginStatus` function

Either way, you can parse the `response` for the `status` of the visitor:

* `connected`. The person is logged into Facebook, and has logged into your app.
* `not_authorized`. The person is logged into Facebook, but has not logged into your app.
* `unknown`. The person is not logged into Facebook, so you don't know if they've logged into your app.

## `Status` Corresponds to KISSmetrics Events

These three statuses correspond to what call to KISSmetrics you should make:

* `connected`: [automatically log in][auto-login] and record the ***Logged In*** event upon success.
* `not_authorized`: prompt the visitor to login with `FB.login()` and record the ***Signed Up*** event upon success.
* `unknown`: prompt the visitor to login with `FB.login()`. Upon successful login, fetch more info (with `FB.api` perhaps) and record ***Logged In*** *or* ***Signed Up*** based on the results.

## Code Example

We have not personally worked with the Facebook SDK, so we don't have a working code example to provide. Please contribute below if you have recommendations!

[fb-js-sdk]: https://developers.facebook.com/docs/reference/javascript/
[login-flow]: https://developers.facebook.com/docs/facebook-login/login-flow-for-web/
[auto-login]: https://developers.facebook.com/docs/facebook-login/using-auto-login/