$(document).ready(function() {
  $('#feedbackModal button[type=submit]').click(function(e) {
    e.preventDefault();
    $("#feedbackForm").submit();
  });

  $("#feedbackForm").submit(function(e) {
    e.preventDefault();
    // Validate form fields?

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
        alert("BOOSH");
      },
      dataType: "json"
    });

    // Replace modal body with success message
  });
});