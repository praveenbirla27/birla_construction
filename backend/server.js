const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();
const requestRoutes = require("./routes/requestRoutes");
const clientRoutes = require("./routes/clientRoutes");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use("/api/request",requestRoutes);
app.use("/api/client",clientRoutes);
app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("uploads"));
app.use("/api/files",fileRoutes);


const server = http.createServer(app);
const io = new Server(server,{
    cors:{origin:"*"}
});

io.on("connection",(socket)=>{
    console.log("User connected");

    socket.on("sendMessage",(data)=>{
        io.emit("receiveMessage",data);
    });

    socket.on("disconnect",()=>{
        console.log("User disconnected");
    });
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.send("Birla Consultant & Construction API");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});