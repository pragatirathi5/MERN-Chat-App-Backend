const express = require("express");
const app = express();
const user = require ("./Routes/Signuproute");
require("./conn");
const http = require("http");
const cors = require("cors");
const process = require("process");
const { Server } = require("socket.io");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(user);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    io.emit("receive_message", data)
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

});

server.listen(3001, () => {
  console.log("Listening to the Port");
});