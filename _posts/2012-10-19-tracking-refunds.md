---
layout: post
title: Tracking Refunds
categories: how-tos
author: Eric Fung
summary: Track refunds as a separate event, with a negative Billing Amount property.
---
If you are tracking **Billed** or **Purchased** events, then tracking refunds is a simple addition. You can add the **Refunded** event, and pass in a negative **Billing Amount** property. This will help correctly calculate metrics like `Total Lifetime Value`. Make sure to use the same property name that is tracking your revenue information, If your property name is different from **Billing Amount**.

## Example

To demonstrate, below is an example table of values for a particular person `1234567`. Notice that all revenue information is passed under the same property, **Billing Amount**.

Identity     | Timestamp  | Event    | Prop:Billing Amount
------------ | ---------- | -------- | -------------------
1234567      | 1305072000 | Billed   | 90
1234567      | 1305080000 | Refunded | -90
1234567      | 1307600000 | Billed   | 50
1234567      | 1309900000 | Billed   | 45

<!--
## Refunds for SaaS Businesses

*Note: We are planning development of a Revenue Report specifically for SaaS businesses. We have not yet incorporated Refunds into this report yet, but you can be prepared when we launch the report by recording refund data using this event and these properties. If you are a SaaS business, you can stop recording refunds as a Negative Billing Amount and use this:*

### Subscription Refunded

Triggered when you apply a refund for a customer.

* `Subscription Refund Amount`: Numeric. The refunded amount, as a positive number.
* `Subscription Refund Length`: Numeric. Indicates from how many previous ***months*** we should deduct this refunded amount.
* `Subscription Refund Reason`: Text. Describes the reason for the refund.

Example: You refund Joe $100 while he is on a $50/mo Small plan.

{% highlight ruby%}
KM.identify( <Joe's Identity> );
KM.record('Subscription Refunded', {
  'Subscription Refund Amount' => 100,
  'Subscription Refund Reason' => 'Charged incorrect amount' });
{% endhighlight %}
-->
