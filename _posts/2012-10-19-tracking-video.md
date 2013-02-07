---
layout: post
title: Tracking Videos
categories: how-tos
author: Eric Fung
summary: Use our JavaScript Library to record views of videos embedded on your site.
---
Below are examples of using the [YouTube](#youtube), [Vimeo](#vimeo), and [Wistia](#wistia) JavaScript Libraries in conjunction with KISSmetrics to record certain video events.

# Events Recorded

* Played Video - {Name of the Video}
* Paused Video - {Name of the Video}
* Finished Video - {Name of the Video}

## YouTube

    <!--
    Create an empty div where the video will live.
    Note the video ID is added at the end to prevent conflicts
      and allow multiple videos being tracked.
    -->
    <div id="player_uU6U-8LP1DY"></div>
     
    <!-- Include the YouTube JS API -->
    <script type='text/javascript'
      src='http://www.youtube.com/player_api'></script>
    <script>
      var players = [];
       
      /** 
       * Helper function for loading KM trackable videos.
       * 
       * id     - The YouTube video ID
       * width  - The player width
       * height - The player height
       * name   - The name of the video. This can be anything and
           will be appended to the event logged in KM.
       */
      function loadKMTrackedVideo (id, width, height, name)
      {
        players[id] = new YT.Player('player_' + id, {
          videoId: id,
          width: width,
          height: height,
          events: { onStateChange: function (event)
          {
            switch(event.data)
            {
              case YT.PlayerState.PLAYING:
                return _kmq.push(
	              ['record', 'Played video - ' + name]);
              case YT.PlayerState.PAUSED:
                return _kmq.push(
	              ['record', 'Paused video - ' + name]);
              case YT.PlayerState.ENDED:
                return _kmq.push(
	              ['record', 'Finished video - ' + name]);
            }
          }}
        });
      }
       
      /**
       * When the Youtube API is ready start loading in our
         KM trackable videos
       */
      function onYouTubePlayerAPIReady ()
      {
        loadKMTrackedVideo('uU6U-8LP1DY', 560, 315, 'My YouTube Video');
      }
     
    </script>

## Vimeo

    <!--
    Include the Vimeo embed as normal appending ?api=1.
    Also set the player_id which is used below.
    -->
    <iframe id="player_1" src="http://player.vimeo.com/video/7100569?api=1&player_id=player_1"
       width="540" height="304" frameborder="0" webkitallowfullscreen></iframe>
     
    <!-- Load froogaloop, Vimeo's JS API -->
    <script src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
    <script>
     
    var _kmq = [];
     
    function setupKMTrackableVideo (id, name)
    {
      var player = $f(id);
      player.addEvent('ready', function(){
        player.addEvent('play', function(){
	      _kmq.push(['record', 'Played video - ' + name]); });
        player.addEvent('pause', function(){
	      _kmq.push(['record', 'Paused video - ' + name]); });
        player.addEvent('finish', function(){
	      _kmq.push(['record', 'Finished video - ' + name]); });
      });
    }
     
    setupKMTrackableVideo('player_1', 'My Vimeo Video');
     
    </script>

## Wistia

If you expand the "Embed Type" box, you can expand the Advanced Options and switch to using the Wistia API rather than the iFrame method. Copy/paste this into your page.

![Wistia Embed][wistia-embed]

For example:

    <div id="wistia_123456abc" class="wistia_embed" style="width:640px;height:400px;" data-video-width="640" data-video-height="400">&nbsp;</div>
    <script charset="ISO-8859-1" src="http://fast.wistia.com/static/concat/E-v1.js"></script>
    <script>
    wistiaEmbed = Wistia.embed("123456abc", {
      version: "v1",
      videoWidth: 640,
      videoHeight: 400,
      volumeControl: true,
      controlsVisibleOnLoad: true
    });
    </script>

Now below this, let's add our tracking calls.

    <script>
    function loadKMTrackableVideo (wistia_object, name) {
      // Add tracking to 'play', 'pause', and 'end' events.
      wistia_object.bind("play", function() {
        _kmq.push(['record', 'Played video - ' + name]);
      });
      wistia_object.bind("pause", function() {
        _kmq.push(['record', 'Paused video - ' + name]);
      });
      wistia_object.bind("end", function() {
        _kmq.push(['record', 'Finished video - ' + name]);
      });
    }

    loadKMTrackableVideo(wistiaEmbed, "Sample Wistia Video");
    </script>

**The last line `loadKMTrackableVideo(wistiaEmbed, "Sample Wistia Video");` is the piece you need to modify:**

* `wistiaEmbed` refers to the `wistiaEmbed` object. This does not have to change unless you are embedding several Wistia videos on the same page.
* "Sample Wistia Video" refers to the name of the video. This will be appended to the event that is logged in KM.

[wistia-embed]: https://s3.amazonaws.com/kissmetrics-support-files/assets/how-tos/tracking-video/wistia-embed.png
