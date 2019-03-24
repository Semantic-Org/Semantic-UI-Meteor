var _ = Npm.require('lodash');

var customFomanticData = {};
customFomanticData.data = {};

customFomanticData.filterDefinitions = function(strings, matcherFunc) {
  return filter(this.requiredDefinitionsNames(), strings, matcherFunc);
};

customFomanticData.requiredDefinitionsNames = function() {
  var definitionsNames = _.keys(this.data.definitions);
  var that = this;
  return _.filter(definitionsNames, function(name) {
    return that.data.definitions[name];
  });
};

customFomanticData.filterThemes = function(strings, matcherFunc) {
  return filter(this.requiredThemesNames(), strings, matcherFunc);
};

/**
  filter returns the strings that match \Wname\W or the provided matcher function.
*/
var filter = function(names, strings, matcherFunc) {
  return _.filter(strings, function(s) {
    var match = _.find(names, function(name) {
      if (matcherFunc) {
        return matcherFunc(s, name);
      } else {
        var regex = new RegExp("\\W" + name + "\\W", 'g');
        return s.match(regex) !== null;
      }
    });
    return match;
  });
};

customFomanticData.requiredThemesNames = function() {
  var themesNames = _.keys(this.data.themes);
  var that = this;
  return _.filter(themesNames, function(name) {
    return that.data.themes[name];
  });
};

customFomanticData.validate = function(definitionsData, themesData) {
  var throwError = function(name) {
    throw new Error('definition/theme "' + name + '" does not exist. Please update your custom.fomantic.json file.');
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

fomanticUiPackage.customFomanticData = customFomanticData;
