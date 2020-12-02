$(document).ready(function() {

  $('.font-b').click(function(event) {
    event.preventDefault();
    // $('.content p').css('font-size', '20px');
    $('.content p').toggleClass('active');
  });
  
});