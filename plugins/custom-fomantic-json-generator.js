var _ = Npm.require('lodash');
var path = Npm.require('path');

customJsonGenerator = {};

/**
  Generates the custom semantic json file only if the file is empty.
*/
customJsonGenerator.generate = function(basePath, definitionsData, themesData) {
  var customJson = {};
  addDefinitions(customJson, definitionsData);
  addThemes(customJson, themesData);
  createCustomFomanticJsonFile(basePath, customJson);
};

var addDefinitions = function(customJson, definitionsData) {
  customJson.definitions = {};
  _.each(definitionsData.data, function(d) {
    customJson.definitions[d.name] = true;
  });
};

var addThemes = function(customJson, themesData) {
  customJson.themes = {};
  _.each(themesData.data, function(d) {
    customJson.themes[d.name] = false;
  });
  customJson.themes.default = true;
};

var createCustomFomanticJsonFile = function(basePath, customJson) {
  fileHandler.writeTextFile(basePath, "custom.fomantic.json", EJSON.stringify(customJson, {indent: true, canonical: true}));
};
