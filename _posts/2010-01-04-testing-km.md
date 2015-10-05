---
layout: post
categories: getting-started
title: "Testing: How to Verify Kissmetrics Is Working"
tags: [developer_portal]
summary: Learn how to test Kissmetrics and keep the test data separate from your "real" data.
permalink: /getting-started/testing-km/index.html
---
#How to Verify that Kissmetrics is Working

The first time you set up Kissmetrics, you can create a Test Site and use Kissmetrics Live to verify that Kissmetrics is working. The Test Site allows you to create events without harming the real data you collect from your Production Site. 

In addition, if you create a new product, you will receive an additional API key so that you can reserve it for testing purposes.

* Table of Contents
{:toc}
* * *


## Step 1 - Go to the Product Dropdown

In the top navigation, click on the name of your product in the top-left corner. 

![Go to the Product Dropdown][#1]

## Step 2 - Create a New Product
Click on **Create New Product.** You need to be the Owner of the account to be able to create a new site.

*Note: You need to be the [Owner][permissions] of the account to be able to create a new site.*

* Optionally, you can [Edit the Site's Settings][edit-site] to label this site as "Testing" or "Production".

**Remember to install your testing API key only when testing, and to use your production API key for real, live/production data.**


# Testing Individual Events

There are two main methods to ensure that your Kissmetrics events are set up properly.

1. You can use our real-time tool [Kissmetrics Live][live] to watch for your own activity.
2. For more technical users, you can check that there is network activity to our tracking servers.


## Using Kissmetrics Live

All of our users have access to using [Live][live]. This tool scans for events that are immediately happening on your site. In fact, you can even use the "My Activity" filter to load your site in a new tab, and limit Live to just your own browser's activity.

![My Activity][myactivity-ss]

As you step through your site, you can cross-reference in Live that your activity triggers the appropriate events. If you see events in Live, that's a good sign, and it's just a matter of time (about 2-5 hours) to allow our servers to process these recently-fired events for reporting everywhere else in our application.

Read more about Live at our documentation: [Kissmetrics Live][live-doc]


## Examine Network Activity

For those familiar with using their web browser's developer tools, you can also refer to the browser's Network activity. As you browse during testing, look for requests to `trk.kissmetrics.com`; these tracking URLs will be structured according to our [API specifications][specs].

![Network Activity][network-ss]

Viewing the network requests help you confirm a few key items all at once:

* Does the API key match the one for the Kissmetrics site you're using?
* Who is the person doing the event?
* What is the name of the event?
* Are additional properties being passed?

If the response from our server is `Status Code: 200 OK` (third item from the top), then we have received the event just fine, and you can consider this event as successfully triggered. Then it's just a matter of time (about 2-5 hours) to allow our servers to process these recently-fired events for reporting everywhere else in our application.


# Testing Data in Reports

If you suspect that Kissmetrics’ reports disagrees with the data you were expecting, the investigative process our support team uses is shown in our page for [Steps For Investigation][investigation]. Often, it comes down to the way individual events were implemented, or understanding how our [different tools][tools] calculate your data.

[#1]:https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/testing-km/How%20to%20Verify%20that%20Kissmetrics%20is%20Working%201.png
[network-ss]:
[myactivity-ss]: 

[permissions]: 

[edit-site]: 

[live]: 
[live-doc]: 
[specs]: 
[investigation]: 
[tools]:
