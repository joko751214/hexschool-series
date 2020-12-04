$(document).ready(function() {
  $(".menu-item-link").click(function(event) {
    event.preventDefault();
    $(this).siblings().slideToggle();
    $(this).parent().siblings().find('.menu-list').slideUp()
  })
  $(".top a").click(function(event) {
    event.preventDefault();
    $("html,body").animate({
      scrollTop: 500
    }, 1000);
  })
  // lightbox 效果設定
  lightbox.option({
        'resizeDuration': 2000,
        'wrapAround': true
      });
});

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 1500,
  loop: true,
  effect: 'cube',
  autoplay: {
    delay: 1000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})