
var scrapeFunction = require("../scripts/scrape.js");
var Headline = require("../models/Headline.js")
var allHeadlines = require("../controllers/headline.js");

module.exports = function(app){
    var router = require("express").Router();

    router.get("/allHeadlines", scrapeFunction);
};

// app.get("/headlines", allHeadlines);

