var todoApp = angular.module('todo', [])

todoApp.controller('AppCtrl', function ($scope) {
  $scope.userName = 'Maria';
  $scope
  $scope.items = [{
    text: 'task 1+',
    done: false,
    disabled: true
  }, {
    text: 'task 2+',
    done: false,
    disabled: true
  }, {
    text: 'task 3+',
    done: false,
    disabled: true
  }, {
    text: 'task 4+',
    done: false,
    disabled: true
  }];
});
