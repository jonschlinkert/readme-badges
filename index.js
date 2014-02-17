var path = require('path');
var glob = require('globule');

var expand = function(filepath) {
  var dir = path.join(__dirname, filepath).replace(/\\/g, '/');
  return glob.find(dir, {filter: 'isFile'});
};
module.exports = expand('./templates/**/*');