var express = require('express');
var router = express.Router();

var register = require('../models/register');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/insert', function(req, res)
{
    var regis = new register({
    username : req.body.username,
   
    email : req.body.email,
    password :req.body.password, });

    //save values in database
     regis.save(function (err) {
     if (err)
     {
       res.send(err);
     }
    else {
      res.send(" details saved "+regis.username+regis.password);
    }
  }); //end of save function
}); //end of post route insert

module.exports = router;
