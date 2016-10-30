var del = require('del');

var Task = Elixir.Task;

Elixir.extend('clean', function() {
    new Task('clean', function() {
    	del.sync('dist/css/*');
    	del.sync('dist/js/*');
    	del.sync('dist/*.html');
    });
})