Package.describe({
  name: 'semantic:ui',
  version: '1.12.0_1',
  summary: 'Official Semantic UI Integration for Meteor',
  git: 'https://github.com/Semantic-Org/Semantic-UI-Meteor.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "generateSemanticUi",
  use: [
    'ejson@1.0.6',
    'semantic:ui-data@1.12.0_1'
  ],
  sources: [
    'semantic-ui.js',
    'data/definitions-data.js',
    'data/themes-data.js',
    'data/sites-data.js',
    'data/custom-semantic-data.js',
    'plugins/file-handler.js',
    'plugins/definitions-generator.js',
    'plugins/themes-generator.js',
    'plugins/sites-generator.js',
    'plugins/custom-semantic-json-generator.js',
    'plugins/generator.js'
  ],
  npmDependencies: {
    "lodash": "3.6.0",
    "diff": "1.3.2"
  }
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.imply('flemay:less-autoprefixer@1.0.1');
});
