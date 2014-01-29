---
layout: post
title: Using the JavaScript Library to Run an A/B Test
categories: a-b-testing
summary: The KISSmetrics JavaScript Library provides a JS function to help you set up the A/B test. It does the three things every A/B test needs, all in one fell swoop. However, it requires you to edit some JavaScript on your site, though. Read here for some examples.
permalink: /a-b-testing/using-km-js/index.html
---
* Table of Contents
{:toc}
* * *

The Javascript API provides a function, `KM.ab`, to set up the majority of the A/B test. Specifically, it does three things:

1. Randomly assigns the current visitor to one of the variations passed in. (`KM.ab` returns the variation that was assigned, so you can save it as a JS variable.)
2. Ensures that subsequent calls to `KM.ab` returns the same variation for the visitor.
3. Sets a KISSmetrics property with the name of your experiment, and the value is the selected variant. In our example below, the A/B test will set the property "**Signup Button Color**" to either "**red**" or "**green**". You will be able to segment any report using this property.

## Full Example

Below shows an example of a complete A/B test, using `KM.ab`:

{% highlight html %}
<!--
  Here is our signup button. Notice that it is hidden by
  setting the style to "display: none". Also notice that
  it is by default using the "green" image.
-->
<img src="/images/green.png" id="signup_button" style="display: none"/>

<script type="text/javascript">
  // If for some reason KISSmetrics doesn't load or there is an error we'll just show the default green button after 1.5s
  var abTimeout1 = setTimeout(function(){
    document.getElementById("signup_button").style.display = '';
  }, 1500);

  // Now we need to add some Javascript code to run our A/B test.
  // Using _kmq.push to call our setup function ensures that it is only called once KM is loaded.
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
{% endhighlight %}

### Explaining KM.ab

Let's take a closer look at what KM.ab() does:

{% highlight js %}
var color = KM.ab("Signup Button Color", ["red", "green"]);
{% endhighlight %}

* For each person seeing this A/B test, choose randomly between the available options **"red"** and **"green"**.

* Sets a property "Signup Button Color" with the value "red" or "green", depending on what was randomly chosen.

This is equivalent to:

{% highlight js %}
// Only one of these is "executed":
_kmq.push(['set', {'Signup Button Color':'red'}]);   // option 1
_kmq.push(['set', {'Signup Button Color':'green'}]); // option 2
{% endhighlight %}

* `KM.ab()` returns which variation is picked, to reuse as a JavaScript variable (`color`). *To remember which variation was used, KM sets a cookie. Please look at our page on [Developing Locally][local] if you are testing `KM.ab()` locally.*

## Notes

* Wrap the call to `KM.ab()` in a function that is pushed to `_kmq`, or you may encounter JS errors if our library has not completely loaded before this executes.
* Our JavaScript library depends on cookies to work properly. Browsers do not preseve cookies from page to page in `localhost`, so please refer to our guide on [developing locally][local].

[local]: /advanced/local-development