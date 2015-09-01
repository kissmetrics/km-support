---
layout: post
title: Advanced Properties in Kissmetrics
categories: tools
summary: Kissmetrics contains some advanced settings to fine-tune the Properties you see in your funnel reports.
permalink: /advanced/advanced-properties
---
* Table of Contents
{:toc}
* * *

![][advanced1]

Kissmetrics contains some advanced settings to fine-tune the Properties you see in your funnel reports. Here’s an explanation of what these options do and when you may wish to change from our defaults.


## Total People _(Default)_

Total people is the default setting.

It means Kissmetrics will show the total number of people who performed each action. Even if one single person performed an action 1,000 times, they would be represented by a 1 in the report.

**Use this for**: You probably want to stick with this default for signup flows, upgrade flows, downgrade flows.


## Total Times

Kissmetrics has tracked the discrete number of times each action was performed, regardless of whether it was performed by one or many people. If one single person performed an action 1,000 times, they would be represented by 1,000 in the report.

**Use this for**: You may want to switch to this option when you’re looking at usage, referrals, repeat purchases.


# Property Options

![][advanced2]


## First “property name” ever

First “referrer” ever means we will show the referrer that drove a person to your site the very first time, even if their first visit came before the start date of the funnel.

**Use this for**: identifying how people initially discovered your site.


## Last “property name” ever

Last “referrer” ever means we will show the referrer that drove a person to your site the most recent time, even if that visit came after the end date of the funnel.

**Use this for**: identifying what source is driving people to your site right now.


## First “property name” starting “starting date of report”

It means Kissmetrics will show the first referrer that drove a person to your site within the selected funnel dates.

**Use this for**: seeing if a specific campaign initially drove people to your site within a known timeframe.


## Last “property name” up until “ending date of report”

Last referrer up to Mar 1 means we will show the referrer that drove a person to your site the most recent time within the selected funnel dates.

**Use this for**:
comparing this to the previous setting to see if people returned to your site via a different referrer within a known timeframe.


## “Property name” at the time of “some step of this report” _(Default)_

We will show the most recent referrer that drove a person to your site prior to the second step in the selected funnel.

**Use this for**: to see what drove a person to your site on the occasion immediately prior to them signing up, for example.


# Formatting Options

![][advanced3]


## None

None is the data exactly as Kissmetrics receives it; no cleanup or changing of capitalization.


## Lowercase

Kissmetrics converts everything to lower-case text.


## URL

Kissmetrics shows the full URL for referrer, campaign source, and any other URL-based properties. If that property doesn't exist, the value `Direct` appears, as if someone was referred directly to your site.

**Use this for**: preserving exact data and being able to click directly on links to see the source page.


## URL - Domain only _(Default)_

URL (Domain only) groups together all of the referrer URLs from the same domain, such as individual Facebook or Twitter pages or Google search results.

**Use this for**: consolidating all Facebook/Twitter/search results referrers, or any other sets of referrers that share a common domain.

{% for page in site.tags.advanced-properties %}
<ul class="summary" >
  <li>
    <a href="{{page.url}}">
      <h3>
      {{ page.title }}
      </h3>
      <p>{{page.summary}}</p>
    </a>
  </li>
</ul>
{% endfor %}

[advanced1]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/funnels/advanced1.png
[advanced2]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/funnels/advanced2.png
[advanced3]: https://kissmetrics-support-files.s3.amazonaws.com/assets/tools/funnels/advanced3.png
