var screenX = document.querySelector('.screenX');        
var screenY = document.querySelector('.screenY');        
var pageX = document.querySelector('.pageX');        
var pageY = document.querySelector('.pageY');        
var clientX = document.querySelector('.clientX');        
var clientY = document.querySelector('.clientY');        

function getPosition(e) {        
  
  // 依據使用者的螢幕解析度去自動計算寬度跟高度
  screenX.textContent = e.screenX;                    
  screenY.textContent = e.screenY; 
  
  // 網頁實際的寬度跟高度
  pageX.textContent = e.pageX;                   
  pageY.textContent = e.pageY;       
  
  // 用戶使用的瀏覽器窗口寬度跟高度
  clientX.textContent = e.clientX;                   
  clientY.textContent = e.clientY;                  
}

var el = document.body;      
el.addEventListener('mousemove', getPosition, false); 