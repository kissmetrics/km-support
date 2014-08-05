---
layout: post
title: Tracking Videos
categories: how-tos
summary: Use our JavaScript Library to record views of videos embedded on your site.
---
* Table of Contents
{:toc}
* * *

Below are examples of using the [YouTube](#youtube), [Vimeo](#vimeo), and [Wistia](#wistia) JavaScript Libraries in conjunction with KISSmetrics to record certain video events.

# Events Recorded

* Played Video - {Name of the Video}
* Paused Video - {Name of the Video}
* Finished Video - {Name of the Video}

# Vimeo

## Vimeo's Embed Code

1. Add the [embed code][vimeo-embed] to add the Vimeo video in an iFrame. Add `api=1` as a query string to the URL of the iframe.
2. Load their JavaScript mini-library, called [Froogaloop][vimeo-froogaloop].

This is what your full embed code might look like:

{% highlight html %}
<!-- Load the video with the API enabled -->
<iframe id="player1" src="http://player.vimeo.com/video/7100569?player_id=player1&api=1" width="540" height="304" frameborder="0" webkitallowfullscreen></iframe>

<!-- Load Froogaloop, Vimeo's JS API -->
<script src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
{% endhighlight %}

## Add KM Tracking
Now below this, let's interact with their [JS][vimeo-js] to set up the events:

{% highlight html %}
<script type="text/javascript">
var iframe = $('#player1')[0],
    player = $f(iframe),

// TODO: The only piece of the code to modify is the video name.
var videoName = "Sample Video";

// Add listeners after the player is ready.
player.addEvent('ready', function() {
  player.addEvent('play', function(){
    _kmq.push(['record', 'Played Video - ' + videoName]); });
  player.addEvent('pause', function(){
    _kmq.push(['record', 'Paused Video - ' + videoName]); });
  player.addEvent('finish', function(){
    _kmq.push(['record', 'Finished Video - ' + videoName]); });
});
</script>
{% endhighlight %}

# Wistia

## Wistia's Embed Code
If you expand the "Embed Type" box, you can expand the Advanced Options and switch to using the Wistia API rather than the iFrame method. Copy/paste this into your page.

![Wistia Embed][wistia-embed]

## Add KM Tracking
Now below this, let's add our tracking calls.

{% highlight html %}
<script type="text/javascript">
function loadKMTrackableVideo (wistia_object, videoName) {
  // Add tracking to 'play', 'pause', and 'end' events.
  wistia_object.bind("play", function() {
    _kmq.push(['record', 'Played video - ' + videoName]);
  });
  wistia_object.bind("pause", function() {
    _kmq.push(['record', 'Paused video - ' + videoName]);
  });
  wistia_object.bind("end", function() {
    _kmq.push(['record', 'Finished video - ' + videoName]);
  });
}

// TODO: The only piece of the code to modify is the video name.
loadKMTrackableVideo(wistiaEmbed, "Sample Wistia Video");
</script>
{% endhighlight %}

**The last line `loadKMTrackableVideo(wistiaEmbed, "Sample Wistia Video");` is the piece you need to modify:**

* `wistiaEmbed` refers to the `wistiaEmbed` object. This does not have to change unless you are embedding several Wistia videos on the same page.
* "Sample Wistia Video" refers to the name of the video. This will be appended to the event that is logged in KM.

## Wistia Embed Shepherd

Wistia has also provided access to a JavaScript library they call the "[Embed Shepherd][wistia-embed-shepherd]". This helps simplify getting pointers to all embedded Wistia videos.

# YouTube

## YouTube's Embed Code
First, you'll need to embed your YouTube video using [their iFrame API][youtube-embed] (which has the best compatibility with mobile devices). The code looks like this (remember to change out the `videoId` with the video you want to embed:

{% highlight html %}
<!-- The <iframe> (and video player) will replace this <div> tag. -->
<div id="player"></div>

<script type="text/javascript">
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  // Add hooks for what you want to happen when the player has loaded
}
</script>
{% endhighlight %}

## Add KM Tracking
Once that's done, you can add this block below the embed code.

{% highlight html %}
<script type="text/javascript">
var _kmq = _kmq || [];
function onPlayerStateChange(event) {
  switch(event.data) {
    case YT.PlayerState.PLAYING:
      _kmq.push(['record', 'Played Video - ' + player.getVideoData().title]);
      break;
    case YT.PlayerState.PAUSED:
      _kmq.push(['record', 'Paused Video - ' + player.getVideoData().title]);
      break;
    case YT.PlayerState.ENDED:
      _kmq.push(['record', 'Finished Video - ' + player.getVideoData().title]);
      break;
    default:
      return;
  }
}
</script>
{% endhighlight %}

[vimeo-embed]: http://developer.vimeo.com/player/embedding
[vimeo-froogaloop]: https://github.com/vimeo/player-api/tree/master/javascript
[vimeo-js]: http://developer.vimeo.com/player/js-api

[wistia-embed]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/tracking-video/wistia-embed.png
[wistia-embed-shepherd]: http://wistia.com/doc/embed-shepherd
[youtube-embed]: https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player