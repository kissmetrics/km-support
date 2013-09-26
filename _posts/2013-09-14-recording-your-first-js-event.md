---
layout: post
title: Step 2 - Recording Your First KISSmetrics Event with Our JavaScript
categories: learn
portal: university
summary: How to add the custom events that address <em>your</em> business' conversions.
---
With the JavaScript Library on your website, you're ready to create the custom events you need. This can be done in one of two ways:

* [Using the Event Wizard][using-ew]: no experience with code required.
* [Using API methods][using-api]: needs moderate experience with JavaScript, but gives more control over when to trigger events and what to name them.

<a name="using-event-wizard"></a>
# 1. Using the Event Wizard

<div id="wistia_700b63755a" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400"></div>

## Exercise (Event Wizard)

Practice creating events for visits to important pages, like a signup page or a subscribe page.

## Takeaways (Event Wizard)

* Works well when you cannot write JavaScript, or cannot make frequent code changes.
* Works when the JS snippet is on the pages you want to track.
* However, it's less flexible than invoking the API. You are manually naming each event, and cannot use regular expressions for URL patterns.
* When you add a new rule, it may take up to an hour for your browser's cache to retrieve the updated rules.
* The Event Wizard also lets you create events for [tracking clicks][click-tutorial] and [form submissions][form-tutorial]. You'll need a small amount of knowledge in reading HTML, which we'll demonstrate in the videos linked.

<a name="using-javascript-api"></a>
# 2. Using the JavaScript API to `record`

<object id="scPlayer" width="640" height="400" type="application/x-shockwave-flash" data="http://content.screencast.com/users/eskfung/folders/Jing/media/7ed12113-ee64-405a-a38f-56f2281d3ed8/jingswfplayer.swf" > <param name="movie" value="http://content.screencast.com/users/eskfung/folders/Jing/media/7ed12113-ee64-405a-a38f-56f2281d3ed8/jingswfplayer.swf" /> <param name="quality" value="high" /> <param name="bgcolor" value="#FFFFFF" /> <param name="flashVars" value="thumb=http://content.screencast.com/users/eskfung/folders/Jing/media/7ed12113-ee64-405a-a38f-56f2281d3ed8/FirstFrame.jpg&containerwidth=1343&containerheight=758&content=http://content.screencast.com/users/eskfung/folders/Jing/media/7ed12113-ee64-405a-a38f-56f2281d3ed8/00000003.swf&blurover=false" /> <param name="allowFullScreen" value="true" /> <param name="scale" value="showall" /> <param name="allowScriptAccess" value="always" /> <param name="base" value="http://content.screencast.com/users/eskfung/folders/Jing/media/7ed12113-ee64-405a-a38f-56f2281d3ed8/" /> Unable to display content. Adobe Flash is required. </object>

## Exercise (`record` with the API)

Practice creating events for visits to important pages, like a signup page or a subscribe page.

{% highlight js %}
_kmq.push(['record', A_STRING_WITH_YOUR_EVENT_NAME]);
{% endhighlight %}

# Takeaways

* An event occurs when the JS `_kmq.push(['record', SOME_EVENT_NAME]);` is executed.
* You can bind our API call to JavaScript events, which does not limit you to recording events for each page load. See how we combine `record` with video player APIs from YouTube and Wistia.
* Within the JS library, there are [specialized JS functions][js-specific] to help record events upon actions like clicking a page element, submitting a form, or clicking a link that leads off of your domain. Once you are comfortable with using `record` read more about the functions specific to our JavaScript library.
* You can dynamically name events with string interpolation, but remember that events ***should reflect a conversion important to you***. We will encounter performance problems if you record [too many event names][too-many-events] (say, if you record an event with a unique event name for every page visited).

[using-ew]: #using-event-wizard
[using-api]: #using-javascript-api
[video-api]: /how-tos/tracking-video
[js-specific]: /apis/javascript/javascript-specific
[too-many-events]: /troubleshooting/too-many-event-names
[click-tutorial]: /tutorial/event-library-tutorial/events-clicks-tutorial
[form-tutorial]: /tutorial/event-library-tutorial/events-form-tutorial

<script charset="ISO-8859-1" src="http://fast.wistia.com/static/E-v1.js">
</script>
<script type="text/javascript">
loadKMTrackableVideo("700b63755a", "Events: Visits the URL");
</script>