---
layout: post
title: Mailchimp
categories: integrations
author: Eric Fung
summary: Import your existing Mailchimp data into KISSmetrics.
---
If you have been using [Mailchimp][mailchimp] to send out email newsletters, you can now import event data about the people who saw, opened, and clicked through your emails.

*Disclaimer: This integration works best if you're already using visitors' email addresses to `identify` them.*

## Integration Details

Event Name | Properties | Identity
-----------| ---------- | --------
`Received Campaign E-mail` | `mailchimp_campaign_title`: (campaign title) | Email address, according to Mailchimp
`Opened Campaign E-mail` | `mailchimp_campaign_title`: (campaign title) | Email address, according to Mailchimp
`Clicked Campaign E-mail` | `mailchimp_campaign_title`: (campaign title)  | Email address, according to Mailchimp
                          | `mailchimp_click_url`: (URL clicked)


#### Frequency of Import

* We will import data from your existing campaigns from the last 100 campaigns, starting with the most recent ones.
* We will check for activity on a campaign up to 60 days after the campaign was sent.

## Setup

<a name="obtain-a-mailchimp-api-key"></a>
### 1. Obtain a Mailchimp API Key

1. While logged into your Mailchimp account, select **Account > API Keys & Authorized** Apps (under **Extras**):

![API Key 1][sskey1]

2. Click "Add A Key"

![API Key 2][sskey2]

3. Now let's add this API key to your KISSmetrics account in the next step.

### 2. Register the API Key with KISSmetrics

1. Navigate to the [External Data sync][external-data] area under Settings.
2. Click **Add Data from Mailchimp**

![Mailchimp 1][ssmc1]

3. Enter your Mailchimp API Key from above.

![Mailchimp 2][ssmc2]

4. One more step to go! You can come back to this page and check the status of the import.

![Mailchimp 3][ssmc3]

### 3. Unifying Mailchimp Data to the JavaScript Library

In connecting Mailchimp to KISSmetrics, you'll see events attributed directly to the user's email address.

    1. `example@domain.com` has Received Campaign E-mail.
    2. `example@domain.com` has Viewed Campaign E-mail.
    3. `example@domain.com` has Clicked Campaign E-mail.

However, our JavaScript library should also recognize these visitors by their email address. Let's pass the email address from Mailchimp to our JavaScript Library, so that we can connect the user's path, starting from the email and continuing through their browsing session:

    4. `example@domain.com` has Visited Site.
    5. `example@domain.com` has Signed Up.

Here's how to do so.

#### Using Mailchimp's Merge Tags with the URL API

Mailchimp provides a [merge tag][merge-tag] `*|URL:EMAIL|*`, which is replaced by each recipient's email address for their particular email. We'll use that in conjunction with our [URL API][url] to send our JavaScript library the person's email.

**Todo**: for any links to your site, if you want to record campaign-specific events or properties, use our [URL Builder][url-builder] to tag the links. Then add the parameter `kmi=*|URL:EMAIL|*`, to use the recipient's email address as their KM identity.

##### Example

So for example, if your Mailchimp campaign links to `http://www.yoursite.com/landing`, use this link to pass the email address to our JavaScript:

    http://www.yoursite.com/landing?kmi=*|URL:EMAIL|*

[mailchimp]: http://mailchimp.com/
[external-data]: https://app.kissmetrics.com/external_data
[merge-tag]: http://kb.mailchimp.com/article/all-the-merge-tags-cheatsheet

[url]: /apis/url
[url-builder]: /apis/url#url-builder

[sskey1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/mailchimp/api-key-1.png
[sskey2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/mailchimp/api-key-2.png
[ssmc1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/mailchimp/mailchimp-1.png
[ssmc2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/mailchimp/mailchimp-2.png
[ssmc3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/mailchimp/mailchimp-3.png
