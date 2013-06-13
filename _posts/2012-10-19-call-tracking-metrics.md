---
layout: post
title: Call Tracking Metrics
categories: integrations
author: Eric Fung and Nemo Chu
summary: Import data from Call Tracking Metrics into KISSmetrics.
---
[Call Tracking Metrics][ctm] provides trackable phone numbers for your marketing campaigns. Imagine this scenario:

*You place multiple ads in the Wall Street Journal, and you list a unique phone number for each ad, all of which forward to your sales team.*

With Call Tracking Metrics, you can find out:

* Which phone conversation came from which ad?
* Who on your team picked up the phone, and did the caller buy during that conversation?

With Call Tracking Metrics **AND** KISSmetrics, you can connect the dots between phones calls, website activity, and email opens/clicks. KISSmetrics reports will let you answer:

* How do your callers interact with your website after the call?
* If deals are not closed over a call, does the person eventually buy through your website, without contacting your sales team?
* How much lifetime revenue comes from people who called at some point vs. those who have never called?

# Demonstration Video

<div id="wistia_gik1m2517k" class="wistia_embed wistia-embed" data-video-width="640" data-video-height="400">&nbsp;</div>
<!-- <div id="wistia_gik1m2517k" class="wistia_embed" style="width:640px;height:400px;" data-video-width="640" data-video-height="400">&nbsp;</div> -->

<script charset="ISO-8859-1" src="http://fast.wistia.com/static/concat/E-v1.js">
</script>

<script>
wistiaEmbed = Wistia.embed("gik1m2517k", {
  version: "v1",
  videoWidth: 640,
  videoHeight: 400,
  volumeControl: true,
  controlsVisibleOnLoad: true
});
</script>

## Setup

1. Within your Call Tracking Metrics account, visit the [integration page for KISSmetrics][km-settings].
2. Enter your KISSmetrics API key.
3. Watch as information from phone calls is recorded in KISSmetrics.

## Integration Details

Event Name | Properties | Identity
-----------| ---------- | --------
`Called In` | `Customer phone number`: phone number of person dialing in | Phone number (eg. `+18887675477`)
    | `Call recording`: a URL that links to the recording of the phone call
    | `Call duration`: duration of the call in seconds
    | `Call ring time`: number of seconds the phone rang
    | `Call talk time`: number of seconds the caller is talking to your team
    | `Call tracking number`: your Call Tracking Metrics number that the caller dials
    | `Call tracking number label`
    | `Call receiving number`: the internal number of the person who picks up the call
    | `Call receiving number label`
    | `Call source label`
    | `Call status`

#### Frequency of Import

* Once each call has been logged in Call Tracking Metrics, data for it is immediately sent to KISSmetrics.

## An Example

**+18887675477** did an event: **Called in** which has properties

* **Customer phone number**: +18887675477
* **Call recording**: calltrackingmetrics.com/accounts/AC31fj87364649848e5d08/recordi...
* **Call duration**: 289
* **Call ring time**: 32
* **Call talk time**: 257
* **Call tracking number**: +14159996666
* **Call tracking number label**: Wall Street Journal ad
* **Call receiving number**: +14159758000
* **Call receiving number label**: Sally Jo
* **Call source label**: Print Advertising
* **Call status**: Completed

## Aliasing Phone Numbers to Email Addresses

Call Tracking Metrics provides an area to add notes about the caller. They provide a field for you to enter the caller's email address, if you know it (click the screenshot to expand):

[![ctm-edit][ctm-edit]][ctm-edit]

Entering an email address aliases the email to the caller's phone number, so that events registered under either ID will represent the same person in KISSmetrics. This is key in tying together the call information you receive from this integration to the existing data you already collect online in KISSmetrics.

[ctm]: https://calltrackingmetrics.com/
[callcode]: http://en.wikipedia.org/wiki/List_of_country_calling_codes
[km-settings]: https://calltrackingmetrics.com/accounts/kissmetrics_settings

[ctm-edit]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/calltrackingmetrics/ctm-edit.png