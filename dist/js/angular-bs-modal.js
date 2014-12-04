/*!
 * Angular BS Modal v0.0.0 (https://github.com/martinjezek/angular-bs-modal)
 * Martin Jezek <info@martin-jezek.com>
 * Licensed under MIT (https://raw.githubusercontent.com/martinjezek/angular-bs-modal/master/LICENSE)
 */
"use strict";

!function() {
    var app = angular.module("angular.bs.modal", []);
    app.service("modal", function($http, $templateCache, $compile, $document, $rootScope, $controller) {
        var defaultOptions = {
            backdrop: !0,
            keyboard: !0,
            show: !0,
            templateUrl: null,
            size: "md"
        }, body = $document.find("body").eq(0), modalContainer = angular.element('<div id="modal-container"></div>'), modalTemplateString = '<div class="modal fade"><div class="modal-dialog modal-{{$modalOptions.size}}"><div class="modal-content"></div></div></div>';
        body.append(modalContainer), this.open = function(modalOptions) {
            var options = angular.extend({}, defaultOptions, modalOptions);
            $http.get(options.templateUrl, {
                cache: $templateCache
            }).success(function(content) {
                {
                    var modalTemplate = angular.element(modalTemplateString), modalContent = modalTemplate.find(".modal-content").eq(0);
                    modalTemplate.find(".modal-dialog").eq(0);
                }
                modalContent.html(content);
                var controllerInstance, modalScope = (modalOptions.scope || $rootScope).$new(), controllerLocals = {};
                modalScope.$modalOptions = {
                    size: options.size
                }, modalOptions.controller && (controllerLocals.$scope = modalScope, controllerLocals.$modalInstance = modalTemplate, 
                controllerInstance = $controller(modalOptions.controller, controllerLocals), modalOptions.controllerAs && (modalScope[modalOptions.controllerAs] = controllerInstance));
                var modalTemplateCompiled = $compile(modalTemplate)(modalScope);
                return modalContainer.append(modalTemplateCompiled), modalTemplate.modal(options).on("hidden.bs.modal", function() {
                    modalContainer.html("");
                }), options;
            });
        };
    });
}();