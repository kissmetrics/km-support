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
* Hidden fields
* Textarea fields
* Sensitive fields

We determine this by looking at the `name` attributes of each `<input>`. After ignoring certain connecting symbols like `_`, `\`, and `-` (for example, `user[name]` is converted to `user_name` and then finally `username`), we use this regular expression to figure out which fields are ignored:

    /pass|billing|creditcard|cardnum|^cc|ccnum|exp|seccode|securitycode|securitynum|cvc|cvv|ssn|socialsec|socsec|csc/i

## Full Set of Rules

We **will** track any form input with class `km_include`.

We **will not** track a form field...

1. with a class `km_ignore`
2. that isn't an `<input>` or a `<select>` (like a `<textarea>`)
3. if it's an `<input>` with a type that isn't "text", "radio", or "checkbox" (like "password" or "hidden")
4. if it doesn't have a an HTML `name` attribute
5. if its field name indicates it may contain sensitive information (using the regex above)
6. if it's an `<input>` that is an unchecked radio button or checkbox
