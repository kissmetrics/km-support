$(document).ready(function() {
  var item = $('<form id="feedback_form"><h3>How can we make this page better for you?</h3><textarea id="feedback_text" name="feedback_text">Your suggestions, ideas, complaints will greatly help us.</textarea><input id="email" name="email"></input><p style="display: block; visibility: visible; zoom: 1; opacity: 1;"><a id="submit_feedback" href="#" class="small primary button blue">Send Feedback</a></p></form>')
  $("#feedback").append(item);

  var getID = function() {
    try{KM.gc('ni');}catch(e){return "unidentified";}
  }

  $("#submit_feedback").click(function(e) {
    e.preventDefault();
    $("#feedback_form").submit();
  });

  $("#feedback_form").submit(function(e) {
    e.preventDefault();

    $.ajax({
      type: "post",
      url: "https://middleman.kissmetrics.com/helpscout.create_conversation",
      data: {
        url: document.location.href,
        message: $("#feedback_text").val(),
        identity: getID()
      },
      success: function() {
        alert("BOOSH");
      },
      dataType: "json"
    });
  });
});