'use strict';

const MODULE_NAME = 'suiteFeature';
const IsOffFilter = require('./filter/is-off');
const IsOnFilter = require('./filter/is-on');
const SuiteFlipper = require('suite-flipper-js');

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .filter('featureIsOn', IsOnFilter.create())
    .filter('featureIsOff', IsOffFilter.create())
    .provider('feature', function() {
      let features = [];
      return {
        setFeatures: function(value) {
          features = value;
        },

        $get: [function() {
          return new SuiteFlipper(features);
        }]
      };
    });

  return MODULE_NAME;
};
