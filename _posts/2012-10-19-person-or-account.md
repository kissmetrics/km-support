---
layout: post
title: Should I Track Per Person or Per Account?
categories: how-tos
tags: [developers]
author: Eric Fung
summary: What if my site allows for multiple people to be part of one account?
---
KISSmetrics primarily allows you to track behaviors on the individual person level. But some SaaS products (like KISSmetrics itself) have accounts where multiple users can be members of a single account.

## Track People, with an Account Property

One option is to stick to using 'identify' on a user-basis, and to pass in the Account name as a property for that user when they sign up.

## Toggle Between ID's in the Same KM Site

Our JavaScript Library was not designed to send to two different sites/API keys. One way of tracking People and tracking Accounts that might work is to actually toggle the person's identity, depending on "whose behalf" you're recording events. 

So if you were to look at all the "people" you KISSmetrics account has pooled together, it would actually contain an assortment of both Users and Accounts, with overlap in which users belong to which accounts. Here's how I'm picturing this series of API calls:

    _kmq.push(['identify', 'user1']);
    _kmq.push(['record', 'Does a User Event']);
    _kmq.push(['identify', 'account1']);
    _kmq.push(['record', 'Does an Account Event']);
    _kmq.push(['identify', 'user1']); // toggle back to track future events as a User.

Doing it this way gives some separation between people and accounts, because accounts can only do certain events (the ones you're interested in), and people can only do certain events, and they shouldn't cross over.

## Track Under Two Accounts 

Another option is to track two different sites within your KISSmetrics account. One is set up to be people-centric, and the other is set up to be account-centric. For the account-centric site, you will call 'identify' with the Account name and record events that affect the Account as a whole, not just the users within that account. Such events may include Signup/Creation, Upgrade, Downgrade, Billed, and others. Most likely, the people-centric site will primarily use the JavaScript Library (and its own API key), whereas the account-centric site will make use of one of our server-side APIs (with the other API key). Currently, using two different JavaScript Library blocks is not recommended, since they would both make use of the same cookies to store your identity, and the whole idea is to identify the same person differently in the two sites.

There are some benefits to tracking your data by account. Let's say each account you maintain requires 5 team members. Only 1 is an administrator, and only administrators can do certain actions, like upgrade the account (for all 5 people). Let's say he upgrades. In a person-centric environment, the conversion rate would be listed as 20% (1 in 5 people upgraded). In an account-centric environment, the conversion rate would be listed as 100% (1 in 1 accounts upgraded). 

However, this configuration does have some drawbacks. There can be some kinds of data that only our JavaScript Library can capture, like which campaign a visitor originally came from, or what organic search terms were used to discover the site. It's hard for the account-centric site to get visibility into user behaviors prior to signup (when they were anonymous).