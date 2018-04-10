jQuery(function ($) {

  const nav = {
    'siteHeader':document.querySelector('.site-header'),
    'navControl':document.querySelector('.site-header .nav-control'),
    'navItems':document.querySelectorAll('.site-header .site-nav li'),
    'shader':document.querySelector('.menu-shader'),
    'isActive':false,
    'activate':function() {
      $(nav.navControl).addClass('is-x');
      $(nav.siteHeader).addClass('is-active');
      $('body').css('overflow-y','hidden');
      TweenMax.staggerTo(nav.navItems,.35,{'opacity':1,'transform':'translateY(0)'},.12);
      $(nav.shader).css('z-index',999);
      TweenMax.to(nav.shader,.2,{'opacity':1});
      nav.isActive = true;
    },
    'deactivate':function() {
      $(nav.navControl).removeClass('is-x');
      $(nav.siteHeader).removeClass('is-active');
      $('body').css('overflow-y','auto');
      TweenMax.to(nav.navItems, .2, { 'opacity': 0, 'transform': 'translateY(1em)' });
      TweenMax.to(nav.shader, .2, { 'opacity': 0, onComplete:function() {
        $(nav.shader).css('z-index',-1);
      }});
      nav.isActive = false;
    }
  }

  // event listeners
  $(nav.navControl).on('click',function() {
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

    function setSize() {
      setBarWidth();
      setBarHeight();
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
    setSize();
    TweenMax.staggerTo(items, 2, { opacity: '1' }, .08);

    // Event listeners
    $(window).on('resize',setSize);
    $(items).hover(
      function() {
        $(this).css('flex',`1 1 ${itemWidthWide}px`);
        // TweenMax.to($(items).not(this),.25,{'opacity':'.85'});
      }, function() {
        $(this).css('flex',`1 1 ${itemWidthReg}px`);
        // TweenMax.to(items,.15,{'opacity':'1'});
      }
    );

  }
  document.querySelector('body').classList.contains('work') ? port() : false;

  $('.gallery .gallery-item a').attr('data-fancybox','gallery');

}); // end jQuery
jQuery(function ($) {

  $('.gallery .gallery-item a').attr('data-fancybox', 'gallery');

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