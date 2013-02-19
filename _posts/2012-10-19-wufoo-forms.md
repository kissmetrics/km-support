---
layout: post
title: Wufoo Forms
categories: how-tos
author: Eric Fung
summary: Measuring submissions of your Wufoo forms.
---
Wufoo's forms are loaded 1) through JavaScript that dynamically places the form on your page, and 2) the form is placed in an iFrame.

Both of these behaviors makes tracking a Wufoo form too difficult for our JavaScript Library and the Event Library to interact directly with the form.

## The Alternative

Wufoo does provide a "[webhook][webhook]" integration. The gist is, when your customers submit the form, POST the form data to a URL/server that is setup to receive the form data. Unfortunately, you can't point Wufoo directly to our tracking servers at `trk.kissmetrics.com`, because the information is not in a format that our servers would recognize.

Once your server has received the POST'ed form data, you would parse through it, because the form fields are not easily identifiable. For example, a field you set up for "First Name" might have `<input id="Field1" ...>`, which doesn't say much about what that field captured.

Once you've sifted through the data, you could use our [usual libraries][libraries] to send the form submission event to KISSmetrics.

Wufoo's documentation gives some good pointers towards resources for getting started, if you're relatively new at doing such things. But in the end, it looks like tracking Wufoo forms is not as simple as providing the form ID.

[webhook]: http://help.wufoo.com/articles/en_US/SurveyMonkeyArticleType/Webhooks
[libraries]: /apis