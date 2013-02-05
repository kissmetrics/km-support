---
layout: post
title: Time Zones
categories: troubleshooting
author: Eric Fung
summary: We consider time zones when determining which day your data should fall under.
---
KISSmetrics stores your event data with the UTC UNIX timestamp of when the event happened. When you create your product in KISSmetrics, you can specify the time zone of your product. We take this time zone into consideration interpreting the dates for any report you generate.

Please refer to the [Product Info page](https://www.kissmetrics.com/product.edit) to ensure this is the time zone you want to use. When you change your time zone here, we change your reporting data going forward - we don't apply the time zone change to your past reports.