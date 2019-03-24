const _ = Npm.require('lodash');
const path = Npm.require('path');
const diff = Npm.require('diff');

Plugin.registerCompiler({
  extensions: ['fomantic.json'],
  archMatching: 'web'
}, () => new FomanticGenerator());

class FomanticGenerator {
  processFilesForTarget(files) {
    var customJsonFile = files[0];
    try {
      generate(customJsonFile);
    } catch (error) {
      customJsonFile.error({
        message: "Fomantic UI Generator: " + error.message,
        sourcePath: error.filename || customJsonFile.getPathInPackage(),
        line: error.line,
        column: error.column
      });
      return;
    }
  }
}

var generate = function(customJsonFile) {
  var customJsonContent = customJsonFile.getContentsAsString();
  var basePath = customJsonFile.getDirname();

  if (customJsonContent !== '') {
    fomanticUiPackage.customFomanticData.data = JSON.parse(customJsonContent);

    if (isGeneratingNeeded(basePath, customJsonContent)) {
      fomanticUiPackage.customFomanticData.validate(fomanticUiPackage.definitionsData, fomanticUiPackage.themesData);
      definitionsGenerator.generate(basePath, fomanticUiPackage.customFomanticData, fomanticUiPackage.definitionsData);
      themesGenerator.generate(basePath, fomanticUiPackage.customFomanticData, fomanticUiPackage.themesData);
      sitesGenerator.generate(basePath, fomanticUiPackage.customFomanticData, fomanticUiPackage.sitesData);
      fileHandler.writeTextFile(basePath, '.custom.fomantic.json', customJsonContent);
    }
    // Always generate assets
    themesGenerator.generateAssets(basePath, fomanticUiPackage.customFomanticData, fomanticUiPackage.themesData, customJsonFile);
  } else {
    customJsonGenerator.generate(basePath, fomanticUiPackage.definitionsData, fomanticUiPackage.themesData);
    fileHandler.writeTextFile(basePath, '.custom.fomantic.json', fileHandler.readTextFile(basePath, 'custom.fomantic.json'));
  }
};

var isGeneratingNeeded = function(basePath, customJsonContent) {
  if (customJsonContent === '') {
    return true;
  }
  if (!fileHandler.fileExists(basePath, '.custom.fomantic.json')) {
    return true;
  }

  var dotCustomJsonContent = fileHandler.readTextFile(basePath, '.custom.fomantic.json');

  var dotCustomJson;
  try {
    dotCustomJson = JSON.parse(dotCustomJsonContent);
  } catch (error) {
    return true;
  }
  var diffResult =  diff.diffJson(dotCustomJson, JSON.parse(customJsonContent));

  return diffResult.length == 1 ? false : true;
};
