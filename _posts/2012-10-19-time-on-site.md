---
layout: post
title: Does KISSmetrics Track Bounce Rate, Average Time on Site, or Exits?
categories: how-tos
summary: KISSmetrics is not best suited for metrics like bounce rate or average time on site.
---
* Table of Contents
{:toc}
* * *

KISSmetrics does not automatically calculate every single metric you would find in Google Analytics. The common ones that you may notice absent:

* Bounce Rate
* Bounces
* Exits
* Time on Page
* Time on Site/Session Length
* Demographic (language, country, IP address, age, etc.)

These tend to fall into the category we casually refer to as "Vanity Metrics". Vanity metrics refer to data that can be useful, but ultimately should not be the primary focus when you are making decisions to improve your business.

(Granted, there are worthwhile uses for some of these metrics. Avinash Kaushik has several posts that help place them in the right context. Check out [Eight Silly Data Myths Marketing People Believe That Get Them Fired][kaushik].)

Because of this, these metrics are not available, to help you focus on what's important. These blog posts from the [KISSmetrics blog][vanity-km] and [TechCrunch][vanity-tc] explore the concept of vanity metrics in more detail.

## Bounce Rate and Exits

The equivalent: with a funnel report, see how many people go from your entry pages to converting--doing the next step you want them to do.

Though this funnel doesn't tell you specifically about bounce rate, you'll be able to see the people who enter your site and don't end up doing anything useful, for different reasons. Some of these might be:

- They leave too quickly
- They discover they are not actually interested
- They are not engaged by your landing page
- And numerous other possible reasons…

## Average Session Length and Time on Page

The equivalents: a metric to show the average time between doing two events, or a cohort report to show the time *and* frequency between doing two events.

Time on site alone only provides a vague picture of what's going on - what if someone visits and leaves the tab open in the background? Perhaps a more actionable measurement is to see how long it took people to do another action on your site, a metric like *Visited Site -> Signed Up*.

## Demographic Information

KISSmetrics does not have anything in place to automatically capture some types of demographic information from your users. That can include your visitors' language, country, IP address, gender, and age.

However, if you are capturing that information yourself (for example, through Facebook's API or from within your signup form), you can pass that information along to us as properties of that user.

{% highlight js%}
// Example API call that passes demographic info, assuming you know these.
_kmq.push(['set', {'language':'english',
                   'country':'us',
                   'gender':'male',
                   'age':21}]);
{% endhighlight %}

[vanity-km]: http://blog.kissmetrics.com/vainest-metrics/
[vanity-tc]: http://techcrunch.com/2011/07/30/vanity-metrics/
[kaushik]: http://www.kaushik.net/avinash/silly-marketing-data-strategy-metrics-mistakes/