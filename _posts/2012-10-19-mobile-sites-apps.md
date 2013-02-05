---
layout: post
title: Tracking Mobile/iPhone/Android Apps
categories: how-tos
author: Eric Fung
summary: Using KISSmetrics to track mobile sites and apps.
---
KISSmetrics can track your mobile site using our typical [JavaScript Library][js]. For a native iOS or Android application, we'll need to do some more work. You have a few options:

## 1. Use Ruby/PHP/Python Library on backend (recommended)

If possible, we recommend that you record mobile app events when they trigger a corresponding event on your backend servers (Ruby/PHP/Python). Then you can record the server-side event using one of our available server APIs.

### Mobile Apps

The primary benefit of using the backend server API is that it excludes an additional library from affecting user experience or taking up unnecessary memory on your app. This allow allows you to record all data coming in through the backend at the USER level.

#### Example:

Data is sent when someone initializes the app. KISSmetrics can capture and record key events as they come in such as:

* Launched App
* Used Core Feature 1
* Used Core Feature 2
* Changed Settings

Use KISSmetrics' APIs (Ruby/PHP/Python) to record these events seamlessly as they come in so that you can visualize the data you're already getting. You're cataloguing and organizing data with KISSmetrics by putting event triggers as data flows in from your customers.

#### When a user launches the app, you can include an event trigger on your backend (Ruby Example):

    KM.identify(grab_user_identification_data_from_db);
    KM.record('Launched App', {'Version' => grab_app_version});

Once you have a script for `grab_app_version` and `grab_user_identification_data_from_db` it will then look like this for every user launching your app:

    KM.identify('user@gmail.com');
    KM.record('Launched App', {'Version' => 2.3});

#### So now when a user does something on your app, you can now record key events for every feature available as it comes into your backend:

    KM.record('Used Core Feature 1');
    KM.record('Changed Settings');

#### In addition, you can always set custom properties to users at any time without recording an event. Let's say you want to know what the first thing a user does after they launch your app.

So you've identified them and recorded that they launched the app:

    KM.identify(grab_user_identification_data_from_db);
    KM.record('Launched App', {'Version' => grab_app_version});

Now you want to find out what they do next.

Write a script to trigger a KISSmetrics API command on the FIRST action after launching the app. It could look like this (please excuse the pseudo-code):

    KM.record('Used Core Feature 1');
    if action == first feature after launching {
	  KM.set({ :Entry Event => replace_with_your_feature_name }) ; }
    else {  do nothing  }

The idea here is that you can designate which feature of your app is the "first feature" or "entry event" for users when they launch your app. Later, you can go into your reports and sort users by their first entry event or most recent entry event.

In addition, you can use KISSmetrics server-side API's to track performance of automated systems such as how many times errors and bugs are being reported/logged.

## 2. iOS Library

An official library is available [from this repository][ios-official].

There is also an unofficial library available at [coffeeshopped.com][ios-unofficial]. We do not test or provide support for it. Please use at your own discretion.

An unofficial Android library is available at our [3rd party APIs page][other].

## 3. PhoneGap and JavaScript Library

There are frameworks like [PhoneGap][phonegap] that let you write mobile apps using HTML and JavaScript. We've found our JavaScript Library can work with this, with some modifications:

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

      // Include "http:" when initializing the external JS files, else it will look for a local JS file://i.kissmetrics.com/i.js
      _kms('http://i.kissmetrics.com/i.js');
      _kms('http://doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
    </script>

[ios-official]: https://github.com/kissmetrics/KISSmetrics-iOS-Mac-OS-X-Library
[ios-unofficial]: http://coffeeshopped.com/kissmetrics-for-ios
[other]: /apis/other#android

[phonegap]: http://phonegap.com/
[js]: /apis/javascript