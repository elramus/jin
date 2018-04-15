jQuery(function ($) {

  $('.gallery .gallery-item a').attr('data-fancybox', 'gallery');

  TweenMax.to($('.play'), .35, { 'transform':'translateY(0)','opacity':1});

}); // end jQuery