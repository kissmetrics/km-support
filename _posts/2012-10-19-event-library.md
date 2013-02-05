---
layout: post
title: Event Library
categories: tools
author: Eric Fung
summary: The Event Library lists all of your events. It also contains the Event Wizard, which lets you create new rules to record events without additional code changes.
permalink: /tools/event-library/index.html
---
The [Event Library][event-library] lists all of your site's events. These are grouped into two categories:

* **Events Created By You** - events created through our Event Wizard, which lets you create new rules to record events without additional code changes.
* **Events Tracked Via API** - events we received through API calls or integrations.

![Event Categories][categories]

# Events Created By You - The Event Wizard

We recommend installing on every page of your site the basic KISSmetrics JavaScript code (the one located in [site settings][site-settings]). Once you have done this, you can make use of the **Event Wizard**, which allows you to create, edit and delete simple events without involving your developer to add additional code.

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

1. [Events that are automatically tracked][auto-track] from having the basic KISSmetrics JavaScript code on your site.
2. Events you pass in from another data source: a server-side API, our Database Sync tool, CSV import, or one from of our other integrations.
3. Events collected from old Event Wizard entries that have historic data, but are no longer actively tracking current user behavior.

# Event Library FAQs 

* **How often does the Event Library update my JavaScript file?**

Creating new events in the Event Library means you'll be able to start tracking live data within the next **minute**.

* **Where can I change the display names of the events?**

In your [site settings][site-settings], follow the smaller link in the Event Library section to "[Edit Display Names][display]".

* **Where can I see the frequency of each event, for all time?**

In your [site settings][site-settings], follow the smaller link in the Event Library section to "[View Total Counts][count]".

{% include summaries/event_library_summary.html %}

[site-settings]: https://www.kissmetrics.com/settings
[event-library]: https://www.kissmetrics.com/wizard
[auto-track]: apis/javascript#events-automatically-tracked

[categories]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/event-library/event-categories.png

[create-1]: /tutorial/event-library/events-url
[create-2]: /tutorial/event-library/events-clicks
[create-3]: /tutorial/event-library/events-form

[display]: https://www.kissmetrics.com/product.edit/#props
[count]: https://www.kissmetrics.com/product.event_prop_breakdown/
[dyn-elem]: /how-tos/dynamic-elements