'use strict';

// Declare app level module which depends on views, and core components
var MyApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngDialog'
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

MyApp.controller("profileController6", ['$scope', function($scope) {
  $scope.profile = {name: "Tony Stark (profileController6)", 
                    url: "https://www.postoast.com/wp-content/uploads/2018/08/Unknows-Facts-About-Iron-Man-Tony-Stark.jpg", 
                    desc: "Anthony Edward \"Tony\" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist."
                  };
  
  $scope.$watch ("profile.name", function(newVal, oldVal) {
    if (!newVal) {
      $scope.error = {name: "Name should not be blank!"};
    }
    else {
      $scope.error = false;
    }
  });
}]);

MyApp.controller("calculatorController", ['$scope', function($scope) {
  $scope.calcNum1 = 0;
  $scope.calcNum2 = 0;
  $scope.resetToZero = function () {
    $scope.calcNum1 = 0;
    $scope.calcNum2 = 0;
  }
}]);

MyApp.controller("DIController1", ['$scope','ngDialog', function($scope, ngDialog) {
  $scope.clickToOpen = function () {
    ngDialog.open(
      { template: "ngDialog/dialog1.html", 
        className: "ngdialog-theme-default",
        scope: $scope
      });
  };
}]);

MyApp.controller("henchmenController1", ['$scope', function($scope) {
  $scope.henchMen = [
                      {
                        "id": 1,
                        "name": "Count Tyrone Rugen",
                        "age": 42,
                        "combat": 74,
                        "mind": 69,
                        "speed": 63,
                        "strength": "Swordmanship",
                        "weakness": "Coward"
                      },
                      {
                        "id": 2,
                        "name": "Mr. Kobayashi",
                        "age": 58,
                        "combat": 33,
                        "mind": 65,
                        "speed": 41,
                        "strength": "Knowledge",
                        "weakness": "Physically weak"
                      },
                      {
                        "id": 3,
                        "name": "Mr. Smee",
                        "age": 72,
                        "combat": 21,
                        "mind": 70,
                        "speed": 24,
                        "strength": "Optimistic",
                        "weakness": "Physically weak"
                      },
                      {
                        "id": 4,
                        "name": "Bear",
                        "age": 39,
                        "combat": 78,
                        "mind": 34,
                        "speed": 55,
                        "strength": "Stuntsman",
                        "weakness": "Idiot"
                      },
                      {
                        "id": 5,
                        "name": "Oddjob",
                        "age": 40,
                        "combat": 67,
                        "mind": 65,
                        "speed": 41,
                        "strength": "Creative",
                        "weakness": "Communication"
                      },
                      {
                        "id": 6,
                        "name": "Bob The Goon",
                        "age": 41,
                        "combat": 67,
                        "mind": 60,
                        "speed": 52,
                        "strength": "Loyal",
                        "weakness": "Idiot"
                      },
                      {
                        "id": 7,
                        "name": "Byron T Hadley",
                        "age": 34,
                        "combat": 70,
                        "mind": 56,
                        "speed": 64,
                        "strength": "All Rounder",
                        "weakness": "Intolerant"
                      },
                      {
                        "id": 8,
                        "name": "Gogo Yubari",
                        "age": 27,
                        "combat": 81,
                        "mind": 69,
                        "speed": 70,
                        "strength": "Weapons Skill",
                        "weakness": "Sociopath"
                      },
                      {
                        "id": 9,
                        "name": "Major Arnold Toht",
                        "age": 53,
                        "combat": 45,
                        "mind": 69,
                        "speed": 33,
                        "strength": "Authority",
                        "weakness": "Communication"
                      },
                      {
                        "id": 10,
                        "name": "Bebop",
                        "age": 24,
                        "combat": 71,
                        "mind": 31,
                        "speed": 45,
                        "strength": "Weapons Skill",
                        "weakness": "Idiot"
                      }
                    ];
}]);

MyApp.controller("henchmenController2", ['$scope', "$http", function($scope, $http) {
  $scope.henchMen = "";
  $scope.getError = "";
  var request = {
    method: "GET",
    url: "data/henchMenList.json"
  };
  $http(request).then(function (response) {
    $scope.henchMen = response.data;
  }, function (error) {
    $scope.getError = error;
  });
}]);

MyApp.config(function($sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist(['self','http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&callback=jsonFlickrFeed']);
})

function jsonFlickrFeed(response) {
  window.flickrdata = response;
}

MyApp.controller("flickrController1", ['$scope', "$http", "$window", function($scope, $http, $window) {
  var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&callback=jsonFlickrFeed";
  $http.jsonp(url, {jsonpCallbackParam: 'jsonFlickrFeed'})
  .catch(function(e) {
    $scope.flickrImages = $window.flickrdata ? $window.flickrdata : "Empty";
    console.log($scope.flickrImages);
    console.log(e);
  });
}]);