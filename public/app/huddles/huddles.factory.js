(function () {
   'use strict';

   huddleFactory.$inject = ['$http', '$routeParams'];

   function huddleFactory ($http, $routeParams) {
      console.log('huddleFactory active...');

      function getHuddles() {
         return $http.get('/api/huddles')
            .then(function(response) {
               console.info('huddleFactory => getHuddles() successful...');
               return response.data;
            })
            .catch(function(err) {
               console.error ('huddleFactory => getHuddles() failed: ' + err);
            });
      }

      function getHuddle() {
         console.log('huddleFactory is getting Huddle...');
         var id = $routeParams.id;
         return $http.get('/api/huddles/' + id)
            .then(function(response) {
               console.info('huddleFactory => getHuddle() retrieved');
               return response.data;
            })
            .catch(function(err) {
               console.error ('huddleFactory => getHuddle() failed: ' + err);
            });
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
