---
layout: post
title: How to Track Push Notifications
categories: how-tos
author: Will Rust & Navid Behroozi
summary: Different methods for tracking push notifications with your iOS application.
---
**1. Tracking users who have enabled push notifications and accept alerts**

Within your application delegate's application: `didFinishLaunchingWithOptions:`
Below the initialization of the KISSmetricsAPI…

{% highlight obj-c %}
    // Check push notification alerts enabled/disabled
    UIRemoteNotificationType enabledTypes = [[UIApplication sharedApplication] enabledRemoteNotificationTypes];
    if (enabledTypes & UIRemoteNotificationTypeAlert) {
        [[KISSMetricsAPI sharedAPI] setProperties:@{@"Accepts push alerts" : 1}];
    } else {
        [[KISSMetricsAPI sharedAPI] setProperties:@{@"Accepts push alerts" : 0}];
    }
{% endhighlight %}    

**2. Tracking notifications**

iOS apps will receive notifications differently depending on the state of the application
    

A. When your app is running: 

In your application delegate's application: `(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo`
    
Capture any valuable data from the userInfo remote notification dictionary:

**EX:  Capturing the alert message**

 {% highlight obj-c %}    
    NSDictionary *aps = [userInfo objectForKey:@"aps"];
 
   if (aps) {
    NSString *alertMsg;
        
    id alert = [aps objectForKey:@"alert"];
    if ([alert isKindOfClass:[NSDictionary class]]) {
            // alert Dictionary
            alertMsg = [alert objectForKey:@"body"];
    } else {
            // alert String
            alertMsg = alert;
    }
        [[KISSMetricsAPI sharedAPI] recordEvent:@"Received Remote Notification" withProperties:@{@"alertMsg" : alertMsg}];
    }
{% endhighlight %}
and/or capture any additional data that you've supplied in the push notification's JSON payload.



B.  When your app is not running:
    
In your application delegate's application: `(UIApplcation *)application: didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`
    
Capture any valuable data from the userInfo remote notification dictionary:

**EX:  Capturing the alert message**
{% highlight obj-c %}      
    NSDictionary *userInfo = [launchOptions objectForKey:UIApplicationLaunchOptionsRemoteNotificationKey];
    
    if (userInfo) {
        NSDictionary *aps = [userInfo objectForKey:@"aps"];
        
    if (aps) {
        NSString *alertMsg;
            
        id alert = [aps objectForKey:@"alert"];
        if ([alert isKindOfClass:[NSDictionary class]]) {
                // alert Dictionary
                alertMsg = [alert objectForKey:@"body"];
        } else {
                // alert String
                alertMsg = alert;
        }
        [[KISSMetricsAPI sharedAPI] recordEvent:@"Received Remote Notification" withProperties:@{@"alertMsg" : alertMsg}];
    }
    }
{% endhighlight %}
and/or capture any additional data that you've supplied in the push notification's JSON payload.



**Or**, in iOS7, if your app delegate is using application: didReceiveRemoteNotification: fetchCompletionHandler: 
You'll want to capture your notification data there. 



**Notes:** 

* "If the app is not running when a push notification arrives, the method launches the app and provides the appropriate information in the launch options dictionary. The app does not call this method to handle that push notification. Instead, your implementation of the `application:willFinishLaunchingWithOptions:` or `application:didFinishLaunchingWithOptions:` method needs to get the push notification payload data and respond appropriately."


* "If your delegate also implements the `application:didReceiveRemoteNotification:fetchCompletionHandler:` method, the app object calls that method instead of this one."
[Link for more](https://developer.apple.com/library/ios/documentation/uikit/reference/UIApplicationDelegate_Protocol/Reference/Reference.html#//apple_ref/occ/intfm/UIApplicationDelegate/application:didReceiveRemoteNotification:)