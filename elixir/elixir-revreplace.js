var revReplace = require('gulp-rev-replace');

var Task = Elixir.Task;

Elixir.extend('revreplace', function() {
    new Task('revreplace', function() {
    	var manifest = gulp.src('dist/rev-manifest.json')
    	return gulp.src('dist/*.html')
    		.pipe(revReplace({manifest: manifest}))
    		.pipe(gulp.dest('dist'));
    });
})