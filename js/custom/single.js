jQuery(function ($) {

  $('.gallery .gallery-item a').attr('data-fancybox', 'gallery');

  TweenMax.to($('.play'), 1.5, { 'transform':'translateY(0)','opacity':1});

}); // end jQuery