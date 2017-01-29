/**
 * Created by Victor on 1/22/2017.
 */
angular.module("carousel", ['ngTouch', 'ngAnimate'])
    .directive("carousel", function () {
        return {
            restrict: 'E',
            templateUrl: 'views/carousel/carousel.html',
            scope: {
                elements: '='
            },
            controller: 'carouselController'
        };
    })
    .controller("carouselController", ['$scope', '$log', '$interval', '$animate', '$timeout', function ($scope, $log, $interval, $animate, $timeout) {
        $scope.value = 0;
        $scope.isPlaying = false;

        $scope.$watch('elements', function (newValue, oldValue) {
            if (newValue.length > 0) {
                updateCarouselIndexValues();
            }
        });

        $scope.dotClick = function (index) {
            $log.info("User clicked on dot: ", index);
            $scope.value = index;
            updateCarouselIndexValues();
            if ($scope.isPlaying) {
                $scope.stop();
                $scope.play();
            }
        };

        $scope.swipe = function () {
            $log.info("SWIPE");
            // TODO
        };

        $scope.carouselInterval = null;
        $scope.play = function () {
            $scope.isPlaying = true;
            $scope.carouselInterval = $interval(function () {
                $scope.value = ($scope.value + 1) % $scope.elements.length;
                updateCarouselIndexValues();

            }, 10000);

        };

        $scope.stop = function () {
            $scope.isPlaying = false;
            $interval.cancel($scope.carouselInterval);
        };

        function updateCarouselIndexValues() {
            $scope.previousElement = (($scope.value - 1) < 0) ? ($scope.elements.length - 1) : $scope.value - 1;
            $scope.nextElement = (($scope.value + 1) >= $scope.elements.length) ? 0 : $scope.value + 1;
        }

        $scope.play();
    }]);