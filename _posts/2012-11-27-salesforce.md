---
layout: post
title: Salesforce
categories: integrations
author: Eric Fung
summary: See KISSmetrics data within your Salesforce account.
---
**This integration requires:**

* Salesforce Developer Edition (Free) at [http://developer.force.com/][devforce]
* An existing KISSmetrics account
* KISSmetrics KEY and SECRET from your KISSmetrics account. Please email [jevanish@kissmetrics.com][request] for your unique KISSmetrics account KEY and SECRET for Salesforce.

The Salesforce-KISSmetrics integration shows you customer activity pulled straight from KISSmetrics into your Salesforce Contacts. See *what* a customer has done, *when* they did it, *where* they came from, and *how* they are experiencing your business. You’ll have a 360 degree view of how to approach leads and opportunities.

The Salesforce integration brings in a window to see the KISSmetrics Person Detail page just as if you were looking at KISSmetrics. See customer activity, purchases, revenue, acquisition methods, and a complete timeline of their actions.

![Overview][ssoverview]

## Setting up Salesforce-KISSmetrics integration

1. Log in to Salesforce
2. Click your username in the top right and choose "Setup"
3. On the left hand side, click "Develop" and then "Pages"
4. Name your new page whatever you’d like: "KISSmetrics Person Details" or “KISSmetrics” works
5. Paste the code below into the "Visualforce Markup" section replacing the __KEY__ and __SECRET__ with that your KISSmetrics account’s KEY and SECRET.

*Reminder: Please email [jevanish@kissmetrics.com][request] for your unique KISSmetrics account KEY and SECRET for Salesforce.*

    <apex:page standardController="Contact">
      <apex:iframe
        rendered="{!IF((contact.email != ''), true, false)}"
        src="https://www.kissmetrics.com/people/find/{!contact.email}?mode=embedded&key=__KEY__&secret=__SECRET__"
        width="100%"
        scrolling="true"
      />
    </apex:page>

## Add the KISSmetrics Page to Salesforce Contact View


1. On the left hand side of the page go to "Customize", "Contacts", then "Page Layouts"
2. Locate the page layout you are currently using (should be just one) and click "Edit"
3. In the objects box at the top of the page choose "Visualforce Pages" and drag the page you created above to anywhere you want on the layout.
4. Click "Save"

## Repeat the Above Steps to Add to Salesforce Lead View

You can create an additional Salesforce Page to link to Leads in addition to Contacts. Here is the code to paste in:

    <apex:page standardController="Lead">
      <apex:iframe rendered="{!IF((lead.email != ''), true, false)}" src="https://www.kissmetrics.com/people/find/{!lead.email}?mode=embedded&key=__KEY__&secret=__SECRET__" width="100%" scrolling="true" /> 
    </apex:page>

[devforce]: http://developer.force.com/
[request]: mailto:jevanish@kissmetrics.com

[ssoverview]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/salesforce/overview.png
