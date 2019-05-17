(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
            scrollOffset:39
        });
    $('.carousel').carousel();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider();
    $('.materialboxed').materialbox();
    $(function(){
      var stickyHeaderTop = $('#stickytypeheader').offset().top;

      $(window).scroll(function(){
              if( $(window).scrollTop() > stickyHeaderTop ) {
                      $('#stickytypeheader').css({position: 'fixed', top: '0px', backgroundColor: "black", padding:"5px"});
                      $('.socialIcons').css({color: "white"})
                      $('#sticky').css('display', 'block');
              } else {
                      $('#stickytypeheader').css({position: 'static', top: '0px', backgroundColor: "white"});
                      $('.socialIcons').css({color: "black"})
                      $('#sticky').css('display', 'none');
              }
      });
  });
}); // end of document ready
})(jQuery); // end of jQuery name space

