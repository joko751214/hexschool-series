var result = document.querySelector(".result");
var list = document.querySelector(".list");
var icon = document.querySelector(".icon-loop");
var resultText = document.querySelector(".result-text");
const h2 = document.querySelector(".result h2");
const p = document.querySelector(".result p");
var data = JSON.parse(localStorage.getItem('data')) || [];

result.addEventListener('click', calc);
icon.addEventListener('click', reset);

function calc(e) {
  if(e.target.nodeName !== 'DIV') {
    return
  }else if(icon.style.display !== '') {return};
  var height = document.querySelector("#height").value;
  var weight = document.querySelector("#weight").value;
  if(height == '' || weight == '') {return}
  var bmi = parseFloat((parseInt(weight) / (parseInt(height) / 100)**2).toFixed(2));
  var info = {
    'height': height,
    'weight': weight,
    'bmi': bmi,
  };
  bmi < 18.5 ? (info.status = '過輕', info.color = '#31BAF9', info.class="result-thin") :
  bmi < 24 ? (info.status = '理想', info.color = '#86D73F', info.class="result-standard") :  
  bmi < 28  ? (info.status = '過重', info.color = '#FF982D', info.class="result-heavy") :
  bmi < 32 ? (info.status = '輕度肥胖', info.color = '#FF6C03', info.class="result-fat") :
  bmi < 35 ? (info.status = '中度肥胖', info.color = '#FF6C03', info.class="result-fat") : (info.status = '重度肥胖', info.color = '#FF1200', info.class="result-overweight");
  renderResult(info);
  data.push(info);
  localStorage.setItem('data', JSON.stringify(data));
  render(data);
}
function renderResult(data) {
  result.className += ` result-common ${data.class}`;
  h2.textContent = data.bmi;
  p.style.display = 'block';
  icon.style.display = 'block';
  icon.style.backgroundColor = data.color;
  resultText.style.display = 'block';
  resultText.style.color = data.color;
  resultText.textContent = data.status;
}

function render(data) {
  var str = '';
  var len = data.length;
  for(var i=0;i<len;i++) {
    str += `<li style="border-left: 7px solid ${data[i].color}">
      <h2>${data[i].bmi}</h2>
      <p>
        <small>BMI</small>
        ${data[i].status}
      </p>
      <p>
        <small>weight</small>
        ${data[i].weight}
      </p>
      <p>
        <small>height</small>
        ${data[i].height}
      </p>
      <p>
        06-19-2017
      </p>
    </li>`;
  };
  list.innerHTML = str;
}

function reset() {
  result.className = 'result';
  h2.textContent = '看結果';
  p.style.display = '';
  icon.style.display = '';
  resultText.style.display = '';
}