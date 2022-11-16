var assert = require("assert");
var jservice = require("./jservice");
var nock = require("nock");

var jserviceApi = nock("https://jservice.io/api/");

describe("JService", function() {
  it("should allow category requests", function (done) {
    var expectedCategory = "skynet";

    jserviceApi.get("/category?id=150")
      .reply(200, {
        title: expectedCategory
      });

    jservice.getCategory(150, function(category) {
      assert.equal(category, expectedCategory);
      done();
    });
  });

  it("should get random questions", function (done) {
    var expectedClue = "This is the clue.";

    jserviceApi.get("/random")
      .reply(200, [{
        question: expectedClue
      }])

    jservice.getRandomQuestion(function(question) {
      assert.equal(question, expectedClue);
      done();
    });
  });
})