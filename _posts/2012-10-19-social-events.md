---
layout: post
title: Tracking Social Events
categories: how-tos
summary: JavaScript commands for tracking Likes, Follows, Tweets, Shares, +1's, etc.
---
* Table of Contents
{:toc}
* * *

Thanks to Tristan at [grasshopperherder.com][ghh] for compiling this list.

[ghh]: http://grasshopperherder.com

## How do I track Facebook events?

The Facebook social plugins emit a number of events, most importantly the `edge.create` event. This is triggered when a user clicks a Like button on your page. If you are using the Facebook JavaScript SDK (rather than a plugin that inserts an iFrame),you can use the following snippet:

{% highlight html %}
<script type="text/javascript">
  FB.Event.subscribe('edge.create', function(response) {
    _kmq.push(['record', 'Facebook like']);
  });
</script>
{% endhighlight %}

You should paste this code below wherever you include the button.

Facebook's Developers portal has more up-to-date examples of how best to use their API: [https://developers.facebook.com/docs/reference/javascript/][js-api]

Other events are documented here: [http://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/][fb.event]

[js-api]: https://developers.facebook.com/docs/reference/javascript/
[like]: http://developers.facebook.com/docs/reference/plugins/like/
[fb.event]: http://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/

## How do I track Twitter events?
Tracking Twitter events is very similar to Facebook tracking. Include the following snippet just below any Twitter follow code:

{% highlight html %}
<script type="text/javascript">
  twttr.events.bind('follow', function(event) {
    _kmq.push(['record', 'Twitter follow']);
  });
</script>
{% endhighlight %}

If you want to track tweets, use this:

{% highlight html %}
<script type="text/javascript">
  twttr.events.bind('tweet', function(event) {
    _kmq.push(['record', 'Tweeted']);
  });
</script>
{% endhighlight %}

A full list of events you can track is in the Twitter dev docs: [https://dev.twitter.com/docs/intents/events][twitter]

[twitter]: https://dev.twitter.com/docs/intents/events

## How do I track Google +1 (plusone)?
It's easiest to add the tracking when you create your button: [http://www.google.com/webmasters/+1/button/][+1]

Click on "Advanced Options" and enter "plusone_vote" into the "JS Callback Function" field.

Below the +1 code, include the following snippet:

{% highlight html %}
<script type="text/javascript">
  function plusone_vote( obj ) {
    _kmq.push(['record', 'Plus 1 vote']);
  }
</script>
{% endhighlight %}

[+1]: http://www.google.com/webmasters/+1/button/

## How do I track LinkedIn shares?
This currently requires an undocumented feature, so keep in mind that this might change in the future.

Start by creating your button on the LinkedIn dev pages [https://developer.linkedin.com/plugins/share-button][linked-in]. Inside the "IN/Share" tag section you need to add the `data-onSuccess` callback function. Here's an example:

{% highlight html %}
<script src="http://platform.linkedin.com/in.js"
  type="text/javascript"></script>
<script type="IN/Share" data-url="http://www.streamhead.com/"
  data-counter="right" data-onSuccess="linkedin_share"></script>
<script type="text/javascript">
function linkedin_share() {
  _kmq.push(['record', 'Shared on LinkedIn']);
}
</script>
{% endhighlight %}

[linked-in]: https://developer.linkedin.com/plugins/share-button