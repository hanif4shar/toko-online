var express = require('express');
var router = express.Router();

// setup index
router.get('/', function(req,res){
    //res.send('Ini adalah index , sudah konek ke mongosss coba ubah lagi');
    res.render('awal',{
        title: "Happy Shopping!!!"
    });
});


//exports
module.exports = router;
