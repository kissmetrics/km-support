$('#search_form').submit(function(e){
  e.preventDefault();
  window.location = '/search/' + $('#search_terms').val().replace(/\s+/,"+");
});

$('#search_button').click(function(){
  $('#search_form').submit();
});

$('#search_form label').click(function(){
  $(this).hide();
  $(this).parent().find('input').focus();
});

$('#search_form input').focus(function(){
  $(this).parent().find('label').hide();
});

$('#search_form input').blur(function(){
  if($(this).val() == '') {
    $(this).parent().find('label').show();
  }
  
});

$(document).ready(function() {
  if($('#search_form input').val() != '') {
    $('#search_form input').parent().find('label').hide();
  }
});
