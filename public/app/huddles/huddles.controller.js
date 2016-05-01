(function() {
   'use strict';

   HuddleCtrl.$inject = ['huddleFactory'];

   function HuddleCtrl (huddleFactory) {
      var vm = this;
      vm.huddleList = [];
      vm.getHuddles = getHuddles;
      vm.getHuddle = getHuddle;
      vm.addHuddle = addHuddle;
      vm.updateHuddle = updateHuddle;
      vm.resetForm = resetForm;
      return vm;

      function resetForm() {
         // TODO: resetForm does not clear out the value, only the form
         // vm.huddle = {};
         vm.huddleList = [];
         huddleForm.$setPristine(true);
      }

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
               console.info('HuddleCtrl <= getHuddle() <= ' + vm.huddleList.name);
            })
            .catch(function(error) {
               console.error('HuddleCtrl <= getHuddle() failed: ' + error);
            });
      }

      function addHuddle(huddle) {
         huddleFactory.addHuddle(huddle)
            .then(function(response) {
               console.info('HuddleCtrl => addHuddle => ' + response);
            })
            .catch(function(err) {
               console.error('addHuddle error =>' + err);
            });
      }

      function updateHuddle(huddle) {
         huddleFactory.updateHuddle(huddle)
            .then(function(response) {
               window.location.href='/huddles/' + huddle._id;
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
