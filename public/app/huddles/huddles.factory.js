(function () {
   'use strict';

   huddleFactory.$inject = ['$http'];

   function huddleFactory ($http) {
      console.log('huddleFactory active...');

      function getHuddles() {
         return $http.get('/api/huddles')
            .then(function(response) {
               console.log('huddleFactory => getHuddles() successful...');
               return response.data;
            })
            .catch(function(err) {
               console.log ('huddleFactory => getHuddles() failed: ' + err);
            });
      }

      function getHuddle() {
         console.log('Getting Huddle...');
      }

      function addHuddle() {
         console.log('Adding Huddle...');
      }

      function editHuddle() {
         console.log('Editing Huddle...');
      }

      function deleteHuddle() {
         console.log('Deleting Huddle...');
      }

      return {
         getHuddles: getHuddles,
         getHuddle: getHuddle,
         addHuddle: addHuddle,
         editHuddle: editHuddle,
         deleteHuddle: deleteHuddle
      };
   }

   angular
      .module('app.huddles')
      .factory('huddleFactory', huddleFactory);
})();
