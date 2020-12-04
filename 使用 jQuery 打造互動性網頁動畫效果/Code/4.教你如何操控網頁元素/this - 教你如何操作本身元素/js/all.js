$(document).ready(function(){
  // 這邊要注意選擇器的部分，因為是要點選li
  // 所以不要寫錯寫成 $(".menu")
  $(".menu li").click(function(event) {
    // 下面的方式會導致所有的li都會添加active樣式
    // $(".menu li").addClass('active');

    // 點選的li才會添加樣式
    $(this).addClass('active');
  })
});