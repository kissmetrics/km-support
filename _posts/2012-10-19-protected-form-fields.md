---
layout: post
title: Form Fields We Do Not Track
categories: [apis, javascript, javascript-specific]
summary: We won't record passwords, hidden, textarea fields as well as sensitive fields, like credit card numbers and social security numbers.
---
* Table of Contents
{:toc}
* * *

Our JavaScript can capture form fields as properties, but there are some we do not track:

* Passwords
* Hidden textarea fields
* Sensitive fields

We determine this by looking at the `name` attributes of each `<input>`. After ignoring certain connecting symbols like `_`, `\`, and `-` (for example, `user[name]` is converted to `user_name` and then finally `username`), we use this regular expression to figure out which fields are ignored:

    /pass|billing|creditcard|cardnum|^cc|ccnum|exp|seccode|securitycode|securitynum|cvc|cvv|ssn|socialsec|socsec|csc/i