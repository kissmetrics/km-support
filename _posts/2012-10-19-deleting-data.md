---
layout: post
title: Deleting Data From Your Site
categories: troubleshooting
summary: Can I delete data from my site? What do I do with events and properties I no longer need?
---
* Table of Contents
{:toc}
* * *

Unfortunately, because of the complex way events and properties are tied to people, there is not actually a way currently to simply edit, delete or purge data for specific events or properties.

There are three options you might consider:

1. Hiding the cluttered event or property, and passing in correct data under a new name, going forward.
2. Extracting the data, removing the clutter, and re-importing the data under a new name.
3. Creating a new site to start fresh.

## Hiding Unwanted Events or Properties

In the [Settings][settings] page, there are two links under the Event Library area you can use: **[Edit Display Names][display-names]** or **[View Total Counts][total-counts]**.

Following either link brings you to a list of all the events and properties in your site.
Uncheck the box next to the event or property name to hide that event or property from relevant drop-down lists in reports.

_Note: Hidden events and properties continue tracking and hidden events continue counting toward total event count_.

[settings]: https://app.kissmetrics.com/settings
[display-names]: https://app.kissmetrics.com/product.edit/#events
[total-counts]: https://app.kissmetrics.com/product.event_prop_breakdown

### Stop Passing Data

To finish cleaning up, remember to stop passing us the event data. Hiding the events and properties only makes them invisible for reporting purposes, but it's still possible to continue sending data for those events unless you stop it.

1. For Events Created via API: remove from your site the API calls or code that is generating
2. For Events Created by You (in the Event Wizard): select the rule that is generating the event, and then click on the "Delete event" link at the bottom of that box.

## Correcting Data and Reimporting It

We have a [Raw Data Export][data-export] tool for those on the Small Plan and above. It lets you export every event and property you pass us. You can use this to:

1. Export the data.
2. Remove the entries you no longer want.
3. Rename the events/properties you wish to re-import.
4. Complete the [re-importing process][import] using either a CSV upload or a server-side API to facilitate the procedure.

Particularly, if you are correcting **Revenue** data, go to your account's Mappings page ([https://app.kissmetrics.com/mapping][mapping]) and set the `Revenue` property to use the renamed property. This will use the new property when calculating the [Revenue Report][revenue].


In the most dramatic case, you could use this procedure to transfer data **from this site into a fresh site ([https://app.kissmetrics.com/product.new][new-site])**.

Note that you should not incur any expenses for importing events over your current monthly limit if it only happens once.

Sorry that there's not an easier way on our side.... we are looking into better ways to let you clear up data without removing the useful bits.

[revenue]: https://app.kissmetrics.com/revenue
[mapping]: https://app.kissmetrics.com/mapping
[new-site]: https://app.kissmetrics.com/product.new
[data-export]: /apis/data/data-export-setup
[import]: /advanced/importing-data
