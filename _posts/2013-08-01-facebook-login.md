---
layout: post
title: Measuring Facebook Logins and Signups
categories: how-tos
tags: []
summary: Tap into Facebook's JS API to differentiate Logins and Signups via Facebook Connect.
---
* Table of Contents
{:toc}
* * *

Letting your users sign up and login with their Facebook accounts is extremely convenient. On the other hand, tracking these signups and logins accurately will require combining the [Facebook JavaScript SDK][fb-js-sdk] with Kissmetrics API calls.

## Check Login Status

As Facebook recommends in their [Login Flow For Web guide][login-flow], you can check two important things about the visitor:

* Whether someone is currently logged into Facebook
* Whether someone has previously logged into your app

There are two ways to do this:

1. Subscribe to the `auth.authResponseChange` event
2. Call the `FB.getLoginStatus` function

Either way, you can parse the `response` for the `status` of the visitor:

* `connected`. The person is logged into Facebook, and has logged into your app.
* `not_authorized`. The person is logged into Facebook, but has not logged into your app.
* `unknown`. The person is not logged into Facebook, so you don't know if they've logged into your app.

## `Status` Corresponds to Kissmetrics Events

These three statuses correspond to what call to Kissmetrics you should make:

* `connected`: [automatically log in][auto-login] and record the ***Logged In*** event upon success.
* `not_authorized`: prompt the visitor to login with `FB.login()` and record the ***Signed Up*** event upon success.
* `unknown`: prompt the visitor to login with `FB.login()` and assume a sign up (though they might have signed out of your app, and want to sign in again).

## Code Example

When asking for information from the user via Facebook login, you get their email and basic profile information by default. If you want anymore information you need to have your app reviewed.

[Public profile reference](https://developers.facebook.com/docs/facebook-login/permissions#reference-public_profile)

Code example modified from [Facebook](https://developers.facebook.com/docs/facebook-login/web):

```html
<!DOCTYPE html>
<html>
<head>
<title>Facebook Login JavaScript Example</title>
<meta charset="UTF-8">
</head>
<body>
<script>
  //This is called when FB knows who a user is
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      fblogin();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
    } else {
      // The person is not logged into Facebook
    }
  }
  
  //Boilerplate...
  var buttonClicked = false;
  function checkLoginState() {
    buttonClicked = true;
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '{your-app-id}',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.5'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  //Grab the data we need, and identify the user
  function fblogin() {
    FB.api('/me', {fields: 'id,name,email,gender,locale,age_range,picture'}, function(response) {
      //Track login
      if(buttonClicked){
        _kmq.push(['record', 'Signed In' ,{type : 'facebook'}]);
      }else{
        _kmq.push(['record', 'Logged In' ,{type : 'facebook'}]);
      }
      
      //Identify user by email
      //NB: a user might have signed in with a mobile no, or declined to give you their email
      //You might want to use their FB UUID instead
      _kmq.push(['identify', response.email]);
      //_kmq.push(['identify', response.id]);
      
      //Save properties to user
      _kmq.push(['set', {'name' : response.name}]);
      _kmq.push(['set', {'gender' : response.gender}]);
    });
  }
</script>
<fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>
</body>
</html>
```

This code tracks a user logging in / signing up with Facebook, and then identifies them and sets properties to them.

[fb-js-sdk]: https://developers.facebook.com/docs/reference/javascript/
[login-flow]: https://developers.facebook.com/docs/facebook-login/login-flow-for-web/
[auto-login]: https://developers.facebook.com/docs/facebook-login/using-auto-login/
