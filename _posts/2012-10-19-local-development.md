---
layout: post
title: Developing in localhost
categories: advanced
tags: javascript
summary: Don't use KISSmetrics with `localhost` as your development environment; provide a custom domain name to set your cookies.
---
* Table of Contents
{:toc}
* * *

When you set cookies for `localhost`, the Chrome web browser does not keep them as you navigate around. So, the parts of our JavaScript library that use cookies will behave differently than what you would normally see in production on a live site. Namely:

* Your KM identity changes around when browsing from page to page.
* The `Visited Site` event is triggered on each page load.
* If you use `KM.ab` to start an a/b test, it appears we "forget" which variation is seen.

## What should I do?

First, really consider creating a new, separate site in your KM account so that you keep your testing data out of live, production data.

We will also need a domain on which to set cookies, which you can do in one of two ways:

* Set up a local development domain. For example, edit `/etc/hosts` to include a line like `127.0.0.1  myproject.dev`.
* Use `http://myproject.localhacks.com/`, which has a wildcard A record pointing to `127.0.0.1`.

Alternatively, you can replace the last two lines of our JavaScript snippet with the following, to prevent our script from loading locally altogether. However, this prevents any events from occurring, even if you are testing your API calls:

{% highlight js %}
// Don't load KM locally
if (!window.location.host.match(/localhost/)) {
  _kms('//i.kissmetrics.com/i.js');
  _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
}
{% endhighlight %}