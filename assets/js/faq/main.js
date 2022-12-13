(function($) {
  "use strict";
   
   
  // owlCarousel
  $(".parastate-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
 
 
})(jQuery);
