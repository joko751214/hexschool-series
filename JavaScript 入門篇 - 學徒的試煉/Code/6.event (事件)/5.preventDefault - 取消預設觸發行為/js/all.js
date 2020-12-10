var el = document.querySelector('.link');
el.addEventListener('click', function(e) {
  // 取消元素的默認行為
  // 例如: 點選a連結會跳轉到指定網頁
  e.preventDefault();

  // submit按鈕的預設行為是送出表單
  // 取消的用意，先透過我的 js 去查詢表單有無錯誤，最後再用post去傳送
},);
