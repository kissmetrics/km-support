---
layout: post
title: Data Export Setup
categories: [apis, data]
summary: Set up your KISSmetrics account to receive data from our Data Export feature.
---
* Table of Contents
{:toc}
* * *

You can export your KISSmetrics raw data as JSON files. Because of the amount of data to export, we'll make the JSON files available to your Amazon S3 bucket.

## 1. Sign in to (or sign up for) Amazon Web Services
![Data Export Step 1][1]

If you already have an existing Amazon Web Services account, navigate to [aws.amazon.com][aws] and sign in. If this is your first time going to AWS, you can go through a quick process of signing up for an account. It's free to get started.

Not sure if you have an existing AWS account? Contact the developer who initially setup KISSmetrics for you and ask if there is an existing AWS account. If no one has ever heard of an AWS account, you can most likely go ahead and create one.

## 2. Create an S3 Bucket

You will be directed to the AWS dashboard after signing in or signing up. You'll be working with S3:

![Data Export Step 2][2]

Click the blue "Create Bucket" button and name your bucket.

***(If you intend to export data from several of your account's sites, then please create a different bucket for each of them.)***

![Data Export Step 3][3]

You will refer to this bucket name later.

Make sure to create the bucket in the "US Standard" region.

Click "Create" to continue.

## 3. Give KISSmetrics permission to access the bucket.
![Data Export Step 4][4]

Now that you've created the bucket, you need to give KISSmetrics permissions to access it.

Click "Properties" towards the top right of the screen to expand the Properties of your bucket. You'll notice it will list who has permissions on the bottom of the screen.

The grantee ID of the KISSmetrics user is:

`6acb81d7742ac437833f51ecb2a40c74cd831ce26909e5f72354fa6af42cfb1f`

Please include all permissions (List, Upload/Delete, View Permissions) for this user.

## 4. Go to KISSmetrics and enable data export.
![Data Export Step 5][5]

Go back to [KISSmetrics settings][km-settings] and navigate to Data Export.

## 5. Enter your bucket name from earlier and click verify to connect your KM account with your AWS bucket.
![Data Export Step 6][6]

Turn exporting "On" when ready to start data exporting. Your raw event data will be placed in your AWS bucket, in the form of JSON files representing each day's worth of data.

If you wanted to just set up data exporting and turn it on later, you can leave data exporting "Off".

You're all set for Data Export!

[aws]: https://aws.amazon.com
[km-settings]: https://app.kissmetrics.com/settings

[1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/data/01-data-export.png
[2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/data/02-data-export.png
[3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/data/03-data-export.png
[4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/data/04-data-export.png
[5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/data/05-data-export.png
[6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/data/06-data-export.png
