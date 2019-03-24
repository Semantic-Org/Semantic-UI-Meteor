var _ = Npm.require('lodash');
var fs = Npm.require('fs');
var path = Npm.require('path');

fileHandler = {};

fileHandler.getTextFileContents = function(paths) {
  var contents = [];
  _.each(paths, function(path) {
     contents.push(fomanticUiDataPackage.getTextFile(path));
  });
  return contents;
};

fileHandler.getTextFile = function(path) {
  return fomanticUiDataPackage.getTextFile(path);
};

fileHandler.getBinaryFile = function(path) {
  return fomanticUiDataPackage.getBinaryFile(path);
};

fileHandler.getBinaryFileBuffer = function(path) {
  var binaryContent = fomanticUiDataPackage.getBinaryFile(path);
  return new Buffer(binaryContent);
};

fileHandler.fileExists = function(basePath, relativePath) {
  var file = path.join(basePath, relativePath);
  return fs.existsSync(file);
};

fileHandler.readTextFile = function(basePath, relativePath) {
  var file = path.join(basePath, relativePath);
  return fs.readFileSync(file, { encoding: 'utf8' });
};

fileHandler.createDir = function(basePath, relativePath) {
  var splitedPath = relativePath.split('/');
  _.reduce(splitedPath, function(resultPath, partPath) {
    resultPath = path.join(resultPath, partPath);
    if (!fs.existsSync(resultPath)) {
      fs.mkdirSync(resultPath);
    }
    return resultPath;
  }, basePath);
};

fileHandler.writeTextFile = function(basePath, relativeFilePath, content) {
  fileHandler.createDir(basePath, path.dirname(relativeFilePath));
  fs.writeFileSync(path.join(basePath, relativeFilePath), content, { encoding: 'utf8' });
};

fileHandler.writeTextFileFromContents = function(basePath, relativeFilePath, contents) {
  fileHandler.createDir(basePath, path.dirname(relativeFilePath));
  fs.writeFileSync(path.join(basePath, relativeFilePath), contents.join('\n'), { encoding: 'utf8' });
};

fileHandler.writeBinaryFile = function(basePath, relativeFilePath, binaryContent) {
  fileHandler.createDir(path.dirname(relativeFilePath));
  var buffer = new Buffer(binaryContent);
  var wstream = fs.createWriteStream(path.join(basePath, relativeFilePath));
  wstream.write(buffer);
  wstream.end();
};

fileHandler.removeFile = function(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }
  fs.unlinkSync(filePath);
};

fileHandler.removeDir = function(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }
  filesToDelete = fs.readdirSync(dirPath);
  _.each(filesToDelete, function(f) {
    var filePath = path.join(dirPath, f);
    if (fs.statSync(filePath).isDirectory()) {
      fileHandler.removeDir(filePath);
    } else if (fs.statSync(filePath).isFile()) {
      fileHandler.removeFile(filePath);
    }
  });
  fs.rmdirSync(dirPath);
};
