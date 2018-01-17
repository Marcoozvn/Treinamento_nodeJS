var dogController = function(){
      var meuController = {};

      meuController.criarDog = function(req, res){
          res.json('vc esta salvando um dog!');
      };


      meuController.acessarDog = function(req, res){
        res.json('vc esta recebendo um dog!');

      }

      return meuController;
};

module.exports = dogController;
