(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

  }); // end of document ready

  $("#expand").click(function() {
    var icon = $("i");
    var str = icon.text();

    if ( str == 'menuexpand_more'){
      icon.text('expand_less');
    } else if( str == 'expand_lessexpand_less'){
      icon.text('expand_more');
    } else if(str == 'expand_moreexpand_more') {
      icon.text('expand_less');
    }
    
  });

  $("#textarea1").focusin(function() {
    $("#send-icon").addClass("focus-input");
  });

  $("#textarea1").focusout(function() {
    $("#send-icon").removeClass("focus-input");
  });

})(jQuery); // end of jQuery name space
