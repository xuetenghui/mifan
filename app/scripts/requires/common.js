// Generated by CoffeeScript 1.7.1
"use strict";
var Common;

Common = {
  init: function() {
    return Common.toggleNav();
  },
  toggleNav: function() {
    var navItem;
    return navItem = $(".nav li");
  },
  setCurrentPage: function(currentPage) {
    var headScope;
    headScope = angular.element(".header").scope();
    return headScope.currentPage = currentPage;
  }
};

Common.init();