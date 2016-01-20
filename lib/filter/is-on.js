'use strict';

let Pipe = require('ng1-decorators').Pipe;

@Pipe
class IsOnFilter {

  constructor(feature) {
    this._featureService = feature;
    this.transform = this.transform.bind(this);
  }


  transform(featureName) {
    return this._featureService.isOn(featureName);
  }

}

module.exports = IsOnFilter;
