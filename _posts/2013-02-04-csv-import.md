---
layout: post
categories: integrations
title: "CSV Files as an External Data Source"
tags: []
author: Eric Fung
summary: Import data to KISSmetrics using .csv files.
permalink: /integrations/csv-import/
---
You can import .csv files into KISSmetrics to import data into your account. We'll accept both one-time uploads and a recurring import of .csv files from your Amazon S3 Bucket.

We recommend you read [People, Events, and Properties][pep] before getting started here.

## File Format

Columns will have the bold titles. These are the two required fields:

* **"Identity"** (required): Each entry is a KM identity. We will accept both new identities and identities already in our database.
* **"Timestamp"** (required, except when importing aliases): Each entry contains a timestamp of when the event/property occurred. The time format is in **seconds as a UTC Unix epoch**.

Then include at least one of these three columns, depending on what type of data you're importing:

* **"Event"** (*optional*): You can add an event name, such as "Signed Up". It does not matter if you currently have data for this event, or if this is a completely new event.
* **"Prop:"Property Name** (*optional*): You can add property columns by giving them the title "Prop:" and then adding the property name. For example, "Prop:Age" or "Prop:Billing Amount". You can include up to 10 property columns.
* **"Alias"** (*optional*): You can add additional aliases to the KM identity.

### Examples

#### Importing only events:

Identity | Timestamp  | Event
-------- | ---------- | ----------
1        | 1328044149 | Subscribed
3        | 1327871425 | Subscribed
4        | 1326664210 | Joined Newsletter
6        | 1325974373 | Joined Newsletter
10       | 1325629592 | Subscribed

#### Importing with optional properties:

Identity | Timestamp  | Event             | Prop:Age  | Prop:Gender | Prop:Favorite Food
-------- | ---------- | ----------------- | --------- | ----------- | ------------------
1        | 1328044149 | Subscribed        | 21        | Male        | Pizza
3        | 1327871425 | Subscribed        | 34        | Female      | Sushi
4        | 1326664210 | Joined Newsletter |           |             |                   
6        | 1325974373 | Joined Newsletter |           |             | Tapas
10       | 1325629592 | Subscribed        | 23        | Male        | Apple Pie

#### Importing with optional aliases:

Identity     | Alias          | Timestamp 
------------ | -------------- | ----------
gwashdog     | gw@example.com | 1230768000
abelincoln11 | al@example.com | 1230768000
mrtaft2      | ht@example.com | 1230768000

#### Sample .csv file

[Attached is a sample .csv file][sample-csv] for reference.

[pep]: /getting-started/people-events-properties
[sample-csv]: attachments/integrations/csv-import/csv-import-sample.csv