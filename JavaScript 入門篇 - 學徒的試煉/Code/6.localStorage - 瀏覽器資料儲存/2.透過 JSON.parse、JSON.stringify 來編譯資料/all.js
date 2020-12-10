// 1.將 array 轉為 string
// JSON.stringify()

// 2.將 string 轉為 array
// JSON.parse()

// 學以上兩點是因為 localstorage 只會保存 string 資料

var country = [
  {city: '台北市'}
];
var countryString = JSON.stringify(country);
localStorage.setItem('country', countryString);

var countryAry = JSON.parse(localStorage.getItem('country'));
console.log(countryAry);