
var xhr = new XMLHttpRequest();

xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true)

xhr.send(null);

xhr.onload = function() {
  if(xhr.status == 200) {
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText)
    document.querySelector(".message").textContent = str[0].name;
  }else{
    console.log("資料錯誤!");
  }
};
