
var xhr = new XMLHttpRequest();

xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true)

xhr.send(null);

// onload是xhr其中的一個事件，此事件就是當確定資料回傳之後，就會執行後面的function
xhr.onload = function() {
  console.log(xhr.responseText);
  var str = JSON.parse(xhr.responseText)
  document.querySelector(".message").textContent = str[0].name;
};

// 1. 建立個一個 XMLHttpRequest
// 2. 傳送到對方伺服器要資料
// 3. 回傳資料到自己的瀏覽器
// 4. 拿到資料後再看要怎麼處理