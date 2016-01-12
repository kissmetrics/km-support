---
layout: post
title: How to create events using Click to Track
categories: tools
tags: []
summary: Learn how to implement analytics without code or developers
---

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:62.5% 0 28px 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_04uy27h4uo videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>
   
   
   
   
Click to Track is a tool that lets you implement analytics on your website without any code or developer by simply clicking on elements you want to track. You’ll need to [install the Kissmetrics JavaScript snippet][install the Kissmetrics JavaScript snippet] on your website before you can use Click to Track.

## Compatibility

### Platforms

Click to Track currently works on websites and may work for web apps depending on how your app is developed. Click to Track works best in Chrome and Firefox browsers.

Safari browser users may need to change their security settings to allow Click to Track to load iFrames in the browser. To do this, go to *Settings -> Privacy* and **change *Cookies and website data* to Always allow**.

![Safari Security Settings][12]

### What you can track

Click to track currently supports tracking visits to URLs (wildcards and Regex), clicks on elements (using HTML classes or IDs), and form submissions (for sign ups, logins, checkout, lead generation, newsletters, and more).

* Table of Contents
{:toc}
* * *

## How to use Click to Track to define and track events

### Step 1 - Hover over Events dropdown in the navigation
Hover over the **Events** dropdown in Kissmetrics to find the Click to Track tool. **Click on Click to Track**.
![Click To Track Nav Dropdown][1]

### Step 2 - Enter your website’s URL
Think about a page on your website that has things that you want to track so that you can analyze what people do on your website. **Enter that page’s URL into the URL field**.
![Enter URL][2]

### Step 3 - Go through the Click to Track tutorial
The Click to Track tutorial loads automatically if you’ve never used the feature before. You can also start the tutorial by clicking on the “info” icon on the upper left corner.
![Click To Track Tutorial][3]

### Step 4 - Use Navigate Mode to browse your website and find something you want to track
In Navigate Mode, you can browse your website normally until find something you want to track. When you find a button, link, or element on your website that you want to track, **click Edit Mode**.

### Step 5 - Click Edit Mode to click on an element you want to track
In Edit Mode, you can hover over elements that you want to track and preview what you want to track  When you find a button, link, or element on your website that you want to track, **click on the button, link, or element you want to track**.
![Edit Mode][4]

### Step 6 - Name your event
Once you click on an element on your website, a small window will show up that has an Event Name field. We recommend reading [How to Name and Structure Your Data][How to Name and Structure Your Data] on tips on how to name or structure your data. **Enter what you want to name your event**.
![Name Event][5]

### Step 7 (Optional) - Add a property to your event
If you want to describe the event a user does on your site such as where a button is located i.e. Top Right VS Bottom of the Page, or what size a product i.e. Small or Large **click the More Options button then click the Add Property button**.
![Add Property][6]

Enter what you want to name your Property. We recommend broad property names such as Sign Up Bottom Location or Product SKU. You can either get the property value from your website’s page or type the property value in yourself manually. Once you’re happy with your property, **click Save**.
![Add Property Name and Value][7]

### Step 8 - Save your event
Once you’re happy with your event, **click Save**.

![Save Event][8]

Awesome! You’ve setup your first event and Kissmetrics will record an event when users perform the action that you have defined with your tracking rule.

### Step 9 - Find events you’ve defined in the Defined Events menu
The Defined Events menu contains all of the events you’ve defined for the page. **Hover over an event in the list to see what element on the page is being tracked**.
![Defined Events][9]

You can also find events by looking for the blue triangles and hovering over them to see the element that is being tracked.
![Hover Events List][10]

### Step 10 - Manage all your events in the Event Manager
The Event Manager contains all of the events you’ve tracked across your website that you’ve created through Click to Track or your developers have implemented from using our APIs. Go to the Event Manager by hovering over Events in the navigation and clicking Event Manager.
![Event Manager][11]


Having issues with Click to Track or have questions about naming and structuring your events? Email (support@kissmetrics.com)(support@kissmetrics.com) to let us know.


[1]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT1.jpg
[2]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT2.jpg
[3]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT3.jpg
[4]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT4.jpg
[5]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT5.jpg
[6]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT6.jpg
[7]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT7.jpg
[8]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT8.jpg
[9]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT9.jpg
[10]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT10.jpg
[11]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT11.jpg
[12]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/click-to-track/CTT12.jpg
[How to Name and Structure Your Data]: http://support.kissmetrics.com/getting-started/how-to-name-and-structure-your-data.html
[install the Kissmetrics JavaScript snippet]: http://support.kissmetrics.com/apis/javascript/
