---
layout: post
title: Wildcards
categories: [tools, event-library, events-url]
author: Eric Fung
summary: Use `*` to indicate wildcards. Here are many examples of what's possible.
---
* Table of Contents
{:toc}
* * *

You can also record visits to similar URLs under one event name. Use `*` to indicate wildcards.

## Quick Reference

Long Example #   | Pattern                  | Notes
---------------- | ------------------------ | -----
[#1][ex1] | `/en/*/view`                    | Basic demonstration of wildcards
[#2][ex2] | `/*/view/contact`               | You can use one wildcard to match on more than one subsection of a URL
[#3][ex3] | `/*/san-francisco/*/contact`    | You can use two or more wildcards
[#4][ex4] | `/*/view/*`                     | This matches all subpages of `/*/view/`, **including** the page `/*/view` itself
[#5][ex5] | `/*/view/*/*`                   | This matches all subpages of `/*/view/`, **excluding** the page `/*/view/` itself
[#6][ex6] | `*/view/*`                      | **This is actually reduced to "`/view/*`" ([see the full explanation][ex6])**
[#7][ex7] | `/*/*/view`                     | **Two or more wildcards together do not work ([see the full explanation][ex7])**
[#8][ex8] | `/*/?source=*` or `/*?source=*` | This matches a URL that has any value for the "`source`" parameter
[#9][ex9] | `/*/?source=fb`                 | This matches a URL that has the query parameter `source=fb`. You **don't** need a wildcard to match a URL with additional query parameters.


## Detailed Examples

Let's look at some detailed examples. Suppose your site has URLs that are similar to each other:

* `example.com/en/san-francisco/view`
* `example.com/en/san-francisco/view/contact`
* `example.com/en/san-francisco/view/submit`
* `example.com/en/new-york/view`
* `example.com/en/new-york/view/contact`
* `example.com/en/new-york/view/submit`
* `example.com/es/barcelona/view`
* `example.com/es/barcelona/view/contact`
* `example.com/es/barcelona/view/submit`
* `example.com/es/madrid/view`
* `example.com/es/madrid/view/contact`
* `example.com/es/madrid/view/submit`

From these URLs, here's what these wildcard patterns would match:


### Wildcard Example 1

**Pattern:** `example.com/en/*/view`

**URLs that will trigger an event with this pattern:**

* `example.com/en/san-francisco/view/`
* `example.com/en/new-york/view/`

This example demonstrates using one wildcard to match a URL that starts with "`example.com/en/`" and ends with "`/view`".


### Wildcard Example 2

**Pattern:** `example.com/*/view/contact`

**URLs that will trigger an event with this pattern:**

* `example.com/en/san-francisco/view/contact`
* `example.com/en/new-york/view/contact`
* `example.com/es/barcelona/view/contact`
* `example.com/es/madrid/view/contact`

This example demonstrates that a single wildcard can match on more than just one subsection of the URL. This example finds "any URL that ends in `/view/contact`".


### Wildcard Example 3

**Pattern:** `example.com/*/san-francisco/*/contact`

**URLs that will trigger an event with this pattern:**

* `example.com/en/san-francisco/view/contact`

This example demonstrates you can use two (or more) wildcards in a pattern.


### Wildcard Example 4

**Pattern:** `example.com/*/view/*`

**URLs that will trigger an event with this pattern:**

* `example.com/en/san-francisco/view`
* `example.com/en/san-francisco/view/contact`
* `example.com/en/san-francisco/view/submit`
* `example.com/en/new-york/view`
* `example.com/en/new-york/view/contact`
* `example.com/en/new-york/view/submit`
* `example.com/es/barcelona/view`
* `example.com/es/barcelona/view/contact`
* `example.com/es/barcelona/view/submit`
* `example.com/es/madrid/view`
* `example.com/es/madrid/view/contact`
* `example.com/es/madrid/view/submit`

This example demonstrates using a wildcard at the end of a URL. The last `/` before the wildcard indicates to match on all pages that are sub-pages of "`.../view/`". This pattern also matches on "`.../view/`" itself, since the wildcard matches to "nothing" in that case.


### Wildcard Example 5

**Pattern:** `example.com/*/view/*/*`

**URLs that will trigger an event with this pattern:**

* `example.com/en/san-francisco/view/contact`
* `example.com/en/san-francisco/view/submit`
* `example.com/en/new-york/view/contact`
* `example.com/en/new-york/view/submit`
* `example.com/es/barcelona/view/contact`
* `example.com/es/barcelona/view/submit`
* `example.com/es/madrid/view/contact`
* `example.com/es/madrid/view/submit`

This example contrasts with Example 4. The first `*/` after `.../view/` means that this wildcard has to match on *something* (not just an empty string, like in Example 4), and the final `*` in the pattern looks for any deeper sub-pages of "`.../view/`".


### Wildcard Example 6 - One to Avoid

To contrast with Example 4, here's a **Pattern That Doesn't Work As Expected:** "`*/view/*`"

This pattern does not match on any of the sample URLs above, and here's why. Though this pattern appears to look for "any URL that contains "`/view/`" in it, we start checking the URL starting from the first "`/`". That means, the above pattern is actually reduced to "`/view/*`" (and we treat it as a [Partial URL][partial]).

The bottom line is, if you're leaving off the domain name, then please be mindful of including the initial "`/`" in your URLs.


### Wildcard Example 7 - Another to Avoid

Another **Pattern That Doesn't Work As Expected:** "`/*/*/view`"

Including two wildcards adjacent to each other will not work. Unfortunately, you cannot use wildcards to specify the depth in which to find the `/view` portion of the URL. Regular expressions will allow you to do this, and we are investigating how best to incorporate them.

# Wildcards in Query Parameters

Suppose your site recognizes query parameters, additional information at the end of the URL that follows a "`?`" symbol:

* `example.com/en/san-francisco/view/?source=google&location=home`
* `example.com/en/san-francisco/view/?source=fb&location=away`


### Wildcard Example 8 - Query Example

**Pattern:**

* `example.com/en/san-francisco/view/?source=*` or
* `example.com/en/san-francisco/view?source=*` (equivalent to the above)
*  Likewise, `/*/?source=*` or
*  `/*?source=*`

**URLs that will trigger an event with this pattern:**

* `example.com/en/san-francisco/view/?source=google`
* `example.com/en/san-francisco/view/?source=fb`
* `example.com/en/san-francisco/view/?source=fb&location=home`
* `example.com/en/san-francisco/view/?location=home&source=fb`

This example demonstrates how to match for a URL that has any value for the "`source`" parameter. Also, notice you can match for a query parameter in the URL, even if it's not the very first parameter listed ("`?source=fb&location=home`" vs. "`?location=home&source=fb`").


### Wildcard Example 9 - Fixed Query Parameter

**Pattern:**

* `example.com/en/san-francisco/view/?source=fb`

**URLs that will trigger an event with this pattern:**

* `example.com/en/san-francisco/view/?source=fb`
* `example.com/en/san-francisco/view/?source=fb&location=home`

This example demonstrates how to match for a URL that has the "`source`" parameter set to `fb`. Notice that the URL can have just one query parameter (`?source=fb`) or additional ones (`?source=fb&location=home`). In the case of matching for additional query parameters, you can consider the wildcard to be ***implied***, and you should leave it out.

[partial]: /tools/event-library/events-url#partial-urls

[ex1]: #wildcard-example-1
[ex2]: #wildcard-example-2
[ex3]: #wildcard-example-3
[ex4]: #wildcard-example-4
[ex5]: #wildcard-example-5
[ex6]: #wildcard-example-6
[ex7]: #wildcard-example-7
[ex8]: #wildcard-example-8
[ex9]: #wildcard-example-9