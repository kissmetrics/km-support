---
layout: post
title: Ruby on Rails
categories: [apis, ruby]
author: Eric Fung
summary: Here are two different methods of setting up KISSmetrics in your Ruby on Rails application.
---
## I. Using the `Analytical` Gem

If you are installing KISSmetrics in your Rails app, the JavaScript Library may actually be more appropriate for your frontend tracking. Consider using the `Analytical` RubyGem to help ease integration of multiple analytics products into your Rails app.

* RubyGem link: [http://rubygems.org/gems/analytical][analytical]
* GitHub link: [https://github.com/jkrall/analytical][git-analytical]

## II. Another Rails Integration

This is an example on how to integrate KISSmetrics into a Ruby on Rails application using the basic Ruby Library.

1. Begin by placing the Ruby Library script in your `lib/` directoy.
2. In the controller you wish to use, create a `before_filter`
3. Identify the user you want to track
4. Record your events and properties

That's it!  Let's look at each individual step in more detail.

### Step 1 - Install the library

Simply place the `km.rb` file you downloaded in to your `lib/` directory. Copying the script in your `lib/` directory allows Rails to source the KISSmetrics code. There is no need to `require` anything.

### Step 2 - Create the before_filter

Initialize KISSmetrics before making any requests by calling `KM.init`.  You can include this in a Rails initializer, or create a `before_filter`:

{% highlight ruby %}
before_filter :km_init

def km_init
  KM.init(
    '__YOUR_API_KEY__', 
    :log_dir => File.join(RAILS_ROOT, 'log', 'km')
  )
end
{% endhighlight %}

### Step 3 - Identify the user you want to track

There are two types of users to track here. You can track identified users, or unidentified users. The Ruby Library, unlike the JavaScript Library does not automatically provide a way to track anonymous/unidentified users. However, we often would like to track anonymous users, and then later after they have logged in, or better yet, signed up, continue keeping track of them. The following is an example how you can, through cookies, and `KM.alias` continue keeping track of such users.

{% highlight ruby %}
before_filter :km_init

def generate_identifier
  now = Time.now.to_i  
  Digest::MD5.hexdigest(
    (request.referrer || '') + 
    rand(now).to_s + 
    now.to_s + 
    (request.user_agent || '')
  )
end

def km_init
  KM.init(
    '__YOUR_API_KEY__',
    :log_dir => File.join(RAILS_ROOT, 'log', 'km')
  )
  if not identity = cookies[:km_identity]
    identity = generate_identifier
    cookies[:km_identity] = {
      :value => identity, :expires => 5.years.from_now
    }
  end

  # This example assumes you have a current_user, with a
  # property "email". Use whatever makes sense for your
  # app.
  
  if current_user
    if not cookies[:km_aliased]
      KM.alias(identity, current_user.email)
      cookies[:km_aliased] = {
        :value => true,
        :expires => 5.years.from_now
      }
    end
    identity = current_user.email
  end
  KM.identify(identity)
end
{% endhighlight %}

### Step 4 - Record your events and properties

You can refer back to the [Ruby Library][ruby] for example API calls.

[analytical]: http://rubygems.org/gems/analytical
[git-analytical]: https://github.com/jkrall/analytical
[ruby]: /apis/ruby