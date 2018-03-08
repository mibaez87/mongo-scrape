var db = require("../models");

var allHeadlines = function allHeadlines(req, res) {
    db.Headline.find({})
        .then(function (dbHeadline) {
            res.json(dbHeadline);
        })
        .catch(function (err) {
            res.json(err);
        });
};

module.exports = allHeadlines;