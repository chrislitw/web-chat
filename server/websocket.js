const WebSocket = require("ws");

module.exports = function (server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", function connection(ws) {
    console.log("client connecte success", wss.clients.size);

    ws.on("error", console.error);

    ws.on("message", function message(data) {
      const data1 = JSON.parse(data);
      console.log("onmessage", data1);

      const { action, message } = data1;
      switch (action) {
        // case "size":
        //   ws.send(wss.clients.size);
        //   break;
        // case "connect":
        //   ws.send("connected");
        //   break;
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
};
