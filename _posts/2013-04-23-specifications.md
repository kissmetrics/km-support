---
layout: post
title: API Specifications
categories: apis
author: Eric Fung
summary: Here's how our Simple Person-Based REST-like API works, on top of which all of our language libraries are built.
---
To be unobtrusive to your end-users, we'll respond with a 200 OK status, even if some of these parameters are "incorrect". The response will be a 1x1 GIF image (to power our "[Beacon API][beacon]").

***Not to be confused with our [URL API][url], which works with our JavaScript Library to tag links people use to reach your website.***

*Important*: Since you are hitting a URL, remember that any special symbols like `+` and `@` in your parameters should be [URL-encoded][encoding].

<hr />
# Table of Contents

1. [Recording an Event][section1]
2. [Setting Properties][section2]
3. [Aliasing Users][section3]

<a name="recording-an-event"></a>
## Recording an Event

Method URL:

* `http://trk.kissmetrics.com/e`
* `https://trk.kissmetrics.com/e`

**Parameters (GET)**

Parameters | Format             | Necessary? | Description
---------- | ------------------ | ---------- | -----------
`_k`       | string             | Yes        | Your API key
`_p`       | 255 char string    | Yes        | Person doing the event
`_n`       | URL-encoded string | Yes        | Name of the event
`_t`       | integer            | *optional* | Timestamp in ***seconds*** after UTC Unix epoch
`_d`       | 0 or 1             | *optional* | Set to 1 if you're manually passing us the timestamp. It's used when logging events that occurred in the past.
(Anything) | URL-encoded string | *optional* | Set an arbitrary value to an arbitrary user property

**Example**

    http://trk.kissmetrics.com/e?_k=api-key&_p=bob&_n=Signed+Up&gender=male&_t=1262304000&_d=1

This records that the user `bob` did the event `Signed Up` and his `gender` was `male` and this all happened on midnight of January 1, 2010 UTC.

Please be aware of how our processing servers detect [duplicate events][dupes-events].

<a name="setting-properties"></a>
## Setting Properties

Method URL:

* `http://trk.kissmetrics.com/s`
* `https://trk.kissmetrics.com/s`

**Parameters (GET)**

Parameters | Format             | Necessary? | Description
---------- | ------------------ | ---------- | -----------
`_k`       | string             | Yes        | Your API key
`_p`       | 255 char string    | Yes        | Person doing the event
(Anything) | URL-encoded string | *optional* | Set an arbitrary value to an arbitrary user property
`_t`       | integer            | *optional* | Timestamp in ***seconds*** after UTC Unix epoch
`_d`       | 0 or 1             | *optional* | Set to 1 if you're manually passing us the timestamp. It's used when logging events that occurred in the past.

**Example**

    http://trk.kissmetrics.com/s?_k=api-key&_p=bob&gender=male&_t=1262304000&_d=1

This records that the user `bob` got the property `gender` with the value set to `male` and this happened on midnight of January 1, 2010 UTC.

Please be aware of how our processing servers detect [duplicate properties][dupes-props].

<a name="aliasing-users"></a>
## Aliasing Users

Method URL:

* `http://trk.kissmetrics.com/a`
* `https://trk.kissmetrics.com/a`

**Parameters (GET)**

Parameters | Format             | Necessary? | Description
---------- | ------------------ | ---------- | -----------
`_k`       | string             | Yes        | Your API key
`_p`       | 255 char string    | Yes        | One of the person's identities
`_n`       | 255 char string    | Yes        | Another of the person's identities

**Example**

    http://trk.kissmetrics.com/a?_k=api-key&_p=bob&_n=bob%40bob.com

This tells us to represent events done by `User 12345` and `bob@bob.com` as having been done by the same person. If you log events or properties to either ID, they all refer back to the same one person. (`bob@bob.com` is passed as `bob%40bob.com` because the `@` needs to be [URL-encoded][encoding].)

**Calling `alias` is not reversible, and should be used with some caution.**

There are some scenarios where it may be appropriate to call `alias` directly:

* When you implement KISSmetrics using more than one source of data: combining data from an external KM [integration][integration], server-side libraries, and/or our JavaScript library.
* When you are identifying people by their email address, and they update their email address within your app.
* When you are combining someone's anonymous activity and referral data to the data with their usage data after they are a returning customer.

Notes:

* After calling `alias`, the new alias does not appear in a person's list of Customer IDs unless you have triggered an event or set properties to the new alias.
* It’s fine to call `alias` more than once with the same pair of identities.
* It’s fine if a person has more than one alias.
* The order you pass the two arguments does not matter.

[url]: /apis/url
[encoding]: http://www.w3schools.com/tags/ref_urlencode.asp
[beacon]: /apis/beacon
[dupes-events]: /troubleshooting/detecting-duplicates#duplicate-events
[dupes-props]: /troubleshooting/detecting-duplicates#duplicate-properties
[integration]: /integrations

[section1]: #recording-an-event
[section2]: #setting-properties
[section3]: #aliasing-users