---
layout: post
categories: troubleshooting
title: "Problems with Identifying Users?"
tags: []
author: Eric Fung
summary: These are several pitfalls to avoid when using KISSmetrics identities.
published: false
---
In theory, our concept of identities should be simple.

1. KISSmetrics tracks people.
2. People can be represented with different names in their lifetime as a customer. Usually two names: one when they are first anonymous; another when they become known through signing up, logging in, or installing your app.
3. KISSmetrics provides ways to connect these different names so that they can represent one person. The API has two methods for this: `alias` and `identify`.

### You used our `identify` API call but your customer identities are not showing up.

* *Are you calling our API with the identity in quotes?*

Compare:

    // This works
    _kmq.push(['identify', 'steve@apple.com' ]);
    // This will not be recognized
    _kmq.push(['identify', steve@apple.com ]);

* *Do people trigger events after you call `identify`?*

This is related to the next section.


### You used our `alias` API call but the aliased ID does not appear when you search for it, or as a Customer ID.

* Currently, we'll show each person's aliases as long as we see an event attributed to that alias.


Consider this example series:

KM.identify("User123456")
KM.alias("User123456", "efung@kissmetrics.com")
KM.record("Event 1")
KM.record("Event 2")

Because I never 'identify' as efung@kissmetrics.com and log events as "efung@kissmetrics.com", that alias never shows up in that person's details, not even as a historic Customer ID. That means you wont' be able to look me up in People Search by my email, despite you definitively calling 'alias'.

Only until I trigger an event as "efung@kissmetrics.com" will that show up as a Customer ID.
--

After I realized this was happening relatively frequently, I suggested ditching alias altogether:


KM.identify("User123456")
KM.set({"Email Address":"efung@kissmetrics.com"})
KM.record("Event 1")
KM.record("Event 2")

This is what I'm recommending people, but it's still not enough for customers like UberConference, who intend to use our Salesforce Integration, and that requires the email address to be a Customer ID.


### We're reporting that only *one* person is doing an event (Visited Site) when you know many more have done the event.

* *Are you passing along the exact same "identity" for many visitors?*

For unknown people who come to your site, you might think to `identify` them as an "anonymous user". Keep in mind that our JavaScript distinguishes these people with a randomized hash, so it's counterproductive to call `identify` with the same ID "anonymous" or "guest". Doing so treats everyone as the same **one** person named "anonymous" or "guest".

    // Both of these are counter to how we intend for you to use 'identify'
    _kmq.push(['identify', 'anonymous' ]);
    _kmq.push(['identify', 'guest' ]);

    // If you don't know a person's identity, either don't include the API call, or pass us just an empty string.
    _kmq.push(['identify', '' ]);
    * Are IDs being `alias`-chained together?

**How?** You'll notice if individual people have a history of Customer IDs that do not

Consider this sequence:

    # "John", "User-456", and "User-123" are used as different Customer Identities
    KM.alias("John", "User-123")      KM.alias("John", "User-456")

Although "User-123" and "User-456" represent two different people, and they are not explicitly aliased together in one API call, these two calls will result in both "User-123" and "User-456" representing the same **one** person. We recommend using `alias` sparingly and to ensure that each person is represented by a unique ID. In this case, a person's first name is not sufficiently unique enough to use as a person's possible 'identity'.

* Are you recording data from separate areas and seeing customer data with no context?

**How?** Your identified users don't have any past data about their visits, how they were referred to your site, etc.
