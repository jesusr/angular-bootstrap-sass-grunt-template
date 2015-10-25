(function() {
  'use strict';
  angular.module('app', ['app.filters', 'app.services']);

  angular.module('app').run(function() {
    window.console.log('Hi!');
  });
})();

