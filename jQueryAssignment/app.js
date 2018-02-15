var express = require("express");
var app = express();

app.get("/", function(req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Couldn't start the server.");
    }
    console.log("Server staed on port ", server.address().port)
});