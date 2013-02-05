---
layout: post
title: Can I use the JavaScript Library on multiple domains?
categories: [apis, javascript]
author: Eric Fung
summary: Do your customers land on several domains when interacting with your website? Here's what you need to know.
---
The JavaScript library keeps track of each user's ID as a first party cookie. This is usually fine, but if your customers navigate to two or more domains while using your site, that means there will be two or more cookies that represent a person, and you should ensure that both cookies use the same value to represent that person.

## What do I need to do?

So far, we've seen two methods that work:

1. Maintain their ID server-side. This is most useful when the user can sign in to both domains, typically if you have a Single Sign-On system. That lets you identify a logged-in customer with the same username/email address/database ID, regardless of which domain they're on.
2. When someone leaves one domain to go to another, append the destination URL with our [URL API][url], which lets you pass their KM ID from the first domain to the next. This way lets you pass our anonymous IDs from a domain to the next.

Let's look at an example of #2:

* Your site is on `www.yoursite.com`, but you use `yoursite.3rd-party-checkout.com` as part of a funnel you are tracking.
* There is a link that takes people from `www.yoursite.com` to `yoursite.3rd-party-checkout.com`.
* Adjust the link, using our [URL API][url] to tag the current KM ID as part of the destination URL.

### Example 1: Known Users

This is what hard-coding a URL would look like, to identify anyone who clicks this as "bob@bob.com":

     yoursite.3rd-party-domain.com/?kmi=bob%40bob.com

### Example 2: Anonymous Users

You can use the `KM.i()` function to obtain the visitor's current ID (anonymous or not), and make use of that:

     <script>
     _kmq.push(function() {  // we wrap the code in a function to ensure our library has loaded already

        var kmid = encodeURIComponent(KM.i());  // get the ID and URL-encode it to preserve any symbols
        var destination = 'yoursite.3rd-party-domain.com/?&kmi=' + kmid;

        // Code here to hook up this string to the button action.
     });
     </script>

Down the line, if the customer ever goes from being anonymous to providing some identifying info, you'll have to [alias][alias] the anonymized and known id's together, rather than rely on `identify` to do the job. (The URL API treats the transferred ID as a "known" ID.)

    <script>
    // Just a demonstration. "emailaddress" is a placeholder for code that gets the user's id
    _kmq.push(['alias', KM.i(), emailaddress ]);
    _kmq.push(['identify', emailaddress ])
    </script>

For reference: [Looking Up Your Current KM ID][km-id]

## Final Thoughts

Whenever possible, we recommend that you track different domains separately by [creating individual KISSmetrics sites][create] for each, so that you can have data about each domain and not mix up the traffic. However, we realize that there are many cases where you want to see a person's data when they go to a different domain -- for example, your marketing site vs. app, or a hosted knowledge-base, or your e-Commerce checkout system. 

[url]: /apis/url
[km-id]: /apis/javascript/javascript-specific#get-your-current-kissmetrics-id
[create]: /how-tos/create-site
[alias]: /apis/common-methods#alias