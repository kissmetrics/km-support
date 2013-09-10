---
layout: post
title: Recurring CSV Import
categories: [integrations, csv-import]
author: Eric Fung
summary: Import data every hour by linking KISSmetrics with an Amazon S3 bucket containing multiple `.csv` files.
---
This guide explains how to create an Amazon Web Services S3 bucket, name your CSV files, and point your KISSmetrics account to the appropriate bucket.

## Creating an S3 Bucket

### 1. Sign in to (or sign up for) Amazon Web Services
![S3 Bucket Creation 1][ss-bucket-1]

If you already have an existing Amazon Web Services account, navigate to [aws.amazon.com][aws] and sign in. If this is your first time going to AWS, you can go through a quick process of signing up for an account. It's free to get started.

Not sure if you have an existing AWS account? Contact the developer who initially setup KISSmetrics for you and ask if there is an existing AWS account. If no one has ever heard of an AWS account, you can most likely go ahead and create one.

### 2. Create Bucket from AWS dashboard.
You will be directed to the AWS dashboard after signing in or signing up. Click "Create Bucket" towards the top left of the screen.

![S3 Bucket Creation 2][ss-bucket-2]

### 3. Name your KM data bucket.
![S3 Bucket Creation 3][ss-bucket-3]

You will refer to this bucket name later. You can optionally set up [logging][aws-logging] to get detailed access logs for your bucket at this point. Whether you choose to set up logging is up to you. You can always skip this and turn on logging later if you are not sure right now.

You may already have a bucket configured for our [Data Export][data] tool. It is a good idea to use a separate bucket only for importing CSV files.

Click "Create" to continue.

### 4. Give KISSmetrics permission to access the bucket.
![S3 Bucket Creation 4][ss-bucket-4]

Now that you've created the bucket, you need to give KISSmetrics permissions to access it.

Click "Properties" towards the top right of the screen to expand the Properties of your bucket. You'll notice it will list who has permissions on the bottom of the screen.

### 5. Choose to "Add more permissions".
![S3 Bucket Creation 5][ss-bucket-5]

The grantee ID will be:

`6acb81d7742ac437833f51ecb2a40c74cd831ce26909e5f72354fa6af42cfb1f`

This is the KISSmetrics user. Please include all permissions (List, Upload/Delete, View Permissions) for this user.

### 6. Give KISSmetrics permissions to edit the files
![S3 Bucket Creation 6][ss-bucket-6]

You've provided KISSmetrics access to the bucket, but we also need permission to read and modify the files. Select the .csv file, Click "Properties", and add permissions for the user

`6acb81d7742ac437833f51ecb2a40c74cd831ce26909e5f72354fa6af42cfb1f`

([The section below](/integrations/csv-import/recurring-import#naming-your-csv-files) has information about how your files should be named.)

Your bucket is now configured!

## Linking Your KM Site to the Bucket

### 1. Navigate to the Upload Area

The [CSV upload area][csv-new] is located under your site's External Data Sources. You can reach it by doing the following:

* Go to [*Settings*][1] (the small gear tab)
* Click [*External Data Sync*][2]
* Click *Add Data from CSV File*

![CSV Upload Step 1][screenshot-1]

### 2. Tell Us About Your Bucket

* Select "Recurring import from S3 bucket" as the Import Option.
* Enter in the name of the bucket, from Step 3 above.
* Enter in the base name of your csv files, explained below.

#### Naming Your CSV Files

KISSmetrics will use a *base filename* to create a search pattern, finding and processing all files that match that pattern. We will process them in alphanumeric order.

For example, if you use the base filename `accounts.csv`, KISSMetrics will look for files that match `accounts*.csv`. Sample naming conventions include:

* `accounts.unix_timestamp.csv`
* `accounts-YYYYMMDDHHIISS.csv`

This lets us look for all CSV files that start with `accounts`, starting with the one that comes first chronologically (because we are processing the files alphanumerically).

Currently, the import processes a single file every hour, so it makes sense to generate new CSV files once an hour, or less frequently then that.

*Note: At setup time, at least one valid file must be located in your bucket.*

### 3. Preview and Confirm

If all goes well, we'll show you a preview of the events and properties to be imported. Review the results and confirm the import when you are ready.

![CSV Recurring Step 3][screenshot-2]

## Processing Files

Currently, we scan for unprocessed files every hour. If we find any available files, we will process them 1 file at a time per hour. If your file is large, and it takes our servers longer than 5 minutes to process a single file, we will resume processing on that file during the next hour.

CSV files that have been processed will be moved to a folder within your bucket:

`completed_imports/YEAR/MONTH/DAY/ORIGINAL_FILENAME.csv`

[aws]: https://aws.amazon.com
[aws-logging]: http://docs.amazonwebservices.com/AmazonS3/latest/UG/index.html?ManagingBucketLogging.html
[screenshot-1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/csv-up-1.png
[screenshot-2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/csv-up-2.png
[ss-bucket-1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/recurring-bucket-1.png
[ss-bucket-2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/recurring-bucket-2.png
[ss-bucket-3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/recurring-bucket-3.png
[ss-bucket-4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/recurring-bucket-4.png
[ss-bucket-5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/recurring-bucket-5.png
[ss-bucket-6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/csv-import/recurring-bucket-6.png

[1]: https://app.kissmetrics.com/settings
[2]: https://www.kissmetric.com/external_data
[csv-new]: https://app.kissmetrics.com/external_data/csv.new

[data]: /apis/data