---
layout: post
title: Help Scout
categories: integrations
summary: Import data from Help Scout into KISSmetrics.
---
* Table of Contents
{:toc}
* * *

[Help Scout][help-scout] is a help desk application for customer support.

With Help Scout **AND** KISSmetrics, you can connect the dots between customer support and revenue. KISSmetrics reports will help you answer:

* Which marketing campaigns pull in unprofitable customers that overwhelm your support team?
* Why did customers cancel?
* How does customer support impact retention and upsells?
* What's the average resolution time (time between when a new ticket arrives and when the ticket closes) *for each help agent?*

## Setup

1. Within your Help Scout dashboard, visit the [Apps page for KISSmetrics][km-helpscout].
2. Enter your [KISSmetrics API key][site-settings].
3. Select the mailbox(es) you want to connect to KISSmetrics.
4. Watch Help Scout data appear in KISSmetrics' Live tab and other reports.

## Integration Details

Event Name | Properties | Identity
-----------| ---------- | --------
`Submitted help ticket` | `Help ticket history`: (URL of the conversation) | Email address, according to Help Scout
`Received help ticket response` | `Help agent`: the teammate who replied to the customer | Email address, according to Help Scout
         | `Help ticket history`: (URL of the conversation)
`Responds to help ticket` | `Help ticket history`: (URL of the conversation) | Email address, according to Help Scout
`Help ticket closed` | `Help agent`: the teammate who replied to the customer | Email address, according to Help Scout
         | `Help ticket history`: (URL of the conversation)

#### Frequency of Import

* Help Scout data is immediately sent to KISSmetrics whenever support emails arrive, whenever your support team writes back, and whenever tickets close.

## Four Examples

*#1 - When Acme Software, a Help Scout customer, receives a new support email from bob@bob.com, Help Scout sends KISSmetrics this data:*

**bob@bob.com** did an event: **Submitted help ticket** which has properties:

* **Help ticket history**: secure.helpscout.net/conversation/1234567/1234/

*#2 - When Pat Jones, Acme's star help agent, writes back to bob@bob.com (and every time Pat writes back), Help Scout sends KISSmetrics this data:*

**bob@bob.com** did an event: **Received help ticket response** which has properties:

* **Help agent**: Pat Jones
* **Help ticket history**: secure.helpscout.net/conversation/1234567/1234/

*#3 - When bob@bob.com responds to Pat (and every time bob@bob.com responds to Pat), Help Scout sends KISSmetrics this data:*

**bob@bob.com** did an event: **Responds to help ticket** which has properties:

* **Help ticket history**: secure.helpscout.net/conversation/1234567/1234/

*#4 - When Pat closes the ticket, Help Scout sends KISSmetrics this data:*

**bob@bob.com** did an event: **Help ticket closed** which has properties:

* **Help agent**: Pat Jones
* **Help ticket history**: secure.helpscout.net/conversation/1234567/1234/

[help-scout]: http://www.helpscout.net
[site-settings]: https://app.kissmetrics.com/settings
[km-helpscout]: https://secure.helpscout.net/apps/kissmetrics/