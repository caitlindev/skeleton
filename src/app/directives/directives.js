angular.module('ngBoilerplate.directives', [])

.directive("cofHeader", function() {
  return {
    restrict: "A",
    scope: {
      color: "@color"
    },
    templateUrl: 'partials/header.tpl.html',
    link: function(scope, element, attrs) {

      if (scope.color=="white") {
        angular.element(element).addClass('navbar-white');
        angular.element(element).removeClass('navbar-gold');
      } else {
        angular.element(element).addClass('navbar-gold');
        angular.element(element).removeClass('navbar-white');
      }
    }
  };
})

.directive("cofFooter", function() {
  return {
    restrict: "A",
    templateUrl: 'partials/footer.tpl.html',
    link: function(scope, element, attrs) {

    }
  };
});