var _ = Npm.require('lodash');
var path = Npm.require('path');
var fs = Npm.require('fs');

definitionsGenerator = {};
/**
  Generates the definitions folder.
*/
definitionsGenerator.generate = function(basePath, customFomanticData, definitionsData) {
  cleanUp(basePath);
  var definitionsfiles = requiredDefinitionsfiles(definitionsData, customFomanticData);
  var files = definitionsfiles.less.concat(definitionsfiles.js);
  _.each(files, function(filePath) {
    createDefinitionsFile(filePath, basePath);
  });
  createFomanticLessFile(basePath, customFomanticData);
};

var cleanUp = function(basePath) {
  fileHandler.removeDir(path.join(basePath, 'definitions'));
  fileHandler.removeFile(path.join(basePath, 'fomantic.less'));
};

var createFomanticLessFile = function(basePath, customFomanticData) {
  var file = fileHandler.getTextFile(fomanticUiPackage.definitionsData.fomanticLessFile);
  var lines = file.split('\n');
  var newLines = [];
  var definitionsNames = customFomanticData.requiredDefinitionsNames();
  _.each(lines, function(l) {
    if (l.match(/@import/)) {
      var matchedDefinitionName = _.find(definitionsNames, function(d) {
        return l.search("/" + d + ".") != -1;
      });
      if (matchedDefinitionName) {
        newLines.push(l);
      }
    } else {
      newLines.push(l);
    }
  });
  fileHandler.writeTextFile(basePath, 'fomantic.less', newLines.join('\n'));
};

var createDefinitionsFile = function(sourcePath, basePath) {
  var content = fileHandler.getTextFile(sourcePath);
  var relativePath = sourcePath.match(/definitions\/.+/)[0];
  fileHandler.writeTextFile(basePath, relativePath, content);
};

var requiredDefinitionsfiles = function(definitionsData, customFomanticData) {
  var files = {};
  files.less = customFomanticData.filterDefinitions(definitionsData.lessFilePaths());
  files.js = customFomanticData.filterDefinitions(definitionsData.jsFilePaths());

  return files;
};
