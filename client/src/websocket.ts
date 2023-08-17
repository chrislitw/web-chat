const ws = new WebSocket('ws://localhost:8080')

// 開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
ws.onopen = () => {
  console.log('open connection')
}

// 關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
  console.log('close connection')
}

ws.onmessage = (e) => {
  console.log('onmessage', e.data)
}
