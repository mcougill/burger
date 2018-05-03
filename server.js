var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var hbs = require("express-handlebars");
var mor= require("method-override");
var path = require("path");

//set port
var PORT = process.env.PORT || 8500;

var public = require("path").join(__dirname,"/public");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(mor("_method"));

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//points to express routes
var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

//set listener
app.listen(PORT);
console.log("listening on port: "+ PORT);