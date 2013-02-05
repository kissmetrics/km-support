---
layout: post
title: Data Export Setup
categories: [apis, data]
author: Eric Fung
summary: Set up your KISSmetrics account to receive data from our Data Export feature.
---
KISSmetrics will now allow you to export data as JSON files. To get started, you'll need to configure your current KISSmetrics account.

## 1. Sign in to (or sign up for) Amazon Web Services
![Data Export Step 1][1]

If you already have an existing Amazon Web Services account, navigate to [aws.amazon.com][aws] and sign in. If this is your first time going to AWS, you can go through a quick process of signing up for an account. It's free to get started.

Not sure if you have an existing AWS account? Contact the developer who initially setup KISSmetrics for you and ask if there is an existing AWS account. If no one has ever heard of an AWS account, you can most likely go ahead and create one.

## 2. Create Bucket from AWS dashboard.

You will be directed to the AWS dashboard after signing in or signing up. Click "Create Bucket" towards the top left of the screen.

![Data Export Step 2][2]

## 3. Name your KM data bucket.
![Data Export Step 3][3]

You will refer to this bucket name later in step 7. You can optionally set up [logging][aws-logging] to get detailed access logs for your bucket at this point. Whether you choose to set up logging is up to you. You can always skip this and turn on logging later if you are not sure right now.

Click "Create" to continue.

## 4. Give KISSmetrics permission to access the bucket.
![Data Export Step 4][4]

Now that you've created the bucket, you need to give KISSmetrics permissions to access it.

Click "Properties" towards the top right of the screen to expand the Properties of your bucket. You'll notice it will list who has permissions on the bottom of the screen.

## 5. Choose to "Add more permissions".
![Data Export Step 5][5]

The grantee ID (without quotes) will be:

`6acb81d7742ac437833f51ecb2a40c74cd831ce26909e5f72354fa6af42cfb1f`

This is the KISSmetrics user.

Please include all permissions (List, Upload/Delete, View Permissions) for this user.
 
## 6. Go back to KISSmetrics dashboard and enable data export.
![Data Export Step 6][6]

Go back to [KISSmetrics settings][km-settings]. If you are already logged in, click the gear icon to get to your account's settings, then navigate to Data Export.
 
## 7. Enter your bucket name from step 3 and click verify to connect your KM account with your AWS bucket.
![Data Export Step 7][7]

Turn exporting "On" when ready to start data exporting. Your raw event data will be placed in your AWS bucket, in the form of JSON files representing each day's worth of data.

If you wanted to just set up data exporting and turn it on later, you can leave data exporting "Off".

You're all set for Data Export!

[aws]: https://aws.amazon.com
[aws-logging]: http://docs.amazonwebservices.com/AmazonS3/latest/UG/index.html?ManagingBucketLogging.html
[km-settings]: http://www.kissmetrics.com/settings
[1]: attachments/apis/data/dataexport1.png
[2]: attachments/apis/data/dataexport2.png
[3]: attachments/apis/data/dataexport3.png
[4]: attachments/apis/data/dataexport4.png
[5]: attachments/apis/data/dataexport5.png
[6]: attachments/apis/data/dataexport6.png
[7]: attachments/apis/data/dataexport7.png