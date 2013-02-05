---
layout: post
title: Using Weighted Variants
categories: [a-b-testing, using-km-js]
author: Eric Fung
summary: Learn how to use weighted variants to more finely control experiments.
---
By default KISSmetrics tries to distribute your visitors evenly across the different variants you provide. However, there may be instances where you want certain variants seen more than others. For example you might want to test a new design on only a small percentage of users. You can do this by passing in weights for your variants. The following are all valid:

    _kmq.push(function(){
      // Even weights, 50% red, 50% green (default)
      KM.ab("Button Color", ["red", "green"])
  
      // 70% red, 30% green
      KM.ab("Button Color", {"red":70, "green":30});
  
      // 70% red, 30% green (using decimals)
      KM.ab("Button Color", {"red":0.7, "green":0.3});
  
      // 5:1 red vs. green
      KM.ab("Button Color", {"red":5, "green":1});


      // KM.ab works with more than just two alternatives
      // 33% red, 33% green, 33% blue
      KM.ab("Button Color", ["red", "green", "blue"])

      // 5:1:1 red vs. green vs. blue
      KM.ab("Button Color", {"red":5, "green":1, "blue":1})
    })