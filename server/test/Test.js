var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe.skip("Testing the first route of Registration", function(err){
  it("should handle the Registration request", function(done){
     var jsonob = {"username":"mini","email":"mini@gmail.com","password":"mini"};
    url
        .post("/users/insert")
        .expect(200)
        .send(jsonob)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          
           assert.equal(" details saved ",res.text," res.text is not matched");
            done();
        });
  });

  it("should handle the Login part", function(done){
     var json = {"username":"sanjita","password":"sanjita"};
    url
        .post("/login")
        .expect(200)
        .send(json)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          
           assert.equal("succesfully logged in",res.text," res.text is not matched");
            done();
        });
  });
});



describe("News", function(err){

  it("It should save news", function(done){

  var myjson ={
				"author": "Greg Kumparak",
				"title": "You won’t be able to fix Apple AirPods yourself and you probably shouldn’t try",
				"description": "When it comes to headphones — particularly those of the in-ear variety — DIY repairs are generally a no-go. If it's a frayed wire shorting out, sure, grab..",
				"url": "http://social.techcrunch.com/2016/12/20/you-wont-be-able-to-fix-apple-airpods-yourself-and-you-probably-shouldnt-try/",
				"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/12/f3k1ysofjvj5xof5.jpg?w=764&amp;h=400&amp;crop=1",
				"publishedAt": "2016-12-20T20:47:55Z",
				 "Comment":"This is my comment"
}
    url
        .post("/news/save")
        .expect(200)
        .send(myjson)
        .end(function(err,res){
          if (err){
          	  throw err;
          }
          assert.equal(" News saved ",res.text,"res.text is not match");

          done();
        });

  });


});