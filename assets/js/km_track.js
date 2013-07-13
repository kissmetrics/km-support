km_track = function(event_name, props)
{
  if (!props)
    props = {};
        
  if ( event_name )
    props["_n"] = event_name;
  var queryString = "";
  
  var params = [];
  
  // Logged-in visitor
  if($.cookie('km_ni'))
    params.push("km_email=" + $.cookie('km_ni'));
  
  for(var key in props)
  {
    var value = props[key];
    if ( typeof value != "function" )
    {
      params.push(encodeURIComponent(key)+"="+encodeURIComponent(value));
    }
  }
  
  // Post to the backend
  // Works with both jquery and mootools
  if(typeof jQuery != 'undefined')
  {
    jQuery.ajax({
      type: 'post',
      url: 'https://www.kissmetrics.com/services/track',
      data: params.join('&')
    });
  }
  else
  {
    var request = new Request.HTML({
      url: 'https://www.kissmetrics.com/services/track',
      data: params.join("&")
    }).send();
  }      
}

// Scan URL for UTM Parameters
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