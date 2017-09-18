var express = require('express');
var app =  express();

var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

 Genre= require('./models/genre');
Cliente = require('./models/usuario');
// Connection BD

mongoose.connect('mongodb://juanrodriguez:holanda3237@ds139964.mlab.com:39964/juanrodriguez')

var db = mongoose.connection;

app.get("/", function(req, res){
    res.send("Please use API endpoints");
});

app.get("/api/genres", function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.get("/api/usuarios",function(req,res){
    Cliente.getClientes(function(err,clients){
        if(err){
            throw err;
        }
        res.json(clients);
    });
});


app.listen(port);
console.log("Running on port 3000");