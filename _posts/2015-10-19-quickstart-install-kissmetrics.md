---
layout: post
categories: getting-started
title: "Quickstart Guide: Install Kissmetrics’ JavaScript Tracking Code, Create Custom Events and Properties, and Identify Users"
summary: "In this post, we'll be go through each step you need to take to: (1) get the JavaScript code on every page of your site, (2) understand what the Kissmetrics JavaScript snippet tracks, (3)  create custom events and properties, and (4) identify users of your product or service."
---
Before you can get data into your Kissmetrics account, you'll first need to install the JavaScript tracking code on every webpage of your site. This code is unique and specific to your account.

In this post, we'll be go through each step you need to take to: (1) get the JavaScript code on every page of your site, (2) understand what the Kissmetrics JavaScript snippet tracks, (3)  create custom events and properties, and (4) identify users of your product or service.

* Table of Contents
{:toc}
***

##Where to Find Your Kissmetrics JavaScript Snippet
Your unique tracking code can be found in the settings of your Kissmetrics account.

###Step 1 - Go To Product Settings
Go to any page within the Kissmetrics web app and click on Settings:

![Install Kissmetrics][1]

###Step 2 - Copy the JavaScript Tracking Code to Your Clipboard
Scroll down to locate your JavaScript Tracking Code and copy it. Be sure to copy all the code, from `<script>` to `</script>`.

![Install Kissmetrics][2]

You'll need to insert this code in the <head> section of every page for your site or app. We recommend placing it as high up in the <head> section as possible. You'll want Kissmetrics to load first so that you can track any clicks or interactions with any plugins you may have.

Webpages load from top to bottom, and if a person leaves a page before it has finished loading, you run the chance of the tracking code not running. If the tracking code doesn't run, Kissmetrics won't know that a person ever visited the page. This can cause some discrepancies in your data, and placing the tracking snippet at the top of the page is the best way to avoid those discrepancies.

###Step 3 - Insert the Tracking Code
We've copied our JavaScript tracking code and now we need to edit our website's source code. To start, we'll first locate the <head> tag at the top, then make some space and paste in the tracking code:

![Install Kissmetrics][4]

That's all there is to it! After it is live on your server, Kissmetrics will automatically start sending you some events.

##What the Kissmetrics JavaScript Snippet Tracks Automatically
Once you install the tracking code on your site, you will start to see your data within the hour.

Some [events and properties](https://blog.kissmetrics.com/people-events-and-properties/) are automatically tracked and will start appearing when the data comes in: Visited Site, Ad Campaign Hit, Search Engine Hit and (disabled by default) Page View. You can find more information on those events in our [Javascript Library](http://support.kissmetrics.com/apis/javascript/index.html#events-automatically-tracked) article.

##Creating Custom Events and Properties
To get more of the metrics that matter to your business, you'll need to set up custom events and properties. There are undoubtedly some metrics that matter more to your business than others, but generally there are a few metrics you'll want to set up right away:

* **Sign Up** - An important metric for nearly all online businesses, sign up indicates when a visitor converted to a user. You'll want to tell Kissmetrics when to trigger this event.
* **Using features** - SaaS and mobile apps should create events for when a person uses a key feature. For Kissmetrics, we have events that trigger after a person runs any report. This helps us better understand our user engagement.
* **Payment** - This event goes for any business. All companies need to be paid, and Kissmetrics can trigger an event for when that payment happens, and a property that details the payment amount.
* **Viewing product pages** - Triggering an event anytime someone views a product can help you discover not only which products get viewed the most, but which products convert to purchases. Viewing a product page is also a fundamental step in an e-commerce acquisition funnel.
* **Product added to cart** - Another fundamental step of the e-commerce acquisition funnel is converting from viewing product to moving that product into their cart.
* **Entering checkout** - Typically the second to last step (payment/places order) of the acquisition funnel is when they convert from product added to cart to entering checkout. You'll need to include this event if you want to understand how many people intend to buy and how many of those people actually end up buying.

The first time you set up Kissmetrics, focus on the key events of your business. Core steps of your business, your main features, payments, and cancellations should all get set up. You can build out more specific events as you use Kissmetrics more heavily.

##Verify Events and Properties Are Working with Kissmetrics Live Feature
The Kissmetrics Live feature displays in real time the people on your site and the events and properties they are triggering. You can navigate to Live by selecting it in the top navigation.

![Install Kissmetrics][8]

This makes it a great debugger. You'll see if the events and properties you've set up are actually working. And you don't have to rely on other people to trigger events and properties - you can do it yourself. Just go to your site, trigger some events and properties and see if everything in Live is firing correctly.

##Identifying People
Kissmetrics is a powerful [people tracking](https://blog.kissmetrics.com/tracking-people-with-analytics/) analytics platform. You can identify people and track what they do on your website. For example, if a visitor named John visits your website, we can track what he does in real time: he visits the homepage and he came from a Google referral.

But, before you can identify people, you'll first need to tell Kissmetrics how you identify users of your product or service. The tracking code you've inserted can only assign the anonymous ID, it does not inherently know how you identify people.

For brand new visitors, Kissmetrics will assign people cookies and anonymous identities until you identify them. New people will be assigned an **anonymous ID**, such as _p2fvF3kGwdjQPxTO6yYKy8qocPA=_.

![Install Kissmetrics][10]

They'll appear like this until you identify them for Kissmetrics. Once they are identified, they'll be assigned a named ID, such as an email address, account ID #, Facebook ID, etc. This named ID needs to be unique to that person. Most of our customers use email addresses as the named ID. You don't have to choose email addresses. However you identify users now should be how you'll identify them in Kissmetrics.

![Install Kissmetrics][9]

All previous activity recorded while they were under an anonymous ID will merge with their current named ID when they are identified. You'll see all their pre-purchase activities including what steps led them to converting to registration and paying you.

To learn more about setting up identities, check out our [support document](http://support.kissmetrics.com/getting-started/understanding-identities.html) which covers setting this up. You may need to talk to your developer to get help pulling the identifier information from your back end.

##Recap: 3 Steps for Installing the Kissmetrics JavaScript
Let's recap a few of the main points:

1. **Install the JavaScript tracking code right below the <head> tag.** There are a variety of ways to get the tracking snippet on your website's source code. Whatever method you choose, you'll want to make sure Kissmetrics is one of the first elements that loads. Placing the code near the top will accomplish that.
2. **Once installed, tell Kissmetrics how to identify users.** If you don't do this, all people who come to your website will only assigned an anonymous ID.
3. **Set up custom events.** For Kissmetrics to have the biggest impact on your business, you'll need to set up the metrics that matter to your company's performance.

Once you have everything correctly set up, you'll be able to start running reports and pulling insights that matter to your business.

[1]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%201.png
[2]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%202.png
[3]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%202.png
[4]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%204.png
[8]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%208.png
[9]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%209.png
[10]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%2010.png
