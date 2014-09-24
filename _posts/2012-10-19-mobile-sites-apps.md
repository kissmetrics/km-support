---
layout: post
title: Tracking Mobile/iPhone/Android Apps
categories: how-tos
summary: Using KISSmetrics to track mobile sites and apps.
---
* Table of Contents
{:toc}
* * *

KISSmetrics can track your mobile website using our typical [JavaScript Library][js]. For a native iOS or Android application, you'lll need to do some more work.

## 1. Implement events using the library in the app's native language

* iOS/Objective-C: an [official library is available][ios-official].
* Android: an [official library is available][android].

## 2. PhoneGap and JavaScript Library

There are frameworks like [PhoneGap][phonegap] that let you write mobile apps using HTML and JavaScript. Some of our customers have found success with using our [JavaScript Library][js], with some modifications.

{% highlight html %}
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

// These are the two different lines from our provided JavaScript snippet.
// Include "http:" when initializing the external JS files, else it will look for a local JS file://i.kissmetrics.com/i.js
_kms('http://i.kissmetrics.com/i.js');
_kms('http://doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
</script>
{% endhighlight %}

The KISSmetrics team has not personally tested how effective it is to use our JavaScript library in this way.

## 3. Use Ruby/PHP/Python Library on backend

Your mobile app may communicate with your backend servers when key events occur. When the above options do not work, you can record the server-side event using one of our available [Ruby/PHP/Python libraries][apis].

#### Example:

Data is sent when someone initializes the app. KISSmetrics can capture and record key events as they come in such as:

* Launched App
* Used Core Feature 1
* Used Core Feature 2
* Changed Settings

Use KISSmetrics' APIs (Ruby/PHP/Python) to record these events seamlessly as they come in so that you can visualize the data you're already getting. You're cataloguing and organizing data with KISSmetrics by putting event triggers as data flows in from your customers.

#### When a user launches the app, you can include an event trigger on your backend (Ruby Example):

{% highlight ruby %}
KM.identify(grab_user_identification_data_from_db);
KM.record('Launched App', {'Version' => grab_app_version});
{% endhighlight %}

Once you have a script for `grab_app_version` and `grab_user_identification_data_from_db` it will then look like this for every user launching your app:

{% highlight ruby %}
KM.identify('user@gmail.com');
KM.record('Launched App', {'Version' => 2.3});
{% endhighlight %}

#### So now when a user does something on your app, you can now record key events for every feature available as it comes into your backend:

{% highlight ruby %}
KM.record('Used Core Feature 1');
KM.record('Changed Settings');
{% endhighlight %}

#### In addition, you can always set custom properties to users at any time without recording an event. Let's say you want to know what the first thing a user does after they launch your app.

So you've identified them and recorded that they launched the app:

{% highlight ruby %}
KM.identify(grab_user_identification_data_from_db);
KM.record('Launched App', {'Version' => grab_app_version});
{% endhighlight %}

Now you want to find out what they do next.

Write a script to trigger a KISSmetrics API command on the FIRST action after launching the app. It could look like this (please excuse the pseudo-code):

{% highlight ruby %}
KM.record('Used Core Feature 1');
if action == first feature after launching {
    KM.set({ :Entry Event => replace_with_your_feature_name }) ; }
end
{% endhighlight %}

The idea here is that you can designate which feature of your app is the "first feature" or "entry event" for users when they launch your app. Later, you can go into your reports and sort users by their first entry event or most recent entry event.

In addition, you can use KISSmetrics server-side API's to track performance of automated systems such as how many times errors and bugs are being reported/logged.

[ios-official]: /apis/ios-v2
[android]: /apis/android
[phonegap]: http://phonegap.com/
[js]: /apis/javascript
[apis]: /apis
