---
layout: post
categories: getting-started
title: "Testing: How to Verify KISSmetrics Is Working"
tags: [developer_portal]
summary: Learn how to test KISSmetrics and keep the test data separate from your "real" data.
permalink: /getting-started/testing-km/index.html
---
* Table of Contents
{:toc}
* * *

When you are starting out, we highly recommended that you set up a separate Test Site as a sandbox. That way, any events you create while testing will not interfere with the real data you collect from your Production site.

Creating a new site provides you an additional API key, which you can reserve only for your testing. Most web applications have a configuration file management system to let you swap in the correct KM API key, depending on whether you're running in Production environment or not.


# Create a Separate Testing Site

* Click the name of your site in the top-left corner. This shows a menu for all the sites you are managing.
* Click "Create New Site", and follow our setup process.

![Create Site][create-ss]

*Note: You need to be the [Owner][permissions] of the account to be able to create a new site.*

* Optionally, you can [Edit the Site's Settings][edit-site] to label this site as "Testing" or "Production".

**Remember to install your testing API key only when testing, and to use your production API key for real, live/production data.**


# Testing Individual Events

There are two main methods to ensure that your KISSmetrics events are set up properly.

1. You can use our real-time tool [KISSmetrics Live][live] to watch for your own activity.
2. For more technical users, you can check that there is network activity to our tracking servers.


## Using KISSmetrics Live

All of our users have access to using [Live][live]. This tool scans for events that are immediately happening on your site. In fact, you can even use the "My Activity" filter to load your site in a new tab, and limit Live to just your own browser's activity.

![My Activity][myactivity-ss]

As you step through your site, you can cross-reference in Live that your activity triggers the appropriate events. If you see events in Live, that's a good sign, and it's just a matter of time (about 2-5 hours) to allow our servers to process these recently-fired events for reporting everywhere else in our application.

Read more about Live at our documentation: [KISSmetrics Live][live-doc]


## Examine Network Activity

For those familiar with using their web browser's developer tools, you can also refer to the browser's Network activity. As you browse during testing, look for requests to `trk.kissmetrics.com`; these tracking URLs will be structured according to our [API specifications][specs].

![Network Activity][network-ss]

Viewing the network requests help you confirm a few key items all at once:

* Does the API key match the one for the KISSmetrics site you're using?
* Who is the person doing the event?
* What is the name of the event?
* Are additional properties being passed?

If the response from our server is `Status Code: 200 OK` (third item from the top), then we have received the event just fine, and you can consider this event as successfully triggered. Then it's just a matter of time (about 2-5 hours) to allow our servers to process these recently-fired events for reporting everywhere else in our application.


# Testing Data in Reports

If you suspect that KISSmetrics’ reports disagrees with the data you were expecting, the investigative process our support team uses is shown in our page for [Steps For Investigation][investigation]. Often, it comes down to the way individual events were implemented, or understanding how our [different tools][tools] calculate your data.

[create-ss]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/create-site/create-site.png
[network-ss]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/testing-km/network.png
[myactivity-ss]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/testing-km/my-activity.png

[permissions]: /how-tos/team-permissions

[edit-site]: https://app.kissmetrics.com/product.edit

[live]: https://app.kissmetrics.com/live
[live-doc]: /tools/live
[specs]: /apis/specifications
[investigation]: /troubleshooting/data-discrepancies#steps-for-investigation
[tools]: /tools