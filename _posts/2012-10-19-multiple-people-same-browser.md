---
layout: post
title: Multiple People on the Same Browser
categories: advanced
author: John Butler
summary: What happens if multiple people use the same computer? How to reset the KISSmetrics identity tracking when a user logs out.
---
What happens if two people use the same computer and you call `identify` multiple times? KISSmetrics will recognize the different identities as separate people. However, it should be noted that any activity before you call `identify` for the second user will be attributed to the first user. Let's see how this works:

1. Bob comes to your site and is assigned the anonymous identity `qFq2LweZugFNE4o49hLhmRPBW34`
2. Bob then logs in and you call `identify` telling us that the identity is now `bob@site.com`. The activity from before Bob logs in (when we knew him as `qFq2LweZugFNE4o49hLhmRPBW34`) is automatically tied to `bob@site.com`.
3. All activity continues to be attributed to `bob@site.com`, even after Bob logs out.
4. Now Bob's brother Bill comes in to use the computer and visits your site. All activity will continue to be attributed to `bob@site.com`. KISSmetrics has no way to know that it is a different person sitting at the keyboard automatically.
5. Bill logs in and you call `identify` telling us that the identity is now `bill@site.com`. KISSmetrics **does not** alias `bill@site.com` and `bob@site.com` - it treats these as two separate people.
6. All activity from this point on is attributed to `bill@site.com` (until you call `identify` again)

As you can see the system works pretty well automatically under most circumstances. However, what if we wanted to prevent some of Bill's anonymous activity (pre-login) activity from being attributed to Bob? 

# clearIdentity

All you need to do is clear the identity when Bob logs out (or his session expires). If you call `identify` with a `null` value then KISSmetrics will reset the identity on the current computer so that the next user is treated anonymously:

{% highlight js %}
_kmq.push(['identify', null]);
{% endhighlight %}
  
You can also call `clearIdentity` directly if you want:

{% highlight js %}
_kmq.push(['clearIdentity']);
{% endhighlight %}

However, in most cases the best thing to do is to set the identity you want from a session variable. This way you don't have to worry about people who didn't actually click a "log out" button. So if I were using Ruby I might have a session variable `username` which I set to the user's username when they login and then do something like:

{% highlight js %}
_kmq.push(['identify', <%= session[:username].to_json %> ]);
{% endhighlight %}

Once the session ends (through logout or expiration) then the value of `session[:username]` will be `null` so the *named identity* will be cleared out. It should be noted that calling `identity` with a `null` value or calling `clearIdentity` only clears the *named identity*. Calling either method more than once will have no negative effect. It will not keep regenerating *anonymous identities*, it only clears any *named identity* you happen to have passed in. Many people assign the currently logged in user to a variable in their views. Let's say I assigned the current user to the variable `@current_user`, then my code might look like:

{% highlight js+ruby %}
_kmq.push(['identify', <%= @current_user ? @current_user.login.to_json : "null" %> ]);
{% endhighlight %}

Just using this single line will make everything work automatically. When the `@current_user` variable is set, we'll get the identity. When the user logs out or their session expires then the `@current_user` variable will not exist and the KISSmetrics *named identity* will be cleared. So let's see how this works now:

1. Bob comes to your site and is assigned the anonymous identity `qFq2LweZugFNE4o49hLhmRPBW34`
2. Bob then logs in and you call `identify` telling us that the identity is now `bob@site.com`. The activity from before Bob logs in (when we knew him as `qFq2LweZugFNE4o49hLhmRPBW34`) is automatically tied to `bob@site.com`.
3. All activity continues to be attributed to `bob@site.com`. Bob logs out and you call `clearIdentity` (or if you are using the session method you end up calling `identify` with `null`).
4. Now Bob's brother Bill comes in to use the computer and visits your site. However, since identity was cleared a new anonymous identity is generated: `7asdafn3128anansdfa32`. All activity will be attributed to `7asdafn3128anansdfa32`. 
5. Bill logs in and you call `identify` telling us that the identity is now `bill@site.com`. KISSmetrics aliases `bill@site.com` and `7asdafn3128anansdfa32` automatically - tying together Bill's activity from before he logged in to after he logged in.
6. All activity from this point on is attributed to `bill@site.com` (until you call `identify` again)

So this does require a little more work and integration on your end, but it will result in slightly more accurate tracking. This is only an issue if more than once person shares the computer and you are tracking both anonymous activity and logged-in activity. For most sites this level of integration is not needed.