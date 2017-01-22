/**
 * Created by Victor on 1/22/2017.
 */
angular.module("astronomersModule")
    .controller('AstronomersListCtrl', ['$scope', '$log', function ($scope, $log) {
        $log.info("Initialising astronomersList");
        $scope.elements = {}
    }]);
