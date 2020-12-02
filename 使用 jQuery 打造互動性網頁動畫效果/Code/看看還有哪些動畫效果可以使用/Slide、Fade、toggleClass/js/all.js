// jquery起手式
// 所有的jquery內容都必須放在ready的function裡面
$(document).ready(function() {
  $('.button').click(function() {
    // $(".text").slideToggle(2000);
    // $(".text").fadeToggle(2000);

    // 動態偵測class名稱
    $(".text").toggleClass('active');
    // $(".text").addClass('active');
    // $(".text").removeClass('active');
  })
})