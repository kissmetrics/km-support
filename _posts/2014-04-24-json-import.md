---
layout: post
categories: integrations
title: "JSON Files as an External Data Source"
tags: []
summary: Import data to KISSmetrics using .json files.
permalink: /integrations/json-import/index.html
---
* Table of Contents
{:toc}
* * *

You can import `.json` files into KISSmetrics to import data into your account. We'll accept both one-time uploads and a recurring import of `.json` files from your Amazon S3 Bucket.

We recommend you read [People, Events, and Properties][pep] and [Common Methods][common-methods] before getting started here.

## File Format

We accept files with the `.json` extension with this caveat: each line of the file must be a valid JSON object. For example:


### Valid

{% highlight json %}
{"_n":"visited site","_p":"person@mail.com","_t":1393344604}
{"url":"www.example.com/","_n":"visited","_p":"person@mail.com","_t":1393344607}
{"url":"www.example.com/","_n":"visited site","_p":"person@mail.com","_t":1393344609}
{"_p":"new_customer@mail.com","_p2":"chuck@mail.com","_t":1393344614}
{% endhighlight %}

### Invalid

{% highlight json %}
{"links":
  [
    {"_n":"visited site","_p":"person@mail.com","_t":1393344604},
    {"url":"www.example.com/","_n":"visited","_p":"person@mail.com","_t":1393344607},
    {"_p":"new_customer@mail.com","_p2":"chuck@mail.com","_t":1393344614},
  ]
}
{% endhighlight %}


## JSON object requirements

Names will have the bold titles. These are the two required fields:

* **"_p"** (required): _p corresponds to a KM Identity. We will accept both new identities and identities already in our database.
* **"_t"** (required): A timestamp of when the event/property occurred. The time format is in **seconds as a UTC Unix epoch**. If you are using dates in Excel, you may need to convert those dates to Unix timestamps. See [this answer on Stack Overflow][stackoverflow].

Then include at least one of these three names, depending on what type of data you're importing:

* **"_n"** (*optional*): _n corresponds to the name of a KM Event.You can add an event name, such as `Signed Up`. It does not matter if you currently have data for this event, or if this is a completely new event.
* **"_p2"** (*optional*): _p2 corresponds to an Alias. In the rare case you are uploading [aliases][alias], you can add additional aliases to the KM identity.
* **"any value"** (*optional*): Any other Name:Value pairs will be treated as properties.

### Examples

#### Importing only events (`record` command)

{% highlight json %}
{"_p":"1", "_t":1328044149, "_n":"Subscribed"}
{% endhighlight %}

#### Importing events with optional properties (`record` command with properties)

{% highlight json %}
{"_p":"1", "_t":1328044149, "_n":"Subscribed", "Age":32, "Gender":"Male"}
{% endhighlight %}

#### Importing only properties (`set` command)

{% highlight json %}
{"_p":"1", "_t":1328044149, "Email Address":"bob@bob.com"}
{% endhighlight %}

#### Importing optional aliases (`alias` command)

It's [uncommon to upload aliases][alias], but this is the format if you absolutely needed to:

{% highlight json %}
{"_p":"1", "_t":1328044149, "_p2":"bob"}
{% endhighlight %}

#### Sample .json file

[Attached is a sample .json file][sample-json] for reference.

{% include summaries/json_import_summary.html %}

[stackoverflow]: http://stackoverflow.com/questions/1703505/excel-date-to-unix-timestamp
[pep]: /getting-started/people-events-properties
[common-methods]: /apis/common-methods
[sample-json]: http://kissmetrics-support-files.s3.amazonaws.com/assets/integrations/json-import/json-import-sample.json
[alias]: /apis/specifications#when-to-alias
