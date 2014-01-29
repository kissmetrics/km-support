---
layout: post
title: People Search
categories: tools
summary: Our People Search helps you find people who share something in common, whether that's an event they all do or a property they all share.
---
* Table of Contents
{:toc}
* * *

Our Person Search helps you find people who share something in common, whether that's an event they all do or a property they all share.

![Person Search 01][ss01]

You can save this search to use later or export this list of people to your email campaigns, to re-engage or analyze their behaviors to find common actions that drive engagement or conversions.

# Creating Groups

Before you can search for customers, you’ll need to describe the type of people you’re looking for. We call these similar people Groups.

KISSmetrics lets you create a Group based on:

* An **event** people have or have not done, within the report's time frame.
* A **property** people have or don’t have, within the report's time frame.
* An **identity** (usually an email address)

## How do I create Groups in KISSmetrics?

![Person Search 02][ss02]

On the KISSmetrics People tab, click on the “Add a condition” button to start creating your Group.

![Person Search 03][ss03]

Pick a condition based on an event or property.

![Person Search 04][ss04]

You can use the drop-down menu to browse through existing events and properties. You can also start typing directly into the field, and KISSmetrics will search for matching events/properties.

![Person Search 05][ss05]

After you pick an event, you can pick a frequency. The available choices are:

* at least
* at most
* exactly

We default to at least 1 time for events, but you can change it easily by putting in whatever number you like.

![Person Search 06][ss06]

You can add more conditions to create a more specific group of people. Add as many conditions as you like to create specific customer segments.

### Nesting conditions for advanced Groups

If you have very specific customer segments or criteria you want to meet, KISSmetrics People Search lets you nest conditions to build complex customer groups.

![Person Search 07][ss07]

To create a nested condition, click on the Nested Window icon (next to the Trash icon) within an existing condition. A new nested condition will appear below the existing condition

![Person Search 08][ss08]

When you use multiple nests, you can create advanced Groups. This particular Group consists of people who:

* have Signed up and were referred by Forbes OR NYTimes
* and have NOT Logged in but Viewed the Get Started Page AND Played the Getting Started Video
* and are on the Large plan

# Making Your People Search Results Awesome

You can get more than just a list of people with KISSmetrics People Search. Customize your search results to see even more data about your Group.

Example: Of all the people who `Signed Up`...

* *How many times* did they `Visit Site`?
* *What* was the `first Plan` that they signed up for?
* *When* did they `Create a Report`?

![Person Search 09][ss09]

## Adding search result columns to your People Search

![Person Search 10][ss10]

By default, KISSmetrics will list the people that satisfy your Group conditions. But you can make your search results much more useful by adding in event activity or property information.

![Person Search 11][ss11]

When you add columns, your search results become more actionable. Each column is sortable, too. Just click on the column name to sort alphabetically or chronologically depending on the column. The above example shows a total count of visit activity, plan names, and date of report creation, for example. The people with no “Created report” activity are opportunities for us to re-engage.

![Person Search 12][ss12]

When you add an event column to your search results, you can choose to see:

* The *date and time of the first time* (within the report's date range) that people did the event
* The *date and time of the last time* (within the report's date range) that people did that event
* The *total number of times* they’ve ever done that event

![Person Search 13][ss13]

When you add a property column to your search results, you can choose to see:

* The *First-touch attribution* (first-recorded value)
* The *Last-touch attribution* (last-recorded value)

You can add up to a total of three columns for your People Search.

# Saving Your People Search

Once you create a People Search with conditions and columns that you are happy with, you can save it so that you can access it from the Reports tab.

![Person Search 14][ss14]

To save a People Search, click the "Save this search" button.

![Person Search 15][ss15]

You can access Saved People Searches from the Reports tab.

![Person Search 16][ss16]

Saving a People Search will preserve both your conditions and the columns you want to display.

# Export

You can choose to export this group of people, and we'll email you a link to download a CSV of the results. It will include all columns of data that are part of your search results.

You may notice that any columns that have dates in them now export in a human-readable format (i.e. "2009-02-13 23:31:30"), and no longer export as <a href="http://en.wikipedia.org/wiki/Unix_time" target="_blank">Unix timestamps</a>. This timestamp is in <a href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time" target="_blank">UTC</a> and is compatible with Microsoft Excel.

If you have an older People Search export or need to convert a Unix timestamp back to a human-readable date in Excel or other spreadsheet software, simply use this formula:

    =(UNIX_TIMESTAMP/86400)+DATEVALUE("1/1/1970")

Just be sure to replace "UNIX_TIMESTAMP" with the appropriate column/row value you want to convert.

[send]: /getting-started/ways-to-send-us-data
[mapping]: https://app.kissmetrics.com/mapping
[recurly]: /integrations/recurly
[import]: /advanced/importing-data

[ss01]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch01.png
[ss02]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch02.png
[ss03]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch03.png
[ss04]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch04.png
[ss05]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch05.png
[ss06]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch06.png
[ss07]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch07.png
[ss08]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch08.png
[ss09]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch09.png
[ss10]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch10.png
[ss11]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch11.png
[ss12]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch12.png
[ss13]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch13.png
[ss14]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch14.png
[ss15]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch15.png
[ss16]: https://s3.amazonaws.com/kissmetrics-support-files/assets/tools/people-search/peoplesearch16.png
