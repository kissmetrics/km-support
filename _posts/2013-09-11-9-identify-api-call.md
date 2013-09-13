---
layout: post
title: About the `Identify` API call
categories: learn
portal: university
published: false
---
`identify` API call

We will unify data across several sources of data as long as the person's IDs are the same.

# Exercise

If your site supports it, write in the `identify` call.

# Takeaways

* `Identify` designates who a person is, for this browsing session and future sessions
* If the person browsing is anonymous, their previously anonymous activity is also connected to the new ID.
  * This factor makes the JS Library very effective at managing the transition of people who become "known" to you, and the recommended option.
* In the majority of cases, email address works best.
  * To unify data from our other integrations that make use of email address
  * Segmenting your reports by Customer ID becomes more readable and/or meaningful
* A web developer should have a hand in implementing this call because it requires writing custom code to obtain the ID.
* Unless you absolutely want to track accounts instead of people, do not call `identify` with the same argument for several people.