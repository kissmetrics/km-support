---
layout: post
title: One-Time CSV Upload
categories: [integrations, csv-import]
summary: Import data by uploading a single .csv file.
---
* Table of Contents
{:toc}
* * *

This guide explains how to import data from individual .csv files.

## 1. Navigate to the Upload Area

The [CSV upload area][csv-new] is located under your site's External Data Sources. You can reach it by doing the following:

* Go to [*Settings*][1] (the small gear tab)
* Click [*Data Integrations*][2]
* Click *Add Data from CSV File*

![CSV Upload Step 1][screenshot-1]

## 2. Select your CSV file

* Select "Upload CSV File" as the Import Option.
* Locate the file to upload on your computer.

Please refer to our [reference for details on how to format your CSV file][file-format].

## 3. Preview the results

If your file is formatted correctly, we'll show you a preview of the events and properties to be imported.

![CSV Upload Step 2][screenshot-2]

## 4. Complete the Upload

Once everything looks good, confirm the upload. Just as with any other data source that is bringing in events and properties, please wait **30 minutes** for the data to become available in your reports.

![CSV Upload Step 3][screenshot-3]

## 5. Check the Status

Completed uploads will be archived, and you will be able to refer to when they were originally imported.

For the purpose of housekeeping, you can delete completed entries. Note that **this does not delete the events that were brought in from the CSV file.**

[1]: https://app.kissmetrics.com/settings
[2]: https://www.kissmetric.com/external_data
[csv-new]: https://app.kissmetrics.com/external_data/csv.new
[file-format]: /integrations/csv-import

[screenshot-1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/csv-up-1.png
[screenshot-2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/csv-up-2.png
[screenshot-3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/csv-up-3.png
