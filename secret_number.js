'use strict';


module.exports = function() {
    var randomNumber = Math.floor(Math.random() * (1000000 - 0 + 1)) + 0;

    return function generatedNumber(){
      return randomNumber;
    };

};