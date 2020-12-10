var content = document.querySelector(".inputMission");
var btnClick = document.querySelector(".btnClick");
var list = document.querySelector(".list");

var data = JSON.parse(localStorage.getItem('mission')) || [];

// 加入列表 並同時更新網頁與 localstorage
function addMission(e) {
  data.push(content.value)
  updateList(data);
  localStorage.setItem('mission', JSON.stringify(data));
}

// 更新網頁內容
function updateList(items) {
  let str = '';
  const arrLen = items.length;
  for(var i=0;i<arrLen;i++) {
    str += `<li><a href="#" class="delBtn" data-num="${i}">刪除</a><span>${items[i]}</span></li>`
  };
  list.innerHTML = str;
}

// 刪除代辦事項
function del(e) {
  e.preventDefault();
  if(e.target.nodeName !== 'A') {
    return
  }
  const num = e.target.dataset.num;
  data.splice(num, 1);
  localStorage.setItem('mission', JSON.stringify(data));
  updateList(data);
}

btnClick.addEventListener('click', addMission);
list.addEventListener('click', del)