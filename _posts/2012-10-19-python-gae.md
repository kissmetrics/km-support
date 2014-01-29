---
layout: post
title: Using the Python Library with Google App Engine
categories: [apis, python]
summary: Note about using the Python Library with Google App Engine.
---
* Table of Contents
{:toc}
* * *

Jeff from Optimizely [pointed out][python-issue1] that `km.py` uses the socket package, whereas Google App Engine locks down arbitrary socket connections. Instead, you can make a connection over port 80 via urlfetch. Here are the changes you need to make:

1. Remove the `import socket` line from the top and replace it with `from google.appengine.api import urlfetch`
2. After `host,port = cls._host.split(':')`, replace the socket logic with the following:

dsf

{% highlight python %}
# Assuming port is 80, which it is:
if int(port) == 80:
  url = 'http://' + host + '/' + type + '?' + '&'.join(query)
  urlfetch.fetch(url)
else:
  raise Exception("Can only connect over port 80.")
{% endhighlight %}

Hope this helps - email jeff+pickhardt@optimizely.com with any questions.

[python-issue1]: https://github.com/kissmetrics/KISSmetrics/issues/1