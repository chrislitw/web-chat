require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");
const cors = require("cors");

const corsOptions = {
  origin: ["https://cors-test-client.zeabur.app"],
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8081;

const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  console.log("client connecte success", wss.clients.size);
  const sizeData = { action: "size", msg: wss.clients.size };
  broadcast(sizeData);

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    const data1 = JSON.parse(data);
    console.log("onmessage", data1);
    broadcast(data1);
  });

  ws.on("close", function disconnet(e) {
    console.log("client disconnect", wss.clients.size);
    const sizeData = { action: "size", msg: wss.clients.size };
    broadcast(sizeData);
  });
});

const broadcast = (data) => {
  let data1 = JSON.stringify(data);

  wss.clients.forEach((client) => client.send(data1));
};

app.get("/", (req, res) => {
  res.send("hello world!");
});

// 監聽 PORT 的訊息
server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
