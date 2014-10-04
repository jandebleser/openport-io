var gulp = require( 'gulp' );
var shell = require('gulp-shell');
var gutil = require('gulp-util');

var PLUGIN_NAME = 'openport';

function openport( options ) {

  if ( Number.isNaN( options ) ) {
    throw new gutil.PluginError(PLUGIN_NAME, 'Please provide a private port as an integer');
  }

  return gulp.src('')
    .pipe(shell([
      'openport ' + options
    ]))
}

module.exports = openport;
