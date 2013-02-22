---
layout: post
title: Common Methods
categories: apis
author: Eric Fung
summary: All of our libraries provide the same basic methods - record, set, identify and alias, which are described in more detail here.
---
Rather than constantly making HTTP calls, we provide abstraction with dedicated libraries in several languages. You can use choose to use one (or more) of them to send data.

All of our libraries provide the same basic methods: 

Command    | Description
---------- | ----------------------------
`record`   | Tracks that the current person performed an action.
`set`      | Saves additional properties about the person, which you use to segment groups of people into cohorts.
`identify` | Sets the identity of the current person, so we know who to attribute future events to.
`alias`    | Connects two identities together to represent the same person.

<a name="record"></a>
## `record`

The `record` method is the most commonly used method. When a `record` command is executed, it records a KISSmetric event. It takes two parameters:

* The `name` of the event to record as a string
* An (optional) Hash of `properties` for the event

If you do not pass in a name, calling `record` is identical to calling `set`. See below for examples.

Our [JavaScript Library][js] has additional methods to let you record events after a certain trigger: when an element gets clicked, or when a form is submitted. 

<a name="set"></a>
## `set`

The `set` method lets you set properties on a person without recording an event. It takes a Hash of properties to set. See below for examples.

<a name="identify"></a>
## `identify`

The `identify` method allows you to set the identity of the current person using your site. The Javascript API will set an anonymous identity for you automatically, but for the server-side APIs, you **must** call `identify` on **each** page view.

`identify` only takes a single argument, the identity of the person. This identity can be any string value you want, like a user id, login, e-mail address, or an existing cookie you have already set. Ideally, you want it to be a strong identifier (such as an e-mail address) that will be consistent across sessions, browsers, etc.

Of course before a user signs in you won't know what their identity is. If you need to track this kind of anonymous activity you can create an *anonymous identity* (which you might randomly generate and store in a cookie so you can re-use it for the user). Then once a user does sign in and their identity is accessible it is simple to associate the *anonymous identity* with their *named identity* using `alias` (see below).

We recommend you call `identify` in **two scenarios**:

1. When a user successfully signs up
2. When a user successfully logs in, either through cookies or through a login page

Here's an example of an `identify` call in a Ruby app that obtains the current visitor's username. This may not work for your particular site, but should give you an idea of how to structure the API call.

`_kmq.push(['identify', '<%=SessionDetails.UserName%>']);`

For more information on how to handle identities, please refer to this [Identity Management guide][id].

<a name="alias"></a>
## `alias`

Alias is used to associate one identity with another, so that both identities represent the same person. In other words, if ID-A has done events and ID-B has also done events, after aliasing ID-A and ID-B together, we'll show that both of these ID's had been the same person doing all of the events all along.

[![][alias-regular]][alias-regular]

**Calling `alias` is not reversible, and should be used situationally. If you want to add additional information about a person, setting an additional property usually is enough (for example, adding an email address to someone currently identified by their Facebook ID).**

[![][alias-vs-set]][alias-vs-set]

Our JavaScript Library easily handles the common scenarios of attributing someone's activity while they are anonymous to their post-signup activity, without you having to make the `alias` API call. Please refer to [Identities with the JavaScript Library][js-ids] for more details. However, there are some scenarios where it may be appropriate to call `alias` directly:

* When you implement KISSmetrics using more than one source of data: combining data from an external KM [integration][integration], server-side libraries, and/or our JavaScript library.
* When you are identifying people by their email address, and they update their email address within your app.

Notes:

* It’s fine to call `alias` more than once with the same pair of identities.
* It’s fine if a person has more than one alias.
* The order you pass the two arguments does not matter.
* After calling `alias`, the new alias does not appear in a person's list of Customer IDs unless you have triggered an event or set properties to the new alias.

[![][alias-zero]][alias-zero]

## Examples
Below are some examples for the standard API. Please see APIs for supported languages.

### Javascript
    // Identifies the current person as "bob@bob.com" for future events
    _kmq.push(['identify', 'bob@bob.com']);  

    // Records an event "Viewed Homepage"
    _kmq.push(['record', 'Viewed Homepage']);  

    // Records an event "Signed Up" with additional properties
    _kmq.push(['record', 'Signed Up', {'Plan':'Pro', 'Amount':99.95}]);  

	/* Records an event "Signed Up" in the past.
	 * This demonstrates how to pass the '_t' and '_d' from our 
	 *  specifications as regular KISSmetrics properties.
	 * 1234567890 = 13 Feb 2009 23:31:30 GMT
	 */  
    _kmq.push(['record', 'Signed Up', {'_d':1, '_t':1234567890}])

    // Sets the "Gender" property to "Male" for the current person
    _kmq.push(['set', {'gender':'male'}]);  

    // Connects "bob" and "bob@bob.com" to represent the same person
    _kmq.push(['alias', 'bob', 'bob@bob.com']);

### PHP
    KM::identify('bob@bob.com');
    KM::record('Viewed Homepage');
    KM::record('Signed Up', array('Plan' => 'Pro', 'Amount' => 99.95));
    KM::record('Signed Up', array('_d' => 1, '_t' => 1234567890));
    KM::set(array('gender'=>'male'));
    KM::alias('bob', 'bob@bob.com');


### Ruby
    KM.identify('bob@bob.com')
    KM.record('Viewed Homepage')
    KM.record('Signed Up', {'Plan' => 'Pro', 'Amount' => 99.95})
    KM.record('Signed Up', {'_d' => 1, '_t' => 1234567890})
    KM.set({:gender=>'male', 'Plan Name' => 'Pro'})
    KM.alias('bob', 'bob@bob.com')

### Python
    KM.identify('bob@bob.com');
    KM.record('Viewed Homepage');
    KM.record('Signed Up', {'Plan' : 'Pro', 'Amount' : 99.95});
    KM.record('Signed Up', {'_d' : 1, '_t' : 1234567890});
    KM.set({'gender' : 'male'});
    KM.alias('bob', 'bob@bob.com');

## More Information

Please see [API Tips][tips] for more information.

[js]: /apis/javascript/javascript-specific
[id]: /getting-started/understanding-identities
[tips]: /apis/api-tips
[js-ids]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/understanding-identities/js-ids.pdf
[integration]: /integrations
[alias-regular]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-regular.png
[alias-vs-set]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-vs-set.png
[alias-zero]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-zero.png