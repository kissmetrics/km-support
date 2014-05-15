---
layout: post
title: "E-Commerce JavaScript and Server-Side Code Examples"
categories:
tags:
summary: This is the syntax of the API calls for our E-commerce Essentials.
permalink: /best-practices/ecommerce-essentials/js-and-server-side-examples
---
* Table of Contents
{:toc}
* * *

Everything in `<<double brackets>>` needs to be replaced with variables or an ID. Also, for more information, you can use our [E-commerce Essentials Guide][ecommerce-essentials] and [JavaScript Library][js-lib].

**IMPORTANT** - When using both JavaScript and server-side libraries, you must [reuse the JavaScript ID][js-identities] so that your customer's historical information stays consistent. If you switch to server-side tracking and use a new customer ID, this will create a new user and you will have a disconnect between JS and server-side. Refer to [this support page][js-identities] for more details.

The **First step** is to implement the [JavaScript code block][js-code-block] in the header of all of your pages. This will activate KISSmetrics and start tracking our automated events and properties.

Next will be to start tracking your custom events and properties. Here are some things you should start tracking:

## Product Search

Use [trackSubmit][trackSubmit] to track your search form. All you need is the ID of your search form and we will track the event and answers:

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Product Search']);
{% endhighlight %}

## Viewed Product

Track when someone views a product. You should implement our most basic call:

{% highlight js %}
_kmq.push(['record', 'Viewed Product', {'Product Viewed SKU':'<<Value>>', 'Product Viewed Name':'<<Value>>', 'Product Viewed Price':'<<99.95>>'}]);
{% endhighlight %}

## Add to Cart

When someone adds an item to the cart, we should track this with our record call:

{% highlight js %}
_kmq.push(['record', 'Add to Cart', {'Add to Cart SKU':'<<Value>>', 'Add to Cart Name':'<<Value>>', 'Add to Cart Price':'<<99.95>>'}]);
{% endhighlight %}

## Viewed Cart

When someone views the cart:

{% highlight js %}
_kmq.push(['record', 'Viewed Cart', {'Viewed Cart SKU':'<<Value>>', 'Viewed Cart Name':'<<Value>>', 'Viewed Cart Price':'<<99.95>>'}]);
{% endhighlight %}

## Start Checkout

{% highlight js %}
_kmq.push(['record', 'Start Checkout', {'Checkout SKU':'<<Value>>', 'Checkout Name':'<<Value>>', 'Checkout Price':'<<99.95>>'}]);
{% endhighlight %}

Alternatively:

{% highlight php %}
<?
  KM::identify($_COOKIE['km_ai']);
  KM::record('Start Checkout', array('Checkout SKU' => '<<Value>>', 'Checkout Name' => '<<Value>>','Checkout Price' => '<<99.95>>'));
?>
{% endhighlight %}


## Complete Checkout / Purchase - This should fire at the end when the user has confirmed the purchase.

{% highlight js %}
_kmq.push(['record', 'Checkout Complete', {'Purchased SKU':'<<Value>>', 'Purchase Name':'<<Value>>', 'Purchase Price':'<<99.95>>'}]);
{% endhighlight %}

Alternatively:

{% highlight php %}
<?
  KM::identify($_COOKIE['km_ai']);
  KM::record('Checkout Complete', array('Purchased SKU' => '<<Value>>', 'Purchased Name' => '<<Value>>','Purchased Price' => '<<99.95>>'));
?>
{% endhighlight %}

## Sign Ups/ Logs In / Newsletter Sign Up

You should track when someone signs up or logins to your website or signs up for a newsletter. This can be done with [`trackSubmit`][trackSubmit]:

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Signed Up']);
{% endhighlight %}

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Login']);
{% endhighlight %}

{% highlight js %}
_kmq.push(['trackSubmit', '<<ELEMENT_ID_OR_CLASS>>', 'Newsletter']);
{% endhighlight %}

## Identifying

Finally, if someone provides information outside of signing up or logging in, you can identify the person manually. Our [trackSubmit][trackSubmit] call will do this automatically for you if you don't want to use our identify call:

{% highlight js %}
_kmq.push(['identify', '<<bob@bob.com>>']);
{% endhighlight %}

[ecommerce-essentials]: /best-practices/ecommerce-essentials
[js-identities]: /apis/javascript/javascript-identities
[js-lib]: /apis/javascript
[js-code-block]: /apis/javascript/#setup
[trackSubmit]: /apis/javascript/#tracking-forms---tracksubmit
