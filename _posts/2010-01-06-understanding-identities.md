---
layout: post
title: Understanding Identities
categories: getting-started
author: Eric Fung
summary: Everything you need to know about dealing with KISSmetrics identities.
---
Every piece of data in KISSmetrics can be attributed back to the person who did the event or received the property. We represent these people using "identities", which appear as the `Customer ID` property when you segment your reports. An identity can be a random string `abcdef123456/=`, or it can be a string you recognize - `foo@example.com`, `User #12345`, `Facebook ID 54321`. Each of these tries to represent an individual person based on how much information you know about them.

Either you know who a visitor to your site is, or you don't. Generally, we use the terms "Named Identity" and "**Anonymous Identity**", respectively, to refer to the type of `Customer ID` that represents these people.

# Identities, in General

The JavaScript library has a lot of built-in mechanisms to differentiate anonymous vs. known people, but our underlying API does not. One identity is as good as the next at representing who a person is, whether it's a JavaScript-generated ID or one you provide our server-side libraries.

API Call | Action
-------- | ------
`KM.identify('foo')` | Switches tracking to `foo`, so that we attribute any further events or properties to `foo`.
`KM.alias('foo', 'bar')` | Aliases `foo` and `bar` together so that events done by either ID are associated with the same 'person'.

![][alias-regular]

<a name="identities-with-the-javascript-library"></a>
# Identities with the JavaScript Library

The JavaScript Library attempts to identify your visitors without you having to write too much code. Because of this, there are several scenarios to explain. Please use the link below for an infographic explaining these scenarios.

[Identity Scenarios with the JavaScript Library][js-ids-info]

[trackSubmit]: /apis/javascript/javascript-specific#tracking-forms-tracksubmit
[form-fields]: /apis/javascript/javascript-specific#auto-tracking-form-fields
[id-form]: /apis/javascript/javascript-specific#identifying-a-person-from-a-form-field
[url]: /apis/url
[js-specific]: /apis/javascript/javascript-specific
[multiple-domains]: /apis/javascript/tracking-multiple-domains
[js-ids-info]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/understanding-identities/js-ids.pdf

[alias-regular]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-regular.png