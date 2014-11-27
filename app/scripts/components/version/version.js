'use strict';

angular.module('apbLeague.version', [
  'apbLeague.version.interpolate-filter',
  'apbLeague.version.version-directive'
])

.value('version', '0.1');
