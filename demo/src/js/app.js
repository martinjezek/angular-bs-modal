'use strict';

(function(){

    var app = angular.module('myApp', [
        'angular.bs.modal'
    ]);

    app.controller('DemoController', function ($scope, modal) {
        $scope.items = [];
        $scope.addItem = function () {
            modal.open({
                scope: $scope,
                templateUrl: '/modal-add-item.html',
                controller: 'ModalController'
            });
        };
    });

    app.controller('ModalController', function ($scope, modalInstance, $http) {
        $scope.item = {};

        $scope.categories = [];
        $http.get('/data/categories.json').success(function (res) {
            $scope.categories = res;
            $scope.item.category = res[0].id; // ng-hack -> to select the first item
        });

        $scope.save = function () {
            $scope.items.push($scope.item);
            modalInstance.close();
        };
    });

})();
