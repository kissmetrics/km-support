---
layout: post
title: Segment Funnels on Two Properties
categories: [tools, funnels]
summary: Segment a funnel by one property and by a known value of another property.
---
* Table of Contents
{:toc}
* * *

You may know that our funnel reports allow you to segment a funnel according to one property. We also allow you to further segment such a funnel by an additional property, if you happen to know what value to search for. Let's take a look at this example. We're examining a Signup/Upgrade funnel, segmented by the Referrers that brought these visitors to the home page:

![1-funnel][ss1]

But let's say I want to see Referrer information _only for people who have signed up for a Free plan._ Here is our additional property filter to let you do that.


## Property Filter

* Click on the gear icon next to the Property drop-down menu.

![2-add][ss2]

* Click on the green "Add Filter" button
* Under the new options, select the Property you want to filter by, and the **exact** value of the property. (So for example, if the value happens to be a URL, we're looking for the *full URL*.) In this case, we're looking for people who have "Free" set as their "Plan Name".

![3-define][ss3]

This updates the funnel to now show only people who have signed up for a Free plan:

![4-results][ss4]

Currently, you are unable to save this filter for your funnels. Also, if your filter happens to not return any results, please switch to a different report and switch back to the current report to clear the filter. We are working to further improve the ability to segment by more than one property, so thank you for your patience as we build on this feature.

[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/segment-funnels-two-properties/1-funnel.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/segment-funnels-two-properties/2-add.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/segment-funnels-two-properties/3-define.png
[ss4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/segment-funnels-two-properties/4-results.png