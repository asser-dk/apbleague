'use strict';

describe('apbLeague.version module', function() {
  beforeEach(module('apbLeague.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
