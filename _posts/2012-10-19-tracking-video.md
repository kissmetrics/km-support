---
layout: post
title: Tracking Videos
categories: how-tos
author: Eric Fung
summary: Use our JavaScript Library to record views of videos embedded on your site.
---
Below are examples of using the [YouTube](tracking-video#youtube), [Vimeo](tracking-video#vimeo), and [Wistia](tracking-video#wistia) JavaScript Librarys in conjunction with KISSmetrics to record certain video events:

* Played Video
* Paused Video
* Finished Video

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

If you expand the "Embed Type" box, you can expand the Advanced Options and switch to using the Wistia API rather than the iFrame method. Use this to check your video's ID.

![Wistia Embed][wistia-embed]

    <!--
	Create an empty div where the video will live.
	Note the video ID is added at the end to prevent conflicts
	and allow multiple videos being tracked.
	-->
	<div id="wistia_3f023d87a8"></div>

	<!-- Include the Wistia JS API -->
	<script charset="ISO-8859-1" src="http://fast.wistia.com/static/E-v1.js">
	</script>

	<script>

	/** 
	 * Helper function for loading KM trackable videos.
	 * 
	 * id     - The Wistia video ID
	 * width  - The player width
	 * height - The player height
	 * name   - The name of the video. This can be anything and
	    will be appended to the event logged in KM.
	 */

	function loadKMTrackableVideo (id, width, height, name) {
		wistiaEmbed = Wistia.embed(id, {
		  videoWidth: width,
		  videoHeight: height,
		  controlsVisibleOnLoad: true
		});

		// Begin binding KISSmetrics tracking
		wistiaEmbed.bind("play", function() {
			_kmq.push(['record', 'Played video - ' + name]);
		});

		wistiaEmbed.bind("pause", function() {
			_kmq.push(['record', 'Paused video - ' + name]);
		});

		wistiaEmbed.bind("end", function() {
			_kmq.push(['record', 'Finished video - ' + name]);
		});

	}

	loadKMTrackableVideo("3f023d87a8", 640, 400, "My Wistia Video");
	</script>
	
[wistia-embed]: attachments/how-tos/tracking-video/wistia-embed.png