'use strict';

// Declare app level module which depends on views, and core components
var MyApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

MyApp.controller("profileController", ['$scope', function($scope) {
  $scope.profileName = "Tony Stark";
  $scope.profileUrl = "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg";
  $scope.profileDesc = "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist.";
}]);

MyApp.controller("profileController1", ['$scope', function($scope) {
  $scope.profileName = "Tony Stark";
  $scope.profileUrl = "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg";
  $scope.profileDesc = "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist.";
}]);

MyApp.controller("profileController2", ['$scope', function($scope) {
  $scope.profileName = "Tony Stark";
  $scope.profileUrl = "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg";
  $scope.profileDesc = "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist.";
}]);

MyApp.controller("profileController3", ['$scope', function($scope) {
  $scope.profile = {name: "Tony Stark (profileController3)", 
                    url: "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg", 
                    desc: "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist."
                  };
}]);

MyApp.controller("profileController4", ['$scope', function($scope) {
  $scope.profile = {name: "Tony Stark (profileController4)", 
                    url: "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg", 
                    desc: "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist."
                  };
}]);

MyApp.controller("profileController5", ['$scope', function($scope) {
  $scope.profile = {name: "Tony Stark (profileController5)", 
                    url: "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg", 
                    desc: "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist."
                  };

  var vm = $scope.vm = this;
  vm.profile = {name: "Tony Stark (profileController5)", 
                url: "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg", 
                desc: "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist."
              };
}]);

MyApp.controller("calculatorController", ['$scope', function($scope) {
  $scope.calcNum1 = 0;
  $scope.calcNum2 = 0;
  $scope.resetToZero = function () {
    $scope.calcNum1 = 0;
    $scope.calcNum2 = 0;
  }
}]);