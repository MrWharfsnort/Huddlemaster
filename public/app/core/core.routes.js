(function() {
   'use strict';

   angular.module('app.core')
   .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, $locationProvider) {
         $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
         });

         $urlRouterProvider.otherwise('404');

         $stateProvider
         .state('home', {
            url: '/',
            templateUrl: '/app/home/home.html'
         })
         .state('404', {
            url: '/404',
            templateUrl: '/app/core/404.html'
         });

   }]);
})();
