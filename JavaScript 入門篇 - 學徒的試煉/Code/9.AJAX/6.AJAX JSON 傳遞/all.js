var submit = document.querySelector("#submit");
var email = document.querySelector("#email");
var password = document.querySelector("#password");

submit.addEventListener("click", function(e){
  e.preventDefault();
  var account = {
    email: email.value,
    password: password.value
  };
  var xhr = new XMLHttpRequest();
  
  xhr.open("POST",'https://hexschool-tutorial.herokuapp.com/api/signup', true);
  xhr.setRequestHeader("Content-type", 'application/json');
  var data = JSON.stringify(account);
  xhr.send(data);
})

