---
layout: post
title: "SaaS JavaScript Code Examples"
categories:
tags:
summary: This is the syntax of the API calls for our SaaS Essentials.
permalink: /best-practices/saas-essentials/js-examples
---
* Table of Contents
{:toc}
* * *

# Introduction

Below is some basic information for you to get started with Kissmetrics. Please let your account manager know if you need information outside of our JavaScript API. Everything in `<<double brackets>>` needs to be replaced with an element ID or a variable.

# Getting Started

First step is to implement your [JavaScript code block][js-code-block] in the header of all of your pages. This will track all of our [automatic events and properties][auto-tracked-events] like Visited Site and Ad Campaign Hit. Be sure to use [UTM parameters][utm] with any ads in order to track the details of the ads.

# Track Custom Info

Now you want to track any pre-sign up activity. This could be watching a video on your home page or viewing a particular page (i.e. pricing page).

* [Tracking Video Guide][tracking-videos]

{% highlight js%}
_kmq.push(['record', 'Viewed Pricing Page']);
_kmq.push(['record', 'Watched Video', {'Video Watched':'<<Yes>>'}]);
{% endhighlight %}

Your customer is ready to sign up or start a trial. You will want to track the registration process and [Identify the user][identities-intro] when they provide their email address. Remember, you can use our [trackSubmit API call][trackSubmit] to track any form and identify users all at once!

{% highlight js%}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Signed Up']);
{% endhighlight %}

If you have a free trial and then a paid trial, you will want to track when someone is billed and upgrades their account:

{% highlight js%}
_kmq.push(['record', 'Upgraded', {'Upgrade Plan':'<<Pro>>'}]);
_kmq.push(['record', 'Billed', {'Billing Plan':'<<Pro>>', 'Billing Amount':<<99.95>>}]);
{% endhighlight %}

You are now tracking free users and users on your paid account. You also have revenue information coming in from the Billing Amount property. It is time to start tracking your key features so you can see what makes your customers successful:

{% highlight js%}
_kmq.push(['record', '<<Your Key Action>>']);
_kmq.push(['record', '<<Your Other Key Action>>', {'<<Details of Key Action>>':'<<Value>>'}]);
{% endhighlight %}

If you have any element or button you want to track, you can use our [trackClick API call][trackClick]. Here is an example of someone clicking on the Invite button.

{% highlight js%}
_kmq.push(['trackClick', '<<ELEMENT_ID_OR_CLASS>>', 'Invite Friends Clicked']);
{% endhighlight %}

# Identifying Your Users

Finally, if you were not able to identify your user when they signed up with our `trackSubmit` call (example above), you can use our `identify` call and manually ID the customer:

{% highlight js%}
_kmq.push(['identify', '<<bob@bob.com>>']);
{% endhighlight %}

# Integrations

Be sure to look at our [integration page][integration] to see if you can easily pass us in information from your other tools. [Mailchimp][mailchimp], [Optimizely][optimizely] and [VWO][vwo] are the most popular tools we integrate with.

# Troubleshooting

You will need to use our [Live Stream][testing-with-live] or your [browser’s developer tools][testing-with-browser] to make sure the events and properties are coming in correctly. You do not need to wait 30 minutes to see if the information is correct. This will speed up your implementation tremendously.


[saas-essentials]: /best-practices/saas-essentials
[js-identities]: /apis/javascript/javascript-identities
[js-lib]: /apis/javascript
[auto-tracked-events]: /apis/javascript/#events-automatically-tracked
[js-code-block]: /apis/javascript/#setup
[trackSubmit]: /apis/javascript/#tracking-forms---tracksubmit
[trackClick]: /apis/javascript/#tracking-clicks---trackclick
[utm]: /integrations/utm-variables
[tracking-videos]: /how-tos/tracking-video
[identities-intro]: /getting-started/understanding-identities
[integration]: /integrations
[mailchimp]: /integrations/mailchimp
[optimizely]: /integrations/optimizely
[vwo]: /integrations/vwo
[testing-with-live]: /getting-started/testing-km/#using-kissmetrics-live
[testing-with-browser]: /getting-started/testing-km/#examine-network-activity
