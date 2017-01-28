/**
 * Created by Victor on 1/22/2017.
 */
angular.module("astronomersModule")
    .controller('AstronomersListCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
        $scope.elements = [];

        $http.get('resources/data/astronomers.json').then(function(data) {
            $scope.elements = data.data;
        });

    }]);
