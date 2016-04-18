(function() {
   'use strict';

   function huddleRoutes($routeProvider) {
      $routeProvider
      .when('/huddles', {
         templateUrl: '/app/huddles/huddles.html',
         controller: 'HuddleCtrl',
         controllerAs: 'vm'
      })
      .when('/huddles/add', {
         templateUrl: '/app/huddles/add_huddle.html',
         controller: 'HuddleCtrl'
      });
   }
   angular
      .module('app.huddles')
      .config(huddleRoutes);

})();
