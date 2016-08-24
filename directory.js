angular.module('directoryApp', [])
        .controller('directoryController', function($scope) {
          $scope.list = [
            {name: 'Pyramid', age:34},
            {name:'Sherretta', age:29} ,
            {name:'Esalina', age:60}
            ]
        });
