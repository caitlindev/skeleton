angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.venues',
  'ngBoilerplate.directives',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  // $locationProvider.html5Mode(true);

  $stateProvider.state('index', {
    url: '/',
    templateUrl: 'home/home.tpl.html',
    controller: 'HomeCtrl',
    pageTitle: 'Home'
  });


  $urlRouterProvider.otherwise( '/' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    // if ( angular.isDefined( toState.data.pageTitle ) ) {
    //   $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    // }
  });
});

