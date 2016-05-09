---
layout: post
title: People Search
categories: tools
summary: Our People Search helps you find people who share something in common, whether that's an event they all do or a property they all share.
---
* Table of Contents
{:toc}
* * *

Our People Search report helps you find people who share something in common, whether that's an event they all do or a property they all share. You can save this search to use later or export this list of people to your email campaigns, to re-engage or analyze their behaviors to find common actions that drive engagement or conversions.

# Using conditions to create a People Search

Before you can search for customers, you’ll need to describe the type of people you’re looking for with conditions. Kissmetrics lets you create a People Search based on:

* **Events** people have or have not done.
* **Property** values people have or have not recorded.
* An **identity** (usually an email address), if you're looking for a specific person.

For both event- and property-based conditions, you will be able to select a custom date range for each individual condition, including "any time."

## Step by step on how to create a People Search

Once your People Search is open, the first step is to tell the report how to handle the conditions you'll set up later. Are you looking for people who adhere to all of the conditions (have signed up AND have logged in)? Or are you interested in people who satisfy any of the provided conditions (on plan type Huge OR plan type Super Huge)? There's also an "all of these in order" option, but we'll get to that once the rest of the report has been explained.

Once that's done, click on the “Add a condition” button to start creating your Group.

As mentioned above, you can pick a condition based on events or properties (or a combination of the two).

You can use the drop-down menu to browse through existing events and properties. You can also start typing directly into the field, and Kissmetrics will search for matching events/properties.

After you pick an event, you can pick a frequency. The available choices are:

* at least
* at most
* exactly

In addition, you can attach a property to any event-based condition to specify that the event had to be recorded with a specific property value:

![Attach a property][ss01]

After you pick a property-based condition, you can search for values based on various search logic. The available choices are:

* containing (property value must contain what is submitted i.e. SPRING would work for SPRING2014 and SPRINGCOUPON)
* equaling (property value must match exactly what is submitted i.e SPRING would look for exactly SPRING)
* without a value (property value exists, but is empty or null; this is used to check for any data sets that may be missing data or that should contain something)
* with any value (all users who have the property, including empty values)
* beginning with (property value must start with the provided word. SPRING would still work for SPRING2014 and SPRINGCOUPON, but not TWITTERSPRING)
* ending with (property value must end with the provided word. SPRING would now work for TWITTERSPRING, but not SPRING2014 or SPRINGCOUPON)


We default to at least 1 time for events, but you can change it easily by putting in whatever number you like.

![Complete People Search][ss06]

You can add more conditions to create a more specific group of people. Add as many conditions as you like to create specific customer segments.

## Sequential Conditions

As mentioned above, you have the option of creating an "All of these conditions in order" version of the People Search. Unlike the vanilla version of the People Search where users just have to meet any of the given conditions, this search allows you to look for users who met the conditions of the search in order, from top to bottom - more of a "Funnel Search."

Functionally, you construct the report in the same way. Once you select "All of these in order," you start plugging in conditions as usual. The only difference is that you can only select one date range for the entire report, rather than an individual date range for each condition. Aside from that, Kissmetrics just handles the conditions differently on the back end.

As a simple example, you could create a People Search for the people who went through your standard sign-up funnel in order. For this, you would select these events in order:

* Visited Site
* Signed Up
* Logged in

This returns a list of the people who first visited your site, then successfully signed up, and last, came back and logged in. Once you have these conditions set up, you decide you're only looking for the people who completed all of these steps this month - you change the date range from "Any time" to "This month." Now any time you open up this report, it will give you a list of the people who have successfully worked their way through your signup funnel in the current month. 

![Complete Sequential People Search][ss02]

### Nesting conditions for advanced searches with the "Fork this condition" button

If you have very specific customer segments or criteria you want to meet, the Kissmetrics People Search lets you nest conditions to build complex searches using the "Fork this condition" button.

To create a nested condition, click on the Fork button (next to the Trash icon) within an existing condition.  A new nested condition will appear below the existing condition. When you use multiple nests, you can create advanced Groups. This particular Group consists of people who:

* have Signed up
* Were referred by Forbes OR NYTimes (forked OR)
* and have NOT Logged in 

![Forked Conditions][ss08]

# Add additional data to your People Search

You can get more than just a list of people with Kissmetrics People Search. Customize your search results to see even more data by adding additional data columns, which will display information based on the events and properties that you've recorded.

Example: Of all the people who `Signed Up`...

* *How many times* did they `Visit Site`?
* *What* was the `first page` that they saw today?
* *When* did they `first visit`?

## Using People Search "Columns"

By default, Kissmetrics will list the people that satisfy your search conditions. But you can make your search results much more useful by adding in event activity or property information.

![Columns][ss11]

When you add columns, your search results become more actionable. Each column is sortable, too. Just click on the column name to sort alphabetically or chronologically depending on the column. The above example shows a total count of visit activity, the first page that they visited today, and date of their first visit, for example. No matter what type of column you decide to create, you can assign a custom date range to that column (including "any time") to better define what you would like to see in the report. 

When you add an event column to your search results, you can choose to see:

* The *date and time of the first time* that people did the event ("First Time")
* The *date and time of the last time* that people did that event ("Last Time")
* The *total number of times* they’ve done that event ("Total Times")
* As mentioned above, you can constrain any of these columns to a *custom date range*


When you add a property column to your search results, you can choose to see:

* The *First Value* that people recorded
* The *Last Value* that people recorded
* The *date* that people first recorded the property ("First Time")
* The *date* that people last recorded the property ("Last Time")

# Saving Your People Search

Once you create a People Search with conditions and columns that you are happy with, you can save it so that you can access it at any time from the Reports tab. To save a People Search, click the "Save this search" button at the top-right of the report. This will preserve all of the conditions and columns that you've created. 

Once saved, you can access your People Searches from the Reports section of Kissmetrics.

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

[ss01]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/people-search/PRAttachProp.png
[ss02]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/people-search/PRCompletedSequential.png
[ss06]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/people-search/PRCompleted.png
[ss08]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/people-search/PRNested.png
[ss11]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/people-search/PRColumns.png

