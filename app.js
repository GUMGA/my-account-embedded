angular.module('app', ['ui.bootstrap', 'gumga.layout', 'gumga.myAccountEmbedded'])
    .controller('ctrl', function($scope){

      sessionStorage.setItem('user', JSON.stringify(
        {"organization":"GUMGA","organizationLogo":null,"timeOfCreation":"1491588277321","name":"GumgaAdmin","organizationHierarchyCode":"1.","securityManager":false,"login":"gumga@gumga.com.br","softwareHouse":false,"timeOfExpiration":"1491590077321","picture":null,"token":"1L1E1491591700412O1.I","profileImage":"src/images/user-without-image.png"}));

        $scope.config = {
          defaultPicture:'https://upload.wikimedia.org/wikipedia/commons/1/18/Gnome-Wikipedia-user-male.png',
          appURL: 'http://localhost:8080/dashboard-api'
        }

    })
