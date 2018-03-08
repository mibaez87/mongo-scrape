
var scrapeFunction = require("../scripts/scrape.js");
var Headline = require("../models/Headline.js")
var allHeadlines = require("../controllers/headline.js");

app.get("/scrape", scrapeFunction);

app.get("/headlines", allHeadlines);

