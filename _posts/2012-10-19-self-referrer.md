---
layout: post
title: Why is my own site listed as a referrer?
categories: troubleshooting
summary: Why is my own site listed as a referrer?
---
* Table of Contents
{:toc}
* * *

Here are two reasons why our JavaScript may pick up your own site as a Referrer.

## 1. Is the KISSmetrics JavaScript on all of your pages?

Let's say you have a setup that looks like this:

    [internet] -> http://landing.mysite.com -> http://www.mysite.com/

_Is the JavaScript snippet on `landing.mysite.com`?_ If it is, then our script will capture as `Referrer` the last page a visitor was on - the `[internet page]`. This is correct and what you're interested in.

Suppose our JS is _not_ on `landing.mysite.com`, but is only on `www.mysite.com`. The script will then capture as `Referrer` the last page a visitor was on - `landing.mysite.com`. This is not useful to you.

## 2. Is your browser redirected when entering your site?

Let's say you have a setup that looks like this:

    [internet] -> http://www.mysite.com/ -> http://www.mysite.com/splash.php

That is, typing in "www.mysite.com" actually redirects you to the "/splash" page. There are two types of redirects...to the user, they do the same thing, but to the browser, there are differences.

### I. JavaScript-based Redirect (problematic)

On `http://www.mysite.com/`, there is a small bit of JavaScript that handles the redirect. For example:

{% highlight html %}
<script type="text/javascript">
// This is code on http://www.mysite.com/
document.location = "http://www.mysite.com/splash.php";
</script>
{% endhighlight %}

Because the browser loads `http://www.mysite.com/` ever so briefly, the browser progresses through pages like this:

    [internet] -> http://www.mysite.com -> http://www.mysite.com/splash.php

The KISSmetrics script is located on the `/splash.php` page. When we check for the Referrer, we see that the last page visited was `http://www.mysite.com`; the info about the `[internet page]` is lost during the redirect.

### II. Location Header (non-JavaScript)

Location Header redirects are done via server-side software, like in Ruby or PHP. This is the more typical way to redirect users.

With this method, the browser reads the headers before rendering the page, so that it knows to go to the next page without counting the visit to `www.mysite.com` as a "hit".

{% highlight php%}
<?php
// This is code on http://www.mysite.com/
header("Location: http://www.mysite.com/splash.php");
?>
{% endhighlight %}

The progression then looks like this:

    [internet] -> (www.mysite.com) -> http://www.mysite.com/splash.php

Again, the KISSmetrics script is located on the `/splash.php` page. So when we check for the Referrer, we see that the last page visited was `[internet page]`, ignoring the fact we got redirected from `www.mysite.com`.