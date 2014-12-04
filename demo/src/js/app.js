'use strict';

(function(){

    var app = angular.module('myApp', [
        'angular.bs.modal'
    ]);

    app.controller('DemoController', function ($scope, modal) {
        $scope.lorem = 'Ipsum';
        $scope.openModal = function () {
            var openModal = modal.open({
                scope: $scope,
                templateUrl: 'open-modal.ng',
                controller: 'ModalController',
                controllerAs: 'm',
                size: 'lg'
            });
        };
    });

    app.controller('ModalController', function ($scope, $modalInstance) {
        this.aaa = 'aaaa';
        $scope.asdf = 'asdf';
        $scope.submit = function () {
            console.log($modalInstance);
            // $modalInstance.close($scope.selected.item);
        };
    });

})();
