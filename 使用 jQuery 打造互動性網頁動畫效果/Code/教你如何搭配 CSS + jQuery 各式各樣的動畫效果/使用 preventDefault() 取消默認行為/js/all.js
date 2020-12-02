$(document).ready(function() {
  $('.close').click(function(event) {
    // 取消預設會產生的事件，也就是預設的行為
    // 以連結為例，預設是會直接切換到該網址
    event.preventDefault();
    $(".box").slideUp();
  })
})