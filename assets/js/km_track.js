function km_track(event_name, props, current_account)
{
  if (!props)
    props = {};
        
  if ( event_name )
    props["_n"] = event_name;
  var queryString = "";
  
  var params = [];
  
  // Current account
  if(current_account)
    params.push("current_account=" + current_account);
  
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