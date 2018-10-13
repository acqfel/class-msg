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

})(jQuery); // end of jQuery name space
