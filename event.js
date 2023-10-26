const express = require("express");
const EventEmitter = require("events");
const app = express();

let count = 0;
const event = new EventEmitter();

event.on("countAPI",() => {
    count++;
    console.log("event is call",count);
})

app.get("/search",(req,resp) => {
    resp.send("Search api colled");
    event.emit("countAPI");
})

app.get("/upate",(req,resp) => {
    resp.send("Update api colled");
    event.emit("countAPI");
})

app.get("/delete",(req,resp) => {
    resp.send("delete api colled");
    event.emit("countAPI");
})

app.listen(7000);