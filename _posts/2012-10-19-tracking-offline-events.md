---
layout: post
title: Tracking Offline Events
categories: how-tos
author: Eric Fung
summary: Track important customer interaction events that happen "offline".
---
Some of your business's key interactions with customers may happen offline. Sample "offline events" can include...

* Customer is called by the sales team
* Customer calls one of your salespeople
* Customer purchases an item through a contact form

These events don't happen as a result of the customer visiting your website. There are alternate ways to bring in this data, using our other APIs.

## Use a Server to Automate Recording

If you have a server that logs when such events occur, you can use one of our server-side APIs, or connect your [MySQL database][mysql], to register when the events occur. It is quite similar to the process of [Importing Existing Data][importing].

## Import the Data via a CSV File

We now allow you to upload `.csv` files to let you add event data that any of our other APIs did not capture. Please review the details at our [CSV Import guide][csv].

[mysql]: /integrations/mysql
[importing]: /advanced/importing-data
[csv]: /integrations/csv-import