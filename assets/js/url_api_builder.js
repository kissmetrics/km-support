$(function(){

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
    var base_url = $('#base-url').val();

    // Get the event
    var event = $('#event-name').val();
    if(event) {
      //event = event.replace(/\s+/g, '+');
      url_parts.push('kme=' + encodeURIComponent(event));
    }

    // Get the identity
    var identity = $('#event-identity').val();
    if(identity) {
      identity = identity.replace(/\s+/g, '+');
      url_parts.push('kmi=' + encodeURIComponent(identity));
    }

    // Get all the additional properties
    $('.prop-fieldset').each(function(){
      var name = $(this).find('input:eq(0)').val();
      var value = $(this).find('input:eq(1)').val();
      var error = $(this).find('.error-message').hide();
      if(name != "" && value != "") {
        url_parts.push('km_' + encodeURIComponent(name) + '=' + encodeURIComponent(value));
      } else if ((name != "" && value == "") || (name == "" && value != "")) {
        valid = false;
        error.show();
      }
    });

    // Check to make sure they've entered a URL
    if($('#base-url').val() == '') {
      // It's empty
      valid = false;
      $('#base-url').parent().find('.error-message').show();
    } else if ($('#base-url').val() != '')  {
      // It's not empty, so there is no error
      // Hide the message if it was showing
      $('#base-url').parent().find('.error-message').hide();
    }

    // Build the final URL
    var final_url = base_url;

    if(url_parts.length > 0) {
      var existing_query_url = base_url.match(/^.*\?/);

      if(existing_query_url) { // if base url has query parameters already...
        var existing_parameters = base_url.match(/\?.*$/);

        final_url = existing_query_url[0] + url_parts.join('&') + existing_parameters[0].replace("?", "&");
      } else{  // if no existing query parameters...
        final_url += '?' + url_parts.join('&');
      }
    }



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