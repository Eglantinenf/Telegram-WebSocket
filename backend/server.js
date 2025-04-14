const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer();

const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(
    "user connect to server------------------------------------------------"
  );

  console.log("query:", socket.handshake.query);
  console.log("headers:", socket.handshake.headers);

  socket.on("message", (data) => {
    io.emit("message", {
      id: socket.id,
      message: data,
    });
  });
});

server.listen(4001, () => {
  console.log("Server running on port 4001");
});
