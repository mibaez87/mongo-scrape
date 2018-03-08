var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var cheerio = require("cheerio");
var axios = require("axios");
var request = require("request");

// var models = require("./models");

var PORT = 3000;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", require("./routes")());

var databaseUri = "mongodb://localhost/huffPostScrapedb";
var MONGODB_URI = process.env.MONGODB_URI
mongoose.Promise = Promise;

if (MONGODB_URI){
  mongoose.connect(MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
};

app.listen(PORT, function(){
  console.log("App running on port " + PORT + "!");
});

