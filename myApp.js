var express = require('express');
var app = express();
var absolutePathIndex = __dirname + "/views/index.html";
var absolutePathPublic = __dirname + "/public/style.css";

app.get("/", function(req, res) {
    res.sendFile(absolutePathIndex);
});

app.use("/public/style.css", express.static(absolutePathPublic));

app.get ("/json", function(req, res) {
    res.json({
    "message": "Hello json"
    });
});

console.log('Hello World');





































 module.exports = app;
