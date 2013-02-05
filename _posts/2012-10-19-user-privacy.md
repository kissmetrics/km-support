---
layout: post
title: User Privacy
categories: misc
author: Eric Fung
summary: Learn how KISSmetrics works in regards to your users' privacy and what you can do to make sure your KISSmetrics installation is in compliance with your privacy policy.
---
## Aligning KISSmetrics with Your Privacy Policy

To align your KISSmetrics installation with your own privacy policy KISSmetrics offers a variety of options:

* **First-party cookies only**:  uses only your site's domain cookies for identifying users.  This identity is cleared when a person clears their browser cookies. This is the default for all users who use our Javascript.
* **Respect Do Not Track header**:  KISSmetrics will respect the Do Not Track header and not record *any* information about the people who have enabled it.
* **Server-side API**:  Disables all KISSmetrics persistent storage technologies and requires you to manually identify a person on each individual visit.
* **Not capturing confidential information in forms**: If you are tracking form submissions, we'll [try not to record confidential data][protected], like passwords or credit card numbers.

The *Respect Do Not Track header* option is available to customers under Javascript Settings.

We are happy to work with our customers to answer their questions about these options or help them to transition from our Javascript API to a server-side API so that you have full control over your KISSmetrics usage.

It should go without saying that if you choose to enable some of these features KISSmetrics will not track all of your users accurately and we can only show you an incomplete picture of your users' activity.

## Do Not Track Header

Because this is still a developing concept there is no standard. Some supporters, such as the [Electronic Frontier Foundation][eff], a staunch supporter of online privacy, argue that first-party analytics companies, such as KISSmetrics should be exempt from the Do Not Track Header. However, in order to give our customers the ability to make their own decisions we have implemented the most aggressive possible implementation - if you turn this feature on and a user has Do Not Track enabled we will make our best effort to not track any data about them.

Each browser currently has its [own implementation][implementation] of this feature. Because some implementors chose to use an HTTP header KISSmetrics can not always detect if a user has Do Not Track enabled (we do our best, but sometimes users will hit a cache which will not accurately detect their current Do Not Track setting). This means there is a chance that you could enable this feature, a user could have Do Not Track enabled, and we would still track their data. If you are interested in honoring the Do Not Track header to not track any data at all we recommend modifying your server-side code to not include the KISSmetrics Javascript if you detect the HTTP header.
  
[eff]: http://www.eff.org/issues/do-not-track
[implementation]: http://ie.microsoft.com/testdrive/Browser/DoNotTrack/Default.html
[protected]: /apis/javascript/javascript-specific/protected-form-fields