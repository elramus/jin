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