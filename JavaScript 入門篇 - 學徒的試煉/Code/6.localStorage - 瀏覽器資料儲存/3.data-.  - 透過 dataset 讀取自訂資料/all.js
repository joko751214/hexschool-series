
var list = document.querySelector(".list li");

list.addEventListener('click', checkList);

function checkList(e) {
  const num = e.target.dataset.num;
  const dog = e.target.dataset.dog;
  console.log(`農夫編號: ${num}，有${dog}隻狗`);
}