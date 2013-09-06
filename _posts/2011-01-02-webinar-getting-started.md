---
layout: post
title: Webinar - Getting Started
categories: tutorial
author: Charles Liu
summary: This is a recorded webinar that walks you through the initial setup, creating events to track, and then creating reports to view data from those events.
---
<div id="wistia_9d92cc05c5" class="wistia-embed" data-video-width="640" data-video-height="400">&nbsp;</div>
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

loadKMTrackableVideo("9d92cc05c5", 640, 400, "Getting Started Webinar");
</script>

## Webinar Guide

* One Time 10-Minute Setup **(2:00)**
* Tracking Events **(8:42)**
* Tracking Properties/Segments **(17:06)**
* Verifying Event Triggers and "How long does it take to get data?" **(22:31)**
* Building Reports **(25:33)**
* People Search and Customer Lifecycle Analysis **(31:06)**
* When Is Data Actionable? **(41:19)**