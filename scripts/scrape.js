var db = require("./models");

var Scrape = function scrapeFunction(req, res){
    axios.get("https://www.huffingtonpost.com/topic/social-justice/").then(function(response) {
      var $ = cheerio.load(response.data);
  
      $("div.card__headline").each(function(i, element) {
        var result = {};
  
        result.title = $(this)
          .text().trim();
        result.link = $(this)
          .children("a")
          .attr("href");
  
        db.Headline.create(result)
          .then(function(dbHeadline) {
            // View the added result in the console
            console.log(dbHeadline);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            return res.json(err);
          });
      });

      // $("div.card__description").each(function(i, element) {
      //   var result = {};
  
      //   result.title = $(this)
      //     .text().trim();
  
      //   db.Headline.create(result)
      //     .then(function(dbHeadline) {
      //       // View the added result in the console
      //       console.log(dbHeadline);
      //     })
      //     .catch(function(err) {
      //       // If an error occurred, send it to the client
      //       return res.json(err);
      //     });
      // });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scrape Complete");
    });
  };

  module.exports = Scrape;