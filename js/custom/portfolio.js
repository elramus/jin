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