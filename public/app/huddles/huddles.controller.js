(function() {
   'use strict';

   HuddleCtrl.$inject = ['huddleFactory'];

   function HuddleCtrl (huddleFactory) {
      var vm = this;
      vm.huddleList = [];
      vm.getHuddles = getHuddles;
      vm.getHuddle = getHuddle;
      vm.addHuddle = addHuddle;

      function getHuddles() {
         huddleFactory
            .getHuddles()
            .then(function(response) {
               vm.huddleList = response;
               var huddleCount = response.length;
               console.info('huddleList <= ' + huddleCount + ' huddles');
            });
      }

      function addHuddle() {
         huddleFactory
            .addHuddle(huddleData)
            .then(function(response) {
               console.info('addHuddle => ');
            })
            .catch(function(err) {
               console.error('addHuddle error =>');
            });
      }

      function getHuddle() {
         huddleFactory
            .getHuddle()
            .then(function(response) {
               var huddleCount = response.length;
               vm.huddleList = response;
               console.info('huddleList <= ' + huddleCount + ' huddles');
               console.info('HuddleCtrl <= getHuddle() <= ' + response.name);
            })
            .catch(function(error) {
               console.error('HuddleCtrl <= getHuddle() failed: ' + error);
            });
      }
   }

   angular
      .module('app.huddles')
      .controller('HuddleCtrl', HuddleCtrl);
})();
