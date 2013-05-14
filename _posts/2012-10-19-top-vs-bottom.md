---
layout: post
title: Installing KM Code on Top vs. Bottom of the Page
categories: troubleshooting
author: Eric Fung
summary: Should I put the KM code at the top or bottom of my pages?
---
We recommend placing the KISSmetrics snippet in the `<head>` section for best performance. The browser loads a page from top to bottom. By placing the snippet on the top of your page, it increases the likelihood that the KISSmetrics code will pick up the activity before the user leaves the page. For example, people may land on your site and then immediately click on something before the whole page has finished loading. 

The KISSmetrics snippet is asynchronous, which means it will not delay the loading of the rest of your page. There is no harm to placing it at the top immediately before the closing `</head>` tag.

One minor (technical) reason for putting the code in the `<head>` is that the `_kmq` object will be created earlier in the page load. If you plan to pass us JavaScript Library calls elsewhere in the `<body>`, the `_kmq` object will be ready to queue these calls for execution when our script finishes loading. This avoids errors like these:

{% highlight html %}
<script type="text/javascript">
// This order causes JavaScript errors: "ReferenceError: _kmq is not defined"
  _kmq.push(['record', 'My Event']);  //_kmq has not been instantiated yet
  ...	 
  var _kmq = _kmq || [];
  ...
</script>
{% endhighlight %}

## What Do I Need to Do?

If your website uses a template to generate pages, enter it just before the closing `</head>` tag in the file that contains the `<head>` section. This will save you time from manually pasting the code into every single `<head>` section of your website.

If you need to, you can still put our script in the `<body>` or in the `<footer>` tag. It will still work fine.
