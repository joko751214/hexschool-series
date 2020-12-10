var farms = [
  {
    farmer: '卡斯伯',
    field: 6,
    chick: 200,
    banana: 5000
  },
  {
    farmer: '查理',
    field: 10,
    chick: 51,
    banana: 1000
  },
  {
    farmer: '約翰',
    field: 6,
    chick: 120,
    banana: 3215
  }
]
// 我要找一個農場，買50隻小雞
var farmsTotal = farms.length;
for(var i = 0;i<farmsTotal;i++){
    if(farms[i].chick>50){
        console.log(farms[i].farmer+'的小雞剛好夠');
        farms[i].chick -= 50;
        console.log(farms[i].farmer+'的小雞剩下'+farms[i].chick)
        break;
    }
}
console.log(farms[0].chick);







