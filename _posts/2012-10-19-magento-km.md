---
layout: post
title: Magento and KISSmetrics
categories: integrations
author: Eric Fung
summary: Set up KISSmetrics to track each step of a Magento-driven checkout process.
---
## Magento Go

Magento Go provides the ability to insert custom JavaScript into their store platform. Please refer to their [KnowledgeBase article][m-go] for detailed instructions. Particularly, you can use Method 2 to put our JavaScript library into a static block.

Reference: [How to Add Custom JavaScript][m-go]

## Magento One Page Checkout

Magento's One Page Checkout system handles the entire checkout process in one URL. If you'd like to see exactly where customers are dropping off during checkout, you can add some KISSmetrics JavaScript Library calls to record events for each checkout step.
 
### Including the API Calls

Several articles explain how to integrate Google Analytics with Magento, and adapting them to KISSmetrics is straightforward. We're going to edit `opcheckout.js` in ``\skin\frontend\default\YOURTHEME\js`` - if that file is not there, copy it from `\skin\frontend\base\default\js`.
 
Now let's edit the `gotoSection` function:

<pre>
    gotoSection: function(section)
    {
        try {
          // Feel free to rename the KM event
          <strong>_kmq.push(['record', 'Reached Checkout Step '+section]);</strong>

          // If using Google Analytics, uncomment the relevant code:
          // Old Analytics code
          //pageTracker._trackPageview('checkout/onepage/'+section);
          // Newer Asynchronous Analytics code
          //_gaq.push(['_trackPageview', 'checkout/onepage/'+section]);
      
        } catch(err) { }
  
        section = $('opc-'+section);
        section.addClassName('allow');
        this.accordion.openSection(section);
    },
</pre>

### Setting Up the Funnel

The Funnel Report will look like this. Of course, from our Event Library, you could track the first two events: whether they 1) reached the Cart page and 2) started the Checkout process.

1. (Visits the URL /checkout/cart)
2. (Visits the URL /checkout/onepage)
3. Reached Checkout Step billing
4. Reached Checkout Step shipping
5. Reached Checkout Step shipping_method
6. Reached Checkout Step payment
7. Reached Checkout Step review

Reference: [Google Analytics Goal Funnel For Magento One Page Checkout][checkout]

[m-go]: http://www.magentocommerce.com/knowledge-base/entry/how-to-add-custom-javascript
[checkout]: http://blueclawecommerce.co.uk/google-analytics-goal-funnel-for-magento-one-page-checkout