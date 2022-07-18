app.config(routesConfig);
routesConfig.$inject = [
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider",
];
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("mail", {
    url: "/mail",
    template: "<ui-view/>",
    abstract: true,
  });

  $stateProvider
    .state("mail.file", {
      url: "/{x}",
      templateUrl: "/childHtmls/template.html",
      abstract: true,
    })

    .state("mail.file.preview", {
      url: "/{mesgId}",
      templateUrl: "/childHtmls/templateChild.html",
      controller: "childCtrl",
    });

  $urlRouterProvider.otherwise("/mail/Inbox/");


  // $locationProvider.html5Mode(true);
}
