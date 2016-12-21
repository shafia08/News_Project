var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the Registration request", function(done){
     var jsonob = {"username":"shafia08","password":"shafia","email":"shafiaasifchd@gmail.com"};
    url
        .get("/")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          
          res.send.should.be.equal(jsonob);
            done();
        });
  });
});