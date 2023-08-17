require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server });

const broadcast = (data) => {
  data = data.toString();
  wss.clients.forEach(function (client) {
    client.send(data);
  });
};

wss.on("connection", function connection(ws) {
  console.log("client is connected", wss.clients.size);

  ws.send(wss.clients.size);

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    broadcast(data);
    console.log("onmessage: ", data);
  });
});

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 監聽 PORT 的訊息
server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
