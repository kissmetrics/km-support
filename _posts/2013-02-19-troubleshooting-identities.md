---
layout: post
categories: troubleshooting
title: "Problems with Identifying Users?"
tags: [identities]
summary: These are several pitfalls to avoid when using Kissmetrics identities.
---
* Table of Contents
{:toc}
* * *

In theory, our concept of identities sounds simple.

1. Kissmetrics tracks people.
2. People can be represented with usually at least 2 different names in their lifetime as a customer. One when they are first anonymous; another when they become known through signing up, logging in, or installing your app.
3. Kissmetrics has two techniques to connect these different names to represent the same person: `alias` and `identify`.

![Alias Regular][alias-regular]

That said, here are some uses of `alias` and `identify` you'll want to take note of.

### 1. You used our `identify` API call but your customer identities are not showing up.

* *Are you calling our API with the identity in quotes?*

Compare:

{% highlight js %}
// This works
_kmq.push(['identify', 'steve@apple.com' ]);
// This will not be recognized
_kmq.push(['identify', steve@apple.com ]);
{% endhighlight %}

* *Do people record events or properties after you call `identify`?*

When you call `identify` with our JS library when a person is anonymous, we automatically alias their anonymous ID with the given ID. This is related to the next section.


### 2. You used our `alias` API call but the aliased ID does not appear when you search for it, or in the history of the person's Customer IDs.

* *We can only show a person's aliases as long as we see an event or property attributed to that alias.*

Consider this example:

{% highlight ruby %}
KM.identify("User123456")
KM.alias("User123456", "kissmetrics@example.com")
KM.record("Event 1")
KM.record("Event 2")
{% endhighlight %}

Because the person never records data while `identifed` as kissmetrics@example.com, that alias never shows up in that person's details, not even as a historic Customer ID. That means you won't be able to look up the person in People Search by the email address, despite the 'alias' call.

![Alias Zero][alias-zero]

Only after I record an event or property as "kissmetrics@example.com" will that show up as a Customer ID.

Often, it's sufficient to just set the additional information as an additional property, like so:

{% highlight ruby %}
KM.identify("User123456")
KM.set({"Email Address":"kissmetrics@example.com"})
KM.record("Event 1")
KM.record("Event 2")
{% endhighlight %}

![Alias vs Set][alias-vs-set]


### 3. We're reporting that only *one* person is doing an event (Visited Site) when you know many more have done the event.

* *Are you reusing the same identity for numerous visitors?*

For unknown people who come to your site, you might think to `identify` them as, literally, an "anonymous user". Keep in mind that our JavaScript distinguishes these people with a randomized hash, so it's counterproductive to call `identify` with the same ID "anonymous" or "guest". Doing so treats everyone as the same **one** person named "anonymous" or "guest".

{% highlight js %}
// Both of these are counter to how we intend for you to use 'identify'
_kmq.push(['identify', 'anonymous' ]);
_kmq.push(['identify', 'guest' ]);

// If you don't know a person's identity, either don't include the API call, or pass us just an empty string.
_kmq.push(['identify', '' ]);
{% endhighlight %}

* *Are IDs being `alias`-chained together?*

**How?** You'll notice when one person has several past Customer IDs representing different unique users.

Consider this sequence:

{% highlight ruby %}
# "John", "User-456", and "User-123" are used as different Customer Identities
KM.alias("John", "User-123")
KM.alias("John", "User-456")
{% endhighlight %}

Although "User-123" and "User-456" represent two different people, and they are not explicitly aliased together in one API call, these two calls will result in both "User-123" and "User-456" representing the same **one** person.

This is why it's useful to just `set` additional properties about who the person is. We recommend using `alias` sparingly and to ensure that each person is represented by a unique ID. In this case, a person's first name is not sufficiently unique enough to use as a person's possible 'identity'.


### 4. We're showing that nobody progressed past a certain step in a funnel when you have other data that indicates otherwise.

* *Have you successfully aliased a person's various identities together?*

This happens most frequently if you send data to Kissmetrics through two or more different data sources (eg. our JavaScript library + PHP library, or JS + Mailchimp Integration). Without connecting the two IDs together, they appear to be different people:

![No Alias][no-alias]

In the example of you using both JS and PHP, it doesn't matter in which language to do the aliasing...as long as we recognize the two IDs are connected. Either of these methods would be equivalent:

* In JavaScript:

{% highlight js %}
_kmq.push(['identify', 'kissmetrics.example@gmail.com']);
// Calling 'identify' in JS for an anonymous user also has a side effect of aliasing the anonymous ID to this email address
{% endhighlight %}

* In PHP:

{% highlight php %}
<?
 KM::alias('kissmetrics.example@gmail.com', 'User123456')
?>
{% endhighlight %}

[alias-regular]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-regular.png
[alias-zero]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-zero.png
[alias-vs-set]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-vs-set.png
[no-alias]: https://kissmetrics-support-files.s3.amazonaws.com/assets/troubleshooting/troubleshooting-identities/no-alias.png
