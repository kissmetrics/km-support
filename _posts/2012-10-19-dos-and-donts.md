---
layout: post
title: Do's and Don'ts
categories: [a-b-testing, using-km-js]
author: Eric Fung
summary: Read about important do's and don'ts for running your tests.
---
**Don't** call KM.track without wrapping it in a function that you pass to `_kmq`. This may cause unexpected Javascript errors. Don't do this:

    // Don't do this, it may cause errors!
    var color = KM.ab("Signup Button Color", ["red", "green"]);

**Do** this instead:

    // Wrapping it in a function you pass to _kmq
    // prevents Javascript errors
    _kmq.push(function(){
      var color = KM.ab("Signup Button Color", ["red", "green"]);
    })

**Do** provide default views for your variants. This protects the integrity of your site in the rare event of an issue with KISSmetrics. Although we take reliability very seriously at KISSmetrics even large established companies, like Google Analytics and Amazon, suffer outages or bugs. Protect your site by providing default views and set timeouts. For example:

      // If for some reason KISSmetrics doesn't load or there is an
      // error we'll just show the default green button after 1.5s
      setTimeout(function(){
        document.getElementById("signup_button").style.display = '';
      }, 1500);

**Do** remember to record events that you are interested in. Just calling `KM.ab` is not enough. You need to record the event you are trying to change with the experiment (e.g. you need to record clicking on the signup button):

      // Record when someone clicks on the button
      _kmq.push(["trackClick", "signup_button", "Clicked Signup"])

**Don't** change the variants or weights after starting an experiment without knowing the consequences. If you change the variants or the weighting of the variants users who previously saw green buttons, may see red buttons when they return to the site (they will then be recorded as seeing the red button). This may cause a less than ideal user experience for your end users or skew the results in unexpected ways.