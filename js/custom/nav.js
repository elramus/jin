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