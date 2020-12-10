document.getElementById('countId').onclick = function() {
  var hamNum = document.getElementById('hamNumId').value;
  var cokeNum = document.getElementById('cokeNumId').value;

  var hamPrice = 30;
  var cokePrice = 20;
  
  var total = parseInt(hamNum)*30 + parseInt(cokeNum)*20;
  document.getElementById('totalId').textContent = total;
}
