(function() {
"use strict";
/**
 * Restaurant module that includes the public module as a dependency
 */
angular.module('seoul', [])
    .controller('seoulController', function ($scope, $http) {

        
        $scope.restaurants = resturantModel.restaurants;
        $scope.scenes = sceneModel.scenes;
        $scope.schedule = scheduleModel.schedule;
        $scope.airplane = airplaneModel.airplane;
        $scope.subway = subwayModel.subways;


        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function () {
            var totalNameValue = calculatNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };

     

        function calculatNumericForString(string) {
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }

            return totalStringValue;
        }

    });
})();

