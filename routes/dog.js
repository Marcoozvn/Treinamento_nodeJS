var express = require('express');

var dogController = require('../controllers/dog.controller.js')();

var router = express.Router();

router.get('/', dogController.acessarDog);

router.post('/', dogController.criarDog);

router.delete('/', function(req, res){
  res.json('vc esta excluindo um dog!');
});


module.exports = router;
