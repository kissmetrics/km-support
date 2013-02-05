---
layout: post
title: Using the JavaScript Library to Run an A/B Test
categories: a-b-testing
author: Eric Fung
summary: The KISSmetrics JavaScript Library provides a JS function to help you set up the A/B test. It does the three things every A/B test needs, all in one fell swoop. However, it requires you to edit some JavaScript on your site, though. Read here for some examples.
permalink: /a-b-testing/using-km-js/
---
The Javascript API provides a function, `KM.ab`, to set up the majority of the A/B test. Specifically, it does these things:

* Randomly assigns the current visitor to one of the variations passed in. (`KM.ab` returns the variation that was assigned, so you can save it as a JS variable.)
* Ensures that subsequent calls to `KM.ab` returns the same variation for the visitor.
* Sets a KISSmetrics property with the name of your experiment, and the value is the selected variant. In our example below, the A/B test will set the property "**Signup Button Color**" to either "**red**" or "**green**". You will be able to segment any report using this property.

## Full Example

Below shows an example of a complete A/B test, using `KM.ab`:

    <!-- 
      Here is our signup button. Notice that it is hidden by
      setting the style to "display: none". Also notice that
      it is by default using the "green" image.
    -->
    <img src="/images/green.png" id="signup_button" style="display: none"/>

    <script>
      // If for some reason KISSmetrics doesn't load or there is an
      // error we'll just show the default green button after 1.5s
      var abTimeout1 = setTimeout(function(){
        document.getElementById("signup_button").style.display = '';
      }, 1500);
      
      // Now we need to add some Javascript code to run our A/B test
      // Using _kmq.push to call our setup function ensures that it 
      // is only called once KM is loaded
      _kmq.push(function(){
        // Set up the experiment (this is the meat and potatoes)
        var color = KM.ab("Signup Button Color", ["red", "green"]);

        // Set the button color
        var button = document.getElementById("signup_button");
        button.src = "/images/"+color+".png"; // Set the button color
        button.style.display = ''; // Show the button

        // Clear the timeout, since this worked fine
        clearTimeout(abTimeout1);
      });

      // Record when someone clicks on the button
      _kmq.push(["trackClick", "signup_button", "Clicked Signup"])
    </script>

### Explaining KM.ab

Let's take a closer look at what KM.ab() does:

    var color = KM.ab("Signup Button Color", ["red", "green"]);

* For each person seeing this A/B test, choose randomly between the available options **"red"** and **"green"**.

* Sets a property "Signup Button Color" with the value "red" or "green", depending on what was randomly chosen.

This is equivalent to:

    // Only one of these is "executed":
    _kmq.push(['set', {'Signup Button Color':'red'}]);   // option 1
    _kmq.push(['set', {'Signup Button Color':'green'}]); // option 2

* `KM.ab()` returns which variation is picked, to reuse as a JavaScript variable (`color`). *To remember which variation was used, KM sets a cookie. Please look at our page on [Developing Locally][local] if you are testing `KM.ab()` locally.*

## Notes    

* We use the asynchronous API to make sure that our page will still work in the rare event that the KISSmetrics Javascript doesn't load (and also to prevent Javascript timing errors). If you just call `KM.ab` without going through `_kmq` you risk exposing your users to Javascript errors.
* We keep the button hidden until we determine the color. To make sure our users see a button (even if there is an error with KISSmetrics) we also set a timeout to display the button. While this latter step isn't strictly necessary, it is **strongly** recommended.
* In this example we use the result of `KM.ab` to set the src attribute of our image. If the variants you were testing were more complicated you might have both variants in HTML, as two separate elements on the page (with both hidden) and then just show the appropriate variant when you get the selected variant from `KM.ab`.
* We use the trackClick method to record when a user clicks on our signup button. Notice how this event doesn't have any reference to our A/B test. That's because we don't need to tie them together; the results of all of our A/B experiments will be available for every event you record with KISSmetrics on your site. So if you are already recording events on your site with KISSmetrics it will be even easier for you to integrate A/B testing - just add the experiments and they'll interface with your existing events.

# Developing in `localhost`

Our JavaScript library depends on cookies to work properly. Browsers do not let you set cookies in `localhost`, so please refer to our guide on [developing locally][local].

[local]: /advanced/local-development