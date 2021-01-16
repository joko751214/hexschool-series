var submit = document.querySelector("#submit");
var email = document.querySelector("#email");
var password = document.querySelector("#password");

submit.addEventListener("click", function(e){
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  var str = `email=${email.value}&password=${password.value}`;
  xhr.open("POST",'https://hexschool-tutorial.herokuapp.com/api/signup', true);
  xhr.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
  xhr.send(str);
})

