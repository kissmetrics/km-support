---
layout: post
title: Developing in localhost
categories: advanced
author: Eric Fung
summary: Don't use KISSmetrics with `localhost` as your development environment; provide a custom domain name to set your cookies.
---
When you set cookies for `localhost`, your browser does not keep them as you navigate around. So, the parts of our JavaScript library that use cookies will behave differently than what you would normally see in production on a live site. Namely:

* Your KM identity changes around when browsing from page to page.
* The `Visited Site` event is triggered on each page load.
* If you use `KM.ab` to start an a/b test, it appears we "forget" which variation is seen.

## What should I do?

We need a domain on which to set cookies, which you can do in one of two ways:

* Set up a local development domain. For example, edit `/etc/hosts` to include a line like `127.0.0.1  myproject.dev`.
* Use `http://myproject.localhacks.com/`, which has a wildcard A record pointing to `127.0.0.1`.