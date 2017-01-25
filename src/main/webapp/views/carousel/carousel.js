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
    .filter('year', function() {
        return function(input, optional1, optional2) {
            var parsedDate = 0;
            var splittedDate = input.split(" ");
            if(splittedDate.length == 3) {
                parsedDate = splittedDate[2];
            } else if(splittedDate.length == 2) {
                parsedDate = splittedDate[0];
            } else {
                console.log("Error obtaining parsed date: ", parsedDate);
            }
            return parsedDate;

        }

    })
    .controller("carouselController", ['$scope', '$log', '$interval', function ($scope, $log, $interval) {
        $log.info("Initializing carousel... with elements: ", $scope.elements);
        $scope.value = 0;
        $scope.isPlaying = false;

        $scope.dotClick = function(index) {
            $log.info("User clicked on dot: ",index);
            $scope.value=index;
        };


        $scope.carouselInterval = null;
        $scope.play = function () {
            $scope.isPlaying = true;
            $scope.carouselInterval = $interval(function () {
                $scope.value = ($scope.value + 1) % $scope.elements.length;
            }, 10000);

        };

        $scope.stop = function () {
            $scope.isPlaying = false;
            $interval.cancel($scope.carouselInterval);
        };

        $scope.play();
    }]);