var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>Welcome to Google Maps Api Wrapper created for web eng project.</p>'+ 
	    '<p>	1) /getObjData => returns updated response for origin and destination(POST).</p>'
            );
  
});

module.exports = router;
