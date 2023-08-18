require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 8081;

require("./websocket")(server);

// 監聽 PORT 的訊息
server.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
