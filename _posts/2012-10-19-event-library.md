---
layout: post
title: Event Library
categories: tools
summary: The Event Library lists all of your events. It also contains the Event Wizard, which lets you create new rules to record events without additional code changes.
permalink: /tools/event-library/index.html
redirect_from:
  - /misc/event-library/
  - /misc/event-library/index.html
---
* Table of Contents
{:toc}
* * *

The [Event Library][event-library] lists all of your site's events. These are grouped into two categories:

* **Events Created By You** - events created through our Event Wizard, which lets you create new rules to record events without additional code changes.
* **Events Tracked Via API** - events we received through API calls or integrations.

![Event Categories][categories]

# Events Created By You - The Event Wizard

We recommend installing on every page of your site the basic Kissmetrics JavaScript code (the one located in [site settings][site-settings]). Once you have done this, you can make use of the **Event Wizard**, which allows you to create, edit and delete simple events without involving your developer to add additional code.

You can add rules for three types of events:

* When someone [Visits a URL][create-1], meaning they saw a particular page.
* When someone [Clicks On][create-2] an element in your site: a particular button, a link, or something else.
* When someone [Submits a Form][create-3] to provide you information. This could be a form for collecting lead-gens, subscribing to your newsletter, or something else.

## Should I use your Event Wizard?

Our Event Wizard works for many scenarios, but may not be best to record every event. Consider using our API if you want to track in one of these scenarios:

* Recording URLs that match a regular expression.
* Recording information contained in JavaScript or server-side variables.
* Tracking elements that are [loaded dynamically][dyn-elem] (ie., via Ajax).

# Events Tracked Via API

There are three types of events listed here:

1. [Events that are automatically tracked][auto-track] from having the basic Kissmetrics JavaScript code on your site.
2. Events you pass in from another data source: a server-side API, our Database Sync tool, CSV import, or one from of our other integrations.
3. Events collected from old Event Wizard entries that have historic data, but are no longer actively tracking current user behavior.

# Event Library FAQs

* **How often does the Event Library update my JavaScript file?**

When you save changes to the Event Library, they are set to update within 1 minute. Realistically though, it can take **up to an hour** for our CDN to synchronize the updates across the servers providing your JS library, and for your browser's cached version of the JS Library to expire (without you forcing a refresh). We don't typically see it taking THAT long, but in the worst case scenario, your new Event Library events won't be visible until an hour later.

* **Where can I change the display names of the events?**

In your [site settings][site-settings], follow the smaller link in the Event Library section to "[Edit Display Names][display]".

* **Where can I see the frequency of each event, for all time?**

In your [site settings][site-settings], follow the smaller link in the Event Library section to "[View Total Counts][count]".

* **I created an event using the Event Library, but I'm not able to see that event when setting up reports. What's wrong?**

One thing to keep in mind is that an event must have data associated with it before it can become available to reports. If there's no data associated with an event, as is often the case with a freshly-created event, you won't be able to use it in reports. To check on the status of an event and see if it has received data, visit the "[View Total Counts][count]" page.

{% include summaries/event_library_summary.html %}

[site-settings]: https://app.kissmetrics.com/settings
[event-library]: https://app.kissmetrics.com/wizard
[auto-track]: /apis/javascript#events-automatically-tracked

[categories]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/event-library/event-categories.png

[create-1]: /tools/event-library/events-url
[create-2]: /tools/event-library/events-clicks
[create-3]: /tools/event-library/events-form

[display]: https://app.kissmetrics.com/product.edit/#props
[count]: https://app.kissmetrics.com/product.event_prop_breakdown/
[dyn-elem]: /how-tos/dynamic-elements
