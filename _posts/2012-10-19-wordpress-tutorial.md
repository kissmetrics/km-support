---
layout: post
title: Installing KM in WordPress
categories: [tutorial, installation]
tags: [installation]
author: Lars Lofgren
summary: Learn how to install the JavaScript Library for your WordPress site.
---

Our WordPress plugin helps make it much easier to install our JavaScript Library for your WordPress site. Please refer to that page for instructions:

[External Integrations / Wordpress][wp]

## Identifying Users in WordPress

If you are implementing WordPress without the plugin, this PHP snippet could help get the username of the current user.

{% highlight js+php %}
_kmq.push(['identify', '<?php $current_user = wp_get_current_user(); if ( ($current_user instanceof WP_User) ) echo $current_user->user_login; ?>']);
{% endhighlight %}

References:

* [http://codex.wordpress.org/Function_Reference/wp_get_current_user][get-cur-user]
* [http://codex.wordpress.org/Class_Reference/WP_User][wp-user]

[wp]: /integrations/wordpress
[get-cur-user]: http://codex.wordpress.org/Function_Reference/wp_get_current_user
[wp-user]: http://codex.wordpress.org/Class_Reference/WP_User