(function() {
   'use strict';

   HuddleCtrl.$inject = ['huddleFactory'];

   function HuddleCtrl (huddleFactory) {
      var vm = this;
      vm.title = 'Huddles';
      vm.huddleList = [];

      function getHuddles() {
         huddleFactory
            .getHuddles()
            .then(function(response) {
               var huddleCount = response.length;
               vm.huddleList = response;
               console.log('huddleList => ' + huddleCount + ' huddles');
            });
      }

      getHuddles();
   }

   angular
      .module('app.huddles')
      .controller('HuddleCtrl', HuddleCtrl);
})();
