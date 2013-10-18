---
layout: post
title: Step 4 - Identifying Customers
categories: learn
portal: university
summary: Use our JavaScript API to call out known customers.
---
<div class="alert alert-block">
We'll need a JavaScript developer to implement this properly!
</div>

See <https://gist.github.com/eskfung/6767977> for an example of how to identify customers. This is taken from the code for the KISSmetrics app.

Unless you absolutely want to [track accounts instead of people][person-or-account], **do not call `identify` with the same argument for multiple people**. That irreversibly treats all of your customers as *one* person, and makes our reporting unmeaningful, and *you will have to start over with an entirely new API key.*

# Exercise

If your site supports it, write in the `identify` call for the pages where you'll know who your customer is.

# Takeaways

* Identifying your customers by **email address** works best in the majority of cases, although you can use any *unique* string or integer.
  * Email address is effective because you'll be able to combine data collected by our JavaScript with any KISSmetrics integrations you enable. These typically record data to the email addresses available to that service.
  * Segmenting your reports by Customer ID (email address) becomes much more readable.
* `identify` designates who a person is, for this browsing session and future sessions.
  * We'll save the value to a first party cookie `km_ai`. This keeps a person identified across pages where you omit the API call, and across browsing sessions.
  * Look up the value of the `km_ai` cookie if you need to [refer to a person's ID][reuse]. More on this in the next section.
* Calling `identify` with our JavaScript also [links with a person's anonymous placeholder ID][about-ids].

[reuse]: /apis/javascript/javascript-identities
[about-ids]: /getting-started/understanding-identities#section-3.2
[person-or-account]: /how-tos/person-or-account
