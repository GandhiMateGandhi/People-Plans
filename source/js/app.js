$(function() {
    var owl = $('.owl-carousel'),

    owlOptions = {
        loop: false,
        items: 1,
        autoWidth: true,
        };

    if ( $(window).outerWidth() < 768 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).outerWidth() < 768 ) {
            if ( $('.owl-carousel').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.owl-carousel').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
    $(window).on('resize', function() {
 
      if($(window).outerWidth()<768){

          $('.info-column').removeClass('tab-content');

      }
      if($(window).outerWidth()>768) {

          $('.info-column').addClass('tab-content');

      }

  });
  $(window).resize();
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel(
//     {
//       dots: true,
//           items: 1,
//           autoWidth: true
//     }
//   );
// });