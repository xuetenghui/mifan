// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("rootCtrl", function($scope) {
  $scope.page = "home";
  $scope.username = "";
  $scope.supportNum = "1万";
  $scope.$on("pageChange", function(e, msg) {
    return $scope.page = msg;
  });
  $scope.isMMenuOpen = false;
  return $scope.toggleMMenu = function() {
    return $scope.isMMenuOpen = !$scope.isMMenuOpen;
  };
});
