/**
 * Created by Victor on 1/22/2017.
 */
angular.module("astronomersModule")
    .controller('AstronomersListCtrl', ['$scope', '$log', function ($scope, $log) {
        $log.info("Initialising astronomersList");
        $scope.elements = [{id:0,photo: '', name:'Eratosthenes of Cyrene',birth:'276 BC', description: 'Eratosthenes of Cyrene was a Greek mathematician, geographer, poet, astronomer, and music theorist. He was a man of learning, becoming the chief librarian at the Library of Alexandria. He invented the discipline of geography, including the terminology used today.'},
            {id:1,photo: '', name:'Rob',birth:'1981', description: 'lol 2'}]
    }]);
