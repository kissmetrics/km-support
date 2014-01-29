---
layout: post
title: SaaS Power Users Use Case
categories: use-cases
summary: How to find the users that use your product the most.
---
* Table of Contents
{:toc}
* * *

## How to Find Your Power Users

Why Should We Find Our Power Users? Why not just look at a typical user?

Finding our powers users helps us accomplish two major goals:

1) Develop a better product

New features go through countless iterations before getting anywhere near "perfect." And the perfect feature is usually completely different from what you had in mind when you started because customers will use your product in completely unexpected ways. Detailed and constructive feedback helps you find the perfect version as fast as possible. By reaching out to power users, you'll get amazing feedback on the improvements you're planning to make.

2) Get more people to become power users

Once you discover WHY your power users are power users, you'll also discover ways to encourage other users to fall in love with your product. Maybe you have a feature that's not as prominent as it could be. Or maybe your users haven't seen the value of a feature and have ignored it. Look for the differences between power users and regular users. Then you'll know exactly how to help people fall in love with your product.

## Using KISSmetrics to Find Your Power Users

First, access the People Search by clicking on the "People" tab above your KISSmetrics reports:

![KM-Nav-Bar-People][ss1]

There's two ways to search for people:

1. Search by Group: This is the best way to find people that have something in common. For example, you can search for everyone that came from facebook.com in the last week, signed up last month, or spent at least $500 in the last six months.
2. Search by Identity: With an identity search, you can look up a specific person by their customer ID. Most businesses use emails for the customer ID so all you have to do is enter in the email of the person you want to look at. If you use a partial email like "@kissmetrics.com", we'll give you a list of all the people that match it.

Since you want to find all of your power users, you'll want to use the search by group.

Here's what the group search looks like:

![KM-People-Search-Blank][ss2]

Now let's add a condition that will find your power users. For this example, we're going to define a power user as someone who's logging in once a day on average, a daily active user. To keep things simple, let's look at the last 30 days. This means you want a list of people that have logged in at least 30 times in the last 30 days.

Build a condition that uses your login event, it'll look something like this:

![KM-People-Search-Logged-In-30-Times][ss3]

You could also define a power user by a core feature of your product. If you had an invoicing web app, you could use the number of invoices sent as the condition. Looking for people that have sent 30 invoices in the last 30 days would be a great way to find the users that are using your product heavily.

Remember to set the date range, use the "last 30 days" for this group.

You also have the ability to build columns for your people search. Columns give you more info on the group of people you're searching for. Let's build two columns. First, add a column for the logged in event so you can see the total number of logins over the last 30 days. This will allow you to sort the list by logins and see who's been the most active. When you add a column, you'll have a few options for how to calculate the metric:

![KM-People-Search-Column-Selector][ss4]

Use "Total Times for Date Range" to see who's been the most active over the last 30 days.

Second, let's look at the referrer (traffic source) that people came from for the very first time. So add a column for "Referrer" and select "First-Touch Attribution Ever":

![KM-Person-Search-Column-Referrer-First-Touch][ss5]

You can add up to 3 columns that give you data on any event or property that you've been tracking.

The finished report will look like this:

![KM-People-Search-Completed-Report][ss6]

Now let's run the report which will give us results similar to these:

![KM-People-Search-Sample-Results][ss7]

To get more details on someone, simply click on their email and a person details report will open.

## What do we do once we know who our power users are?

Remember, there's two main ways to use a list like this.

### Building a Better Product

Your power users know your product inside and out. They've found every flaw and benefit you have to offer. So when you're brainstorming improvements to your product, check in with your power users to see if you're headed in the right direction.

You have their emails so reach out to them and ask if they'd be willing to jump on Skype and describe how they use a particular feature. Show them some mockups to test your ideas. And once you get to the prototype stage, you can give power users exclusive access to a new feature before anyone else. They'll help you find all the bugs and issues before you launch it publicly.

People love to help companies improve their product and we rely on this process to improve KISSmetrics.

### Get More Users to Become Power Users

Power users tend to love your product more than anyone else. They use it daily, get a tremendous amount of value from it, subscribe the longest, and are the most willing to upgrade. We want to help our normal users to become power users.

So start looking through the data you have on each power user. What does an average workflow look like? Which features do they use the most? How does this differ from a typical user? Once you understand what makes your power users unique, you can encourage the same type of behavior to the rest of your users. Send emails explaining a core feature of your product or highlight it in your navigation.

Your goal is to help the rest of your users achieve the same benefits that your power users have already obtained.

[ss1]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/find-power-users/01-KM-Nav-Bar-People.png
[ss2]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/find-power-users/02-KM-People-Search-Blank.png
[ss3]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/find-power-users/03-KM-People-Search-Logged-In-30-Times.png
[ss4]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/find-power-users/04-KM-People-Search-Column-Selector.png
[ss5]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/find-power-users/05-KM-Person-Search-Column-Referrer-First-Touch.png
[ss6]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/find-power-users/06-KM-People-Search-Completed-Report.png
[ss7]: https://s3.amazonaws.com/kissmetrics-support-files/assets/use-cases/find-power-users/07-KM-People-Search-Sample-Results.png