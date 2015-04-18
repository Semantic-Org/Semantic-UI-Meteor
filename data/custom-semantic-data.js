var _ = Npm.require('lodash');

var customSemanticData = {};
customSemanticData.data = {};

customSemanticData.filterDefinitions = function(strings, matcherFunc) {
  return filter(this.requiredDefinitionsNames(), strings, matcherFunc);
};

customSemanticData.requiredDefinitionsNames = function() {
  var definitionsNames = _.keys(this.data.definitions);
  var that = this;
  return _.filter(definitionsNames, function(name) {
    return that.data.definitions[name];
  });
};

customSemanticData.filterThemes = function(strings, matcherFunc) {
  return filter(this.requiredThemesNames(), strings, matcherFunc);
};

var filter = function(names, strings, matcherFunc) {
  return _.filter(strings, function(s) {
    var match = _.find(names, function(name) {
      if (matcherFunc) {
        return matcherFunc(s, name);
      } else {
        return s.search(name) != -1;
      }
    });
    return match;
  });
};

customSemanticData.requiredThemesNames = function() {
  var themesNames = _.keys(this.data.themes);
  var that = this;
  return _.filter(themesNames, function(name) {
    return that.data.themes[name];
  });
};

customSemanticData.validate = function(definitionsData, themesData) {
  var throwError = function(name) {
    throw new Error('definition/theme "' + name + '"" does not exist. Please update your custom.semantic.json file.');
  };
  _.each(_.keys(this.data.definitions), function(definitionName) {
    if (!definitionsData.exists(definitionName)) {
      throwError(definitionName);
    }
  });
  _.each(_.keys(this.data.themes), function(themeName) {
    if (!themesData.exists(themeName)) {
      throwError(themeName);
    }
  });
};

semanticUiPackage.customSemanticData = customSemanticData;
