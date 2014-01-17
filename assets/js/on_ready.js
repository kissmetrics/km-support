$(document).ready(function() {
  // Bootstrap menu icons
  $('.collapse').on('show.bs.collapse', function(){
    $(this).parent().find(".glyphicon-chevron-right").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
  }).on('hide.bs.collapse', function(){
    $(this).parent().find(".glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
  });

  // Expand sidebar to the category of the article you're seeing.
  var path = window.location.pathname;
  $('.side a[href="'+path+'"]').css("font-weight", "bold");
  $('.side a[href="'+path+'"]').parents('.collapse').collapse('show');

  // Optimizely
  // https://www.optimizely.com/docs/api
  var exps = window['optimizely'].data.state.activeExperiments;
  if (exps.length > 0) {
    var optimizely_params = {};
    for (var i=0;i<exps.length;i++) {
      var exp = exps[i];
      var exp_name = "Optimizely " + window['optimizely'].data.experiments[exp].name
      var var_name = window['optimizely'].data.state.variationNamesMap[exp]

      optimizely_params[exp_name] = var_name
    }
    km_track('Viewed Optimizely Experiment', optimizely_params);
  }

  // Scan URL for UTM Parameters and Record Account-level Ad Hits
  var utmParams;
  (window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    utmParams = {};
    while (match = search.exec(query)) {
      var key = decode(match[1]);
      var val = decode(match[2]);
      if (key == "utm_source") utmParams["Campaign Source"] = val;
      if (key == "utm_medium") utmParams["Campaign Medium"] = val;
      if (key == "utm_campaign") utmParams["Campaign Name"] = val;
      if (key == "utm_term") utmParams["Campaign Terms"] = val;
      if (key == "utm_content") utmParams["Campaign Content"] = val;
    }
  })();
  if (Object.keys(utmParams).length > 0) {
    km_track('Ad Campaign Hit', utmParams);
  }
});

/* KM Tracking for Embedded Wistia Videos
 * id     - The Wistia video ID
 * width  - The player width
 * height - The player height
 * name   - The name of the video. This can be anything and
 *          will be used in the event name logged in KM.
 */
function loadKMTrackableVideo (id, name) {
  wistiaEmbed = Wistia.embed(id);

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