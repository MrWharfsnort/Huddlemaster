(function() {
   'use strict';

   routeConfig.$inject = ['$routeProvider', '$locationProvider'];

   function routeConfig ($routeProvider, $locationProvider) {
      $routeProvider
      .when('/', {
         templateUrl: '/app/home/home.html'
      })
      .otherwise({
         redirectTo: '/'
      });

      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
      });
   }

   angular
      .module('app.core')
      .config(routeConfig);
})();
