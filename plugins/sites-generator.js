var _ = Npm.require('lodash');
var path = Npm.require('path');
var fs = Npm.require('fs');

sitesGenerator = {};

/**
  Generates the site folder if it does not exist.
*/
sitesGenerator.generate = function(basePath, customFomanticData, sitesData) {
  if (fs.existsSync(path.join(basePath, 'site'))) {
    return;
  }
  var sitesFiles = requireSitesFiles(sitesData, customFomanticData);
  var files = sitesFiles.overrides.concat(sitesFiles.variables);
  _.each(files, function(filePath) {
    createSitesFile(filePath, basePath);
  });
};

var createSitesFile = function(sourcePath, basePath) {
  var content = fileHandler.getTextFile(sourcePath);
  var relativePath = sourcePath.match(/site\/.+/)[0];
  fileHandler.writeTextFile(basePath, relativePath, content);
};

var requireSitesFiles = function(sitesData, customFomanticData) {
  var files = {};

  files.overrides = sitesData.overridesFilePaths();
  files.variables = sitesData.variablesFilePaths();
  // Provide a custom matcher function because definition has name "site" and all the path has "_site".
  files.overrides = customFomanticData.filterDefinitions(files.overrides, function(string, name) {
    return string.search(name + ".overrides") != -1;
  });
  files.variables = customFomanticData.filterDefinitions(files.variables, function(string, name) {
    return string.search(name + ".variables") != -1;
  });
  return files;
};
