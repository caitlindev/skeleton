angular.module( 'ngBoilerplate.venues', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state('venues', {
    url: '/venues',
    templateUrl: 'venues/venues.tpl.html',
    controller: 'VenuesCtrl',
    pageTitle: 'Venues'
  });
})

.controller( 'VenuesCtrl', function VenuesCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
