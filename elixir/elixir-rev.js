var rev = require('gulp-rev');

var Task = Elixir.Task;

Elixir.extend('rev', function() {
    new Task('rev', function() {
        return gulp.src(['dist/css/*.css', 'dist/js/*.js'], {base: 'dist'})
        	.pipe(rev())
        	.pipe(gulp.dest('dist'))
        	.pipe(rev.manifest())
        	.pipe(gulp.dest('dist'))
    });
})