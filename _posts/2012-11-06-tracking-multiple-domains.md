---
layout: post
title: Can I use the JavaScript Library on multiple domains?
categories: [apis, javascript]
author: Eric Fung
summary: Do your customers land on several domains when interacting with your website? Here's what you need to know.
---
The JavaScript library keeps track of each user's ID as a first party cookie. This is usually fine, but if your customers navigate to two or more domains while using your site, that means there will be two or more cookies that represent a person, and you should ensure that both cookies use the same value to represent that person.

<a name="several-subdomains"></a>
## Several Subdomains

Let's say you want to track what happens as people browse on different **subdomains** of your site, and you want to see it all in the same KISSmetrics site.

* http://www.mysite.com
* http://blog.mysite.com
* http://help.mysite.com
* https://secure.mysite.com

Notice that all of these are part of `.mysite.com`.

If you have put the same JavaScript code on all of these subdomains, by default we will be able to remember it is the same visitor as they browse from one subdomain to the next. That way you can set up to record events from each subdomain, and we can show whether it's the same person going through these subdomains.

*Note: if you are using the Event Wizard to set up events, please make sure this [JavaScript setting][js-settings] is enabled. This was enabled by default for all accounts created after October 2012:*

![Include Host and Subdomain][include-host]

<a name="to-track-subdomains-separately"></a>
### To Track Subdomains Separately...

If you want to track the subdomains separately in two KISSmetrics sites, you can specify a cookie domain `KM_COOKIE_DOMAIN` before the KISSmetrics Javascript is included. This might look like:

    <script type="text/javascript">
      /* This gives visitors to www.mysite.com a different ID
       * than on any other subdomain */
      var KM_COOKIE_DOMAIN = "www.mysite.com";
      var _kmq = _kmq || [];
      ...
    </script>

<a name="several-top-level-domains"></a>
## Several Top-Level Domains

However, let's say you are tracking two different domains:

* http://www.mysite.com
* http://www.myblog.com

This is a little more difficult, because now each domain has its own set of cookies to keep track of each visitor.

<a name="what-do-i-need-to-do"></a>
## What do I need to do?

So far, we've seen two methods that work:

1. Maintain their ID server-side. This is most useful when the user can sign in to both domains, typically if you have a Single Sign-On system. That lets you identify a logged-in customer with the same username/email address/database ID, regardless of which domain they're on.
2. When someone leaves one domain to go to another, append the destination URL with our [URL API][url], which lets you pass their KM ID from the first domain to the next. This way lets you pass our anonymous IDs from a domain to the next.

Let's look at an example of #2:

* Your site is on `www.yoursite.com`, but you use `yoursite.3rd-party-checkout.com` as part of a funnel you are tracking.
* There is a link that takes people from `www.yoursite.com` to `yoursite.3rd-party-checkout.com`.
* Adjust the link, using our [URL API][url] to tag the current KM ID as part of the destination URL.

<a name="example-1-known-users"></a>
### Example 1: Known Users

This is what hard-coding a URL would look like, to identify anyone who clicks this as "bob@bob.com":

     yoursite.3rd-party-domain.com/?kmi=bob%40bob.com

<a name="example-2-anonymous-users"></a>
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

<a name="tradeoffs"></a>
# What are the tradeoffs for tracking each domain separately vs. under one API key?

* **If you track your different domains separately, as individual sites within your account:**

  1. **(+)** It's easier to see each domain in isolation.
  2. **(+)** You do not have to worry about making sure each person's identity stays the same across your domains.
  3. **(-)** However, it's much harder to compare activity across the domains, because of how we keep the data separated.

* **If you track your different domains as one site within your account:**

  1. **(+)** You can see a complete picture of people's activity from your marketing site to your app or checkout cart.
  2. **(+)** You can still create separate events to differentiate reporting on activity in one domain vs. the other.
  3. **(-)** However, there is extra setup to ensure that people are being represented with the same ID on all of your tracked domains.
  4. **(-)** If you end up using the same JS snippet on all of your domains, the [events our JavaScript automatically tracks][auto-track] would lump together activity from each of your domains. *Visited Site* and *Ad Campaign Hit* would include Visits and Ad hits to all of your domains.

[url]: /apis/url
[km-id]: /apis/javascript/javascript-specific#get-your-current-kissmetrics-id
[alias]: /apis/common-methods#alias
[js-settings]: https://www.kissmetrics.com/product.js_settings
[include-host]: https://s3.amazonaws.com/kissmetrics-support-files/assets/apis/include-host.png
[auto-track]: /apis/javascript/javascript-settings