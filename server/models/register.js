var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userRegDetails= new schema(
  {
    firstname:String,
    lastname:String,
    email:String,
    password:String
  }
)
var user = mongoose.model('cats',userRegDetails);
module.exports = user;
