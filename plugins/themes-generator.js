var _ = Npm.require('lodash');
var path = Npm.require('path');
var fs = Npm.require('fs');

themesGenerator = {};

/**
  Always generates assets everytime the server restarts or refreshes
*/
themesGenerator.generateAssets = function(basePath, customSemanticData, themesData, compileStep) {
  var themesFiles = requiredThemesFiles(themesData, customSemanticData);
  createAssetFiles(compileStep, themesFiles.assets);
};

/**
  Generates the themes folder.
*/
themesGenerator.generate = function(basePath, customSemanticData, themesData, compileStep) {
  cleanUp(basePath);

  var themesFiles = requiredThemesFiles(themesData, customSemanticData);
  var files = themesFiles.overrides.concat(themesFiles.variables);
  _.each(files, function(filePath) {
    createThemeFile(filePath, basePath);
  });
  createThemeConfigFile(basePath, themesData);
  createThemeLessFile(basePath, themesData);
};

var cleanUp = function(basePath) {
  fileHandler.removeDir(path.join(basePath, 'themes'));
  fileHandler.removeFile(path.join(basePath, 'theme.config'));
  fileHandler.removeFile(path.join(basePath, 'theme.import.less'));
};

var createAssetFiles = function(compileStep, assetsFiles) {
  _.each(assetsFiles, function(filePath) {
    compileStep.addAsset({
      path: filePath,
      data: fileHandler.getBinaryFileBuffer(filePath)
    });
  });
};

/**
  Creates the file theme.config.import.less if it does not exist.
*/
var createThemeConfigFile = function(basePath, themesData) {
  if (fs.existsSync(path.join(basePath, 'theme.config.import.less'))) {
    return;
  }
  var config = fileHandler.getTextFile(themesData.themeConfigFile);
  fileHandler.writeTextFile(basePath, 'theme.config.import.less', config);
};

var createThemeLessFile = function(basePath, themesData) {
  fileHandler.writeTextFile(basePath, 'theme.import.less', fileHandler.getTextFile(themesData.themeLessFile));
};

var createThemeFile = function(sourcePath, basePath) {
  var content = fileHandler.getTextFile(sourcePath);
  var relativePath = sourcePath.match(/themes\/.+/)[0];
  fileHandler.writeTextFile(basePath, relativePath, content);
};

var requiredThemesFiles = function(themesData, customSemanticData) {
  var files = {};
  files.overrides = themesData.overridesFilePaths();
  files.variables = themesData.variablesFilePaths();
  files.assets = themesData.assetsFilePaths();

  files.overrides = customSemanticData.filterThemes(files.overrides);
  files.variables = customSemanticData.filterThemes(files.variables);
  files.assets = customSemanticData.filterThemes(files.assets);

  files.overrides = customSemanticData.filterDefinitions(files.overrides);
  files.variables = customSemanticData.filterDefinitions(files.variables);
  files.assets = customSemanticData.filterDefinitions(files.assets, function(string, name) {
    // icon and flag in assets end with a 's'
    var regex = new RegExp("\\W" + name + "\\w\\W", 'g');
    return string.match(regex) !== null;
  });
  return files;
};
