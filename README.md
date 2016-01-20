# Angular Suite Feature

Install
---------

```bash
npm install --save angular-suite-feature
```

Usage
---------

```javascript
require('angular-suite-feature')(angular);

var myApp = angular
  .module('your-app', ['suiteFeature'])
  .config(['featureProvider', (featureProvider) => {
    featureProvider.setFeatures(['dummy', 'otherDummy']);
  }]);
```

Service
---------

```javascript
myApp.controller('GreetingController', ['$scope', 'feature', function($scope, feature) {
  $scope.reload = function() {
    if (feature.isOn('yourFeatureName')) {
      // do something
    } else {
      // do something else
    }
  };

  $scope.someThing = function() {
    if (feature.isOff('yourFeatureName')) {
      // do something
    } else {
      // do something else
    }
  };
}]);
```

Filter
---------

```javascript
.div(ng-show="{{ 'self_service_dashboard_ignore_revenue' | featureIsOn }}")
  | feature is On

.div(ng-show="{{ 'self_service_dashboard_ignore_revenue' | featureIsOff }}")
  | feature is Off
```
