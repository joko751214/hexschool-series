$(document).ready(function() {

 $('.top a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    // 往上滾
    scrollTop: 500
  }, 1000);
 });

});