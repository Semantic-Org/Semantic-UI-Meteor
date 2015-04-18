var _ = Npm.require('lodash');
var path = Npm.require('path');
var fs = Npm.require('fs');

definitionsGenerator = {};
/**
  Generates the definitions folder.
*/
definitionsGenerator.generate = function(basePath, customSemanticData, definitionsData) {
  cleanUp(basePath);
  var definitionsfiles = requiredDefinitionsfiles(definitionsData, customSemanticData);
  var files = definitionsfiles.less.concat(definitionsfiles.js);
  _.each(files, function(filePath) {
    createDefinitionsFile(filePath, basePath);
  });
  createSemanticLessFile(basePath, customSemanticData);
};

var cleanUp = function(basePath) {
  fileHandler.removeDir(path.join(basePath, 'definitions'));
  fileHandler.removeFile(path.join(basePath, 'semantic.less'));
};

var createSemanticLessFile = function(basePath, customSemanticData) {
  var file = fileHandler.getTextFile(semanticUiPackage.definitionsData.semanticLessFile);
  var lines = file.split('\n');
  var newLines = [];
  var definitionsNames = customSemanticData.requiredDefinitionsNames();
  _.each(lines, function(l) {
    if (l.match(/@import/)) {
      var matchedDefinitionName = _.find(definitionsNames, function(d) {
        return l.search(d) != -1;
      });
      if (matchedDefinitionName) {
        newLines.push(l);
      }
    } else {
      newLines.push(l);
    }
  });
  fileHandler.writeTextFile(basePath, 'semantic.less', newLines.join('\n'));
};

var createDefinitionsFile = function(sourcePath, basePath) {
  var content = fileHandler.getTextFile(sourcePath);
  var relativePath = sourcePath.match(/definitions\/.+/)[0];
  fileHandler.writeTextFile(basePath, relativePath, content);
};

var requiredDefinitionsfiles = function(definitionsData, customSemanticData) {
  var files = {};
  files.less = customSemanticData.filterDefinitions(definitionsData.lessFilePaths());
  files.js = customSemanticData.filterDefinitions(definitionsData.jsFilePaths());

  return files;
};
