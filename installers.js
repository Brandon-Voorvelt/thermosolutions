var installerApp = angular.module("installerApp",[])

installerApp.controller('installerCtrl', ['$scope', function($scope) { 

    $scope.profiles = [
    {
        name: 'Buco',
        tel: '021 123 4567',
        email: 'example@buco.co.za',
        img: '../imgs/logo/buco.jpg',
        person: '',
    } 
    ,
    {
        name: 'Buco',
        tel: '021 123 4567',
        email: 'example@buco.co.za',
        img: '../imgs/logo/build-it.jpg',
        person: '',
    } 
    ,
    
    ]
    
  }]);