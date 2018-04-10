jQuery(function ($) {

  const vid = {
    'curtain':$(this).find('.curtain')[0],
    'iframe':$(this).find('iframe')[0],

    'click':function() {
      $(vid.curtain).fadeOut();
      $('.video .play').fadeOut();
      vid.iframe.setAttribute('src',vid.iframe.dataset.src);
    }
  }
  $('.video').on('click',vid.click);

}); /* end jQuery */