---
layout: post
categories: best-practices
title: "SaaS Revenue Essentials"
tags: []
summary: These are the events and properties you should track to make the most of our upcoming SaaS Revenue Report.
---
* Table of Contents
{:toc}
* * *

We are in the process of developing a Revenue Report aimed specifically towards SaaS businesses. While it is not ready yet, this report will be designed to help you better visualize **Monthly Recurring Revenue**, especially if your customers are billed less frequently than every month.

Below lists how you can structure your revenue data to prepare for this report.

This guide will use the following format:

**Example Recommended Event** <br />
When to trigger the event and any other contextual information

* Recommended property to set at the same time an event triggers
* Recommended property to set at the same time an event triggers
* Etc.

[request]: mailto:stevecox@kissmetrics.com?subject=%5BSaaS%20Revenue%5D%20Requesting%20Access

---


## Section 1. Recommended Events and Properties


### Subscription Billed

Triggered when a customer is successfully billed for their payment.

* `Subscription Billing Amount`: Numeric. The amount that the customer paid. You do not need to include the currency symbol.
* `Subscription Billing Length`: Numeric. Indicates in ***months*** how frequently the customer is being billed. Fractional months are accepted too.
* `Subscription Plan Level`: Text. Describes what plan the person is on.

Example 1: Joe pays $50/mo for your Small Plan.

{% highlight ruby %}
# Example 1
KM.identify( <Joe_Identity> );
KM.record('Subscription Billed', {
  'Subscription Billing Amount' => 50,
  'Subscription Billing Length' => 1,
  'Subscription Plan Level' => 'Small' });
{% endhighlight %}

Example 2: Ted pays $1200/year for your Large Plan.

{% highlight ruby %}
# Example 2
KM.identify( <Ted_Identity> );
KM.record('Subscription Billed', {
  'Subscription Billing Amount' => 1200,
  'Subscription Billing Length' => 12,
  'Subscription Plan Level' => 'Large' });
{% endhighlight %}


### Subscription Canceled

Triggered when a customer cancels their plan and stops paying you.

* `Subscription Cancelation Reason`: Text. Describes why the customer canceled.

Example: Joe cancels his account because he doesn't have the budget anymore.

{% highlight ruby %}
# Example
KM.identify( <Joe_Identity> );
KM.record('Subscription Canceled', {
  'Subscription Cancelation Reason' => 'No Budget' });
{% endhighlight %}


### Subscription Upgraded

Triggered when a customer upgrades to start paying you more money.

* `Subscription Billing Amount`: Numeric. The **new** amount that the customer is paying. You do not need to include the currency symbol.
* `Subscription Billing Length`: Numeric. Indicates in ***months*** how frequently the customer will be billed. Fractional months are accepted too.
* `Subscription Plan Level`: Text. Describes the **new** plan the person is on.

Example: Joe upgrades his plan from $50/mo Small plan to a $100/mo Medium plan.

{% highlight ruby %}
KM.identify( <Joe_Identity> );
KM.record('Subscription Upgraded', {
  'Subscription Billing Amount' => 100,
  'Subscription Billing Length' => 1,
  'Subscription Plan Level' => 'Medium' });
{% endhighlight %}


### Subscription Downgraded

Triggered when a customer downgrades to start paying you less money.

* `Subscription Billing Amount`: Numeric. The **new** amount that the customer is paying. You do not need to include the currency symbol.
* `Subscription Billing Length`: Numeric. Indicates in ***months*** how frequently the customer will be billed. Fractional months are accepted too.
* `Subscription Plan Level`: Text. Describes the **new** plan the person is on.

Example: Joe downgrades his plan from $100/mo Medium plan to a $50/mo Small plan.

{% highlight ruby %}
KM.identify( <Joe_Identity> );
KM.record('Subscription Downgraded', {
  'Subscription Billing Amount' => 50,
  'Subscription Billing Length' => 1,
  'Subscription Plan Level' => 'Small' });
{% endhighlight %}

<!--
### Subscription Refunded

*Note: we have not incorporated Refunds into the SaaS Revenue Report yet, but you can be prepared when we update our report by recording refund data using this event and these properties.*

Triggered when you apply a refund for a customer.

* `Subscription Refund Amount`: Numeric. The refunded amount, as a positive number.
* `Subscription Refund Length`: Numeric. Indicates from how many ***months*** we should deduct this refunded amount.
* `Subscription Refund Reason`: Text. Describes the reason for the refund.

Example: You refund Joe $100 while he is on a $50/mo Small plan.

{% highlight ruby %}
KM.identify( <Joe_Identity> );
KM.record('Subscription Refunded', {
  'Subscription Refund Amount' => 100,
  'Subscription Refund Reason' => 'Charged incorrect amount' });
{% endhighlight %}
-->

---


## Section 2. How do I import previous transactions?

Please refer to our page on [Importing Data][import]. The properties are somewhat unique, so you'll most likely find yourself writing a little code to work with your backend servers or payment platform's API.


## Section 3. I have already been tracking revenue. How do update my old payments with the recommended structure?

Again, your best bet will be to [Import the Past Data][import]. Chances are you have a way to refer back to *who* was billed *when*...with that information, you can use the appropriate method of importing data to set the new properties you haven't been tracking, like "Subscription Billing Length".

[import]: /advanced/importing-data