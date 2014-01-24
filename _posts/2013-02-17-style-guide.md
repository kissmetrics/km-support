---
layout: post
categories: misc
title: "KISSmetrics Support Style Guide"
tags: []
author: Ian Main
summary: A guide to help style KISSmetrics Support Articles.
permalink: /misc/styleguide.html
---

This style guide will help you create visually consistant articles for the KISSmetrics Support site. Articles are written in Markdown and automatically converted to HTML. More information including a complete list of [Markdown syntax formatting can be found at Daring Fireball](http://daringfireball.net/projects/markdown/basics).

## Header Examples

The primary header for each article is a h1 element. Article headers are reserved for individual page titles only and are only used once per page.

	# This will style a First-Level Header

## Second-Level Header

The secondary header above is a h2 element, which may be used for any form of important page-level header. More than one may be used per page. Consider using a h2 unless you need a header level of less importance, or as a sub-header to an existing h2 element.

	## This will style a Second-Level Header

### Third-Level Header

The header above is a h3 element, which may be used for any form of page-level header which falls below the h2 header in a document hierarchy. More than one may be used per page.

	### This will style a Third-Level Header

#### Fourth-Level Header

The header above is a h4 element, which may be used for any form of page-level header which falls below the h3 header in a document hierarchy. More than one may be used per page.

	#### This will style a Fourth-Level Header

* * *

## Paragraphs

Paragraphs are created by simply separating the text by one or more blank lines.

	// Blank line above paragraph

	This will style a paragraph of text and wrap it in between two `<p>` tags. The paragraph will naturally wrap until a blank line is used.

	// Blank line separating paragraphs

	Here is another paragraph seperated by a blank line.

	// Blank line below paragraph

To achieve a `<br />` instead of a paragraph can be done by ending a line with two or more spaces, then type return.

	This will force a break in the text
	by converting two spaces and a return into a <br />

* * *

## Blockquotes

The blockquote element represents a section that is being quoted from another source.

Here’s an example of correct usage:

> KISSmetrics changed our view on what a company should be tracking. KISSmetrics tracks data that is important to your business and it shows you how to improve those numbers. Jane Park, CEO/Founder of Julep Entrepreneur

	> KISSmetrics changed our view on what a company should be tracking.
	> KISSmetrics tracks data that is important to your business and it shows you how to improve those numbers.
	> Jane Park, CEO/Founder of Julep Entrepreneur

* * *

## Code Blocks

Pre-formatted code blocks are used for writing about programming or markup source code. Rather than forming normal paragraphs, the lines of a code block are interpreted literally. Markdown wraps a code block in both `<pre>` and `<code>` tags.

Jekyll supports using [Pygments](http://pygments.org/) to style your code blocks. Here’s an example.

Our JavaScript code snippet looks like this:

{% highlight html %}
<script type="text/javascript">
  var _kmq = _kmq || [];
  var _kmk = _kmk || 'foo';
  function _kms(u){
    setTimeout(function(){
      var d = document, f = d.getElementsByTagName('script')[0],
      s = d.createElement('script');
      s.type = 'text/javascript'; s.async = true; s.src = u;
      f.parentNode.insertBefore(s, f);
    }, 1);
  }
  _kms('//i.kissmetrics.com/i.js');
  _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
</script>
{% endhighlight %}

You can pass a number of languages as an argument. You'll find a lot of use out of `html`, `html+ruby`, `js`, and `js+ruby` lexers. All the languages supported are listed at the [Pygments site](http://pygments.org/docs/lexers/).

* * *

## Inline Text

Some inline text can be styled to help add emphasis or importance to. These include `em`, `strong`, and `code`.

### Em

Markdown treats asterisks (*) and underscores (_) as indicators of emphasis. Text wrapped with one * or _ will be wrapped with an HTML `<em>` tag

*This is an example of emphasized text*

	*This will style text and wrap it in <em> tags.*

### Strong

Double `*`’s or `_`’s will be wrapped with an HTML `<strong>` tag.

**This is an example of emphasized text**

	**This will style text and wrap it in <strong> tags.**

### Code

To indicate a span of code, wrap it with backtick quotes (\`). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example:

`Referrer` indicates the URL the visitor came from

can be written like this:

	`Referrer` indicates the URL the visitor came from

* * *

## Links

Markdown supports two styles for creating links: inline and reference. With both styles, you use square brackets to delimit the text you want to turn into a link.

Inline-style links use parentheses immediately after the link text. For example:

	This is an [example link](http://example.com/).

Reference-style links allow you to refer to your links by names, which you define elsewhere in your document:

	I get 10 times more traffic from [Google][1] than from
	[Yahoo][2] or [MSN][3].

	[1]: http://google.com/        "Google"
	[2]: http://search.yahoo.com/  "Yahoo Search"
	[3]: http://search.msn.com/    "MSN Search"

* * *

## Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

Unordered lists use asterisks, pluses, and hyphens

### Example lists and usage:

**This is an unordered list**

- This is a list item
- This is a list item
- This is a list item

		- This is a list item
		- This is a list item
		- This is a list item

Ordered lists use numbers followed by periods:

**This is an ordered list**

1. This is list item 1
2. This is list item 2
3. This is list item 3

		1. This is list item 1
		2. This is list item 2
		3. This is list item 3

* * *

## Horizontal Rules

You can produce a horizontal rule tag `<hr />` by placing three or more hyphens, asterisks, or underscores on a line by themselves. If you wish, you may use spaces between the hyphens or asterisks. Each of the following lines will produce a horizontal rule:

* * *

	* * *

* * *

## Tables

Column 1 Heading|Column 2 Heading
-----------|-----------
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

	Column 1 Heading|Column 2 Heading
	-----------|-----------
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

* * *

## Images

Markdown uses an image syntax that is intended to resemble the syntax for links, allowing for two styles: inline and reference.

Inline image syntax looks like this:

	![Alt text](/path/to/img.jpg)

	![Alt text](/path/to/img.jpg "Optional title")

Reference-style image syntax looks like this:

	![Alt text][id]

Where “id” is the name of a defined image reference. Image references are defined using syntax identical to link references.

* * *

## Wistia Videos

When embeding Wistia videos, use the inline API method which will look similar to this:

    <div id="wistia_id" class="wistia_embed" style="width:488px;height:275px;" data-video-width="488" data-video-height="275">
    </div>

Then, remove any inline styles on the `<div>` tag and add the CSS class "wistia-embed" so that it looks similar to this:

    <div id="wistia_id" class="wistia_embed wistia-embed" data-video-width="488" data-video-height="275">
    </div>

The line break before the closing `</div>` is important for certain Markdown interpreters from adding the content below the video into the Wistia div.