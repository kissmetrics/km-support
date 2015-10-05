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

==============================================================================================================================

## Step 1 - Go to the Product Dropdown

In the top navigation, click on the name of your product in the top-left corner. 

![Go to the Product Dropdown][#1]

## Step 2 - Create a New Product
Click on **Create New Product.** _You need to be the [Owner][1] of the account to be able to create a new site._

![Create a New Product][#2]

(Optional) To keep your products organized, you can label it as “Testing” or “Production” within [Site Settings][2]. 

![Create a New Product][#3]

**Remember to install your testing API key only when testing, and to use your production API key for real, live/production data.**

## Step 3 - Verify if your Events Are Set-Up Correctly
There are two way to ensure that your Kissmetrics events are set-up correctly:

1. Use the real-time tool Kissmetrics Live to watch your own activity
2. For more technical users, you can check that there is network activity to our tracking servers.

### Method 1: Use Kissmetrics' Live Feature To Verify Events

The [Kissmetrics Live][3] feature displays in real time the people on your site and the events and properties they are triggering. 

This makes it a great debugger. You'll see if the events and properties you've set up are actually working. And you don't have to rely on other people to trigger events and properties--you can do it yourself. 

Just go to your site, trigger some events and properties and see if everything in [Live][3] is firing correctly.

![Kissmetrics Live][#4]

In this screenshot, the events fired correctly. I visited my homepage, and as a result, my activity fired an event and it shows up in the Live activity feed. 

While Live shows real time data, it'll take 2-5 hours for this data to be used in reports. 


### Method 2: Use Your Web Browser’s Developer Tool
For those familiar with using their web browser’s developer tools, you can also refer to the browser’s Network activity. As you browse during testing, look for requests to `trk.kissmetrics.com`; these tracking URLs will be structured according to our [API specifications][4].

![Use Your Web Browser’s Developer Tool][#5]

Viewing the network requests help you confirm a few key items all at once:

Does the API key match the one for the Kissmetrics site you’re using?
Who is the person doing the event?
What is the name of the event?
Are additional properties being passed?

If the response from our server is `Status Code: 200 OK`, then we have received the event just fine, and you can consider this event as successfully triggered. 

![Use Your Web Browser’s Developer Tool][#6]

It will take about 2-5 hours for our servers to process these recently-fired events to show up within Kissmetrics reports. 

##What if my data looks inaccurate?
If the data within the Kissmetrics Reports is inaccurate, check out the article, [Data Discrepancies][5] to tackle data errors. 

[#1]:https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/testing-km/How%20to%20Verify%20that%20Kissmetrics%20is%20Working%201.png
[#2]:https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/testing-km/How%20to%20Verify%20that%20Kissmetrics%20is%20Working%202.png
[#3]:https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/testing-km/How%20to%20Verify%20that%20Kissmetrics%20is%20Working%203.png
[#4]:https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/testing-km/How%20to%20Verify%20that%20Kissmetrics%20is%20Working%204.png
[#5]:https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/testing-km/How%20to%20Verify%20that%20Kissmetrics%20is%20Working%205.png
[#6]:https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/testing-km/How%20to%20Verify%20that%20Kissmetrics%20is%20Working%206.png

[1]:http://support.kissmetrics.com/how-tos/team-permissions
[2]:https://app.kissmetrics.com/product.edit
[3]:https://app.kissmetrics.com/live
[4]:http://support.kissmetrics.com/apis/specifications
[5]:http://support.kissmetrics.com/troubleshooting/data-discrepancies/
