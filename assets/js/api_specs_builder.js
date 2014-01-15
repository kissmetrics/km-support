$(function(){
  // Set the Timestamp placeholder
  var epoch=Math.round(new Date().getTime()/1000.0);
  $("#event-timestamp").attr("placeholder", epoch);

  $('#api-method').change(function(e){
    // Hide irrelevant fields when switching API methods
    var new_method = this.value;
    switch (new_method) {
      case "record":
        $('.alias-fields').hide();
        $('.set-fields').hide();
        $('.event-fields').show();
        break;
      case "set":
        $('.alias-fields').hide();
        $('.event-fields').hide();
        $('.set-fields').show();
        break;
      case "alias":
        $('.event-fields').hide();
        $('.set-fields').hide();
        $('.alias-fields').show();
        break;
    }
  });

  $('#add-another-property').click(function(e){
    e.preventDefault();
    propClone = $('.prop-fieldset:first').clone();
    propClone.find('input').val('');
    propClone.find('.note').remove();
    $(this).parent().before(propClone);
  });

  $('.url-builder-form input[type="submit"]').click(function(e){
    e.preventDefault();

    var url_parts = [];
    var valid = true;

    // Get the base URL
    var final_url = "http://trk.kissmetrics.com/";

    // Get the API key
    var api_key = $('#api-key').val();
    if( api_key == '') {
      valid = false;
      $('#api-key-field').find('.error-message').show();
    } else {
      $('#api-key-field').find('.error-message').hide();
      url_parts.push('_k=' + encodeURIComponent(api_key));
    }

    // Get the Identity
    var identity = $('#event-identity').val();
    if( identity == '') {
      valid = false;
      $('#identity-field').find('.error-message').show();
    } else {
      $('#identity-field').find('.error-message').hide();
      identity = identity.replace(/\s+/g, '+');
      url_parts.push('_p=' + encodeURIComponent(identity));
    }

    // Based on the Method, see what other fields to include
    var api_method = $('#api-method').val();

    switch (api_method) {
      case "record":
        final_url += "e";

        // Get the Event Name
        var event_name = $('#event-name').val();
        if( event_name == '') {
          valid = false;
          $('#event-field').find('.error-message').show();
        } else {
          $('#event-field').find('.error-message').hide();
          url_parts.push('_n=' + encodeURIComponent(event_name));
        }

        // Get all the additional properties
        $('.prop-fieldset').each(function(){
          var name = $(this).find('input:eq(0)').val();
          var value = $(this).find('input:eq(1)').val();
          var error = $(this).find('.error-message').hide();
          if(name != "" && value != "") {
            url_parts.push(encodeURIComponent(name) + '=' + encodeURIComponent(value));
          } else if ((name != "" && value == "") || (name == "" && value != "")) {
            valid = false;
            error.show();
          }
        });

        // Get the Timestamp
        var timestamp = $('#event-timestamp').val();
        if( timestamp != '') {
          if (isFinite(timestamp) && timestamp < 100000000000) { // check for milliseconds
            $('#timestamp-field').find('.error-message').hide();
            url_parts.push('_t=' + encodeURIComponent(timestamp) + '_d=1');
          }
          else
            valid = false;
            $('#timestamp-field').find('.error-message').show();
        }
        break;
      case "set":
        final_url += "s";

        // Get all the additional properties
        $('.prop-fieldset').each(function(){
          var name = $(this).find('input:eq(0)').val();
          var value = $(this).find('input:eq(1)').val();
          var error = $(this).find('.error-message').hide();
          if(name != "" && value != "") {
            url_parts.push(encodeURIComponent(name) + '=' + encodeURIComponent(value));
          } else if ((name != "" && value == "") || (name == "" && value != "")) {
            valid = false;
            error.show();
          }
        });

        // Get the Timestamp
        var timestamp = $('#event-timestamp').val();
        if( timestamp != '') {
          if (isFinite(timestamp) && timestamp < 100000000000) { // check for milliseconds
            $('#timestamp-field').find('.error-message').hide();
            url_parts.push('_t=' + encodeURIComponent(timestamp) + '_d=1');
          }
          else
            valid = false;
            $('#timestamp-field').find('.error-message').show();
        }
        break;
      case "alias":
        final_url += "a";

        // Get the Alias
        var alias = $('#alias-identity').val();
        if( alias == '') {
          valid = false;
          $('#alias-field').find('.error-message').show();
        } else {
          $('#alias-field').find('.error-message').hide();
          url_parts.push('_n=' + encodeURIComponent(alias));
        }
        break;
    }

    // Build the final URL
    final_url += '?' + url_parts.join('&');

    // Insert the final URL onto the page
    // First check to see if it already exists
    if($('#final-url').length) {
      // It does, so remove it so it can be re-created
      $('#final-url').remove();
    } else {
      // It does not, so do nothing
    }

    // Create the element
    if(valid) {
      $('.url-builder-form').after($('<div id="final-url" class="yft"></div>').append($('<input type="text" readonly="readonly" />').val(final_url)));
      // Scroll to the URL
      scrollTo('#final-url');
    } else {
      // Don't show it, and scroll up to the error messages
      scrollTo('.url-builder-form')
    }

    function scrollTo(element_id) {
      $('html, body').animate({scrollTop: $(element_id).offset().top - 40}, 1000); // Scroll to it
      $(element_id + ' input[type="text"]').focus().select(); // Focus it
    }
  });
});