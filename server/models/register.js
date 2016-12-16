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
var user = mongoose.model('cat',userRegDetails);
module.exports = user;
