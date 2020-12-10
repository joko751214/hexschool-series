function count(){
    var hamPrice = 50;
    var cokePrice = 20;
    if(ham.value == '' || coke.value == '') {
      return
    }
    var hamNum = parseInt(ham.value)*hamPrice;
    var cokeNum = parseInt(coke.value)*cokePrice;
    document.getElementById('totalId').textContent = hamNum + cokeNum
}
function checkContent(e){
    var str =  e.target.value;
    if(str==''){
        alert('此欄位不可為空')
    }
}
var el = document.getElementById('countId');
el.addEventListener('click',count,false);

// focus - 所在焦點(當滑鼠點擊到的時候會產生聚焦事件)
// blur - 離開焦點(當滑鼠點擊到的時候會產生離焦事件)

var ham = document.getElementById('hamNumId');
ham.addEventListener('blur',checkContent,false);
var coke = document.getElementById('cokeNumId');
coke.addEventListener('blur',checkContent,false);
