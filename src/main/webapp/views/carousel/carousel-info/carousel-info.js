/**
 * Created by Victor on 1/22/2017.
 */
angular.module("carousel")
    .directive("carouselInfo", function(){
        return {
            restrict: 'E',
            templateUrl: 'views/carousel/carousel-info/carousel-info.html',
            scope: {
                person: '='
            }
        };
    });