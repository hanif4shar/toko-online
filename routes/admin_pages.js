var express = require('express');
var router = express.Router();

// setup index
router.get('/', function(req,res){
    res.send('Admin Area');
});


//exports
module.exports = router;
