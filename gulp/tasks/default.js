var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Default task
// runSequence 'build:dev' first and then watch for changes
gulp.task('default', function (callback) {
  runSequence(['build:development'], 'watch',
    callback
  )
})

gulp.task('build', function (callback) {
  runSequence('build:production',
    callback
  )
})

// Watch
gulp.task('watch',
  ['sass:watch',
  'sprite:svg:watch',
  'sprite:png:watch'
]);
