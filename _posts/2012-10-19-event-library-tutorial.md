---
layout: post
title: Event Library
categories: tutorial
author: Lars Lofgren
summary: The Event Library is used to register new events on your website without additional code changes.
permalink: /tutorial/event-library-tutorial/index.html
---
In KISSmetrics, there are two types of events. Those that can easily be set up from within KISSmetrics and those that need help from a developer or engineer. The [Event Library][event-library] is perfect for the easy ones that you can set up right now without constantly adding code to your site.

## Video Introduction

<div id="wistia_53aa1d1fd5" style="width:640px;height:400px;" data-video-width="640" data-video-height="400">&nbsp;</div>
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

loadKMTrackableVideo("53aa1d1fd5", 640, 400, "Events Library Introduction");
</script>
<br />

[event-library]: https://www.kissmetrics.com/wizard