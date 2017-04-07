angular.module('app', ['ui.bootstrap', 'gumga.layout', 'gumga.myAccountEmbedded'])
    .controller('ctrl', function($scope){

      sessionStorage.setItem('user', JSON.stringify(
        {"organization":"GUMGA",
        "organizationLogo":null,
        "timeOfCreation":"1486553192120",
        "name":"Mateus Miranda",
        "organizationHierarchyCode":"1.",
        "securityManager":false,
        "login":"info.mateusmiranda@gmail.com",
        "softwareHouse":false,
        "timeOfExpiration":"1486554992120",
        "token":"eterno"}));

        $scope.config = {
          defaultPicture:'https://upload.wikimedia.org/wikipedia/commons/1/18/Gnome-Wikipedia-user-male.png',
          appURL: ''
        }

    })
