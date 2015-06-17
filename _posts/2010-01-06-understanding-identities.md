---
layout: post
title: Understanding Identities
categories: getting-started
tags: [identities]
summary: Key concepts about person-based analytics you should know before using Kissmetrics.
---
* Table of Contents
{:toc}
* * *

In Kissmetrics, every unit of recorded data is associated with the person who interacted with your website or application. This is a seemingly simple idea but it has powerful consequences.


## 1. People Are Represented by Two Types of "Identities"

Each person tracked by Kissmetrics can be referred to by their "**Customer ID**" Kissmetrics Property. (I won't get into too much detail about Properties here. Just know that our reporting tools have an option named "Customer ID", which lets you see each customer's contribution to the data you are reporting on. For more info, you can read [People, Events, and Properties][pep] after finishing this.)

There are two types of Customer IDs. Here is some terminology we frequently use:

* ***Named Identities*** (aka *Named ID*): a *recognizable* string that represents a person:
  * `foo@example.com`
  * `User #12345`
  * `Facebook ID #67890`
* ***Anonymous Identities*** (aka *Anonymous ID*): a *randomly-generated* string that represents a person before you know who they are:
  * `y75Fe33597qBqkR4obZZYV+wF3Y=`
  * `6j1KH1zrwBS6T2iIsixvpfnCnxY=`

Here's a visual representation of 3 people within our data model:

    KM Person 1
    └── [Kissmetrics Property]: "Customer ID"
        └── [Anonymous ID]: 'y75Fe33597qBqkR4obZZYV+wF3Y='

    KM Person 2
    └── [KM Property]: "Customer ID"
        └── [Anonymous ID]: '6j1KH1zrwBS6T2iIsixvpfnCnxY='

    KM Person 3
    └── [KM Property]: "Customer ID"
        └── [Named ID]: 'User #12345'

When your team is logged in to our website, this is an example of using **Customer ID**.

## 2. Use the Named ID You Have Access To

Ideally, each customer is represented by only **one** Named ID. Whatever type of ID you use depends on the information your app/website collects. The most common Named IDs are:

* **Account ID**: useful if people sign up for your service and log in.
* **Email Address**: useful if people subscribe to mailing lists.

If your team wants to run reports like the one above and have the choice to switch between Emails or Account IDs, you can store "secondary" identities as additional Kissmetrics properties:

    KM Person
    ├── [KM Property]: "Customer ID"
    |   └── 'User #12345' (Named ID)
    ├── [KM Property]: "Email Address"
    |   └── 'foo@example.com' (Secondary Named ID)
    └── [KM Property]: "Full Name"
        └── 'Pat Jones' (Additional metadata)

Be aware that *First Name/Last Name* and *IP Addressses* are not considered strong enough identifiers to distinguish one person from another. However, you can still save this type of metadata as Kissmetrics Properties.

Again, the concept of Properties is discussed in [People, Events, and Properties][pep].


### 2.1 Setting Named ID's: `identify` method

When you use our `identify` method, you indicate going forward which Customer ID is interacting with your site--the page visits, clicks, form submissions, etc.

When you call `identify` with our JavaScript Library, the Customer ID is saved to a first-party cookie that is used for this and future browsing sessions. The cookie expires after 5 years or when the visitor clears their cookies.

Example uses of `identify`:
{% highlight js+ruby %}
// JS + Ruby. Choosing to use Account ID as the Named ID, assuming @account exists.
_kmq.push(['identify', '<%= @account.id %>']);
{% endhighlight %}

{% highlight js+php %}
// WordPress. Choosing to use WordPress username as the Named ID.
_kmq.push(['identify',
  '<?php $current_user = wp_get_current_user();
   if ( ($current_user instanceof WP_User) )
    echo $current_user->user_login;
  ?>']);
{% endhighlight %}


### 2.2 Gotcha! Example Uses of `identify` to Avoid

Calling `identify` in these ways is **counterproductive**:
{% highlight js %}
// This results in a JS Syntax error. The argument should be a string or an int.
_kmq.push(['identify', steve@apple.com ]);

// These treat ALL your visitors as one person, someone named "anonymous" or "guest"
_kmq.push(['identify', 'anonymous' ]);
_kmq.push(['identify', 'guest' ]);
{% endhighlight %}


## 3. An ID Should Not Change Often, But When It Does…

Your customers can accumulate several identities over their lifetime of interaction with your application or website. They will initially visit anonymously, possibly from multiple web browsers. On each of those browsers, they will be first represented using Anonymous ID's. Once they sign up or log in, you can continue to track their activity under their Named ID, which is much more meaningful.

    KM Person
    └── [Kissmetrics Property]: "Customer ID"
        ├── [Anonymous ID #1]: 'rAy2wPD+HQeNkxP4eQNAIzMi/7s='
        ├── [Anonymous ID #2]: '8Kb8K7HSBfImcisqIGI4F1+t3tE='
        └── [Named ID]: 'User #12345'

Thus, a person should have no more than one Named ID, but can have several Anonymous IDs. Regardless of how many IDs a person accumulates, let's make sure they all refer back to the same KM Person object.


## 3.1 Introduction to "Aliasing"

Our API has a method named `alias`, which merges the data from 2 IDs together. That is, following an alias, data from either ID will refer to the same person. You can chain more than 2 IDs together with multiple calls to `alias`.

#### Before Calling `alias`

    KM Person 1
    ├── [KM Property]: "Customer ID"
    |   └── [Anonymous ID]: '6j1KH1zrwBS6T2iIsixvpfnCnxY='
    └── [KM Event]: "Visited Site"
        └── 1359504000 (Unix timestamp)


    KM Person 2
    ├── [KM Property]: "Customer ID"
    |   └── [Named ID]: 'User #12345'
    └── [KM Event]: "Visited Site"
        └── 1359849600 (Unix timestamp)

#### Calling `alias` and Afterward

{% highlight js %}
// Call our API
_kmq.push(['alias', '6j1KH1zrwBS6T2iIsixvpfnCnxY=', 'User #12345']);
{% endhighlight %}

    KM Person 1 = KM Person 2
    ├── [KM Property]: "Customer ID"
    |   ├── [Anonymous ID]: '6j1KH1zrwBS6T2iIsixvpfnCnxY='
    |   └── [Named ID]: 'User #12345'
    └── [KM Event]: "Visited Site"
        ├── 1359504000 (Unix timestamp)
        └── 1359849600 (Unix timestamp)

![][alias-regular]


### 3.2 Let Our JS Library "Alias" the Two IDs

Because aliasing is so core to Kissmetrics, our JavaScript Library attempts to automate aliasing when it's appropriate, so that you rarely have to call the method explicitly.

* Our JavaScript Library will generate Anonymous Identities for people it has not seen before. The generated ID is Base64 encoded, so the IDs will contain the characters `a-z, A-Z, 0-9, +, /, and =`.

The JavaScript Library automatically aliases only when the current visitor is **currently anonymous**. If this is the case, these 3 interactions will simultaneously establish the visitor's Named ID going forward, as well as *automatically alias the Named ID to their previous Anonymous ID*:

1. You call `identify` with an argument, like in the examples above.
2. The visitor submits a form you are tracking, and the form has an `<input>` that can be used as an identifier. (`trackSubmit` is an API call that listens for form submissions. [See here for more details][id-from-form].)
3. The visitor views a URL tagged with the `kmi` query parameter, which is what our [URL API][url-api] recognizes.



#### 3.2.1 JS Library Examples

Suppose a visitor arrives and is given the Anonymous ID `1rNfguj/Kk3VsDyuLBXqiOnzYK4=`. Consider these three separate scenarios:

* The visitor's browser executes this JS:

{% highlight js %}
_kmq.push(['identify', 'foo@example.com' ]);
{% endhighlight %}

* The visitor submits this form, which is being tracked:

{% highlight html %}
<form id="login_form" onsubmit="login()">
  <input name="email" type="text"></input>
  <input name="password" type="password"></input>
</form>
<script type="text/javascript">
  // Allow our JS to track
  _kmq.push(['trackSubmit', 'login_form', 'Logged In']);
</script>
{% endhighlight %}

* Visiting the URL `http://www.example.com/?kmi=foo%40example.com`

In each of these scenarios, our JS Library would remember that this person is `foo@example.com` for this session and future sessions, ***and*** alias the two IDs together:

`1rNfguj/Kk3VsDyuLBXqiOnzYK4=` == `foo@example.com`

Here is an infographic that goes into further detail with what our JavaScript does: [Scenarios with Identifying in the JavaScript Library][js-ids-info]


### 3.3 Manually Calling the `alias` Method

Where our JS Library cannot automatically alias, you can explicitly call the `alias` method to connect 2 IDs. These are the most common scenarios:

* If you implement tracking with not only our JS Library, but also use our server-side libraries or external integrations. Some further details at [Reusing the Identities Set by the JavaScript Library][js-ids].
* Using the same API key on more than one root-level domain. More details at [Can I use the JavaScript Library on multiple domains?][mult-domains]

Here are example uses of `alias`:

{% highlight js+ruby %}
// Calling alias with explicit arguments
_kmq.push(['alias', 'y75Fe33597qBqkR4obZZYV+wF3Y=', 'foo@example.com' ]);

// Dynamically filling in the arguments
_kmq.push(['alias', KM.i(), '<%= @account.id %>' ]);
{% endhighlight %}

(`KM.i()` is a function of our JS Library that returns the user's [current KM ID][js-ids].)


### 3.4 Word of Warning

Aliasing is powerful, but can be troublesome because it is currently **not reversible**. If you have further questions about proper usage of `alias`, please contact us either through our app or in the comments section below.

<!--
## 4. Consider: when you are using several of our integrations.

Kissmetrics lets you incorporate data from several data sources from integrations with multiple platforms and from libraries in several languages. They may not all use the same Customer ID, so you may need to find the common links between these sources. That way, you could script a way to alias all the relevant IDs together, ensuring your customer data is not fragmented.
-->

[pep]: /getting-started/people-events-properties
[common-methods]: /apis/common-methods
[js-ids]: /apis/javascript/javascript-identities.html
[url-api]: /apis/url.html
[id-from-form]: /apis/javascript/javascript-specific/#identifying-a-person-from-a-form-field
[mult-domains]: /apis/javascript/tracking-multiple-domains

[js-ids-info]: https://s3.amazonaws.com/kissmetrics-support-files/assets/getting-started/understanding-identities/js-ids.pdf
[alias-regular]: https://s3.amazonaws.com/kissmetrics-support-files/assets/troubleshooting/troubleshooting-identities/alias-regular.png
