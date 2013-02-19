---
layout: post
title: E-Commerce Essentials
categories: best-practices
author: Charles Liu
summary: Here's a list to get you started with picking the right events to track for your e-commerce business.
---
## Introduction

Welcome to KISSmetrics! This handy guide will help you get started by showing you what we think are the best practice essentials for tracking E-Commerce data.

KISSmetrics has helped many e-commerce businesses become successful by using customer analytics, and you too can join in on the fun! Before you start tracking customer data with KISSmetrics, it’s important to think about what you need to know about your customers so that you can provide a better experience for them.

An e-commerce business wants to move customers through four major stages in their lifecycle:

1. **Marketing/Acquisition** - the customer arrives from various channels
2. **Pre-Purchase** - the customer shops around for products, adds products to cart
3. **Purchase Process** - the customer is checking out
4. **Post Purchase** - the customer has purchased

Here’s our recommended best practices for events and properties get started on tracking data for e-commerce businesses.

*Note: Every e-commerce business is unique, and your event and property name choices are up to you. Use this as a barebones guideline for your own business and change your events and properties as needed for your particular processes, market, or industry. Have some fun naming your events and properties too while you’re at it.*

This guide will use the following format:

**Example Recommended Event** <br />
When to trigger the event and any other contextual information
* `Recommended property to set at the same time an event triggers`
* `Recommended property to set at the same time an event triggers`
* `Etc.`

---
<a name="tracking-marketing-acquisition-behavior"></a>
## Tracking Marketing/Acquisition Behavior

**KISSmetrics automatically tracks all of these marketing events and properties for you!**

### Visited Site

Triggered when a customer visits your site. We record **Visited Site** once for each visitor’s browsing session. After 30 minutes of inactivity, the next time the visitor comes back will trigger a new **Visited Site** event, and they will also have the `Returning` Property set to 1.

* `Referrer` indicates the URL the visitor came from.
* `URL` indicates the landing URL when a customer arrived on your website.

### Ad Campaign Hit

Triggered when a customer reaches your site via a Google Ad Campaign (eg. paid search). We detect this by checking the URL for `?gclid` or `?utm_` parameters, which indicate a URL tagged for ad purposes. All the `utm` variables will be captured as Properties, if they are present in the URL. Please refer to our [article regarding Google Analytics][ga-utm] to determine whether the `utm` variables are available or not:

* `Campaign Source`
* `Campaign Medium`
* `Campaign Terms`
* `Campaign Content`
* `Campaign Name`

[ga-utm]: /integrations/utm-variables#google-analytics-8217-auto-tagging-vs-manual-tagging

### Search Engine Hit

Triggered when a customer reaches your site via a search engine, through organic search.

* `Search Engine` indicates which search engine was used.
* `Search Terms` indicates the search terms used.

---

## Tracking Pre-Purchase Behavior

### Product Search

Triggered when a customer uses your search bar to look for products within your site. Applicable only if your site has a search option.

* `Product Search Terms` indicates the search terms used by the customer in the product search bar.

### Viewed Product/Item

Triggered when a customer looks at an individual product or item.

* `SKU/ProductID` indicates the SKU code or Product ID that your inventory or online cataloging system uses.
* `Product Name` indicates the actual Product name such as “Macbook Pro” or “Cinema Display”.
* `Price` indicates the price of the product such as “8.95”.

### Add to Cart

Triggered when customers add a product to their cart.

* `SKU/ProductID` indicates the SKU code or Product ID that your inventory or online cataloging system uses.
* `Product Name` indicates the actual Product Name such as “Macbook Pro” or “Cinema Display”.
* `Price/Amount` indicates the price of the product such as “8.95”.
* `Color/Size/Category/Variation` indicates the color, size, or any other branding you need to assign such as “Red” “Medium” and/or “30-inch Thunderbolt Version”. This can be many properties depending on how granular you want your data to be.
* `Quantity` indicates how many of the products such as “1” “2” or “3”.

---

## Tracking Purchase Process Behavior

### Checkout Step 1/2/3/etc.

Triggered when a customer starts the checkout process. Repeat for however many checkout steps you have in your purchase process.

Consider tracking the Checkout Steps as [form submissions][form-fields], which can capture three additional pieces of information:

* Shipping
* Billing
* Payment

*Notes:*

* *KISSmetrics automatically skips all password, hidden and text area fields as well as sensitive fields (like credit card info).*
* *If you use jQuery or Ajax to dynamically load a form into the page after the page has loaded, you’ll need to use the JavaScript API command `trackSubmit` to track your checkout process correctly.*
* *Our code does not validate the contents of the form as some parts can be considered optional on your site or app. If a visitor fills out a form incorrectly and submits it, we will still count that as a submit event.*

Use one of these carts? Learn more about integrating KISSmetrics with your cart:

* [UltraCart][ultracart]
* [Magento Go or Magento One-Page Checkout][magento]

[form-fields]: /apis/javascript/javascript-specific#auto-tracking-form-fields
[ultracart]: /integrations/ultracart
[magento]: /integrations/magento-km

### Entered Promo Code

Triggered when a customer uses a promo or coupon code when checking out. Applicable only if you are using promo codes.

* `Promo Code` indicates the promo or coupon used by the customer such as “SUMMER2012”.

### Registered / Sign Up

Triggered when a customer registers or signs up an account before purchasing. If customers can checkout as a guest, an email address should be captured as a minimum to identify the customer. This should be possible due to your business sending a confirmation receipt of the order once a customer comples an order. Additional demographic information such as gender, city, country is up to your discretion.

* `Customer ID` indicates the email address or username the customer entered upon sign up. **Note: Rather than passing `Customer ID` as a property, you should use the `identify` API command before triggering `Registered` or `Signed Up` to indicate the new Customer ID.**
* `City` indicates the city that the customer provides on the account (if applicable).
* `Country` indicates the country the customer provides on the account (if applicable).
* `Phone Number/Gender/Demographic Info` indicate any other demographic information you would like to include as a property.

### Purchased / Completed Order

Triggered when a customer has finished the checkout process and purchased. This event confirms when a customer purchases.

* `Order ID` indicates the Order ID that your inventory/distribution system uses so that each order can be assigned to a customer.
* `Order Total` indicates the Order Total after possible tax and shipping.
* `Order Subtotal` indicates the Order Subtotal from all items before tax and shipping.

To track an order with multiple items, set properties for each item in the cart such as it’s SKU #, Product Name, and any other information you want. *KISSmetrics needs to see each item as a separate timestamp to log correctly to the customer, because we [deduplicate properties][dedupe] if the same person receives the same property at the same time.*

Here's example code for a purchase with 4 different items:

    <script>
    _kmq.push(['record', 'Purchased', {'Order ID':10001, 'Order Total':499.99}]);
    _kmq.push(['set', {'SKU':123, '_t':KM.ts(), '_d':1}]);
    _kmq.push(['set', {'SKU':234, '_t':KM.ts() + 1, '_d':1}]);
    _kmq.push(['set', {'SKU':345, '_t':KM.ts() + 2, '_d':1}]);
    _kmq.push(['set', {'SKU':456, '_t':KM.ts() + 3, '_d':1}]);
    </script>

`KM.ts()` returns the current timestamp. In order to log each item in a single purchase event, KISSmetrics needs to see each item individually. The example code delays each `set` call by 1 second so that KISSmetrics can record all the items. The parameter `_d` is set to 1 to indicate you're using a custom timestamp.

The following are some suggested properties to track when a customer completes an order:

* `Purchased SKU/ProductID` indicates the SKU code or Product ID that your inventory or online cataloging system uses.
* `Purchased Product Name` indicates the actual Product Name such as “Macbook Pro” or “Cinema Display”.
* `Color/Size/Category/Variation` indicates the color, size, or any other branding you need to assign such as “Red” “Medium” and/or “30-inch Thunderbolt Version”. This can be many properties depending on how granular you want your data to be.
* `Price` indicates the price of the product such as “8.95”.
* `Quantity` indicates how many of the products such as “1” “2” or “3”.

---

## Tracking Post Purchase Behavior

### Canceled Order

Triggered when a customer cancels an order before the order ships.

We recommend repeating the same properties here as the `Purchase / Completed` event so that you can confirm the items that a customer has decided to cancel.

* `Order ID` indicates the Order ID that your inventory/distribution system uses so that each order can be assigned to a customer.
* `Order Total` indicates the Order Total after possible tax and shipping. **Note: For refunds, pass in the negative amount for the item. If an item was “8.95”, pass in “-8.95”.**
* `Order Subtotal` indicates the Order Subtotal from all items before tax and shipping.

For an order with multiple items, set properties for each item in the cart.

* `Canceled SKU/ProductID` indicates the SKU code or Product ID that your inventory or online cataloging system uses.
* `Canceled Product Name` indicates the actual Product Name such as “Macbook Pro” or “Cinema Display”.
* `Color/Size/Category/Variation` indicates the color, size, or any other branding you need to assign such as “Red” “Medium” and/or “30-inch Thunderbolt Version”. This can be many properties depending on how granular you want your data to be.
* `Price` indicates the price of the product such as “8.95”. **Note: For refunds, pass in the negative amount for the item. If an item was “8.95”, pass in “-8.95”.**
* `Quantity` indicates how many of the products such as “1” “2” or “3”.

## Refunded / Returned Item

Triggered when a customer returns and item or is refunded.

We recommend repeating the same properties here as the `Purchase / Completed Order` event so that you can confirm the items that a customer has decided to refund.

* `Order ID` indicates the Order ID that your inventory/distribution system uses so that each order can be assigned to a customer.
* `Order Total` indicates the Order Total after possible tax and shipping. **Note: For refunds, pass in the negative amount for the item. If an item was “8.95”, pass in “-8.95”.**
* `Order Subtotal` indicates the Order Subtotal from all items before tax and shipping.

For an order with multiple items, set properties for each item in the cart.

* `Returned SKU/ProductID` indicates the SKU code or Product ID that your inventory or online cataloging system uses.
* `Returned Product Name` indicates the actual Product Name such as “Macbook Pro” or “Cinema Display”.
* `Color/Size/Category/Variation` indicates the color, size, or any other branding you need to assign such as “Red” “Medium” and/or “30-inch Thunderbolt Version”. This can be many properties depending on how granular you want your data to be.
* `Price` indicates the price of the product such as “8.95”. **Note: For refunds, pass in the negative amount for the item. If an item was “8.95”, pass in “-8.95”.**
* `Quantity` indicates how many of the products such as “1” “2” or “3”.

## Referred Friend (or any Social Actions)

Triggered when a customer refers a friend or shares their purchase through a social channel. Applicable only if your business has referrals or social sharing.

* `Referral Recipient` indicates the email address, name, or any other identifying information of the person receiving the referral.

---

# What’s Next?

## Creating Your Reports

After you have your events and properties tracking, the first thing you should do is create a Report. Reports help you see which areas of your business you need to improve visualizing the events and property data you’ve just set up. A good place to start is with our [Funnel Reports][funnels].

## Creating Your Metrics

Now that you’ve created your first report, it’s time to create your Metrics so that you can view your most important business metrics at-a-glance. Check out our [Metrics introduction][metrics] to get familiar!

[funnels]: /tools/funnels
[metrics]: /tools/metrics
[dedupe]: /troubleshooting/detecting-duplicates#duplicate-properties