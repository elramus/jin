"use strict";

jQuery(function ($) {
  document.querySelector('.page.contact') ? contactForm() : false;

  function contactForm() {
    // add auto resizing to textarea
    autosize(document.querySelector('textarea')); // form validation
    // document.querySelector()/
  }
});
/* end jQuery */
"use strict";

jQuery(function ($) {
  var nav = {
    'siteHeader': document.querySelector('.site-header'),
    'control': document.querySelector('.site-header .nav-control'),
    'items': document.querySelectorAll('.site-header .site-nav li'),
    'shader': document.querySelector('.menu-shader'),
    'isActive': false,
    'activate': function activate() {
      $(nav.control).addClass('is-x');
      $(nav.siteHeader).addClass('is-active');
      $('body').css('overflow-y', 'hidden');
      TweenMax.staggerTo(nav.items, .35, {
        'opacity': 1,
        'transform': 'translateY(0)'
      }, .12);
      $(nav.shader).css('z-index', 999);
      TweenMax.to(nav.shader, .2, {
        'opacity': 1
      });
      nav.isActive = true;
    },
    'deactivate': function deactivate() {
      $(nav.control).removeClass('is-x');
      $(nav.siteHeader).removeClass('is-active');
      $('body').css('overflow-y', 'auto');
      TweenMax.to(nav.items, .2, {
        'opacity': 0,
        'transform': 'translateY(1em)'
      });
      TweenMax.to(nav.shader, .2, {
        'opacity': 0,
        onComplete: function onComplete() {
          $(nav.shader).css('z-index', -1);
        }
      });
      nav.isActive = false;
    },
    'init': function init() {
      $(nav.items).each(function () {
        $(this).append('<i class="fas fa-arrow-right"></i>');
      });
    } // fire the init

  };
  nav.init(); // event listeners

  $(nav.control).on('click', function () {
    nav.isActive ? nav.deactivate() : nav.activate();
  });
  $(document).on('keydown', function (e) {
    nav.isActive ? nav.deactivate() : false;
  });
});
/* end jQuery */
"use strict";

jQuery(function ($) {
  var port = function port() {
    var cont = document.querySelector('.portfolio-container');
    var items = document.querySelectorAll('.portfolio-container li');
    var itemTitles = document.querySelectorAll('.portfolio-container li h2');
    var contWidth, itemWidthReg, itemWidthWide;

    function init() {
      if ($(window).outerWidth() > 767) {
        setBarWidth();
        setBarHeight();
        $(items).hover(function () {
          $(this).css('flex', "1 1 ".concat(itemWidthWide, "px"));
        }, function () {
          $(this).css('flex', "1 1 ".concat(itemWidthReg, "px"));
        });
        $(itemTitles).css('width', "".concat(itemWidthWide - 150, "px"));
      } else {
        $(items).off();
        $(items).css('height', '300px');
        $(items).css('flex', '1 0 100%');
      }
    }

    function setBarWidth() {
      contWidth = parseFloat(window.getComputedStyle(cont).width);
      contWidth = contWidth - 9 * items.length; //  leave room for margin-right of 9px on each

      itemWidthWide = contWidth / (items.length * .25);
      itemWidthReg = contWidth / items.length;
      items.forEach(function (item) {
        $(item).css('flex', "1 1 ".concat(itemWidthReg, "px"));
      });
    }

    function setBarHeight() {
      var windowHeight = $(window).height();
      var headerHeight = $(".site-header").outerHeight();
      var mainCombinedMargins = parseFloat($('main').css('margin-top')) * 2;
      var newHeight = windowHeight - headerHeight - mainCombinedMargins - 50; // tweak as you like for extra bottom padding

      items.forEach(function (item) {
        $(item).css('height', newHeight);
      });
    } // Let's go!


    init();
    TweenMax.staggerTo(items, 2, {
      opacity: '1'
    }, .08); // Event listeners

    $(window).on('resize', init);
  };

  document.querySelector('body').classList.contains('work') ? port() : false;
  $('.gallery .gallery-item a').attr('data-fancybox', 'gallery');
}); // end jQuery
"use strict";

jQuery(function ($) {
  $('.gallery .gallery-item a').attr('data-fancybox', 'gallery');
  TweenMax.to($('.play'), 1.5, {
    'transform': 'translateY(0)',
    'opacity': 1
  });
}); // end jQuery
"use strict";

jQuery(function ($) {
  var vid = {
    'curtain': $(this).find('.curtain')[0],
    'iframe': $(this).find('iframe')[0],
    'video': $(this),
    'click': function click() {
      $(vid.curtain).fadeOut();
      $('.video .play').fadeOut();
      $('.video').css('background', '#000');
      vid.iframe.setAttribute('src', vid.iframe.dataset.src);
    }
  };
  $('.video').on('click', vid.click);
});
/* end jQuery */