var express = require('express');
var router = express.Router();
var passport = require('passport');


router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
	
    res.send("succesfully logged in");
});

module.exports = router;
