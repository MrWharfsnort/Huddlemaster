(function() {
   'use strict';

   angular.module('app.huddles')

   .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
         .state('viewHuddles', {
            url: '/huddles',
            templateUrl: '/app/huddles/huddles.html'
         })
         .state('addHuddle', {
            url: '/huddles/add',
            templateUrl: '/app/huddles/add_huddle.html'
         })
         .state('editHuddle', {
            url: '/huddles/edit/{id}',
            templateUrl: '/app/huddles/edit_huddle.html'
         })
         .state('huddleDetails', {
            url: '/huddles/{id}',
            templateUrl: '/app/huddles/huddle_details.html'
         });

         $urlRouterProvider.otherwise('/404');
   }]);
})();
