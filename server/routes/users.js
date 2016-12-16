var express = require('express');
var router = express.Router();

var register = require('../models/register');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/insert', function(req, res)
{
    var regis = new register({
    firstname : req.body.fname,
    lastname : req.body.lname,
    email : req.body.email,
    password :req.body.password, });

    //save values in database
     regis.save(function (err) {
     if (err)
     {
       res.send(err);
     }
    else {
      res.send(" details saved ");
    }
  }); //end of save function
}); //end of post route insert

module.exports = router;
