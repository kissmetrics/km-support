---
layout: post
categories: [apis, javascript]
title: "Recreating TrackSubmit Using jQuery"
tags: []
author: Eric Fung
summary: 
published: false
---

{% highlight js %}
trackSubmitWithjQuery = function(selector, event_name, properties)
{
    // Helper: returns true if this is a form field we should track.
    trackP = function(field_name) {
        var elem = jQuery("input[name$='" + field_name + "']");

        // #0 Has class km_include
        if (elem.hasClass("km_include")) return true;

        // #1 Has class km_ignore
        if (elem.hasClass("km_ignore")) return false;

        // #2 Input type is not /text|radio|checkbox/ which excludes passwords and buttons
        if (!(elem.is(":text") || elem.is(":radio") || elem.is(":checkbox"))) return false;

        // #3 Sensitive fields
        if (field_name.replace(/[_\-]/g,"").match(/pass|billing|creditcard|cardnum|^cc|ccnum|exp|seccode|securitycode|securitynum|cvc|cvv|ssn|socialsec|socsec|csc/i))
           return false;

        // #4 Hidden fields
        if (elem.is(":hidden")) return false;

        return true;
    }

    jQuery(selector).submit(function() {
        // Get an array of the inputs
        var $inputs = jQuery(this).serializeArray()

        // Convert to an associative array...
        var values = {};
        for (var i=0; i<$inputs.length;i++) {
            var $input_name = $inputs[i].name;

            // Exclude the fields we do not track.
            if (trackP($input_name)) values[$input_name] = $inputs[i].value;
        }

        // Record the event with properties
        // 'Extend' merges the two arrays, giving priority to items in 'properties' when there are duplicates.
        _kmq.push(['record', event_name, jQuery.extend(values, properties)]);
    }
}
{% endhighlight %}