'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-simple-auth': {
      useSessionSetupMethod: true,
    },
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },
    babel: {
      sourceMaps: 'inline',
    },
    '@appuniversum/ember-appuniversum': {
      disableWormholeElement: true,
    },
  });
  return app.toTree();
};
