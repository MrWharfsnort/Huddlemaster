(function () {
   'use strict';

   huddleFactory.$inject = ['$http', '$routeParams'];

   function huddleFactory ($http, $routeParams) {

      function getHuddles() {
         return $http.get('/api/huddles')
            .then(function(response) {
               console.info('getting huddle from api...');
               return response.data;
            })
            .catch(function(err) {
               console.error ('failed to get huddles: ' + err);
            });
      }

      function getHuddle() {
         console.info('huddleFactory is getting Huddle...');
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

      function addHuddle(huddle) {
         return $http.post('/api/huddles', huddle)
            .then(function(response) {
               console.info('huddleFactory => addHuddle() => ADDING huddle...');
            })
            .catch(function(err) {
               console.error('huddleFactory => addHuddle() failed: ' + err);
            });
      }

      function updateHuddle(huddle) {
         var id = $routeParams.id;
         return $http.put('/api/huddles/' + id, huddle)
            .then(function(response) {
               return response;
            })
            .catch(function(err) {
               console.error('huddleFactory.updateHuddle() failed: ' + err);
            });
      }

      function deleteHuddle() {
         console.info('Deleting Huddle...');
      }

      return {
         getHuddles: getHuddles,
         getHuddle: getHuddle,
         addHuddle: addHuddle,
         updateHuddle: updateHuddle,
         deleteHuddle: deleteHuddle
      };
   }

   angular
      .module('app.huddles')
      .factory('huddleFactory', huddleFactory);
})();
