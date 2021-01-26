const io = require("socket.io")({
  cors: {
    origin: "*",
  },
});
const moment = require("moment");

const socketapi = {
  io: io,
};

io.on("connect", (socket) => {
  console.log("A user connected");

  socket.emit("message", {
    msg: "Welcome",
    user: "Bot",
    time: moment().format("DD.MM.YYYY - HH:mm"),
  });

  socket.broadcast.emit("message", {
    msg: "A user joined",
    user: "Bot",
    time: moment().format("DD.MM.YYYY - HH:mm"),
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");

    socket.broadcast.emit("message", {
      msg: "A user left the chat",
      user: "Bot",
      time: moment().format("DD.MM.YYYY - HH:mm"),
    });
  });

  socket.on("message", (msg) => {
    console.log(msg.msg + " - " + msg.user);
    const time = moment().format("DD.MM.YYYY - HH:mm");
    io.emit("message", { msg: msg.msg, time: time, user: msg.user });
  });
});

module.exports = socketapi;
