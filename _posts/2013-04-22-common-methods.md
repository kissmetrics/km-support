---
layout: post
title: Common Methods
categories: apis
summary: All of our libraries provide the same basic methods - record, set, identify and alias, which are described in more detail here.
---
* Table of Contents
{:toc}
* * *

Rather than constantly making HTTP calls, we provide abstraction with dedicated libraries in several languages. You can use choose to use one (or more) of them to send data.

All of our libraries provide the same basic methods:

Command    | Description
---------- | ----------------------------
`record`   | Tracks that the current person performed an action.
`set`      | Saves additional properties about the person, which you use to segment groups of people into cohorts.
`identify` | Sets the identity of the current person, so we know who to attribute future events to.


## `record`

The `record` method is the most commonly used method. When a `record` command is executed, it records a KISSmetric event. It takes two parameters:

* The `name` of the event to record as a string
* An (optional) Hash of `properties` for the event

If you do not pass in a name, calling `record` is identical to calling `set`. See below for examples.

Our [JavaScript Library][js] has additional methods to let you record events after a certain trigger: when an element gets clicked, or when a form is submitted.


## `set`

The `set` method lets you set properties on a person without recording an event. It takes a Hash of properties to set. See below for examples.


## `identify`

The `identify` method allows you to set the identity of the current person using your site. Our JavaScript API will detect anonymous visitors and set up appropriate anonymous identities for them automatically.

`identify` only takes a single argument, the identity of the person. This identity can be any string value you want, like a user id, login, e-mail address, or an existing cookie you have already set. Ideally, you want it to be a strong identifier (such as an e-mail address) that will be consistent across sessions, browsers, etc.

We recommend you call `identify` in **two scenarios**:

1. When a user successfully signs up
2. When a user successfully logs in, either through cookies or through a login page

Here's an example of an `identify` call in a Ruby app that obtains the current visitor's username. This may not work for your particular site, but should give you an idea of how to structure the API call.

`_kmq.push(['identify', '<%= @user.email_address %>']);`

For more information on how to handle identities, please refer to this [Identity Management guide][id].


## Examples
Below are some examples for the standard API. Please see APIs for supported languages.

### Javascript
{% highlight js %}
// Identifies the current person as "bob@bob.com" for future events
_kmq.push(['identify', 'bob@bob.com']);

// Records an event "Viewed Homepage"
_kmq.push(['record', 'Viewed Homepage']);

// Records an event "Signed Up" with additional properties
_kmq.push(['record', 'Signed Up', {'Plan':'Pro', 'Amount':99.95}]);

/* Records an event "Signed Up" in the past.
 * This demonstrates how to pass the '_t' and '_d' from our
 *  specifications as regular Kissmetrics properties.
 * 1234567890 = 13 Feb 2009 23:31:30 GMT
 */
_kmq.push(['record', 'Signed Up', {'_d':1, '_t':1234567890}])

// Sets the "Gender" property to "Male" for the current person
_kmq.push(['set', {'gender':'male'}]);

{% endhighlight %}

### PHP
{% highlight php %}
<?php
 KM::identify('bob@bob.com');
 KM::record('Viewed Homepage');
 KM::record('Signed Up', array('Plan' => 'Pro', 'Amount' => 99.95));
 KM::record('Signed Up', array('_d' => 1, '_t' => 1234567890));
 KM::set(array('gender'=>'male'));
?>
{% endhighlight %}

### Ruby
{% highlight ruby %}
KMTS.record('bob@bob.com', 'Viewed Homepage')
KMTS.record('bob@bob.com', 'Signed Up', {'Plan' => 'Pro', 'Amount' => 99.95})
KMTS.record('bob@bob.com', 'Signed Up', {'_d' => 1, '_t' => 1234567890})
KMTS.set('bob@bob.com', {:gender=>'male', 'Plan Name' => 'Pro'})
{% endhighlight %}

### Python
{% highlight python %}
KM.identify('bob@bob.com');
KM.record('Viewed Homepage');
KM.record('Signed Up', {'Plan' : 'Pro', 'Amount' : 99.95});
KM.record('Signed Up', {'_d' : 1, '_t' : 1234567890});
KM.set({'gender' : 'male'});
{% endhighlight %}

[js]: /apis/javascript
[id]: /getting-started/understanding-identities
