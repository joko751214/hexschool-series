var el = document.querySelector('.box');
el.addEventListener('click', function(e) {
  // 終止冒泡事件
  e.stopPropagation();
  alert('box');
  console.log('box');
}, false);

var elBody = document.querySelector('.body');
elBody.addEventListener('click', function() {
  alert('你沒有點到box')
  console.log('你沒有點到box');
}, false);