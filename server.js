var cheerio = require("cheerio");
var request = require("request");

console.log("\n***********************************\n" +
            "Grabbing every article title and link\n" +
            "from Huffington Post's social justice articles:" +
            "\n***********************************\n");

request("https://www.huffingtonpost.com/topic/social-justice", function(error, response, html) {

  var $ = cheerio.load(html);
  var results = [];

  $("div.card__headline").each(function(i, element) {
    var title = $(element).text().trim();
    var link = $(element).children().attr("href");
    results.push({
      title: title,
      link: link
    });
  });

  // RETURNING UNDEFINED
  // $("div.card__image").each(function(i, element) {
  //   var image = $(element).children().attr("img");
  //   results.push({
  //     image: image
  //   });
  // });

  console.log(results);
});
