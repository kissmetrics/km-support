---
layout: post
title: Events - Visits the URL (with a Regular Expression)
categories: [tools, event-library]
summary: Trigger events when someone visits a URL that matches a regular expression.
---
* Table of Contents
{:toc}
* * *

# Create the Event

To track that people have **viewed** a certain page, you can write a regular expression to match against the URLs you are interested in trigger an event. *Every part of the URL* is accessible to you to match against:

* Protocol (`http://`)
* Domain (`true.example.com`)
* Path (`/path/to/page`)
* Query string (`?referral_code=XIO800`)
* Optional anchors (`#heading-1`).

Because regexes can be very touchy, remember to keep your rule as inclusive or exclusive as necessary.

![Example rule][regex-rule]

If a string match is found, the JavaScript Library will trigger your event. Otherwise, it will not.

# Testing

To quickly test your URL pattern without creating an event, you can open up your browser's JavaScript console and run `KM.urm(pattern)`, where `pattern` is your regex pattern:

    > KM.urm("example\.com\/(index(.html)?)?$");
    true

Due to the complexity of using regular expressions, using regex for events falls outside the scope of our support service. We'll happily do the best we can to provide the tools you need to test the events on your own. [Rubular][rubular] and [RegexOne][regexone] are amazing resources to test and learn more about regex.

# Technical Notes

* Under the hood, we take your pattern as a string and create a RegExp object:

{% highlight js %}
var pattern = "example\.com\/(index(.html)?)?$";
if ( window.location.href.match(new RegExp( pattern )) ) {
  // trigger the KM event
}
{% endhighlight %}

* At this time, you are unable to reuse the match groups in the event names, or property names/values. Please leave us feedback if you are interested in doing so.

[regex-rule]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/event-library/regex-rule.png
[rubular]: http://rubular.com/
[regexone]: http://regexone.com/
