(function() {
   'use strict';

   HuddleCtrl.$inject = ['huddleFactory'];

   function HuddleCtrl (huddleFactory) {
      var vm = this;
      vm.huddleList = [];
      vm.getHuddles = getHuddles;
      vm.getHuddle = getHuddle;
      vm.addHuddle = addHuddle;

      return vm;

      function getHuddles() {
         huddleFactory
            .getHuddles()
            .then(function(response) {
               vm.huddleList = response;
               var huddleCount = response.length;
               console.info('huddleList <= ' + huddleCount + ' huddles');
            });
      }

      function getHuddle() {
         huddleFactory
            .getHuddle()
            .then(function(response) {
               vm.huddleList = response;
               var huddleCount = response.length;
               console.info('huddleList <= ' + huddleCount + ' huddles');
               console.info('HuddleCtrl <= getHuddle() <= ' + response.name);
            })
            .catch(function(error) {
               console.error('HuddleCtrl <= getHuddle() failed: ' + error);
            });
      }

      function addHuddle(huddle) {
         console.log(huddle);
         huddleFactory.addHuddle(huddle)
            .then(function(response) {
               console.info('HuddleCtrl => addHuddle => ' + response);
            })
            .catch(function(err) {
               console.error('addHuddle error =>' + err);
            });
      }
   }

   angular
      .module('app.huddles')
      .controller('HuddleCtrl', HuddleCtrl);
})();
