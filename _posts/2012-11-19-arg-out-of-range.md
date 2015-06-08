---
layout: post
title: MySQL Argument Out of Range
categories: [integrations, mysql]
summary: Why do I get a MySQL error ArgumentError - argument out of range?
---
* Table of Contents
{:toc}
* * *

When creating queries to import events into Kissmetrics, you may run into this error message:

    ArgumentError: argument out of range

If the corresponding query works for your database, it's possible that your date field (the one that corresponds to `KM_TIME`) could have default values like `00:00:00 0000-00-00`. When we interpret `KM_TIME` for storage in our own databases, we convert the date into a Unix timestamp.

This means that `00:00:00 0000-00-00` is out of range as a Unix timestamp, since the Unix epoch starts from `01 Jan 1970 00:00:00 GMT`. If possible, please adjust your default date values to use the Unix epoch.
