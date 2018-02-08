var express = require("express");
var app = express();

var request = require("request");

var messages = ["default message"];

app.get("/messages/", function(req, res) {
    res.send(messages);
});

app.get("/messages/:message", function(req, res) {
    messages.push(req.params.message);
    res.send("Added " + messages[messages.length-1] + " to the array.")
});

var server = app.listen("3000", function(err) {
    if (err) {
        console.log("Error with listening port.")
    }
    console.log("Server is running on port", server.address().port)
});