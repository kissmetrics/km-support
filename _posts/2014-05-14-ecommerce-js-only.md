---
layout: post
title: "E-Commerce JavaScript Code Examples"
categories: best-practices
tags:
summary: This is the syntax of the API calls for our E-commerce Essentials.
---
* Table of Contents
{:toc}
* * *

# Introduction

Below is some basic information for you to get started with Kissmetrics. Please let your account manager know if you need information outside of our JavaScript API. Everything in `<<double brackets>>` needs to be replaced with an element ID or a variable. Also, for more information, you can use our [E-commerce Essentials Guide][ecommerce-essentials] and [JavaScript Library][js-lib].

# Getting Started

First step is to implement your [JavaScript code block][js-code-block] in the header of all of your pages. This will track all of our [automatic events and properties][auto-tracked-events] like Visited Site and Ad Campaign Hit. Be sure to use [UTM parameters][utm] with any ads in order to track the details of the ads.

We will now start tracking your custom events and properties. Here are some things you should track for your E-commerce site:

# Track Custom Info

We will first want to track when someone searches a product within your website. Use [trackSubmit][trackSubmit] to track your search form. All you need is the ID of your search form and we will track the event and answers submitted:

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Product Search']);
{% endhighlight %}

Now you should track when someone views a product. You can use our most record call. This is our most fundamental call which tracks events and properties of your users:

{% highlight js %}
_kmq.push(['record', 'Viewed Product', {'Product Viewed SKU':'<<Value>>', 'Product Viewed Name':'<<Value>>', 'Product Viewed Price':'<<99.95>>'}]);
{% endhighlight %}

When someone adds an item to the cart, we should track this with our record call:

{% highlight js %}
_kmq.push(['record', 'Add to Cart', {'Add to Cart SKU':'<<Value>>', 'Add to Cart Name':'<<Value>>', 'Add to Cart Price':'<<99.95>>'}]);
{% endhighlight %}

Then when they view the cart:

{% highlight js %}
_kmq.push(['record', 'Viewed Cart', {'Viewed Cart SKU':'<<Value>>', 'Viewed Cart Name':'<<Value>>', 'Viewed Cart Price':'<<99.95>>'}]);
{% endhighlight %}

Tracking the checkout process is one of the most important parts of Kissmetrics. Once again you can use our record call to track this:

{% highlight js %}
_kmq.push(['record', 'Start Checkout', {'Checkout SKU':'<<Value>>', 'Checkout Name':'<<Value>>', 'Checkout Price':'<<99.95>>'}]);
{% endhighlight %}

Finally, track the complete checkout / purchase. This should fire at the end when the user has confirmed the purchase.

{% highlight js %}
_kmq.push(['record', 'Checkout Complete', {'Purchased SKU':'<<Value>>', 'Purchase Name':'<<Value>>', 'Purchase Price':'<<99.95>>'}]);
{% endhighlight %}

Most E-commerce stores have sign ups, logs in and newsletter sign ups. These form submissions can be tracked with [`trackSubmit`][trackSubmit]:

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Signed Up']);
{% endhighlight %}

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Login']);
{% endhighlight %}

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Newsletter']);
{% endhighlight %}

## Identifying Your Users

Finally, if you were not able to identify your user when they signed up with our `trackSubmit` call (example above), you can use our `identify` call and manually ID the customer:

{% highlight js %}
_kmq.push(['identify', '<<bob@bob.com>>']);
{% endhighlight %}

# Integrations

Be sure to look at our [integration page][integration] to see if you can easily pass us in information from your other tools. [Mailchimp][mailchimp], [Optimizely][optimizely] and [VWO][vwo] are the most popular tools we integrate with.

# Troubleshooting

You will need to use our [Live Stream][testing-with-live] or your [browser’s developer tools][testing-with-browser] to make sure the events and properties are coming in correctly. You do not need to wait 30 minutes to see if the information is correct. This will speed up your implementation tremendously.

[utm]: /integrations/utm-variables
[auto-tracked-events]: /apis/javascript/#events-automatically-tracked
[ecommerce-essentials]: /best-practices/ecommerce-essentials
[js-lib]: /apis/javascript
[js-code-block]: /apis/javascript/#setup
[trackSubmit]: /apis/javascript/#tracking-forms---tracksubmit
[integration]: /integrations
[mailchimp]: /integrations/mailchimp
[optimizely]: /integrations/optimizely
[vwo]: /integrations/vwo
[testing-with-live]: /getting-started/testing-km/#using-kissmetrics-live
[testing-with-browser]: /getting-started/testing-km/#examine-network-activity
