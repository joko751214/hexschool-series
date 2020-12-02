// jquery起手式
// 所有的jquery內容都必須放在ready的function裡面
$(document).ready(function() {
  $('.start').click(function() {
    // jQuery 鏈式寫法，想要的效果都可以直接接在後面
    $('.box').slideUp(3000).slideDown(1000);
  })
})