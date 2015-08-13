---
layout: post
title: Installing Kissmetrics through Google Tag Manager
categories: [apis, javascript]
tags: [installation]
summary: Here's how to load the Kissmetrics JavaScript library through Google Tag Manager.
---
* Table of Contents
{:toc}
* * *

[Google Tag Manager][gtm] is a free tag management system. Rather than editing site code every time you want to add HTML/JavaScript snippets, you can install the Tag Manager script *once* and make updates from within Google.

The concept is similar to creating events with our [Event Library][evlib], where you install our main piece of JavaScript *once* and manage your events within [Kissmetrics][evlib-link].

## Step 1: Get Started

Set up your account at the [Google Tag Manager website][gtm]. You'll be asked to create a "container", which is a collection of tags for a website. Then you'll get a piece of code:

![1 Get Script for Container][ss1]

## Step 2: Install the Google Tag Manager Code + Kissmetrics Code

Make sure the provided Google Tag Manager script is placed on ***every page of your site.***

For example, here's a screenshot of installing in a Wordpress template (by going to Appearance -> Editor and changing the `header.php` file):

![2 Install Tag - WordPress example][ss2]

## Step 3: Back in Google Tag Manager, Set Up a Tag for the Kissmetrics JavaScript Snippet

* Back in Google Tag Manager, create a "Custom HTML Tag".
* Please refer to your site's [Settings page][settings] to obtain your Kissmetrics JavaScript snippet, which you'll place in the "HTML" field:

![3 Add a Tag for KM Library][ss3]

* Click the button to `+Add` a Firing Rule, so that you can tell Google to load our snippet on ***All Pages***:

![4 All Pages Rule][ss4]

* Save this tag.

## Step 4: Add Additional JavaScript for Custom Events

If you'd like, you can define custom Kissmetrics events by adding more tags to the container. In the next example, we'll create a rule to record the "Viewed Homepage" event when people go to the URL path `/`.

![5 Homepage Rule][ss5]

![6 JavaScript for a Custom Event][ss6]

Notice the presence of `var _kmq = _kmq || [];`. This is necessary because Google Tag Manager [doesn't let you control the order][gtm-order] in which your tags are loaded. *Without adding this line above your JavaScript for custom events, you may end up with JavaScript errors.*

## Step 5: Create a Container Version and Publish

* When you are ready, go to the Container Draft Overview section on the left. Click the button to create a new version of your container and publish the changes.

![7 Publish][ss7]

## That's It!

As always, you can check in [Kissmetrics Live][live] to look for your own activity, and to check that you've installed properly.

To recap, there are 4 steps:

1. Create a *tag* containing the JavaScript snippet and/or API calls.
2. Create a *rule* that tells on which pages to load those tags.
3. Create a *version* to save a history of your changes.
4. *Publish* the version so that it is actively running on your site.

[gtm]: https://www.google.com/tagmanager
[gtm-order]: http://support.google.com/tagmanager/answer/2772421/?hl=en

[evlib]: /tools/event-library
[evlib-link]: https://app.kissmetrics.com/wizard
[settings]: https://app.kissmetrics.com/settings

[live]: /tools/live

[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/01-container-script.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/02-wordpress.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/03-js-library.png
[ss4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/04-all-pages.png
[ss5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/05-homepage.png
[ss6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/06-custom-event.png
[ss7]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/07-publish.png
