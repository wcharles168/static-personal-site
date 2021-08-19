(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var previous_icon = $('#html');

  // Display language name when user hovers over dev-icon
  $('.list-inline-item').hover(function(){

    previous_icon.css('color', '');

    $('.icon-description').html('');
    $('.icon-description').html($(this).attr('value'));

  }, function(){
    // Keeps icon selected by color
    $(this).css('color', '#BD5D38');
    previous_icon = $(this);
  });

  // Automatically selects HTML5
  $('#html').css('color', '#BD5D38');
  $('.icon-description').html($('#html').attr('value'));

})(jQuery); // End of use strict

