var btn = document.querySelector(".btnClick");
var btnCall = document.querySelector(".btnCall");

function addName() {
  var name = document.querySelector(".inputName").value;
  localStorage.setItem('myname', name);

}

btn.addEventListener('click', addName);
btnCall.addEventListener('click', function() {
  const name = localStorage.getItem('myname');
  alert("你的名字叫做:" + name);
});