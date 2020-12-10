var area = document.getElementById('areaId');
var list = document.querySelector('.list');

var country = [
    {
        farmer: '查理',
        place: '前鎮區'
    },
    {
        farmer: '卡斯伯',
        place: '苓雅區'
    }
    ,{
        farmer: '小花',
        place: '苓雅區'
    }
]
var len = country.length;

function updateList(e){
    var select = e.target.value;
    var str='';
    for(var i=0;len>i;i++){
        if(select== country[i].place){
            str += '<li>'+country[i].farmer+'</li>'
        }
    }
    list.innerHTML = str;
}


area.addEventListener('change',updateList,false)