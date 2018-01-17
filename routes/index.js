var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.json("servidor on!");
})

router.use('/dog', require('./dog.js'));

module.exports = router;
