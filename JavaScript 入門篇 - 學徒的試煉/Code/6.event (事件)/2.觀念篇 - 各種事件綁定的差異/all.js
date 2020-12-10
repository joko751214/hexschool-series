var el = document.querySelector(".btn");

el.onclick = function(event) {
  console.log(event);
};

el.addEventListener('click', function() {
    alert("hello");
});