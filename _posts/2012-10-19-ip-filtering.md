---
layout: post
title: IP Blocking and Filtering
categories: troubleshooting
summary: Here are options for filtering certain people from generating Kissmetrics events.
---
* Table of Contents
{:toc}
* * *

## How can I exclude internal traffic?

For most customers, internal traffic is such a small volume compared to their overall traffic that it does not have an impact on their conversion rates.  Customers who do heavy internal QA testing usually prefer to set up a separate Kissmetrics site for their staging/development environment so that their testing activity is recorded under a separate Kissmetrics API key.

However, if there is a specific reason why your internal traffic needs to be ignored, we'd like to hear it.  We're always interested in hearing customer feedback that may tip us off to use cases we hadn't anticipated.
 
### Notes on the Alternatives

* There is no way to exclude certain data after the fact.
* The proposed alternatives prevent Kissmetrics from loading when the user is internal, thus their data never gets into our system.
* These are not 100% foolproof.
* The proposed alternatives assume use of the JavaScript Library only; there is no global way to block events that you call via a server-side API unless you preface each call with some sort of exclusion that you would need to write.

## Option 1: Use AdBlock Plus (Easiest)

[AdBlock Plus][abp] is an extension for Firefox and Chrome that was first created to prevent known ad traffic from loading. You can create custom rules to prevent your Kissmetrics script from loading, which in turn prevents your Firefox/Chrome browser from generating JavaScript events. ABP makes it easy to toggle these rules on and off, so you can turn the filter off to test your events.

Open the AdBlock Plus preferences and add these two filter rules:

    i.kissmetrics.com/i.js
    doug1izaerwt3.cloudfront.net/INSERT_YOUR_API_KEY.1.js

__Remember to insert your API key into the second rule.__

Note that this only prevents the JavaScript from loading. If you are sending us events via alternate [methods][method], these can still pick up your internal users' activity.

[abp]: http://adblockplus.org/en/
[method]: /getting-started/ways-to-send-us-data

## Option 2: Exclude known IP addresses

This assumes that you have a stable, known block of IP addresses that your employees consistently use.  It requires you to write some code.
This psuedo-code would explain the general idea:
 
    get IPaddress
    if IPaddress == one of the known internal IP addresses {  do nothing;  }
    else {  load the Kissmetrics Javascript  }

In other words, don't even load the Kissmetrics JS for internal users.   You could alternatively try this concept with any other "matching" criteria -- i.e. "if username contains 'mycompanyname.com', do nothing, otherwise load the Kissmetrics JS"; however, that example would only work if your internal users were always logged in.

This assumes that the customer is using the Javascript API to measure all actions.  This would not prevent events from being tracked that were being sent via the Ruby Library or any of the other server-side APIs. This also assumes that all internal traffic is coming from the known block of IP addresses.  If someone internal logged in from home, or using their iPhone, this would not block their traffic.

## Option 3: Using Cookies

This assumes that you are able to create a new page on your server where you would set the cookie for your employees.  It requires you to write some code. This also assumes that all of your employees will comply with getting cookied and do so for each browser that they regularly use.
 
### Create the Cookie Page

You will need to create an HTML page and host it on your server in order to set a first-party cookie.  The code for this page would work something like this:

{% highlight html %}
<a onclick = set a cookie called km_ignore with an expiration of 10 years>Click here to set your cookie</a>
{% endhighlight %}

You would upload it to `http://www.mysitename.com/ignore-km.html` (or something like that). Then your employees would need to visit the `http://www.mysitename.com/ignore-km.html` page and click the link to set a cookie for each browser (Chrome, Firefox, IE, Safari, etc.) they regularly use.

### Alter your Kissmetrics code

You would need to replace your default Kissmetrics JS code with something like this:

{% highlight html %}
<script type="text/javascript">
var _kmq = _kmq || [];
function _kms(u){ setTimeout(function() {
var s = document.createElement('script');
  var f = document.getElementsByTagName('script')[0];
  s.type = 'text/javascript'; s.async = true; s.src = u;
  f.parentNode.insertBefore(s, f); }  , 1); }
if(!document.cookie.toString().match(/km_ignore/)) {
_kms('//i.kissmetrics.com/i.js');
_kms('YOUR KISSMETRICS CODE HERE'); }
</script>
{% endhighlight %}

This basically says, "Check to see if this person has a cookie called km_ignore; if so, do nothing; if not go ahead and load the Kissmetrics script."

This assumes that the customer is using the Javascript API to measure all actions. This would not prevent events from being tracked that were being sent via the Ruby Library or any of the other server-side APIs.

This also assumes that your internal users are not clearing their cookies.

## Option 4: Opt Out of Tracking

Our [user privacy page][privacy] lets you opt out of being tracked by Kissmetrics' JavaScript library. This applies to your own site's tracking as well as anyone else who is using Kissmetrics.

[privacy]: http://www.kissmetrics.com/user-privacy
