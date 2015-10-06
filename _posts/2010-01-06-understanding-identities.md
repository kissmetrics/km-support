---
layout: post
title: Understanding Identities
categories: getting-started
tags: [identities]
summary: Key concepts about person-based analytics you should know before using Kissmetrics.
---
#Understanding Identities
Event and property data in Kissmetrics is attached to a person. Each person has an identity.

A person’s identity can be anonymous (we don’t know anything about this person yet) or named (we know something about them such as an email address).

* Table of Contents
{:toc}
* * *

==============================================================================================================================

## Understanding an anonymous identity

Whenever a person visits your website or launches your app, Kissmetrics automatically assigns a property called **Customer ID** to that person.
![Understanding an anonymous identity][#1]

The **Customer ID** we assign to the person is a unique random series of numbers and letters. This ensures that every new person that comes to your website is truly unique.

The reason we call this an anonymous identity is because this person is currently represented by a series of numbers and letters, not by anything identifiable such as a name or email address.

## Understanding a named identity

Whenever a person fills out a form such as a sign-up form, newsletter or checkout process, Kissmetrics can capture their information such as an email address and convert their **Customer ID** from an anonymous identity into a named identity.

![Understanding a named identity][#2]

The most common named identity is an email address. You can use anything you want instead of an email address. Usernames or User ID numbers are popular choices.

## How to get your developer to assign named identities

If you want to start assigning named identities to your users, you’ll need help from your developer to do it.

Tell your developer that if she wants to use JavaScript, she can read [this article about identifying users automatically with our JavaScript library.][1]

Tell your developer that if she wants to use any other code library, she can read [this article about identifying users manually with our APIs.] [2]



[#1]: https://kissmetrics-support-files.s3.amazonaws.com/assets/troubleshooting/troubleshooting-identities/Understanding%20Identities%201.png
[#2]: https://kissmetrics-support-files.s3.amazonaws.com/assets/troubleshooting/troubleshooting-identities/Understanding%20Identities%202.png

[1]: http://support.kissmetrics.com/apis/javascript/index.html#quick-reference
[2]: http://support.kissmetrics.com/apis/common-methods.html#identify

