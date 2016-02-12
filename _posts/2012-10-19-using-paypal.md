---
layout: post
title: Using Paypal
categories: how-tos
summary: Using Kissmetrics with a Paypal checkout system.
---
* Table of Contents
{:toc}
* * *

Since Kissmetrics can't insert tracking scripts on Paypal sites, you'll have to work around PayPal.

## Basic Paypal Tracking

We can track that a customer has initiated the PayPal checkout process (when someone clicks on the button), and we can track if they are re-directed to a confirmation page on your site after a successful purchase (when someone visits the URL).

On a very basic level you can have these two events tracked:

* Started Checkout Process (triggered when someone clicks the button to go to Paypal)
* Completed Purchase (triggered when someone visits the confirmation page)

While you can track if someone successfully purchased using Paypal, you will not be able to see how much they spent or what items they bought unless you have your own custom store solution to track this data.

## Custom Store Solution with Paypal Checkout

If you have your own store solution and just use Paypal as the checkout method, sales data will be passed to your back-end database. You can take advantage of this flexibility to have really powerful segmentation using our API. With these API calls you will be able to see:

* Both how much our customers are spending AND what they are purchasing
* Number of items purchased

Here's a Javascript API example at the point of sale:

Customer completes purchase (either reaching confirmation page or at the point your servers receive this data) and this triggers:

{% highlight js %}
_kmq.push(['record', 'Completed Purchase', {
  'Total Amount' : get_amount_here,
  'Number of Items' : get_number_here,
  'Promotion used' : get_promotion_here }]);
{% endhighlight %}

* Records total amount spent
* Records total number of items bought
* Records promotion used

`get_amount_here` and `get_number_here` and `get_promotion_here` should be replaced by Javascript code that grabs the appropriate information from your database.

In addition, you should be able to designate each "line item" in the purchase. For each line item, they can attach these JavaScript Library calls for however many items:

{% highlight js %}
_kmq.push(['set', {'Purchased Product Name' : get_item_ID, 
                   'Purchased Product Price' : get_price_here}]);
_kmq.push(['set', {'Purchased Product Name' : get_item_ID, 
                   'Purchased Product Price' : get_price_here}]);
_kmq.push(['set', {'Purchased Product Name' : get_item_ID, 
                   'Purchased Product Price' : get_price_here}]);
{% endhighlight %}

Once again, `get_item_ID` and `get_price_here` should be replaced by JavaScript code that grabs the appropriate information from your database.

The `set` command allows them to assign additional parameters to the data as it comes in. If there's only one item, it triggers for that one item. If there's two or three, they trigger at each item. This takes care of individual items and individual prices before applying promotions. Depending on the product, the property could be called Item ID, Game ID, Product ID, etc.
