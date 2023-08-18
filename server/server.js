require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const PORT = process.env.PORT || 8081;

const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  console.log("client connecte success", wss.clients.size);

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    const data1 = JSON.parse(data);
    console.log("onmessage", data1);

    const { action, message } = data1;
    switch (action) {
      case "message":
        broadcast(message);
        break;

      default:
        break;
    }
  });
});

const broadcast = (data) => {
  wss.clients.forEach((client) => client.send(data));
};

app.get("/", (req, res) => {
  res.send("hello world!");
});

// 監聽 PORT 的訊息
server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
