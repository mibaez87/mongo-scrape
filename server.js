var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var cheerio = require("cheerio");
var axios = require("axios");
var request = require("request");

var db = require("./models");

var PORT = 3000;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/index.js");
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/huffPostScrapedb";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});


app.listen(PORT, function(){
  console.log("App running on port " + PORT + "!");
});

