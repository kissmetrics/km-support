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

##Four Ways to Edit Your Website’s Source Code
There are plenty of ways to edit your website's source code:

###Method 1 - Use Git
You can make source code changes through git and push it to your web server. 

###Method 2 - Download all your HTML files from the web server, edit them in a text editor, and re-upload them to the web server.
You can download the HTML files via FTP from your web server. Once downloaded, make changes to the code for every page, and re-upload them back to the web server. 

###Method 3 - Using Content Management Systems (CMS)
If you're using a CMS, you'll need to install the tracking snippet into your template. However your template is built, make sure the JavaScript snippet is tracking on every page of your site. 

For Wordpress, you also have the option to download the plugin and install it. 

You can download the plugin [here](https://wordpress.org/plugins/kiss-metrics/).

###Method 4 - Make Source Code Changes Through Your Web Host's Console
If your site is hosted through a traditional managed web hosting service, you may be more comfortable inserting the tracking code through the web console. 

Whichever method you choose, you'll need to make sure you push all code changes live at once. If some pages have the tracking code installed and others don't, you'll get lower quality data. 

Some sites also employ a staging server, which serves as a tool to test the changes made to the site. It's all private to the company, the public doesn't use the staging server. If the changes on the staging server look good, they are then pushed to the production server, where it is live for the public. 

Choose whichever method works best for you, and then grab your tracking script. 

##Where to Find Your Kissmetrics JavaScript Snippet
Your unique tracking code can be found in the settings of your Kissmetrics account. 

###Step 1 - Go To Product Settings
Go to any page within the Kissmetrics web app and click on Settings:

![Install Kissmetrics][1]

###Step 2 - Copy the JavaScript Tracking Code to Your Clipboard
Scroll down to locate your JavaScript Tracking Code and copy it. Be sure to copy all the code, from `<script>` to `</script>`. 

![Install Kissmetrics][2]

You'll need to insert this code in the <head> section of every page for your site or app. We recommend placing it as high up in the <head> section as possible. You'll want Kissmetrics to load first so that you can track any clicks or interactions with any plugins you may have. 

Webpages load from top to bottom, and if a person leaves a page before it has finished loading, you run the chance of the tracking code not running. If the tracking code doesn't run, Kissmetrics won't know that a person ever visited the page. This can seriously mess up your data. This is why you need to place the tracking code near the top of the source code. 

You'll get higher quality data when you place it right below the <head> tag on all your pages This is an important point that cannot be overlooked. 

The tracking code loads asynchronously, which means that **it will not affect page load times.** If you think of webpages as a highway, asynchronous content loads on a separate lane from the rest of your HTML content. This means that it will not slow down the load times of your other website content. 

You can install the tracking snippet on both HTTP and the more secure HTTPS pages. Use the same tracking snippet for each page, no special cases are required for either. Kissmetrics will track people regardless. 

By installing the JavaScript tracking snippet, Kissmetrics will track all subdomains seamlessly. For example, if you install the snippet onto the main homepage -- *kissmetrics.com*, we will track all subdomains under your URL such as *app.kissmetrics.com*, *blog.kissmetrics.com*, and *grow.kissmetrics.com* domains. If you have subdomains, don't hesitate to insert the tracking snippet if you'd like to track the pages within that subdomain. 

###Step 3 - Insert the Tracking Code
We've copied our JavaScript tracking code and now we need to edit our website's source code. To start, we'll first locate the <head> tag at the top:

![Install Kissmetrics][3]
Make some space for it and paste the tracking code:

![Install Kissmetrics][4]
That's all there is to it! After it is live on your server, Kissmetrics will automatically start sending you some events.

##What the Kissmetrics JavaScript Snippet Tracks Automatically
Once you install the tracking code on your site, you will start to see your data within the hour. 

Some [events and properties](https://blog.kissmetrics.com/people-events-and-properties/) are automatically tracked and will start appearing when the data comes in:

**Event: Visited Site**
This event triggers when a person visits any page of your site that has the JavaScript tracking code. Along with this information, the properties Referrer, URL, and Returning are tracked. 

**Referrer** records the URL the person came from. This property is particularly useful for learning where your customers came from. Using a Funnel Report, you can segment visitors by referrer to learn which referrers not only bring the most visitors, but more importantly which referrers bring the most customers. 

**URL** tells you which URL a new visitor first landed on. With the Funnel Report, you'll be able to segment people by this URL and test pages against each other to see which ones led to conversion. 

**Returning** triggers when the person comes back to your site. If the person returns, they'll be assigned a 1 next to the property. The time between visits must be 30 minutes or longer for the Returning property to trigger. If they visit your site, leave and return 25 minutes later, Returning won't trigger. At least 30 minutes must elapse for "Returning" to set. When looking at the person details report, you'll see how many times the person has returned:

![Install Kissmetrics][5]
*The "x13" box next to the Returning property indicates the person has returned to our site 13 times since their first visit. When we hover over the box we see when Kissmetrics first saw them return as well as when they most recently returned.* 

You can segment people by their Returning property in a Funnel Report. Here's how that looks:

![Install Kissmetrics][6]
Here we see a typical signup funnel; we're tracking people who visit our site, view the features page and signup. People are segmented by the Returning property. We're seeing how new vs returning visitors convert through the funnel. While most of the people that come to our site are new visitors, we actually get more signups from returning visitors. This tells us that most people make more than one visit before they decide to sign up. 

**Event: Ad Campaign Hit**
We trigger ad campaign hits whenever we see a UTM parameter which is the standard way to track campaigns in Google Analytics. So we pick up the exact same data. Kissmetrics captures the following UTM variables as properties:

* Campaign Source
* Campaign Medium
* Campaign Terms
* Campaign Content
* Campaign Name

When Kissmetrics recognizes these variables, they'll be sorted and stored under properties. 

We also trigger ad campaign hits when we see a gclid parameter. This is used by the AdWords autotagging. Google keeps the data in the gclid data hidden so we can't track all your AdWords data automatically. But we can trigger ad campaign hit events for these visitors.

**Event: Search Engine Hit**<br>
If a person comes to your site via an organic search, Kissmetrics will trigger the event as "Search Engine Hit". The property **Search Engine** indicate which search engine they used, and **Search Terms** indicate the query. Due to Google hiding much of this data, many queries will return as "Not Provided," just as they do in Google Analytics. 

**Event: Page View**<br>
Page View triggers when a person views any page of your site. It contains two properties - Viewed URL and Referrer. Viewed URL shows the pages the person viewed. Referrer shows the last page viewed. 

By default, we do not track pageviews. In many cases, having this enabled will quickly use up your Kissmetrics event limits. You can turn it on or off by simply flipping a switch in your [JavaScript settings](https://app.kissmetrics.com/product.js_settings):

![Install Kissmetrics][7]

##Creating Custom Events and Properties
To get more of the metrics that matter to your business, you'll need to set up custom events and properties. There are undoubtedly some metrics that matter more to your business than others, but generally there are a few metrics you'll want to set up right away:

* **Sign Up** - An important metric for nearly all online businesses, sign up indicates when a visitor converted to a user. You'll want to tell Kissmetrics when to trigger this event. 
* **Using features** - SaaS and mobile apps should create events for when a person uses a feature. For Kissmetrics, we have events that trigger after a person runs any report. Using this data, we can understand our feature engagement and see how many new users actually start using the app after they get into it for the first time. 
* **Payment** - This event goes for any business. All companies need to be paid, and Kissmetrics can trigger an event for when that payment happens, and a property that details the payment amount. 
* **Viewing product pages** - Triggering an event anytime someone views a product can help you discover not only which products get viewed the most, but which products convert to purchases. Viewing a product page is also a fundamental step in an eCommerce acquisition funnel. 
* **Product added to cart** - Another fundamental step of the eCommerce acquisition funnel is converting from viewing product to moving that product into their cart. 
* **Entering checkout** - Typically the second to last step (payment/places order) of the acquisition funnel is when they convert from product added to cart to entering checkout. You'll need to include this event if you want to understand how many people intend to buy and how many of those people actually end up buying. If many of them enter checkout, you can assume they are intending to buy. If there's a big dropoff from this event to completing purchase, you know you'll need to focus on your checkout process and find the areas where people abandon. 

The first time you set up Kissmetrics, focus on the key events of your business. Core steps of your business, your main features, payments, and cancellations should all get set up. You can build out more specific events as you use Kissmetrics more heavily.

##Verify Events and Properties Are Working with Kissmetrics Live Feature
The Kissmetrics Live feature displays in real time the people on your site and the events and properties they are triggering. You can navigate to Live by selecting it in the top navigation.

![Install Kissmetrics][8]

This makes it a great debugger. You'll see if the events and properties you've set up are actually working. And you don't have to rely on other people to trigger events and properties - you can do it yourself. Just go to your site, trigger some events and properties and see if everything in Live is firing correctly.

While Live shows real time data, it'll take an hour for this data to be able to be used in reports. 

##Identifying People
Kissmetrics is a powerful [people tracking](https://blog.kissmetrics.com/tracking-people-with-analytics/) analytics platform. You can identify people and track what they do on your website. For example, if a visitor named John visits your website, we can track what he does in real time: he visits the homepage and he came from a Google referral.  

But, before you can identify people, you'll first need to tell Kissmetrics how you identify users of your product or service. The tracking code you've inserted can only assign the anonymous ID, it does not inherently know how you identify people. 

For brand new visitors, Kissmetrics will assign people cookies and anonymous identities until you identify them. New people will be assigned an **anonymous ID**, such as _p2fvF3kGwdjQPxTO6yYKy8qocPA=_. 

![Install Kissmetrics][10]
They'll appear like this until you identify them for Kissmetrics. Once they are identified, they'll be assigned a named ID, such as an email address, account ID #, Facebook ID, etc. This named ID needs to be unique to that person. Most of our customers use email addresses as the named ID. You don't have to choose email addresses. However you identify users now should be how you'll identify them in Kissmetrics. 

![Install Kissmetrics][9]
All previous activity while they were under an anonymous ID will merge with their current named ID when they are identified. All the touchpoints Kissmetrics has captured from them before they were identified will be merged into their named ID. You'll see all their pre-purchase activities including what steps led them to converting to registration and paying you.

To learn more about setting up identities, check out our [support document](http://support.kissmetrics.com/getting-started/understanding-identities.html) which covers setting this up. You may need to talk to your developer to get help pulling the identifier information from your back end. 

You'll want to put the identify code anywhere on your website where you identify users. This can be a sign up page, registration page, form field, etc.

##Identifying people: 3 Steps for Installing the Kissmetrics JavaScript
Let's recap a few of the main points:

1. **Install the JavaScript tracking code right below the <head> tag.** There are a variety of ways to get the tracking snippet on your website's source code. Whatever method you choose, you'll want to make sure Kissmetrics is one of the first elements that loads. Placing the code near the top will accomplish that. 
2. **Once installed, tell Kissmetrics how to identify users.** If you don't do this, all people who come to your website will only assigned an anonymous ID. This will likely require some help from one of your developers. 
3. **Set up custom events.** For Kissmetrics to have the biggest impact on your business, you'll need to set up the metrics that matter to your company's performance. 

Once you have everything correctly set up, you'll be able to start running reports and pulling insights that matter to your business.

[1]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%201.png
[2]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%202.png
[3]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%202.png
[4]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%204.png
[5]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%205.png
[6]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%206.png
[7]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%207.png
[8]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%208.png
[9]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%209.png
[10]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/quickstart%20guide%3A%20install%20Kissmetrics%E2%80%99%20JavaScript%20tracking%20code/Installing%20Kissmetrics%27%20JavaScript%20Tracking%20Code%2010.png
