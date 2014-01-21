$(document).ready(function() {
  $('#modalSend').click(function(e) {
    e.preventDefault();
    $("#feedbackForm").submit();
  });

  $("#feedbackForm").submit(function(e) {
    e.preventDefault();

    $.ajax({
      type: "post",
      url: "https://middleman.kissmetrics.com/helpscout.create_conversation",
      data: {
        url: document.location.href,
        message: $("#feedbackText").val(),
        email: $("#feedbackEmail").val(),
        identity: (function(){try{KM.gc('ni');}catch(e){return "unidentified";}})()
      },
      success: function() {
        // Hide irrelevant components
        $('#feedbackForm').hide();
        $('#modalSend').hide();
        $('.modal-header').hide();

        // Show success message
        $('#modalSuccess').show();

        // Automatically dismiss modal after 2 seconds of inactivity
      },
      complete: function() {
        // REMOVE WHEN DONE DEBUGGING
        $('#feedbackForm').hide();
        $('#modalSend').hide();
        $('.modal-header').hide();

        $('#modalSuccess').show();
      },
      dataType: "json"
    });
  });
});