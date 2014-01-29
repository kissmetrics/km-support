---
layout: post
title: "My Properties Don't Look Right"
categories: troubleshooting
tags: advanced-properties
summary: Investigate more ways to report on properties, and to see why the properties may not match what you're expecting.
---
* Table of Contents
{:toc}
* * *

Our funnel reports have a feature that lets you view exactly the property you are interested in seeing. Let's take a look at an example:

![Advanced Properties 1][ssprop1]

This data looks a little strange. How did everyone who came in through a search engine end up signing up for an account? That can't be right.

And it isn't. This report is displaying the last instance of the `search engine` property up until the visitor did the last event in the funnel (`Signed Up`, in this case). Notice the gear next to the list of properties, though.

![Advanced Properties 2][ssprop2]

Because the search engine property occurred more closely with the `Visited Site` event, let's reshape our report to display the `search engine` that brought them to the `Visited Site` event, instead of the `Signed Up` event:

![Advanced Properties 3][ssprop3]

This looks a little more reasonable. Overall, 23.8% of the people who visit the site end up signing up. This is roughly the same conversion rate whether the visitor came via a search engine or not.

Notice that you can adjust the report to use the first or last property in the report's timeframe, or the first or last property that was ever set for the visitors described in this funnel.

## Total Times

The top drop-down menu also has the useful "Total times" option. This is more useful for discovering how often an event occurs, rather than how many people do it. For instance, how often does someone trigger a `Purchased Item` event?

"Total times" is also useful for comparing the number of visits recorded by Google Analytics against the number of visits that KISSmetrics records. Recall that Google Analytics does not combine one person's browsing history done across multiple browsers and devices, whereas KISSmetrics can.

![Advanced Properties 4][ssprop4]

![Advanced Properties 5][ssprop5]

[ssprop1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/advanced-properties/advancedproperties1.png
[ssprop2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/advanced-properties/advancedproperties2.png
[ssprop3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/advanced-properties/advancedproperties3.png
[ssprop4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/advanced-properties/advancedproperties4.png
[ssprop5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/advanced-properties/advancedproperties5.png