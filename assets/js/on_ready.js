$(document).ready(function() {
  // Bootstrap menu icons
  $('.collapse').on('show', function(){ 
    $(this).parent().find(".icon-chevron-right").removeClass("icon-chevron-right").addClass("icon-chevron-down");
  }).on('hide', function(){
    $(this).parent().find(".icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-right");
  });

  // Expand sidebar to the category of the article you're seeing.
  var path = window.location.pathname;
  $('.side a[href="'+path+'"]').css("font-weight", "bold");
  $('.side a[href="'+path+'"]').parents('.collapse').collapse('show');

  // Server-side tracking
  var tracking_params = {'Support Article Viewed URL':'{{page.url}}','Support Article Viewed Title':'{{page.title}}'};
  km_track('Viewed Support Article', $.extend({}, tracking_params, utmParams));

  // Optimizely
  // https://www.optimizely.com/docs/api
  var exps = window['optimizely'].data.state.activeExperiments;
  var optimizely_params = {};
  for (var i=0;i<exps.length;i++) {
    var exp = exps[i];
    var exp_name = "Optimizely - " + window['optimizely'].data.experiments[exp].name
    var var_name = window['optimizely'].data.state.variationNamesMap[exp]

    optimizely_params[exp_name] = var_name
  }
  km_track('Viewed Optimizely Experiment', optimizely_params)
});