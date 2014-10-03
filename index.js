var _ = require('lodash')
var shell = require('gulp-shell');
var gutil = require('gulp-util')

var PLUGIN_NAME = 'openport';

function openport( options ) {
  if (typeof options === 'string') {
    options = [commands]
  }

  if (!Array.isArray(options)) {
    throw new gutil.PluginError(PLUGIN_NAME, 'Please give options as Array - [privatePort, publicPort]');
  }

  shell.task([
    'given private port is ' + options[0],
    'given public port is ' + options[1]
  ]);

  var stream = {};

  return stream;
}

module.exports = openport
