"use strict";

// moduleo principal
var app = angular.module("MyApp", ["ngRoute", "route-segment", "view-segment"]);

//configurar as rotas
app.config([
  "$routeSegmentProvider",
  "$locationProvider",
  function ($routeSegmentProvider, $locationProvider) {
    $locationProvider.hashPrefix(""); // para remover o '!' da URL

    //Rota PAI (segment 0)
    $routeSegmentProvider.when("/", "Main").segment("Main", {
      templateUrl: "views/main.html",
      controller: "MainController",
    });

    // rotas filas (segment 1)
    $routeSegmentProvider.when("/home", "Main.Home");
    $routeSegmentProvider.when("/sobre", "Main.Sobre");

    $routeSegmentProvider
      .within("Main")
      .segment("Home", {
        templateUrl: "views/home.html",
        controller: "HomeController",
      })
      .segment("Sobre", {
        templateUrl: "views/sobre.html",
        controller: "SobreController",
      });
  },
]);

// controller pai
app.controller("MainController", function ($scope) {
  $scope.appName = "AngularJS - Roteamento com Segmentos";
});

// controller home
app.controller("HomeController", function ($scope) {
  $scope.message = "Bem-vindo à página Home!";
});

// controller sobre
app.controller("SobreController", function ($scope) {
  $scope.message = "Esta é a página Sobre.";
});
