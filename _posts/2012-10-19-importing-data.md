---
layout: post
title: Import Existing Data Into Kissmetrics
categories: integrations
summary: Import your existing data into Kissmetrics.
permalink: /advanced/importing-data
---
* Table of Contents
{:toc}
* * *

Events are informative, but only starting from the day you set up the event. You may have access to past data that would be useful for Kissmetrics to know about, including past Signups, Purchases, Upgrades and Downgrades. This data can be either in your own databases or in another platform like [Shopify][shopify].

We can receive back-dated data that goes as far back as January 1, 2009.

## Methods

1. We may have [integrated][integrations] with your software platforms. Enable us to receive data from them.
2. [MySQL integration][mysql] - connect to your MySQL database.
3. [CSV import][csv], either a one-time upload or a recurring import.
4. Script the import by using a server-side library to facilitate the import.

This page will go over the last option, scripting the import using a server-side API.

## Preparation

We make use of our [API Specifications][specs] for submitting data to our servers. Particularly, the `_t` and `_d` parameters are used to indicate the time the events originally occurred, in the past. The import can be facilitated by using code written with one of our APIs, or with a [third-party API][other].

In order for this to be effective, you'll want to be consistent in how you are identifying customers. That is, ensure you use the same identities during the import as the identities that the other Kissmetrics data sources (eg. our JavaScript Library) use. Please see [Understanding Identities][identity] for more details.

### Examples of Possible Scenarios

The examples below are illustrated using our Ruby Library.

#### Signups

Most people will, at the very least, have a users table with a timestamp of when the user was created. This is what reflects when the user `Signed Up`.  If you don't know what the original plan they signed up for was (as this may have been overwritten), then omit the property.

For example, if you have the table below:

    +----+--------------------------+---------------------+
    | id | login                    | created_at          |
    +----+--------------------------+---------------------+
    |  1 | your@user.com            | 2009-10-01 00:00:00 |
    |  2 | test@kissmetrics.com     | 2009-10-01 01:00:00 |
    +----+--------------------------+---------------------+

You could script the import to do the following:

{% highlight ruby %}
# ID 1
KM.identify("your@user.com")
KM.record "Signed Up", :_t=>Time.parse("2009-10-01 00:00:00").to_i, :_d=>1, 'Plan Name' => 'Premium'

# ID 2
KM.identify("test@kissmetrics.com")
KM.record "Signed Up", :_t=>Time.parse("2009-10-01 01:00:00").to_i, :_d=>1, 'Plan Name' => 'Free'
...
{% endhighlight %}

#### Billed and Billing Amount

Recording billing information is strongly encouraged since revenue usually is the most important metric we can gather. The amount billed would have to be gathered from another table in this example, such as the table below. (Remember, you could be storing your data differently from what we present. As we don't have any insight to how your company's data looks, we can only speculate on how you may be storing data.)

Some companies will only record when a customer was charged, and whether it was associated with an upgrade or downgrade. Your schema may look like this:

    +----+---------+----------------+-----------------------------------+
    | id | user_id | amount | plan_id | type      | created_at          |
    +----+---------+--------+---------+-----------+---------------------+
    |  1 | 1       | 100    | 1       | signup    | 2009-10-01 00:00:00 |
    |  2 | 23      | 100    | 1       | signup    | 2009-10-01 13:53:45 |
    |  3 | 15      | 150    | 2       | upgrade   | 2009-10-01 14:29:42 |
    +----+---------+--------+---------+-----------+---------------------+

This would, as you can see, translate almost directly into upgrading data. Each type would be recorded as a separate corresponding event followed by a `Billed` event which would have the amount.

{% highlight ruby %}
KM.identify("your@user.com")
KM.record "Upgraded", :_t=>Time.parse("2009-10-01 00:00:00").to_i, :_d => 1, 'Plan Name' => 'Premium'
KM.record "Billed", 'Billing Amount' => '100', 'Billing Description' => 'Upgraded', :_t => Time.parse("2009-10-01 00:00:00").to_i, :_d => 1
{% endhighlight %}

#### Canceled

Your users table may have information about cancelations, and this should be recorded when a user terminates their service with you.

    +----+--------------------------+---------------------+
    | id | login                    | canceled_at         |
    +----+--------------------------+---------------------+
    |  1 | your@user.com            | 2009-10-01 00:00:00 |
    |  2 | test@kissmetrics.com     | 2009-10-01 00:00:00 |
    +----+--------------------------+---------------------+

{% highlight ruby %}
# ID 1
KM.identify("your@user.com")
KM.record("Canceled", :_t=>Time.parse("2009-10-01 00:00:00").to_i, :_d=>1)
...
# ID 2
KM.identify("test@kissmetrics.com")
{% endhighlight %}

#### Other Custom Events ("`Viewed Dashboard`")

If you are recording every time a user visits your website, with your own events table or otherwise, then this is useful information. At Kissmetrics, we are collecting this event no more frequently than once per 30 minutes. If you collect for every visit, and you have an associated timestamp, you should send an event just for each half hours worth of visit.

    +----+---------+-------------------+---------+---------------------+
    | id | user_id | event             | plan_id | created_at          |
    +----+---------+-------------------+---------+---------------------+
    |  1 | 23      | canceled          | 2       | 2009-10-01 00:00:00 |
    |  2 | 1       | downgraded        | 2       | 2009-10-01 13:53:45 |
    |  3 | 15      | visited dashboard | 1       | 2009-10-01 14:29:42 |
    |  4 | 15      | visited dashboard | 1       | 2009-10-01 14:33:55 |
    |  5 | 15      | visited dashboard | 1       | 2009-10-01 16:22:12 |
    +----+---------+-------------------+-------------------------------+

{% highlight ruby %}
# We used emails as previous KM identities. Derive the email from the user_id.
KM.identify("your@user.com")
KM.record "Visited Dashboard", :_t=>Time.parse("2009-10-01 14:29:42").to_i, :_d=>1, 'URL' => 'http://kissmetrics.com/dashboard', 'Referrer' => 'http://kissmetrics.com'
KM.record "Visited Dashboard", :_t=>Time.parse("2009-10-01 16:22:12").to_i, :_d=>1, 'URL' => 'http://kissmetrics.com/dashboard', 'Referrer' => ''
...
KM.identify("test@kissmetrics.com")
...
{% endhighlight %}

### Sample Ruby script

Our friends at [SevenScale][sevenscale] have provided a sample Ruby script that they used to import their customer data. Feel free to look over the structure and model your script after it:

Reference: [users-to-kissmetrics.rb][users-to-kissmetrics.rb]


[specs]: /apis/specifications
[other]: /apis/other
[mysql]: /integrations/mysql
[csv]: /integrations/csv-import
[shopify]: http://www.shopify.com/
[integrations]: /integrations
[identity]: /getting-started/understanding-identities

[sevenscale]: http://sevenscale.com/
[users-to-kissmetrics.rb]: https://s3.amazonaws.com/kissmetrics-support-files/assets/advanced/saas_importing/users-to-kissmetrics.rb
