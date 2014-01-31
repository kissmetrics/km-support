---
layout: post
title: JavaScript Library - Creating Whole Page A/B Tests
categories: apis
summary: Learn how to track two completely different page designs not just changes in individual elements.
permalink: /a-b-testing/using-km-js/whole-page
---
* Table of Contents
{:toc}
* * *

What if you want to track two completely different page designs not just changes in individual elements? For example you may want to test the effectiveness of two (or more) different landing page designs. There are several ways you can accomplish this:

## 1. Create a single landing page and then redirect

In this case you would have each landing page as a different URL. You would then create a single landing page that you direct all traffic to. This page then redirects to one of your variants. The following is what the code on your landing page might look like (this code assumes you are including the standard KISSmetrics Javascript already):

{% highlight html %}
<script type="text/javascript">
  // Set a timeout to go to our default landing page, just in case

  var abTimeout1 = setTimeout(function(){
    window.location.replace("http://mysite.com/page1.html");
  }, 1500)

  _kmq.push(function(){
    KM.ab(
      "Landing Page",
      ["page1.html", "page2.html", "page3.html"],
      function(page){ // We create a callback that redirects to the page returned
        // Clear the timeout
        clearTimeout(abTimeout1);
        // Go to the page decided by the A/B test result
        window.location.replace("http://mysite.com/"+page);
      }
    );
  })
</script>
{% endhighlight %}

The advantage of this setup is you can use the KISSmetrics A/B testing logic to assign and remember which variant a user sees. The disadvantage is that different users will see different URLs. Additionally there will be small delay where a user will see a blank page and then your landing page.

## 2. Use an iframe, divs, or AJAX to load in your page

In this case you have a single landing page. This landing page then uses an iframe, a hidden div, or AJAX to load in the content for your selected landing page variant. The code to do this would look very similar to the code in the previous example, except instead of setting the `document.location` you'll set an iframe's `src` attribute or use AJAX to load in the content. The advantage of this approach is that you'll have a single URL for all your different landing page variants, but can still use the KISSmetrics A/B testing logic. However, there will still be a small delay before a user sees the final content.

## 3. Use server-side logic to display landing page variants

In this case you determine which variant to show the user server-side. You can either use your own logic or an existing server-side A/B testing library to do this. In either case it will be the server-side code's responsibility to make sure the same user sees the same landing page each time. If you choose this approach you'll just need to tell KISSmetrics which landing page the user is seeing. Assume you have a server-side variable named `@landing_page_name` that contains which landing page variant the user is seeing. It only takes a single line to tell KISSmetrics about this:

{% highlight html+ruby %}
<script type="text/javascript">
  _kmq.push(["set", {"Landing Page": "<%= @landing_page_name %>"}]);
</script>
{% endhighlight %}

The advantage of this approach is that you'll have a single URL for all of your landing page variants. Additionally there will be no extra delay from when a user lands on the page to when they see the content. The disadvantage is that you'll have to use your own server-side logic (or an existing library) and then integrate that in with KISSmetrics.