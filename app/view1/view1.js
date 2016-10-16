'use strict';

angular.module('jsonService', ['ngResource'])
    .factory('JsonService', function ($resource) {
        return $resource('items.json');
    });


angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap', 'jsonService'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', 'JsonService', function ($scope, JsonService) {
        $scope.items = [];

        angular.element(window).bind("scroll", function() {
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
            var windowBottom = windowHeight + window.pageYOffset;
            var delta = 15;
            if (windowBottom + delta >= docHeight) {
                if ($scope.infiniteScroll){
                    $scope.loadMore();
                }
            }
        });

        $scope.loadMore = function(){
            JsonService.query(function (data) {
                $scope.items = $scope.items.concat(data);
            });
        };
        $scope.loadMore();
    }]);
