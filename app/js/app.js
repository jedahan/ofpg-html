'use strict';
angular.module('ofPG', ['ngRoute' , 'ngAnimate', 'ofPG.services', 'ofPG.controllers', 'ofPG.directives'])

.config(function($routeProvider) {
    window.console.log('asdasd');
  $routeProvider
    .when('/main', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsCtrl'
    })
    .otherwise({redirectTo : '/main'});
});


// enabled default window menu
var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
if(nativeMenuBar.createMacBuiltin) {
    nativeMenuBar.createMacBuiltin("OF");
    win.menu = nativeMenuBar;
}
