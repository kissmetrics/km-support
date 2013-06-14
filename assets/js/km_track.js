function km_track(event_name, props)
{
  if (!props)
    props = {};
        
  if ( event_name )
    props["_n"] = event_name;
  var queryString = "";
  
  var params = [];
  
  // Logged-in visitor
  if(KM.gc("ni"))
    params.push("km_email=" + KM.gc("ni"));
  
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