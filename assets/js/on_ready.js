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

  /* KM Tracking for Embedded Wistia Videos
  * id     - The Wistia video ID
  * width  - The player width
  * height - The player height
  * name   - The name of the video. This can be anything and
  *          will be used in the event name logged in KM.
  */
  function loadKMTrackableVideo (id, name) {
    try {
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
    catch(e) {
      // Fail quietly if Wistia can't find a div for the video to load in
    }
  }
  loadKMTrackableVideo("9d92cc05c5", "Getting Started Webinar");
  loadKMTrackableVideo("eb204fab1a", "How to Build Reports");
  loadKMTrackableVideo("i64qus5i5c", "How to Use Analytics to Move Your Business Faster");
  loadKMTrackableVideo("ftl871nnps", "What We Mean By 'Events'");
  loadKMTrackableVideo("c024843e11", "Introduction to KISSmetrics");
  loadKMTrackableVideo("256139b3f9", "Installing KM on Individual HTML Files");
  loadKMTrackableVideo("455948e2be", "Introduction to Events");
  loadKMTrackableVideo("53aa1d1fd5", "Events Library Introduction");
  loadKMTrackableVideo("bc913098c2", "Events: Clicks On");
  loadKMTrackableVideo("1b184d5c16", "Events: Submits a Form");
  loadKMTrackableVideo("700b63755a", "Events: Visits the URL");
  loadKMTrackableVideo("1083756b5d", "Events and Properties");
  loadKMTrackableVideo("gik1m2517k", "CallRail Integration");
  loadKMTrackableVideo("4bf05cd105", "Introduction to Metrics");
  loadKMTrackableVideo("nbbk71q98e", "Wistia Integration");
  loadKMTrackableVideo("b683f1acd1", "Blank Slate: Reports");
  loadKMTrackableVideo("d091892948", "Blank Slate: Metrics");
  loadKMTrackableVideo("3f023d87a8", "Blank Slate: Revenue Report");
  loadKMTrackableVideo("7lmaiffmf4", "Translating a Business Question Into a Power Report");
  loadKMTrackableVideo("a3pfna7kb4", "How ‘Every Value’ Affects a Power Report");
  loadKMTrackableVideo("36h8v5kqfw", "How 'Relative To' Affects a Power Report");
});
