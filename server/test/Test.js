var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing the first route of Registration", function(err){
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