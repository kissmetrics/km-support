---
layout: post
title: Understanding People, Events and Properties within Kissmetrics
categories: getting-started
summary: The Kissmetrics data model is comprised of three components: people, events and properties. Understanding these concepts is vital to being able to analyze the data you are collecting.
---
The Kissmetrics data model is comprised of three components: people, events and properties. Understanding these concepts is vital to being able to analyze the data you are collecting.

* Table of Contents
{:toc}
* * *

## What are people?

People are the visitors on your sites. A person in Kissmetrics represents the physical person behind the computer that came to view your blog, website or app. 

![Person Live][personlive]

To understand how people are identified within Kissmetrics, take a look [here.](http://support.kissmetrics.com/getting-started/understanding-identities.html)


## What are events?

Events are the actions that your users are taking on your site or within your app. 

![Event Live][eventlive]

Some examples of events include:

| Event Name               | Description                                                                      |
|--------------------------|----------------------------------------------------------------------------------|
| Signed Up                | This event will be triggered when a visitor completes the sign up                |
| Logged in                | The event will be triggered anytime a visitor logs into your site or application |
| Completed check out      | This event will be triggered when a visitor completes the checkout process       |
| Subscribed to newsletter | This event will be triggered when a visitor subscribes to your newsletter        |

For suggested events for your use case take a look at our [best practices guides.](http://support.kissmetrics.com/best-practices/)

## What are properties?

Properties are additional bits of information describing your users and their actions. By using properties you are able to segment reports and dive deeper into your data.

![Property Live][propertylive]

Properties are passed as key-value pairs. It is important to note that properties are tied to the person and not to the event.

If you are using JavaScript to track on your site, you will automatically track some properties, including:

| Property Name   | Description                                                      | Property Value Example     |
|-----------------|------------------------------------------------------------------|----------------------------|
| Device Type     | This is the device being used by the user                        | Smartphone                 |
| Browser         | This is the browser that is being used by the user               | Chrome                     |
| Continent       | This is the Continent where the user is accessing your site from | North America              |
| Campaign Source | When a link directing to your site is using UTM parameters       | Linkedin                   |
| Referrer        | The URl that the visitor came from                               | www.example.com/blog/post1 |

The automatically tracked properties are a great start but you will also want to track your own. Some examples are:

| Property Name       | Description                                        | Property Value Example |
|---------------------|----------------------------------------------------|------------------------|
| Plan Type           | The name of the plan the user signed up for        | Starter                |
| Product Viewed Name | The name of the product the user viewed            | Leather Notebook       |
| Promo Code Used     | The promo code that was used during checkout       | SUMMERSALE             |
| Video Played Name   | The name of the video that was watched by the user | Beginners Guide        |

## Examples

Now that you understand these concepts separately, let’s see how they all work together.

**Example 1:** Janet is a first-time visitor to your ecommerce site. She originally arrived at the site from a post she saw on a fashion blog. While she was on your site, she viewed 2 dresses, added 1 to her shopping cart, created an account and ultimately left without buying anything.

In this scenario, who is the person? What are the events? And what properties should be passed?

| Person | Events              | Properties                                     |
|--------|---------------------|------------------------------------------------|
| Janet  | Visited Site        | Returning: No                                  |
|        | Viewed Product (2x) | Referrer: blog.highfashion.com/best_new_sites  |
|        | Added to Cart       | Viewed Product Name: Sapphires maxi dress      |
|        | Signed Up           | Viewed Product Name: The blackout dress        |
|        |                     | Added to Cart Product Name: The blackout dress |

**Example 2:** Jose is an avid user of a Saas product that helps him keep track of different list. Jose logs into his account, creates a new grocery list for the week, adds 3 items from the drop down list, saves the list and proceeds to email the list to his partner.

In this scenario, who is the person? What are the events they did? And what properties should be passed?

| Person | Events             | Properties                |
|--------|--------------------|---------------------------|
| Jose   | Visited Site       | Returning: Yes            |
|        | Logged In          | New List Type: Grocery    |
|        | Created New List   | Added Item: Milk          |
|        | Added Item to List | Added Item: Bread         |
|        | Saves List         | Added Item: Apple         |
|        | Shares List        | Shares List Method: Email |

## Next Steps

Once you understand these concepts and which events you will want to track, you will need to set them up. There are a few different methods to do so, you can get started with the [Event Library](http://support.kissmetrics.com/tools/event-library/) or the [JavaScript Library.](http://support.kissmetrics.com/apis/javascript/javascript-specific/index.html)

[personlive]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/people-events-properties/1Person.png 
[eventlive]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/people-events-properties/2Event.png
[propertylive]: https://kissmetrics-support-files.s3.amazonaws.com/assets/getting-started/people-events-properties/3Prop.png


