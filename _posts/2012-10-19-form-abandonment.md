---
layout: post
title: Tracking Form Abandonment
categories: how-tos
author: Eric Fung
summary: A suggestion for tracking each form field as an event.
---
**Note: This method requires jQuery**.

Duncan's post on the [Distilled blog][distilled] demonstrates how to track form abandonment in Google Analytics. You can adapt the same JavaScript and jQuery code to track each form input as individual KISSmetrics events.

# The Code

    <script type='text/javascript'>
    // Wait for jQuery to finish loading
    $(document).ready(function() { 

      // For all inputs, trigger an event after the browser loses focus from a field
      $(':input').blur(function () {

        // Check that the visitor entered some information in the field
        if($(this).val().length > 0) {
          _kmq.push(['record', 'Filled Out Form Step ' + $(this).attr('name')]);
          }
        });
      
      // For radio buttons and checkboxes, .change() works better than .blur()
      $('input:radio, input:checkbox').change(function () {
        _kmq.push(['record', 'Filled Out Form Step ' + $(this).attr('name')]);
        });
    });
    </script>

This is fairly simple, and the relevant comments are in-line. This also assumes `_kmq` has already been initialized earlier.

This will trigger a unique event for each form field that is filled out. The events will  `Filled Out Form Step FORM_STEP`, where `FORM_STEP` is replaced by the **Name** attribute of each `<input>`.

# Reporting

Once people have successfully filled out the form, you can set up a [Funnel Report][funnel] to look at the micro-funnel of their progression from input to input.

# Thoughts

As Duncan says, the code sample is a proof of concept, and we strongly suggest before installing to your live site, that you [test][testing] that the events you see are the ones you expect. This is important if you have many different forms to track, so that you can anticipate creating more specifically-named events for each form:

* *Filled Out Form Step FORM_STEP* vs.
* *Filled Out* ***Registration*** *Form Step FORM_STEP* vs.
* *Filled Out* ***Checkout*** *Form Step FORM_STEP*

[distilled]: http://www.distilled.net/blog/conversion-rate-optimization/using-jquery-and-google-analytics-events-to-track-form-abandonment/
[funnel]: /tools/funnels
[testing]: /getting-started/testing-km