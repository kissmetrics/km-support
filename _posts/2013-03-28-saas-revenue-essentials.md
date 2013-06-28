---
layout: post
categories: best-practices
title: "SaaS Revenue Essentials"
tags: []
author: Eric Fung
summary: These are the events and properties you should track to make the most of our SaaS Revenue Report. 
---
<hr />
# Table of Contents

* [Section 1. Recommended Events and Properties][section1]
* [Section 2. How do I import previous transactions?][section2]
* [Section 3. I have already been tracking revenue. How do update my old payments with the recommended structure?][section3]

We are developing a Revenue Report aimed specifically towards SaaS businesses. This is designed to be an improvement over our existing Revenue Report because it better visualizes the revenue gained from your subscribers month over month, also known as **Monthly Recurring Revenue**.

We've also accounted for businesses that don't bill exactly every single month. Even if you are billing your customers, say, annually, you can record that annual revenue amount just *once*, and we'll display each customer's month-by-month revenue by breaking that one annual revenue into 12 pieces.

If you are a SaaS business interested in testing out this report, please email [stevecox@kissmetrics.com][request] to request early access.

This guide will use the following format:

**Example Recommended Event** <br />
When to trigger the event and any other contextual information

* Recommended property to set at the same time an event triggers
* Recommended property to set at the same time an event triggers
* Etc.

[request]: mailto:stevecox@kissmetrics.com?subject=%5BSaaS%20Revenue%5D%20Requesting%20Access

---

<a name="section-1"></a>
## Section 1. Recommended Events and Properties

<a name="subscription-billed"></a>
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

<a name="subscription-canceled"></a>
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

<a name="subscription-upgrade"></a>
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

<a name="subscription-downgraded"></a>
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

<a name="section-2"></a>
## Section 2. How do I import previous transactions?

Please refer to our page on [Importing Data][import]. The properties are somewhat unique, so you'll most likely find yourself writing a little code to work with your backend servers or payment platform's API.

<a name="section-3"></a>
## Section 3. I have already been tracking revenue. How do update my old payments with the recommended structure?

Again, your best bet will be to [Import the Past Data][import]. Chances are you have a way to refer back to *who* was billed *when*...with that information, you can use the appropriate method of importing data to set the new properties you haven't been tracking, like "Subscription Billing Length".

[import]: /advanced/importing-data
[section1]: #section-1
[section2]: #section-2
[section3]: #section-3
