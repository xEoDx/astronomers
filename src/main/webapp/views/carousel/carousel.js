/**
 * Created by Victor on 1/22/2017.
 */
angular.module("carousel", [])
    .directive("carousel", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/carousel/carousel.html',
            scope: {
                elements: '='
            },
            controller: 'carouselController'
        };
    })
    .controller("carouselController", ['$scope', '$log', function ($scope, $log) {
        $log.info("Initializing carousel... with elements: ", $scope.elements);
        $scope.value = 0;
    }]);