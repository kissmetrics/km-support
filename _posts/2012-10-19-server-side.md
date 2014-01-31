---
layout: post
title: Tracking an A/B Test Created with Your Own Server-Side Code
categories: how-tos
summary: If you already have existing server-side code that drives your A/B tests, here is how to pass your results into KISSmetrics.
permalink: /a-b-testing/server-side
---
* Table of Contents
{:toc}
* * *

What if you are already running A/B tests with code that you've written? It's just a simple matter of adding KISSmetrics tracking to these pages.

Let's quickly go over again what's important in an A/B test:

## What Every A/B Test Needs

1. Each visitor is *randomly assigned* to a variation, either A or B.
2. Make sure that the visitor *always sees either only A or only B*. Otherwise, your results are tainted if someone ends up seeing more than one variation.
3. *Record which variation this visitor saw*, so that you can refer to it when checking the results of the A/B test.

We're assuming that your setup is already handling #1 and #2, which just leaves setting up #3.

### Record the Variations as KISSmetrics Properties

Use our `set` command, indicating the name of the experiment and the selected variant.

For example, suppose you're testing different signup button colors. Let's say you have a server-side variable `@color` that your A/B testing code provides. Here's how you could tell KISSmetrics about that:

{% highlight html+ruby %}
<script type="text/javascript">
  _kmq.push(["set", {"Signup Button Color": "<%= @color %>"}]);
</script>
{% endhighlight %}

Later, when you are reporting on the test's performance, you'll be segmenting the report by the property `Signup Button Color`.

### Record KISSmetrics Events Normally

Remember, the point of the test is to see if it influences how your customers reach some end goal. Naturally, you'll want to *record the end goal that you are interested in*.

Just make the standard API calls to KISSmetrics to record your events. For example:

{% highlight html %}
<script>
  // Record the button click with KISSmetrics
  _kmq.push(["record", "Viewed Homepage"])
</script>
{% endhighlight %}

Then:

{% highlight html %}
<script>
  // Record the button click with KISSmetrics
  _kmq.push(["trackClick", "signup_button", "Clicked Signup"])
</script>
{% endhighlight %}

With these events, you could report on the conversion from people who `Viewed Homepage` -> `Clicked Signup`, segmenting by the property `Signup Button Color`.