var forward = document.querySelector(".forward");
var back = document.querySelector(".back");

if(forward) {
  forward.addEventListener('click', function(e){
    e.preventDefault();
    window.history.forward();
  });;
}else{
  back.addEventListener('click', function(e){
    e.preventDefault();
    window.history.back();
  });
}
