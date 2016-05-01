// TODO : switch to UI.Router
(function() {
   'use strict';

   huddleRoutes.$inject = ['$routeProvider'];

   function huddleRoutes($routeProvider) {
      $routeProvider
      .when('/huddles', {
         templateUrl: '/app/huddles/huddles.html',
         controller: 'HuddleCtrl',
         controllerAs: 'vm'
      })
      .when('/huddles/add', {
         templateUrl: '/app/huddles/add_huddle.html',
         controller: 'HuddleCtrl',
         controllerAs: 'vm'
      })
      .when('/huddles/:id', {
         templateUrl: '/app/huddles/huddle_details.html',
         controller: 'HuddleCtrl',
         controllerAs: 'vm'
      })
      .when('/huddles/edit/:id', {
         templateUrl: '/app/huddles/edit_huddle.html',
         controller: 'HuddleCtrl',
         controllerAs: 'vm'
      });
   }
   angular
      .module('app.huddles')
      .config(huddleRoutes);

})();
