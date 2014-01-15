$(document).ready(function() {
  var item = $('<form id="feedback_form"><h3>How can we make this page better for you?</h3><textarea id="feedback_text" name="feedback_text">Your suggestions, ideas, complaints will greatly help us.</textarea><input id="ni_cookie" name="identity" style="visibility:hidden"></input><p style="display: block; visibility: visible; zoom: 1; opacity: 1;"><a href="#" class="small primary button blue">Send Feedback</a></p></form>')
  $("#feedback").append(item);
});