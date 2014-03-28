---
layout: post
categories: integrations
title: "CSV Files as an External Data Source"
tags: []
summary: Import data to KISSmetrics using .csv files.
permalink: /integrations/csv-import/index.html
---
* Table of Contents
{:toc}
* * *

You can import .csv files into KISSmetrics to import data into your account. We'll accept both one-time uploads and a recurring import of .csv files from your Amazon S3 Bucket.

We recommend you read [People, Events, and Properties][pep] and [Common Methods][common-methods] before getting started here.

## File Format

Columns will have the bold titles. These are the two required fields:

* **"Identity"** (required): Each entry is a KM identity. We will accept both new identities and identities already in our database.
* **"Timestamp"** (required, except when importing aliases): Each entry contains a timestamp of when the event/property occurred. The time format is in **seconds as a UTC Unix epoch**. If you are using dates in Excel, you may need to convert those dates to Unix timestamps. See [this answer on Stack Overflow][stackoverflow].

Then include at least one of these three columns, depending on what type of data you're importing:

* **"Event"** (*optional*): You can add an event name, such as `Signed Up`. It does not matter if you currently have data for this event, or if this is a completely new event. **If you are importing events, each row needs an event. To set only properties, set those aside in a separate CSV file.**
* **"Prop:"Property Name** (*optional*): You can add property columns by giving them the title `Prop:` and then adding the property name. For example, `Prop:Age` or `Prop:Billing Amount`. You can include up to 10 property columns.
* **"Alias"** (*optional*): in the rare case you are uploading [aliases][alias], you can add additional aliases to the KM identity.

Our CSV import is unable to accept double quotation marks (") so please use single quotations (') if possible.

### Examples

#### Importing only events (`record` command)

Identity | Timestamp  | Event
-------- | ---------- | ----------
1        | 1328044149 | Subscribed
3        | 1327871425 | Subscribed
4        | 1326664210 | Joined Newsletter
6        | 1325974373 | Joined Newsletter
10       | 1325629592 | Subscribed

#### Importing events with optional properties (`record` command with properties)

Identity | Timestamp  | Event             | Prop:Age  | Prop:Gender | Prop:Favorite Food
-------- | ---------- | ----------------- | --------- | ----------- | ------------------
1        | 1328044149 | Subscribed        | 21        | Male        | Pizza
3        | 1327871425 | Subscribed        | 34        | Female      | Sushi
4        | 1326664210 | Joined Newsletter |           |             |
6        | 1325974373 | Joined Newsletter |           |             | Tapas
10       | 1325629592 | Subscribed        | 23        | Male        | Apple Pie

#### Importing only properties (`set` command)

Identity | Timestamp  | Prop:Email Address
-------- | ---------- | ------------------
1        | 1328044149 | bob@bob.com
3        | 1327871425 | adam@bob.com
4        | 1326664210 | matt@bob.com
6        | 1325974373 | joe@bob.com
10       | 1325629592 | phil@bob.com

#### Importing optional aliases (`alias` command)

It's [uncommon to upload aliases][alias], but this is the format if you absolutely needed to:

Identity     | Alias          | Timestamp
------------ | -------------- | ----------
gwashdog     | gw@example.com | 1230768000
abelincoln11 | al@example.com | 1230768000
mrtaft2      | ht@example.com | 1230768000

#### Sample .csv file

[Attached is a sample .csv file][sample-csv] for reference.

{% include summaries/csv_import_summary.html %}

[stackoverflow]: http://stackoverflow.com/questions/1703505/excel-date-to-unix-timestamp
[pep]: /getting-started/people-events-properties
[common-methods]: /apis/common-methods
[sample-csv]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/csv-import-sample.csv
[alias]: /apis/specifications#when-to-alias