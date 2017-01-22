/**
 * Created by Victor on 1/22/2017.
 */
angular.module("astronomersModule")
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider)
    {
        console.log("Initializing routeProvider");
        $routeProvider
            .when('/', {
                templateUrl: 'js/view.html',
                controller: 'AstronomersListCtrl'
            })
            .otherwise({
                redirectTo : '/'
            });
    }]);