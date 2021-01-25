$(function () {
  var owl = $('.owl-carousel'),

    owlOptions = {
      loop: false,
      items: 1,
      autoWidth: true,
      margin: 10,
    };

  if ($(window).outerWidth() < 576) {
    var owlActive = owl.owlCarousel(owlOptions);
  } else {
    owl.addClass('info-column__off-tabs');
  }

  if ($(window).outerWidth() < 576) {
    if ($('.owl-carousel').hasClass('info-column__off-tabs')) {
      var owlActive = owl.owlCarousel(owlOptions);
      owl.removeClass('info-column__off-tabs');
    }
  } else {
    if (!$('.owl-carousel').hasClass('info-column__off-tabs')) {
      owl.addClass('info-column__off-tabs').trigger('destroy.owl.carousel');
      owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
    }
  }

  if ($(window).outerWidth() < 576) {

    $('.info-column').removeClass('tab-content');

  }

  if ($(window).outerWidth() > 575) {

    $('.info-column').addClass('tab-content');

  }

  if ($(window).outerWidth() < 576) {

    $('.advertising').removeClass('container');

  }

  if ($(window).outerWidth() > 575) {

    $('.advertising').addClass('container');

  }

  if ($(window).outerWidth() < 576) {

    $('.branding').removeClass('container');

  }

  if ($(window).outerWidth() > 575) {

    $('.branding').addClass('container');

  }

  if ($(window).outerWidth() < 576) {

    $('.development').removeClass('container');

  }

  if ($(window).outerWidth() > 575) {

    $('.development').addClass('container');

  }

  if ($(window).outerWidth() < 576) {

    $('.management').removeClass('container');

  }

  if ($(window).outerWidth() > 575) {

    $('.management').addClass('container');

  }

//   if ($(window).outerWidth() < 480) {

//     $('.services__list').addClass('services__list_off');

//   }
//   if ($(window).outerWidth() > 479) {

//     $('.services__list').removeClass('services__list_off');

//   }

});
