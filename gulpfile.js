const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

// Elixir Extensions
require('./elixir/elixir-rev');
require('./elixir/elixir-revreplace');
require('./elixir/elixir-pug');
require('./elixir/elixir-clean');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(mix => {

    // Clean up the dist folder
    mix.clean();

    // Bake the Sass
    mix.sass('app.scss');

    // Compile JS Vendor files
    mix.scriptsIn('src/js/vendor', 'dist/js/vendor.js');

    // Bake the JS
    mix.webpack('app.js');

    // Version the CSS and JS
    //mix.rev();

    // Bake the HTML
    mix.pug();
    
    // Replace asset refs with those in manifest
    //mix.revreplace();

    mix.browserSync({
        files: [
        	'**/*.html', 
        	'**/*.css', 
        	'**/*.js'
        ],
        proxy: 'testbench.local'
    });
});