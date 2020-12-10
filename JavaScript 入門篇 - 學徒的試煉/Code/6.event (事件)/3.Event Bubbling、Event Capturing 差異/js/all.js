var el = document.querySelector('.box');
el.addEventListener('click', function() {
  console.log('box');
}, true);

var elBody = document.querySelector('.body');
elBody.addEventListener('click', function() {
  console.log('body');
}, true);
// addEventListener 第3個參數
// false - 從指定元素往外找
// true - 從最外層找到指定元素