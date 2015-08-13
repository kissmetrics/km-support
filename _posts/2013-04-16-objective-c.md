---
layout: post
title: Objective-C (iOS) Library
categories: apis
summary: Information about our basic Objective-C/Cocoa library, for iOS and OS X apps.
---
* Table of Contents
{:toc}
* * *

Bring Kissmetrics to your iOS and OS X apps with our Objective-C library. It allows you to record events and set properties.

## Setup

You can download a copy of the API from:

[https://github.com/kissmetrics/KISSmetrics-iOS-Mac-OS-X-Library][api]

* Add `KISSMetricsAPI.h` and `.m` files to your project. Be sure to check the "Copy items into destination group's folder (if needed)" checkbox. If your application uses Automatic Reference Counting, select your application target, click the Build Phases tab, then the Compile Sources dropdown. Double click `KISSMetricsAPI.m` and apply the the following Compiler Flag: `-fno-objc-arc`

* Open your app's `AppDelegate.m` file and import the `KISSMetricsAPI.h` file just below any existing imports. You'll need to import this file into any class where you'll be tracking events or properties. Alternatively, you may choose to import the `KISSMetrics.h` file in your application's `Prefix.pch` file located in the "Supporting Files" group. This will make our API available in all classes of your project.

{% highlight obj-c %}
#import "KISSMetricsAPI.h"
{% endhighlight %}

* Still in the `AppDelegate.m` file, find the `didFinishLaunching` or `didFinishLaunchingWithOptions` method and add the following code as the first line in that method. Be sure to apply your API key.

{% highlight obj-c %}
[KISSMetricsAPI sharedAPIWithKey:@"xxxxxxxxxxxxxxxxxxxxxxxxxxxx"];
{% endhighlight %}

## Identifying Users

To get the best results you should identify your known users once they have logged in or signed up. Pass an `NSString` to the identify method.

*Note: This is just an example---make sure you replace `@"name@email.com"` with code that gets the identity of your user.*

{% highlight obj-c %}
[[KISSMetricsAPI sharedAPI] identify:@"name@email.com"];
{% endhighlight %}

## Recording Events

### Event

Recording an event with Kissmetrics is done like this:

{% highlight obj-c %}
[[KISSMetricsAPI sharedAPI] recordEvent:@"My Event" withProperties:nil];
{% endhighlight %}

#### Event with Properties

You can also pass in custom properties with your event. Event properties must be defined in an `NSDictionary` or `NSMutableDictionary`. The keys must all be a non-nil, non-empty `NSString`. The values must all be a non-nil, non-empty `NSString` or `NSNumber`.

{% highlight obj-c %}
NSDictionary *myEventProperties = [[NSDictionary alloc]
  initWithObjectsAndKeys:@"Value", @"My Property", nil];

[[KISSMetricsAPI sharedAPI] recordEvent:@"My Event With Properties"
  withProperties:myEventProperties];

// Remove if Automatic Reference Counting is used.
[myEventProperties release];
{% endhighlight %}

## Events Are Tracked Offline

When you implement tracking with this library, we will send events to our tracking servers as your customers do those events. However, if they take their mobile devices offline, our tracking library still preserves a log of their events, to be sent out the next time they connect to the internet.

This data will be backdated to reflect what the customer did at the time they did it, not the time the data was uploaded to us.

[api]: https://github.com/kissmetrics/Kissmetrics-iOS-Mac-OS-X-Library
