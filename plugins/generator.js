var _ = Npm.require('lodash');
var path = Npm.require('path');
var diff = Npm.require('diff');

var handler = function (compileStep, isLiterate) {
  var basePath = path.dirname(compileStep._fullInputPath);
  var customJsonFile = compileStep.read().toString('utf8');
  try {
    generate(compileStep, basePath, customJsonFile);

  } catch (error) {
    compileStep.error({
      message: "Semantic UI Generator: " + error.message,
      sourcePath: error.filename || compileStep.inputPath,
      line: error.line,
      column: error.column + 1
    });
    return;
  }
};

var generate = function(compileStep, basePath, customJsonFile) {
  if (customJsonFile !== '') {
    semanticUiPackage.customSemanticData.data = JSON.parse(customJsonFile);

    if (isGeneratingNeeded(compileStep, basePath, customJsonFile)) {
      semanticUiPackage.customSemanticData.validate(semanticUiPackage.definitionsData, semanticUiPackage.themesData);
      definitionsGenerator.generate(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.definitionsData);
      themesGenerator.generate(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.themesData, compileStep);
      sitesGenerator.generate(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.sitesData);
      fileHandler.writeTextFile(basePath, '.custom.semantic.json', customJsonFile);
    }
    // Always generate assets
    themesGenerator.generateAssets(basePath, semanticUiPackage.customSemanticData, semanticUiPackage.themesData, compileStep);
  } else {
    customJsonGenerator.generate(basePath, semanticUiPackage.definitionsData, semanticUiPackage.themesData);
    fileHandler.writeTextFile(basePath, '.custom.semantic.json', fileHandler.readTextFile(basePath, 'custom.semantic.json'));
  }
};

var isGeneratingNeeded = function(compileStep, basePath, customJsonFile) {
  if (customJsonFile === '') {
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
  var diffResult =  diff.diffJson(dotCustomJson, JSON.parse(customJsonFile));

  return diffResult.length == 1 ? false : true;
};

Plugin.registerSourceHandler("semantic.json", {archMatching: 'web'}, handler);
