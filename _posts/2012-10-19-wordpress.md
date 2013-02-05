---
layout: post
title: WordPress Plugin
categories: integrations
author: Eric Fung
summary: Plugins for installing KISSmetrics on WordPress are available.
---
The official KISSmetrics WordPress plugin is now available. This lets you easily install our JavaScript Library, so you don't have to worry about where to manually add the JavaScript snippets we provide you. In addition to the [events tracked automatically from having the JavaScript library installed][js-auto], you can also configure the plugin to additionally track more information.

Enable the events you are interested in tracking:

* Individual post and page views
* Sign in and registration events
* Link clicks in posts, pages and comments
* Social likes, unlikes, and authentication
* Search queries
* Comment submissions

Easily identify users:

* Authenticated users by username
* Unregistered commenters by email address

## Full List of Events and Properties

### Registration
* Viewed signup page
* Signed in
* Created account / registered
* Facebook Connect'd
* Facebook Logout

### Activity
* Viewed post, { ID, Title, Categories }
* Viewed page, { ID, Title, Categories }
* Comment link clicked, { Title, Page }
* Article link clicked, { Title, Page }
* Tweet, { Shared URL }
* Twitter Follow, { Username }
* Like, { Shared URL }
* Unlike, { Shared URL }
* Search, { query }

### Comments
* Commented, { name, email, comment }

Here is the download link to the [KISSmetrics WordPress plugin][wp-plugin]. Please refer to the README inside for installation instructions.

[js-auto]: /apis/javascript#events-automatically-tracked
[wp-plugin]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/wordpress/kissmetrics.zip