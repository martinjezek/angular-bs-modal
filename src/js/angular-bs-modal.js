'use strict';

(function(){

    var app = angular.module('angular.bs.modal', []);

    app.service('modal', function ($http, $templateCache, $compile, $document, $rootScope, $controller) {
        // Options
        var defaultOptions = {
            backdrop: true,
            keyboard: true,
            show: true,
            templateUrl: null,
            size: 'md'
        };

        // Init
        var body = $document.find('body').eq(0),
            modalContainer = angular.element('<div id="modal-container"></div>'),
            modalTemplateString = '<div class="modal fade"><div class="modal-dialog modal-{{$modalOptions.size}}"><div class="modal-content"></div></div></div>';
        body.append(modalContainer);

        // Open
        this.open = function (modalOptions) {
            var options = angular.extend({}, defaultOptions, modalOptions);
            $http.get(options.templateUrl, { cache: $templateCache }).success(function(content) {
                // render
                var modalTemplate = angular.element(modalTemplateString),
                    modalContent = modalTemplate.find('.modal-content').eq(0),
                    modalDialog = modalTemplate.find('.modal-dialog').eq(0);
                modalContent.html(content);

                // controller, scope
                var modalScope = (modalOptions.scope || $rootScope).$new();
                var controllerInstance, controllerLocals = {};

                modalScope.$modalOptions = {
                    size: options.size
                };

                if (modalOptions.controller) {
                    controllerLocals.$scope = modalScope;
                    controllerLocals.$modalInstance = modalTemplate;

                    controllerInstance = $controller(modalOptions.controller, controllerLocals);
                    if (modalOptions.controllerAs) {
                        modalScope[modalOptions.controllerAs] = controllerInstance;
                    }
                }

                // compile
                var modalTemplateCompiled = $compile(modalTemplate)(modalScope);
                modalContainer.append(modalTemplateCompiled);

                // open bootstrap modal
                modalTemplate.modal(options).on('hidden.bs.modal', function () {
                    // postclose bootstrap modal
                    modalContainer.html('');
                });
                return options;
            });
        };
    });

})();
