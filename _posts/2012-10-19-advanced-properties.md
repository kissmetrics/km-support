---
layout: post
title: Advanced Properties in KISSmetrics
categories: advanced
author: Eric Fung
summary: KISSmetrics contains some advanced settings to fine-tune the Properties you see in your funnel reports.
---

![][advanced1]

KISSmetrics contains some advanced settings to fine-tune the Properties you see in your funnel reports. Here’s an explanation of what these options do and when you may wish to change from our defaults.

<a name='total-people'></a>
## Total People _(Default)_

Total people is the default setting.

It means KISSmetrics will show the total number of people who performed each action. Even if one single person performed an action 1,000 times, they would be represented by a 1 in the report.

**Use this for**: You probably want to stick with this default for signup flows, upgrade flows, downgrade flows.

<a name='total-times'></a>
## Total Times

KISSmetrics has tracked the discrete number of times each action was performed, regardless of whether it was performed by one or many people. If one single person performed an action 1,000 times, they would be represented by 1,000 in the report.

**Use this for**: You may want to switch to this option when you’re looking at usage, referrals, repeat purchases.

<a name='property-options'></a>
# Property Options

![][advanced2]

<a name='first-property-name-ever'></a>
## First “property name” ever

First “referrer” ever means we will show the referrer that drove a person to your site the very first time, even if their first visit came before the start date of the funnel.

**Use this for**: identifying how people initially discovered your site.

<a name='last-property-name-ever'></a>
## Last “property name” ever

Last “referrer” ever means we will show the referrer that drove a person to your site the most recent time, even if that visit came after the end date of the funnel.

**Use this for**: identifying what source is driving people to your site right now.

<a name='first-property-name-starting-starting-date-of-report'></a>
## First “property name” starting “starting date of report” 

It means KISSmetrics will show the first referrer that drove a person to your site within the selected funnel dates.

**Use this for**: seeing if a specific campaign initially drove people to your site within a known timeframe.

<a name='last-property-name-up-until-ending-date-of-report'></a>
## Last “property name” up until “ending date of report”

Last referrer up to Mar 1 means we will show the referrer that drove a person to your site the most recent time within the selected funnel dates.

**Use this for**:
comparing this to the previous setting to see if people returned to your site via a different referrer within a known timeframe.

<a name='last-property-name-before-some-step-of-this-report'></a>
## Last “property name” before “some step of this report” _(Default)_

Last referrer before Event 2 means we will show the referrer that drove a person to your site the most recent time prior to the second step in the selected funnel.

**Use this for**: to see what drove a person to your site on the occasion immediately prior to them signing up, for example.

<a name='formatting-options'></a>
# Formatting Options

![][advanced3]

<a name='none'></a>
## None

None is the data exactly as KISSmetrics receives it; no cleanup or changing of capitalization.

<a name='lowercase'></a>
## Lowercase

KISSmetrics converts everything to lower-case text.

<a name='url'></a>
## URL

KISSmetrics shows the full URL for referrer, campaign source, and any other URL-based properties. If that property doesn't exist, the value `Direct` appears, as if someone was referred directly to your site.

**Use this for**: preserving exact data and being able to click directly on links to see the source page.

<a name='url-domain-only'></a>
## URL - Domain only _(Default)_

URL (Domain only) groups together all of the referrer URLs from the same domain, such as individual Facebook or Twitter pages or Google search results.

**Use this for**: consolidating all Facebook/Twitter/search results referrers, or any other sets of referrers that share a common domain.

[advanced1]: http://f.cl.ly/items/0M3R3a183K3D0A3Y2n0I/advanced1.png
[advanced2]: http://f.cl.ly/items/0v3R3q0E1H440o1I2K2w/advanced2.png
[advanced3]: http://f.cl.ly/items/0N2S3T2f2y0n0D2J1Q23/advanced3.png