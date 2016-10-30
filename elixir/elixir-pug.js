var pug 	 = require('gulp-pug');
var jsonfile = require('jsonfile');
var file 	 = 'dist/rev-manifest.json';
var manifest = (jsonfile.readFileSync(file))

//console.dir(manifest)

//var revCSS = manifestData['app.css'];

//var revCSS = "test"

//console.dir(revCSS);

var manifestCSS;

var Task = Elixir.Task;

Elixir.extend('pug', function(data) {
    new Task('pug', function() {
    	//console.dir(manifestCSS);
        return gulp.src('src/views/*.pug')
        	//.pipe(manifestCSS = 'test')
  			.pipe(pug({
  				data: {
  					css: manifestCSS  				
  				}
  			}))
  			.pipe(gulp.dest('dist'))
    });
})

