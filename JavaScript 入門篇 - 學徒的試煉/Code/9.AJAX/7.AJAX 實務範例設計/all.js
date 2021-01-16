var send = document.querySelector("#send");

send.addEventListener("click", signup, false);

function signup() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var account = {};
  account.email = email;
  account.password = password;

  var xhr = new XMLHttpRequest();
  xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  var data = JSON.stringify(account);
  xhr.send(data);

  xhr.onload = function() {
    var callbackData = JSON.parse(xhr.responseText);
    console.log(xhr)
    alert(callbackData.message);
  }
  // alert()
}