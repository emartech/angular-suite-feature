'use strict';

const Filter = require('./is-on');
const FlipperService = require('suite-flipper-js');

describe('is-on filter', function() {

  let filter;
  let flipperService;

  beforeEach(function() {
    flipperService = new FlipperService(['bi', 'dummy']);
    filter = new Filter(flipperService);
  });

  describe('#transform', function() {

    it('should return true if the given filter is on', function() {
      this.expect(filter.transform('bi')).to.be.true;
    });


    it('should return false if the given filter is off', function() {
      this.expect(filter.transform('not.in.the.given.list')).to.be.false;
    });


    it(`should always run in the filter's context`, function() {
      this.expect(filter.transform.call(null, 'bi')).to.be.true;
    });

  });

});
