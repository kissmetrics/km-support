---
layout: post
title: Installing KISSmetrics through Google Tag Manager
categories: [apis, javascript]
author: Eric Fung
tags: [installation]
summary: Here's how to load the KISSmetrics JavaScript library through Google Tag Manager.
---
[Google Tag Manager][gtm] is a free tag management system. Rather than editing site code every time you want to add HTML/JavaScript snippets, you can install the Tag Manager script *once* and make updates from within Google.

The concept is similar to creating events with our [Event Library][evlib], where you install our main piece of JavaScript *once* and manage your events within [KISSmetrics][evlib-link].

## Step 1: Get Started

Set up your account at the [Google Tag Manager website][gtm]. You'll be asked to create a "container", which is a collection of tags for a website. Then you'll get a piece of code:

![1 Get Tag][ss1]

## Step 2: Install the Google Tag Manager Code + KISSmetrics Code

On every page of your site, include the code block from below. ***Make sure to replace the Google Tag Manager stub with the snippet you got in the last step.***

{% highlight html %}
<script type="text/javascript">
// Prepare for KISSmetrics setup before loading Google Tag Manager
var _kmq = _kmq || [];
</script>

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/..."></script>
<!-- End Google Tag Manager -->
{% endhighlight %}

Here's a screenshot of installing in a Wordpress template:

![2 Install Tag][ss2]

*Technical Note: Google Tag Manager [doesn't let you control the order][gtm-order] in which your tags are loaded.* That's why you are creating the `_kmq` array outside of the Google-managed tags. That way, any KM API calls that Google manages doesn't cause any JavaScript errors. To read more, please refer to our [JavaScript library documentation][js-async].

## Step 3: Back in Google Tag Manager, Set Up a Tag for the KISSmetrics JavaScript Snippet

* Back in Google Tag Manager, create a "Custom HTML Tag":

![3 HTML Tag][ss3]

* Please refer to your site's [Settings page][settings] to obtain your KISSmetrics JavaScript snippet, which you'll place in the "HTML" field:
 
![4 Add KM][ss4]

* Click the button to `+ Add Rule to Fire Tag`, so that you can tell Google to load our snippet on ***All Pages***:

![5 Apply Rule][ss5]

* Save this tag. Now you'll update your Tag by clicking "Create Version" in the top right corner:

![6 Create Version][ss6]

* You can preview your changes here, so when ready, click "Save and Publish":

![7 Publish][ss7]

## That's It!

As always, you can check in [KISSmetrics Live][live] to look for your own activity, and to check that you've installed properly.

To recap, there are 4 steps:

1. Create a *tag* containing the JavaScript snippet and/or API calls.
2. Create a *rule* that tells on which pages to load those tags.
3. Create a *version* to save a history of your changes.
4. *Publish* the version so that it is actively running on your site.

[gtm]: https://www.google.com/tagmanager
[gtm-order]: http://support.google.com/tagmanager/answer/2772421/?hl=en

[evlib]: /tools/event-library
[evlib-link]: https://www.kissmetrics.com/wizard
[settings]: https://www.kissmetrics.com/settings
[js-async]: /apis/javascript/javascript-specific#how-does-it-work-

[live]: /tools/live

[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/1-get-tag.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/2-install-tag.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/3-html-tag.png
[ss4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/4-add-km.png
[ss5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/5-apply-rule.png
[ss6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/6-create-version.png
[ss7]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/javascript/google-tag-manager/7-publish.png