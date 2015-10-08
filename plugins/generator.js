const _ = Npm.require('lodash');
const path = Npm.require('path');
const diff = Npm.require('diff');

Plugin.registerCompiler({
  extensions: ['semantic.json'],
  archMatching: 'web'
}, () => new SemanticGenerator());

class SemanticGenerator {
  processFilesForTarget(files) {
    var customJsonFile = files[0];
    try {
      generate(customJsonFile);
    } catch (error) {
      customJsonFile.error({
        message: "Semantic UI Generator: " + error.message,
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
    semanticUiPackage.customSemanticData.data = JSON.parse(customJsonContent);

    if (isGeneratingNeeded(basePath, customJsonContent)) {
      semanticUiPackage.customSemanticData.validate(semanticUiPackage.definitionsData, semanticUiPackage.themesData);
      definitionsGenerator.generate(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.definitionsData);
      themesGenerator.generate(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.themesData);
      sitesGenerator.generate(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.sitesData);
      fileHandler.writeTextFile(basePath, '.custom.semantic.json', customJsonFile);
    }
    // Always generate assets
    themesGenerator.generateAssets(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.themesData, customJsonFile);
  } else {
    customJsonGenerator.generate(basePath, semanticUiPackage.definitionsData, semanticUiPackage.themesData);
    fileHandler.writeTextFile(basePath, '.custom.semantic.json', fileHandler.readTextFile(basePath, 'custom.semantic.json'));
  }
};

var isGeneratingNeeded = function(basePath, customJsonContent) {
  if (customJsonContent === '') {
    return true;
  }
  if (!fileHandler.fileExists(basePath, '.custom.semantic.json')) {
    return true;
  }

  var dotCustomJsonContent = fileHandler.readTextFile(basePath, '.custom.semantic.json');

  var dotCustomJson;
  try {
    dotCustomJson = JSON.parse(dotCustomJsonContent);
  } catch (error) {
    return true;
  }
  var diffResult =  diff.diffJson(dotCustomJson, JSON.parse(customJsonContent));

  return diffResult.length == 1 ? false : true;
};
