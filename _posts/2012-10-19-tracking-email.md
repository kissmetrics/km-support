---
layout: post
title: Tracking Email
categories: how-tos
author: Eric Fung
summary: Tracking email performance, from beginning to end.
---
When you email your customers, there are three main actions that these people do:

1. The person receives the email.
2. The person opens the email.
3. The person clicks through the email to get to your website. (Arguably, the easiest and most important step to track.)

If you use [Mailchimp][mailchimp], all three of these are already tracked as part of [our integration][mailchimp]. If you do not use Mailchimp, here are some ways to measure each action.

## 1. Tracking Email Sends/Receives

**Method: [Server-side API][server].**

By tracking the people who receive emails, you can measure the baseline rate at which people open or click through your emails.

We suggest using our server-side API because 1) your own server-side process may already be sending the emails, or 2) your mail-merge program (like SendGrid) provides an API to list who is receiving emails, and that's easier to parse using your servers.

The server-side code for doing this might look like:

{% highlight ruby %}
KM.identify('john@smith.com')
KM.record('Received Email', {'Email Content Received' => 'Welcome Email'})
# Like any other property, "Email Content Received" is optional, so include more properties if you want to use them.
{% endhighlight %}

Notice we're identifying the recipients by their email address. You can use any other unique identifier here, but it's very important to use a consistent ID when tracking Views and Clickthroughs, and activity beyond email interaction.

## 2. Tracking Email Views

**Method: [Beacon API][beacon] or [server-side API][server].**

Our Beacon API lets you embed an image in your emails so that the act of loading the image records the "Viewed Email" event. Alternatively, your mail-merge program's API could allow you to list people who have viewed emails, and that's easier to parse using your servers.

The beacon might look like this:

    <img src=`http://trk.kissmetrics.com/e?_k=YOUR_API_KEY&_n=Viewed+Email&_p=john%40smith.com` />

This records the `Viewed Email` event, attributed to `john@smith.com` (`@` is [URL-encoded][encoding] as `%40`), which is the same ID I used in Step 1. 

## 3. Tracking Email Clickthroughs

**Method: [Campaign Tracking][campaigns] with UTM tags or our URL API.**

Most importantly, you'll want to be able to see if people land on your site directly from the email you sent them. To do this, you'll tag links within your emails with information that indicates:

* They `Clicked Through Email`
* The identity of the customer (use the same one as the previous two steps)
* Any additional properties to help you organize multiple email campaigns

Our article for [How to Track Campaign URLs][campaigns] is most thorough in explaining how to set this up.

# Related Resources

* [Mailchimp Integration][mailchimp]. Our Mailchimp integration records these three steps with minimal setup from you.
* [Infographic: ROI of Email Marketing][roi-email]:

[![ROI of Email Marketing][info-email-png]][info-email-png]

[campaigns]: /how-tos/campaign-tracking
[server]: /apis
[beacon]: /apis/beacon
[roi-email]: /use-cases/roi-email-marketing
[mailchimp]: /integrations/mailchimp
[encoding]: http://www.w3schools.com/tags/ref_urlencode.asp

[info-email-png]: https://s3.amazonaws.com/kissmetrics-support-files/assets/infographics/ROI-Email-Marketing.png