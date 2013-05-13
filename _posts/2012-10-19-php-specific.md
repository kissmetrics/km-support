---
layout: post
title: PHP Example with Cookies
categories: [apis, php]
author: Eric Fung
summary: Here is an example of using the PHP Library to set cookies to remember logged-in users.
---
Below is an example where we're using the PHP Library to set cookies and identifiers to keep track of logged in and anonymous users. The `KM::alias` function then ties the anonymous user to the logged in user once they log in.

{% highlight php %}
<?php
require 'km.php';
function generate_identifier()
{
  return md5(
    $_SERVER['HTTP_REFERER'] . 
    rand(0, date('U')) . 
    date('U') . 
    $_SERVER['HTTP_USER_AGENT']);
}

function km_init()
{
  KM::init(
    '__YOUR_API_KEY__',
    array('log_dir' => '__YOUR_PREFERRED_LOG_DIR__')
  );
  if (! $identity == $_SESSION['km_identity'])
    $identity = $_SESSION['km_identity'] = generate_identifier();

  // This example assumes you have a $current_user, with a
  // property "email". Use whatever makes sense for your
  // app.
  if ($current_user)
  {
    if (! $_SESSION['km_aliased'])
    {
      KM::alias($identity, $current_user->email);
      $_SESSION['km_aliased'] = true;
    }
    $identity = $current_user->email;
  }
  KM::identify($identity);
}
?>
{% endhighlight %}