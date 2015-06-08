---
layout: post
title: Step 8 - Your First Event without the JavaScript Library
categories: learn
portal: university
summary: Try sending data to Kissmetrics through one of our integrations or other API libraries. We will match the data according to which people are doing the events.
---
* Table of Contents
{:toc}
* * *

Try sending data to Kissmetrics through one of our integrations or other API libraries.

# Exercise

* If you have the relevant data, try importing a small sample of events and properties by [uploading a CSV file][csv.new], using email addresses as the person's `identity`.
* Investigate which [integrations][integrations] you may be able to use.

# Takeaways

* You can import data from the past, if you have that past data available per person.
* CSV files are a viable option for people of any technical level. The only difficulty is in converting the dates to timestamps that are computer-readable. One tool for doing this is [Epoch Converter][epoch-convert].
* When we merge data together from several data sources, we try to match up the imported data with data already in your account using each person's **identity** as a guide. So if our JavaScript library has identified `bob@example.com`, and you import more data about `bob@example.com`, we combine Bob's activity to give you one picture of what he was doing.

[csv.new]: https://app.kissmetrics.com/external_data/csv.new
[integrations]: /integrations
[epoch-convert]: http://www.epochconverter.com/epoch/batch-convert.php
