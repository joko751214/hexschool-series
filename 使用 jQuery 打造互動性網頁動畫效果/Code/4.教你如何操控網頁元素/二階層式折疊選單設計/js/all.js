$(document).ready(function() {
  $('.cart > li > a').click(function(event) {
    event.preventDefault();
    // this以外的都隱藏起來
    $(this).parent().siblings().find('ul').slideUp();

    // 我自己的ul 做摺疊效果
    $(this).parent().find('ul').slideToggle();
  });
});