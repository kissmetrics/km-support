---
layout: post
title: Using Weighted Variants
categories: [a-b-testing, using-km-js]
summary: Learn how to use weighted variants to more finely control experiments.
---
* Table of Contents
{:toc}
* * *

When you use `KM.ab()` to set up a test, we'll split the variations evenly by default. However, you can give the function an extra argument to indicate the distribution of the test. These are all valid options:

{% highlight js %}
_kmq.push(function(){
  // Even weights, 50% red, 50% green (default)
  KM.ab("Button Color", ["red", "green"])

  // 70% red vs. 30% green
  KM.ab("Button Color", {"red":70, "green":30});

  // 70% red vs. 30% green, using decimals
  KM.ab("Button Color", {"red":0.7, "green":0.3});

  // 5:1 red vs. green
  KM.ab("Button Color", {"red":5, "green":1});


  // KM.ab works with more than just two alternatives
  // 33% red, 33% green, 33% blue
  KM.ab("Button Color", ["red", "green", "blue"])

  // 5:1:1 red vs. green vs. blue
  KM.ab("Button Color", {"red":5, "green":1, "blue":1})
})
{% endhighlight %}