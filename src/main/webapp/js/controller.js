/**
 * Created by Victor on 1/22/2017.
 */
angular.module("astronomersModule")
    .controller('AstronomersListCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
        $log.info("Initialising astronomersList");
        $scope.elements = [];

        $http.get('resources/data/astronomers.json').then(function(data) {
            $scope.elements = data.data;
            $log.info("Astronomers list: ",$scope.elements);
        });

    }]);
