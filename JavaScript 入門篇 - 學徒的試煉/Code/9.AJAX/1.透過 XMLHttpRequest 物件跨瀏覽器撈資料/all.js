
var xhr = new XMLHttpRequest();

// readyState
// 0 - 表示你已經產生一個XMLHttpReques，但是還沒連結你要的資料
// 1 - 表示你使用了 open()，但你還沒有把資料傳送過去
// 2 - 偵測到你有用 send()
// 3 - 目前loading中
// 4 - 表示你撈到資料了，數據已經完全接收


// 參數: 格式、要讀取的網址、同步與非同步
// 格式: get(讀取資料)、post(傳送資料到伺服器)
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true)

// 傳送資料，null代表空的資料，不寫也可以
xhr.send(null);

