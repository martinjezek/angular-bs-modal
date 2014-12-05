# Angular BS Modal
[![GitHub Tag][github-tag-image]][github-tag-url]
[![Build Status][travis-image]][travis-url]
[![Dependencies Status][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]

> This plugin provides an extension of Bootstrap Modal for AngularJS

## Install

```shell
bower install angular-bs-modal --save
```

## Usage

Link the script from `bower_components` folder.

```html
<script src="/bower_components/angular-bs-modal/dist/angular-bs-modal.min.js"></script>
```

Add `angular.bs.modal` as a dependency to your AngularJS application.

```js
var app = angular.module('myApp', [
    'angular.bs.modal'
]);
```

Add `modal` service to your controller and configure the modal `options`.

```js
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
```

Create a new `ModalController` and use it as follows.

```js
app.controller('ModalController', function ($scope, $modalInstance, $http) {
    $scope.item = {};

    $scope.categories = [];
    $http.get('/data/categories.json').success(function (res) {
        $scope.categories = res;
        $scope.item.category = res[0].id; // ng-hack -> to select the first item
    });

    $scope.save = function () {
        $scope.items.push($scope.item);
        $modalInstance.close();
    };
});
```

Modal's content `template` using `Jade`. Obviously, it must be compiled when AngularJS is accessing url.

```jade
form.form-horizontal(name='formAddItem', ng-submit='formAddItem.$valid && save()', method='post', role='form', novalidate)
    div.modal-header
        button.close(type='button', data-dismiss='modal')
            span(aria-hidden='true') &times;
            span.sr-only Close
        h4.modal-title Add Item
    div.modal-body
        div.form-group(ng-class='{"has-error": formAddItem.name.$invalid && formAddItem.name.$dirty || formAddItem.name.$invalid && formAddItem.$submitted}')
            label.control-label.col-sm-3(for='form-name') Name
            div.col-sm-9
                input.form-control(ng-model='item.name', required, type='text', name='name', id='form-name', placeholder='Name')
        div.form-group(ng-class='{"has-error": formAddItem.description.$invalid && formAddItem.description.$dirty || formAddItem.description.$invalid && formAddItem.$submitted}')
            label.control-label.col-sm-3(for='form-description') Description
            div.col-sm-9
                textarea.form-control(ng-model='item.description', required, rows='4', name='description', id='form-description', placeholder='Description')
        div.form-group.last
            label.control-label.col-sm-3(for='form-name') Category
            div.col-sm-9
                select.form-control(ng-model='item.category', ng-options='category.id as category.name for category in categories', type='text', name='category', id='form-name', placeholder='Name')
    div.modal-footer
        button.btn.btn-default(type='button', data-dismiss='modal') Close
        input.btn.btn-primary(type='submit', value='Save')
```

## Options

#### options.scope

Type: `Object`
Default: `$rootScope`
Example: `$scope`

Add a controller's `$scope` to the modal window or use the default.

#### options.templateUrl

Type: `String`
Default: `null`
Example: `/modal-add-item.html`

Add a link to the modal's content template. The script ng-template are supported.

#### options.controller

Type: `String`
Default: `null`
Example: `ModalController`

The name of a new modal's controller.

#### options.controllerAs

Type: `String`
Default: `null`
Example: `modal`

#### options.size

Type: `String`
Default: `md`
Example: `lg`

Change the modal size to `xs`, `lg` or your own.

#### options.backdrop

Type: `Boolean`
Default: `true`
Example: `false`

Display a grey background layer.

#### options.keyboard

Type: `Boolean`
Default: `true`
Example: `false`

Disallow closing the window by pressing ESC key.

## Release History

See the [CHANGELOG.md](https://github.com/martinjezek/angular-bs-modal/blob/master/CHANGELOG.md)

## License

[MIT license](https://raw.githubusercontent.com/martinjezek/angular-bs-modal/master/LICENSE)

[github-tag-image]: http://img.shields.io/github/tag/martinjezek/angular-bs-modal.svg?style=flat
[github-tag-url]: https://github.com/martinjezek/angular-bs-modal/tags
[travis-image]: http://img.shields.io/travis/martinjezek/angular-bs-modal.svg?style=flat
[travis-url]: https://travis-ci.org/martinjezek/angular-bs-modal
[david-image]: http://img.shields.io/david/martinjezek/angular-bs-modal.svg?style=flat
[david-url]: https://david-dm.org/martinjezek/angular-bs-modal#info=dependencies
[david-dev-image]: http://img.shields.io/david/dev/martinjezek/angular-bs-modal.svg?style=flat
[david-dev-url]: https://david-dm.org/martinjezek/angular-bs-modal#info=devDependencies
