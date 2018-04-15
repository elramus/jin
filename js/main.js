jQuery(function ($) {

  document.querySelector('.page.contact') ? contactForm() : false;

  function contactForm() {

    // add auto resizing to textarea
    autosize(document.querySelector('textarea'));

    // form validation
    // document.querySelector()/

  }



}); /* end jQuery */
jQuery(function ($) {

  const nav = {
    'siteHeader':document.querySelector('.site-header'),
    'control':document.querySelector('.site-header .nav-control'),
    'items':document.querySelectorAll('.site-header .site-nav li'),
    'shader':document.querySelector('.menu-shader'),
    'isActive':false,
    'activate':function() {
      $(nav.control).addClass('is-x');
      $(nav.siteHeader).addClass('is-active');
      $('body').css('overflow-y','hidden');
      TweenMax.staggerTo(nav.items,.35,{'opacity':1,'transform':'translateY(0)'},.12);
      $(nav.shader).css('z-index',999);
      TweenMax.to(nav.shader,.2,{'opacity':1});
      nav.isActive = true;
    },
    'deactivate':function() {
      $(nav.control).removeClass('is-x');
      $(nav.siteHeader).removeClass('is-active');
      $('body').css('overflow-y','auto');
      TweenMax.to(nav.items, .2, { 'opacity': 0, 'transform': 'translateY(1em)' });
      TweenMax.to(nav.shader, .2, { 'opacity': 0, onComplete:function() {
        $(nav.shader).css('z-index',-1);
      }});
      nav.isActive = false;
    },
    'init':function() {
      $(nav.items).each(function() {
        $(this).append('<i class="fas fa-arrow-right"></i>');
      });
    }
  }

  // fire the init
  nav.init();

  // event listeners
  $(nav.control).on('click',function() {
    nav.isActive ? nav.deactivate() : nav.activate();
  });
  $(document).on('keydown',function(e) {
    nav.isActive ? nav.deactivate() : false;
  })

}); /* end jQuery */
jQuery(function ($) {

  const port = function() {
    const cont = document.querySelector('.portfolio-container');
    const items = document.querySelectorAll('.portfolio-container li');
    let contWidth, itemWidthReg, itemWidthWide;

    function init() {
      if ($(window).outerWidth() > 767) {
        setBarWidth();
        setBarHeight();
        $(items).hover(
          function () {
            $(this).css('flex', `1 1 ${itemWidthWide}px`);
          }, function () {
            $(this).css('flex', `1 1 ${itemWidthReg}px`);
          }
        );
      } else {
        $(items).off();
        $(items).css('height','300px');
        $(items).css('flex','1 0 100%');
      }
    }

    function setBarWidth() {
      contWidth = parseFloat(window.getComputedStyle(cont).width)
      contWidth = contWidth - (9 * items.length); //  leave room for margin-right of 9px on each
      itemWidthWide = contWidth / (items.length * .25);
      itemWidthReg = contWidth / items.length;
      items.forEach(function (item) {
        $(item).css('flex',`1 1 ${itemWidthReg}px`);
      });
    }

    function setBarHeight() {
      const windowHeight = $(window).height();
      const headerHeight = $(".site-header").outerHeight();
      const mainCombinedMargins = parseFloat($('main').css('margin-top')) * 2;
      const newHeight = windowHeight - headerHeight - mainCombinedMargins - 50; // tweak as you like for extra bottom padding
      items.forEach(function (item) {
        $(item).css('height',newHeight);
      });
    }

    // Let's go!
    init();
    TweenMax.staggerTo(items, 2, { opacity: '1' }, .08);

    // Event listeners
    $(window).on('resize',init);

  }
  document.querySelector('body').classList.contains('work') ? port() : false;

  $('.gallery .gallery-item a').attr('data-fancybox','gallery');

}); // end jQuery
jQuery(function ($) {

  $('.gallery .gallery-item a').attr('data-fancybox', 'gallery');

  TweenMax.to($('.play'), .35, { 'transform':'translateY(0)','opacity':1});

}); // end jQuery
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