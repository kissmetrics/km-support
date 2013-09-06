---
layout: post
title: Introduction to Events
categories: tutorial
author: Lars Lofgren
summary: An introduction to tracking Events.
---
<div id="wistia_455948e2be" class="wistia-embed" data-video-width="640" data-video-height="400">&nbsp;</div>
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

loadKMTrackableVideo("455948e2be", 640, 400, "Introduction to Events");
</script>


## When should I expect to see data?

Once you have created a custom event, you will be able to see these events **right away** using our [Live][live] feature.

Within **2-6 hours** from the moment an event is triggered, this data will be available in the rest of our reports - our funnels, cohort reports, people search, revenue report, and metrics. This is the estimated time spent in processing the customer records across all of our servers. If you don’t see any data beyond the time periods listed above, contact support so we can verify all is working properly.

[live]: /tools/live