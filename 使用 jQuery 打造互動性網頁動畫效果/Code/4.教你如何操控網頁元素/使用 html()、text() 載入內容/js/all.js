$(document).ready(function() {
  // .on方法可以監聽所有元素(h1)
  // 不論是動態載入的還是html標籤產生的，都會一併監聽
  $('.wrap').on('click', 'h1', function(event) {
    event.preventDefault();
    alert('有效!');
  })
  // 找出所有的 h1 標籤，綁定click事件
  // $('h1').click(function(event) {
  //   alert("有效!");
  // })
  // 如果要所有的h1都能夠產生效果的話，這一行要移到click上面
  $('.box1').html("<h1>用jQuery動態產生的</h1>")

});