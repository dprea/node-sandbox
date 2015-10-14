var gulp = require('gulp');
var sass = require('gulp-sass');


var defaultAssets = {
    scss: './client/assets/sass/**/*.scss',
    css: './client/assets/css/'
};
    
// Compiles SASS to CSS on .scss file change.
// TODO: Add Linting
// TODO: Add Minification 
gulp.task('sass:compile', function() {
    gulp.src(defaultAssets.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(defaultAssets.css));
});

gulp.task('sass:watch', function () {
  gulp.watch(defaultAssets.scss, ['sass:compile']);
});

// Default task when gulp is ran from CLI.
// @param - Name of task runner
// @param - @type - ARRAY - list tasks to execute.
gulp.task('default', ['sass:watch']);